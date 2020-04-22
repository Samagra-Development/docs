---
id: PSQLStrategy
title: PSQL Strategy
sidebar_label: PSQL Strategy
---

## Objective

The objective of this doc to be a decision mechanism on what kind of deployment to use for PSQL for different use cases.

### Disclaimer

- This is an opionated guide and a lot of systems can provide the same performance and maybe at a lesser cost.
- This is not meant to be a comprehensive guide on PSQL. There are plenty out there and we would recommend yo to read them if you are looking to understand how PSQL works.
- This is not the only way to do things and should be used as a guide more than anything else.
- This is an every evolving doc and is based on our current understanding of the system and is deemed to evolve over time.
- Feel free to send pull requests and evolve this doc further.

## Use Cases

1.  Development with local database.
2.  Development with database on the server with database size less than 5GB or table rows less than a million.
3.  Development with database on the server with database size > 5GB or table rows more than a million.
4.  Production database with single microservice depending on it. Size < 5GB and max rows < million.
5.  Production database with BI tool attached to it. Connection count < 50.
6.  Production database which needs to serve APIs through microservices and there is no limit to the amount of connections to it and has a BI tool attached to it.
7.  Production datababase with all the things on point 6 data size upto 2TB.
8.  Production database with all the things on point 6 and data size > 2TB.

## Deployment strategies

The deployment strategies have a semantic versioning and anything >= 1 can be used for production. Any minor/major updated to the stregies will evolve that specific version to say 1.1, 1.2 for v1.0. You can see additional components getting added as soon we increase the size of production.

### v0.1 - Development Server with small data (1, 2)

![enter image description here](https://i.ibb.co/JBLBJhh/PSQL-Type0-1.jpg)

### v0.2 - Development Server with substantial data (3)

![enter image description here](https://i.ibb.co/Jjjzz2d/PSQL-Type0-2.jpg)

### v1.0 - Small Production Server (4, 5)

![enter image description here](https://i.ibb.co/qjcsmvZ/PSQL-Type2.jpg)

### v2.0 - Medium Production Server (6, 7, 8)

![enter image description here](https://i.ibb.co/QrnyGtr/PSQL-Type3.jpg)

### v3.0 - Large Production Server (-)

Coming Soon...

#### Features

1. This is no practical limits on the size of data
2. No practical limits on computing power utilized.

## Comparison chart

| Indicator | v0.1 | v0.2 | v1.0 | v2.0 | v3.0 |
| --- | --- | --- | --- | --- | --- |
| Max Database Size (GB) | 1 | 5 | 2000 | 2000 | No limits |
| Connection Pooler | &check; | &check; | &check; | &check; | &check; |
| Production Ready | &cross; | &cross; | &check; | &check; | &check; |
| Cost per GB | x | 2x | 4x | 7x | 7x |
| Sharding Capability | &cross; | &cross; | &cross; | &cross; | &check; |
| Archiving and PITR | &cross; | &cross; | &cross; | &check; | &check; |
| Backups | &cross; | &cross; | &check; | &check; | &check; |
| Disaster Recovery | &cross; | &cross; | &cross; | &check; | &check; |
| Setup Difficulty | x | x | 3x | 5x | 10x |
| Maintenance Cost (Dev hours) | - | - | x | 2x | 3x |

## Indexing

PSQL is meant to serve queries in less than a milli second and 2 ms should be the limit on all queries. Index things everytime you see anything greater than 2 ms and large number of calls. To monitor what is happening inside the database, intall this contrib PSQL [extension](https://www.postgresql.org/docs/9.5/pgstatstatements.html),

## Sharding

We don't recommend sharding in PSQL and up until v2.0 there is no sharding of database. But it really have to, we recommend doing it though [citus](https://citusdata.com/). v3.0 has sharding, and though a small decrease in speed, it works out of the box.

## Backups

We recommend native [PSQL archiving and PITR](https://www.postgresql.org/docs/9.3/continuous-archiving.html).

## Disaster Recovery

We recommend [PgBarman](https://www.pgbarman.org/) for disaster recovery.
