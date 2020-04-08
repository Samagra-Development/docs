---
id: PSQLReplication
title: PSQL Replication
sidebar_label: PSQL Replication
---

# Setting up Master Slave Replication in PostgreSQL (upto version 11) using Dockers and external volumes:

## Understanding replication in PostgreSQL (upto version 11)

Streaming replication in PostgreSQL works on log shipping. Every transaction in postgres is written to a transaction log called WAL (write-ahead log) to achieve durability. A slave uses these WAL segments to continuously replicate changes from its master.

There exists three mandatory processes – wal sender , wal receiver and startup process, these play a major role in achieving streaming replication in postgres.

A wal sender process runs on a master, whereas the wal receiver and startup processes runs on its slave. When you start the replication, a wal receiver process sends the LSN (Log Sequence Number) up until when the WAL data has been replayed on a slave, to the master. And then the wal sender process on master sends the WAL data until the latest LSN starting from the LSN sent by the wal receiver, to the slave. Wal receiver writes the WAL data sent by wal sender to WAL segments. It is the startup process on slave that replays the data written to WAL segment. And then the streaming replication begins.

Note: Log Sequence Number, or LSN, is a pointer to a location in the WAL.

## Firewall -

UFW or Uncomplicated Firewall is an application to manage the iptables based firewall on Ubuntu. UFW is the default firewall configuration tool for Ubuntu Linux and provides a user-friendly way to configure the firewall.

```
apt-get install -y ufw
```

Add new services to the UFW firewall: add SSH and PostgreSQL services with commands below.

```
ufw allow ssh
ufw allow postgresql
```

Enable the UFW firewall and check the status.

```
ufw enable
ufw status
```

UFW firewall has been installed and the PostgreSQL service has been added.

## Setting up Docker using external volume

### Install docker

