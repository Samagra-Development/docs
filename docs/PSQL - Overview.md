---
id: PSQLOverview
title: Overview
sidebar_label: Overview
---

## 1 Relational Database - PostgreSQL

**PostgreSQL** also known as **Postgres**, is a free and open-source relational database management system emphasizing [extensibility](https://en.wikipedia.org/wiki/Extensibility 'Extensibility') and [SQL compliance](https://en.wikipedia.org/wiki/SQL_compliance 'SQL compliance').

## 1.1 Self hosted PostgreSQL

### Assumptions

- Data integrity is absolutely paramount (i.e., for financial applications, defense and security, and private health information)
- Highly structured data

### PostgreSQL can be deployed in these 5 modes

Depending on the project lifecycle and scale, the deployments could be of the following types

- [dSmall](./dSmall) - A **_small development_** server
- [dMedium]() - A **_medium development_** server
- [pSmall]() - A **_small production_** server ideal to small projects.
- [pMedium]() - A **_medium production_** server ideal for a millions of rows
- [pLarge]() - **_Large production_** server with scale spanning to billions of rows and hundreds of tables.

### Use Cases

1.  Development with local database. **[dSmall]()**
2.  Development with database on the server with database size less than 5GB or table rows less than a million. **[dSmall]()**
3.  Development with database on the server with database size > 5GB or table rows more than a million. **[dMedium]()**
4.  Production database with single microservice depending on it. Size < 5GB and max rows < million. **[pSmall]()**
5.  Production database with dashboards and graphs attached to it. Connection count < 50. **[pSmall]()**
6.  Production database which needs to serve APIs through microservices and there is no limit to the amount of connections to it and has dashboards and graphs attached to it. **[pMedium]()**
7.  Production datababase with all the things on point 6 data size upto 2TB. **[pMedium]()**
8.  Production database with all the things on point 6 and data size > 2TB. **[pLarge]()**

### Comparison of performance

| Indicator | dSmall | dMedium | pSmall | pMedium | pLarge |
| --- | --- | --- | --- | --- | --- |
| Max Database Size (GB) | 1 | 5 | 2000 | 2000 | No limits |
| Read Only Replica | &cross; | &cross; | &check; | &check; | &check; |
| Connection Pooler | &check; | &check; | &check; | &check; | &check; |
| Production Ready | &cross; | &cross; | &check; | &check; | &check; |
| Cost per GB | x | 2x | 4x | 7x | 7x |
| Sharding Capability | &cross; | &cross; | &cross; | &cross; | &check; |
| Archiving and PITR | &cross; | &cross; | &cross; | &check; | &check; |
| Backups | &cross; | &cross; | &check; | &check; | &check; |
| Disaster Recovery | &cross; | &cross; | &cross; | &check; | &check; |
| Setup Difficulty | x | x | 3x | 5x | 10x |
| Maintenance Cost (Dev hours) | - | - | x | 2x | 3x |

## 1.2 Managed PostgreSQL

### Assumptions

- Data integrity is absolutely paramount (i.e., for financial applications, defense and security, and private health information)
- Highly structured data

### PostgreSQL can be deployed in these modes

### Use Cases

1.  Development with local database. **[A]()**
2.  Development with database on the server with database size less than 5GB or table rows less than a million. **[A]()**
3.  Development with database on the server with database size > 5GB or table rows more than a million. **[B]()**
4.  Production database with single microservice depending on it. Size < 5GB and max rows < million. **[B]()**
5.  Production database with dashboards and graphs attached to it. Connection count < 50. **[C]()**
6.  Production database which needs to serve APIs through microservices and there is no limit to the amount of connections to it and has dashboards and graphs attached to it. **[D]()**
7.  Production datababase with all the things on point 6 data size upto 2TB. **[E]()**
8.  Production database with all the things on point 6 and data size > 2TB. **[E]()**

#### Comparison of performance

| Indicator                    | A   | B   | C   | D   | E   |
| ---------------------------- | --- | --- | --- | --- | --- |
| Max Database Size (GB)       | -   | -   | -   | -   | -   |
| Read Only Replica            | -   | -   | -   | -   | -   |
| Connection Pooler            | -   | -   | -   | -   | -   |
| Production Ready             | -   | -   | -   | -   | -   |
| Cost per GB                  | -   | -   | -   | -   | -   |
| Sharding Capability          | -   | -   | -   | -   | -   |
| Archiving and PITR           | -   | -   | -   | -   | -   |
| Backups                      | -   | -   | -   | -   | -   |
| Disaster Recovery            | -   | -   | -   | -   | -   |
| Setup Difficulty             | -   | -   | -   | -   | -   |
| Maintenance Cost (Dev hours) | -   | -   | -   | -   | -   |
