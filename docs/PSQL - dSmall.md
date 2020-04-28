---
id: dSmall
title: dSmall
sidebar_label: dSmall
---

## 1. Overview

Not all databases are meant to serve millions of customers. Some are for testing and POC. If you have requirement for a debugging database with a small load, you have come to the right place.

### 1.1 Architecture

![enter image description here](https://i.ibb.co/JBLBJhh/PSQL-Type0-1.jpg)

### 1.2 Assumptions

1. Development with local database.
2. Development with database on the server with database size less than 5GB or table rows less than a million.
3. Max memory available is 1GB.

## 2. Getting Started

### 2.1 Prerequisites

1. Docker installed
2. Docker desktop installed on your local machine

### 2.2 Deploying

`curl` and then `docker-compose up -d`

### 2.3 Testing the database

The simplest way to check if the database is running is,

1.  `docker ps` and check if the docker is running `postgres` and get the container ID for it,
2.  Login to your psql console using, `psql -h localhost -d postgres -U postgres`

To connect is to any application, use the port `6432` rather than `5432` to use the connection pooler rather than actual PSQL server instance. This is help you not max out connection and save the database from shutting down due to too many connections. This will also pool the connections for you when you want 100s of running connections as PSQL is not capable of providing 100 connections on its own.

**Tip** - One more thing that would help is installing [pgAdmin4](https://www.pgadmin.org/download/) as and connecting the database to it. It will provide you with monitoring, query editor and GUI to manage your database.

## 3. Configuring the server

Although the default config is good enough for a lot of people, you may want to tweak some of the things.

### 3.1 Tweaking Postgres.

The complete list of options that can be tweaked can be found [here](https://hub.docker.com/_/postgres). Feel free to change anything.

### 3.2 Tweaking Connection Pooler.

**Danger** - We wouldn't recommend you to change anything on this front, but if you feel confident, all the [configs](https://www.pgbouncer.org/config.html) that are there for pgbouncer are accessible on the docker. You can take a look at the exact values [here](https://github.com/brainsam/pgbouncer/blob/master/entrypoint.sh).

## 4. Keeping it up and running

Since this is local system solution, everytime the system is down, the database is down. Which is ideal while active development is going on. So checking if the docker is still on should be sufficient for this use case. When ever the server is down, `docker-compose restart` should do the trick.