You can install docker from your default package manager or using some other service like [**Snapcraft**](https://snapcraft.io/) e.g. `snap install docker`

### Setup Docker engine

#### Pull postgress in docker

```
docker pull postgres
```

#### Create docker

```
docker run --name DOCKER_NAME -e POSTGRES_PASSWORD=PASSWORD -d -p 0.0.0.0:5432:5432 -v /mnt/EXTERNAL_VOLUME_NAME/postgres:/var/lib/postgresql/data  postgres
```

### Check for running dockers

```
docker ps
```

### View all available dockers

```
docker ps -a
```

### Enter into Docker shel

```
docker exec -it DOCKER_NAME /bin/bash
```

## Master -

Create a role dedicated to the replication - Create the user in master using whichever slave should connect for streaming the WALs. This user must have REPLICATION ROLE.

```
CREATE USER replica REPLICATION LOGIN ENCRYPTED PASSWORD 'aqwe123@';
```

Now check the new user with 'du' query below, and you will see the replica user with replication privileges.

```
\du
```

### Edit postgresql.conf -

Note - the postgresql.conf would be present in the following location in case of external volume `/mnt/EXTERNAL_VOLUME_NAME/postgres/postgresql.conf`

The following parameters on the master are considered as mandatory when setting up streaming replication.

- **archive_mode** : Must be set to ON to enable archiving of WALs.
- **wal_level** : Must be at least set to hot_standby  until version 9.5 or replica  in the later versions.
- **max_wal_senders** : Must be set to 3 if you are starting with one slave. For every slave, you may add 2 wal senders.
- **wal_keep_segments** : Set the WAL retention in pg_xlog (until PostgreSQL 9.x) and pg_wal (from PostgreSQL 10). Every WAL requires 16MB of space unless you have explicitly modified the WAL segment size. You may start with 100 or more depending on the space and the amount of WAL that could be generated during a backup.
- **archive_command** : This parameter takes a shell command or external programs. It can be a simple copy command to copy the WAL segments to another location or a script that has the logic to archive the WALs to S3 or a remote backup server.
- **listen_addresses** : Set it to \* or the range of IP Addresses that need to be whitelisted to connect to your master PostgreSQL server. Your slave IP should be whitelisted too, else, the slave cannot connect to the master to replicate/replay WALs.
- **hot_standby** : Must be set to ON on standby/replica and has no effect on the master. However, when you setup your replication, parameters set on the master are automatically copied. This parameter is important to enable READS on slave. Otherwise, you cannot run your SELECT queries against slave.

The above parameters can be set on the master using these commands followed by a restart:

```
wal_level = replica
max_wal_senders = 3 # max number of walsender processes
wal_keep_segments = 64 # in logfile segments, 16MB each; 0 disables
listen_addresses = '*'
# or listen_address = ‘IP_OF_SERVER’
archive_mode = on
archive_command = 'cp %p /var/lib/postgresql/9.6/main/archive/%f'
synchronous_commit = local
synchronous_standby_names = 'pgslave001'
```

In the postgresql.conf file, the archive mode is enabled, so we need to create a new directory for the archive. Create a new archive directory, change the permission and change the owner to the postgres user.

```
mkdir -p /var/lib/postgresql/9.6/main/archive/
chmod 700 /var/lib/postgresql/9.6/main/archive/
chown -R postgres:postgres /var/lib/postgresql/9.6/main/archive/
```

Create the archive dir in the external storage - Mount the location on docker configuration file (Docker has permission to read write and execute everything, we are running it through root)

```
/mnt/external_volume:/var/lib/postgresql/9.6/main/archive/
```

### Edit pg_hba.conf -

Add an entry to pg_hba.conf of the master to allow replication connections from the slave. The default location of pg_hba.conf is the data directory. However, you may modify the location of this file in the file  postgresql.conf. In Ubuntu/Debian, pg_hba.conf may be located in the same directory as the postgresql.conf file by default. You can get the location of postgresql.conf in Ubuntu/Debian by calling an OS command => pg_lsclusters.

```
# Localhost
host    replication     replica          127.0.0.1/32             md5
# PostgreSQL Master IP address
host    replication     replica          10.0.15.10/32            md5
# PostgreSQL SLave IP address
host    replication     replica          10.0.15.11/32            md5
```

Save and exit, then restart PostgreSQL.

```
systemctl restart postgresql
```

PostgreSQL is running under the IP address 10.0.15.10, check it with netstat command.

```
netstat -plntu
```

## Slave -

Now that your master is ready, it’s time to configure the slave.

- Stop postgresql on the slave
- Edit your postgresql.conf and pg_hba.conf and report the changes you made on the master (like this, your slave will have the same configuration and could act as a master) Edit your postgresql.conf and change this line :`hot_standby = on`
- Go to your PGDATA directory and delete all the files. WARNING : if the files postgresql.conf and pg_hba.conf are in this directory, you must backup them (same for the certificate files)
- Now we will copy all the data from the master with the pg_basebackup command. You must run this command as the postgresql user (postgres on Debian, \_postgresql on OpenBSD for example)

### su - postgres

```
$ pg_basebackup -h 172.17.0.2 -D /var/lib/postgresql/10/main/ -P -U replicate --wal-method=stream
Password:
23908/23908 kB (100%), 1/1 tablespace
```

Now, all your master’s data are copied on the slave. Now create a file recovery.conf in your PGDATA directory. Note - the recovery.conf is removed in version 12 onwards, for information see [this](https://www.postgresql.org/docs/12/release-12.html

```
standby_mode          = 'on'
primary_conninfo      = 'host=172.17.0.2 port=5432 user=replicate password=MySuperPassword'
trigger_file = '/tmp/MasterNow'
```

Here is an explanation for each line :

- **standby_mode=on** : specifies that the server must start as a standby server
- **primary_conninfo** : the parameters to use to connect to the master
- **trigger_file** : if this file exists, the server will stop the replication and act as a master
- **restore_command** : this command is only needed if you have used the archive_command on the master

Start the postgresql server

```
2018-03-11 19:08:55.777 UTC [8789] LOG:  listening on IPv4 address "127.0.0.1", port 5432
2018-03-11 19:08:55.777 UTC [8789] LOG:  could not bind IPv6 address "::1": Cannot assign requested address
2018-03-11 19:08:55.777 UTC [8789] HINT:  Is another postmaster already running on port 5432? If not, wait a few seconds and retry.
2018-03-11 19:08:55.786 UTC [8789] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
2018-03-11 19:08:55.820 UTC [8790] LOG:  database system was interrupted; last known up at 2018-03-11 18:58:20 UTC
2018-03-11 19:08:56.023 UTC [8790] LOG:  entering standby mode
2018-03-11 19:08:56.034 UTC [8790] LOG:  redo starts at 0/4000028
2018-03-11 19:08:56.039 UTC [8790] LOG:  consistent recovery state reached at 0/40000F8
2018-03-11 19:08:56.040 UTC [8789] LOG:  database system is ready to accept read only connections
2018-03-11 19:08:56.071 UTC [8794] LOG:  started streaming WAL from primary at 0/5000000 on timeline 1
```

You can see the replicate user on the master server :

```
postgres=# select * from pg_stat_activity  where usename = 'replicate' ;
-[ RECORD 1 ]----+------------------------------
datid            |
datname          |
pid              | 9134
usesysid         | 16384
usename          | replicate
application_name | walreceiver
client_addr      | 172.17.0.3
client_hostname  |
client_port      | 45234
backend_start    | 2018-03-11 19:08:56.049113+00
xact_start       |
query_start      |
state_change     | 2018-03-11 19:08:56.071363+00
wait_event_type  | Activity
wait_event       | WalSenderMain
state            | active
backend_xid      |
backend_xmin     |
query            |
backend_type     | walsender
```

## Storing the archive files -

- How to recreate database from the archive files?

## References -

1. [Setting up Streaming Replication Postgresql](https://www.percona.com/blog/2018/09/07/setting-up-streaming-replication-postgresql/)
2. [Postgresql Raveland blog](https://blog.raveland.org/post/postgresql_sr/)
3. [How to set up master slave replication for postgresql](https://www.howtoforge.com/tutorial/how-to-set-up-master-slave-replication-for-postgresql-96-on-ubuntu-1604/)

## Required Modifications

1. Edit postgresql.conf section
2. Add the process for docker configuration
3. Take master and slave sample IP
4. Grammatical corrections.
