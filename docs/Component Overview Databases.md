---
id: CODatabaseManagement
title: Database Management
sidebar_label: Overview
---
![Licence](https://img.shields.io/badge/Licence-MIT-blue.svg)
# Component Overview

## 1. Introduction

All databases are not created equal. Each has specific strengths and weaknesses. While it’s true that workarounds exist to make a favorite database work for most projects, using those tricks adds unnecessary complexity.

Before considering a specific database, take some time to think about what type would best support the project at hand. The question goes deeper than “SQL vs. NoSQL.” Read on for a rundown of the most common database types, the relative merits of each, and how to tell which is the best fit.

If you are well alware of the pro and cons of different database management systems, please skip to next section.

### 1.1 Relational database management systems (PostgreSQL)

Relational databases were developed in the 1970s to handle the increasing flood of data being produced. They have a solid foundational theory and have influenced nearly every database system in use today.

Relational databases store data sets as “relations”: tables with rows and columns where all information is stored as a value of a specific cell. Data in an RDBMS is managed using [SQL](<[https://en.wikipedia.org/wiki/SQL](https://en.wikipedia.org/wiki/SQL)>). Though there are different implementations, SQL is standardized and provides a level of predictability and utility.

After an early flood of vendors tried to take advantage of the system’s popularity with not-quite-relational products, creator E.F. Codd outlined a set of rules that must be followed by all relational database management systems. Codd’s 12 rules revolve around imposing strict internal structure protocols, making sure that searches reliably return requested data, and preventing structural alterations (at least by users). The framework ensured that relational databases are consistent and reliable to this day.

#### 1.1.1 Strengths

- Relational databases support a **simple data structure,** namely tables.
- Relational databases **limit redundancy** or duplication of data. As all the data pertaining to a particular object is stored together, and then linked to related objects, there is no need to store data about the original object in more than one place. In practice, not all redundancy is eliminated - as we shall see (in chapter 2), the process of normalisation will lead to some redundancy, although controlled.
- Data inconsistencies are avoided. By storing the data relating to an object in one place, it only needs to be kept up to date in that one place. This saves time at the data entry stage and reduces the likelihood of inconsistencies arising.
- Relational databases provide **physical data independence** (to a large extent). Database users do not have to be aware of the underlying structure of the objects in the database. The specification of the structure (the tables, attributes and relationships), the constraints, the access methods etc are stored separately and are independent of the application programs that use the data. This makes programming and program maintenance easier.
- Relational databases offer **logical database independence,** in that data can be viewed in different ways by different users. With relational databases this is achieved with the definition of the appropriate SQL view.
- Expandability is relatively easy to achieve - by adding new views of the data as they are required.
- Relational databases support ad hoc queries (one-off or tailor-made) using the SQL query language.

#### 1.1.2 Weakness

- Poor representation of 'real world' entities and their relationships. When relational databases are designed, entities are fragmented into smaller relations through the process of normalisation (chapter 2). This fragmentation into many relations leads to relations which do not exist or correspond to entities in the real world. Such a design is inefficient, as many joins may be required to recover data about that entity.
- The model is said to suffer from **semantic overloading** in that one construct (the relation) is used to represent two different things (entities and relationships): there is no mechanism for differentiation between entities and relationships. The normalised component, the relation, is not sufficient to represent both the data and data relationships. With relational databases, an entity is broken up into several relations, thus querying becomes cumbersome since project, select and join operations have to be used frequently to reconstruct the entities.
- Also it is **difficult to represent hierarchies** of data. For example, both students and lectures share some of the same data (name, address etc). In a relational database we would have to define three relations: one for the 'super class' person as well as for student and lecturer, and to retrieve the information may well require a join
- Difficulty in representing complex data types. As a simple example, consider an attribute 'address'. In a relational database, either we define an address attribute as one atomic value of type string or it could be defined as a number of attributes (one each for street, city, country and postcode). In the latter case, writing queries would be more complicated, as each field would have to be mentioned. A better solution to either case is to allow structured data types - such as the type address with subparts street, city, country and postcode. Now an instance of type address can either be viewed as a whole or as individual subparts. The limited data types in the relational model cannot represent 'real word' objects that have a complex structure, and this leads to unnatural joins, which are inefficient. Any item in the tuple, i.e. intersection of a row and column, must be an **atomic data type** since it assumes both horizontal and vertical homogeneity. **Horizontal homogeneity** means that each tuple of a relation must be composed of the same attributes. This can be a disadvantage in that it is not possible to store closely related objects in the same category if they differ slightly in the attributes they possess. For example, there may be adult and child aeroplane tickets, with children having the additional attribute 'guardian'. **Vertical homogeneity** means that the values in a particular column of a relation must all come from the same domain.
- Relational databases support a small, **fixed collection of data types** and do not permit users to define new types. In many applications the attributes' domains require far more complex data types. Many relational DBMSs allow the storage of binary large objects (BLOBs) - a data value that contains binary information representing images, digitised videos or audios, or any large and unstructured object. Typically, it is held as an attribute in a relational database which references to a file. Storing the data in external files is not a good way of manipulating this data: the DBMS has no knowledge of the structure of this data and cannot perform queries or operations on it. In addition, BLOBs cannot contain other BLOBs. As an example, a picture can be stored as a BLOB by an RDBMS. The complete picture can be displayed but not part of it, and the internal structure is not known to the RDBMS.
- Relational database systems are not well suited to support certain complex applications such as 'advanced database applications' including computer-­aided design (CAD). A clear illustration of the drawbacks of a homogeneous data structure is the so-called parts explosion. Here, some object (such as an aircraft) is composed of parts and composite parts; these latter items in turn are composed of other parts and composite parts, and so on. Data types exhibiting this arrangement cannot be stored in relational databases
- Difficulty in implementing recursive queries. For example in the entity-relationship model example in figure 1.6 an example of a recursive query would be to find books which have the same book title as a book entitled _Gardening for Beginners._ This query involves searching the same table twice. We shall see in chapter 4 that recursive queries can be quite difficult to specify and implement
- SQL is **not computationally complete:** it supports only a limited number of operations and does not allow new operations to be defined.

#### 1.1.3 Use Cases

- Situations where data integrity is absolutely paramount (i.e., for financial applications, defense and security, and private health information)
- Highly structured data
- Automation of internal processes

### 1.2. Document store (MongoDB)

A document store is a nonrelational database that stores data in JSON, BSON, or XML documents. They feature a flexible schema. Unlike SQL databases, where users must declare a table’s schema before inserting data, document stores don’t enforce document structure. Documents can contain any data desired. They have key-value pairs but also embed attribute metadata to make querying easier.

#### 1.2.1. Strengths

- Large volumes of structured, semi-structured, and unstructured data
- Agile sprints, quick iteration, and frequent code pushes
- Object-oriented programming that is easy to use and flexible
- Efficient, scale-out architecture instead of expensive, monolithic architecture

#### 1.2.2. Weaknesses

- **Not ACID** - However, these benefits come at the cost of relaxing ACID principles: instead of keeping all four parameters consistent throughout every transaction, NoSQL uses the principle of eventual consistency. This means that if there are no new updates for a particular data item for a certain period of time, eventually all accesses to it will return the last updated value. That’s why such systems are usually described as providing BASE guarantees (Basically Available, Soft state, Eventual consistency) — as opposed to ACID.
- **Data Loss** - While this approach greatly increases access time and scalability, it may lead to data loss – the severity of the problem depends on database server support and the quality of application code. In some cases, this issue might be very serious.
- **No Uniformity** - Another problem presented by NoSQL is the fact that there are many types of NoSQL systems, and there is little uniformity among them. Such characteristics as flexibility, performance, complexity, scalability and so on vary greatly among different systems, which makes choosing from among them difficult even for experienced specialists. Nevertheless, when properly chosen in concordance with the project’s peculiarities, NoSQL can provide a much more efficient solution than an SQL system without a significant loss in stability.

#### 1.2.3. Use Cases

- Unstructured or semistructured data
- Content management
- In-depth data analysis
- Rapid prototyping

### 1.3 Key-value store (Redis, Memcached)

A key-value store is a type of nonrelational database where each value is associated with a specific key. It’s also known as an associative array.

The “key” is a unique identifier associated only with the value. Keys can be anything allowed by the DBMS. In Redis, for example, keys man be any binary sequence up to 512MB.

“Values” are stored as blobs and don’t need predefined schema. They can take nearly any form: numbers, strings, counters, JSON, XML, HTML, PHP, binaries, images, short videos, lists, and even another key-value pair encapsulated in an object. Some DBMSs allow for the data type to be specified, but it isn’t mandatory.

#### 1.3.1. Strengths

- It’s incredibly flexible, able to handle a very wide array of data types easily.
- Keys are used to go straight to the value with no index searching or joins, so performance is high.
- Portability is another benefit: key-value stores can be moved from one system to another without rewriting code.
- Finally, they’re highly horizontally scalable.

#### 1.3.2. Weaknesses

- It’s impossible to query values, because they’re stored as a blob and can only be returned as such.
- This makes it hard to do reporting or edit parts of values.
- Not all objects are easy to model as key-value pairs, either.

#### 1.3.3. Use Cases

- Recommendations
- User profiles and settings
- Unstructured data such as product reviews or blog comments
- Session management at scale
- Data that will be accessed frequently but not often updated

### 1.4. Wide-column store (Cassandra, HBase)

Wide-column stores, also called column stores or extensible record stores, are dynamic column-oriented nonrelational databases. They’re sometimes seen as a type of key-value store but have attributes of traditional relational databases as well.

Wide-column stores use the concept of a keyspace instead of schemas. A keyspace encompasses column families (similar to tables but more flexible in structure), each of which contains multiple rows with distinct columns. Each row doesn’t need to have the same number or type of column. A timestamp determines the most recent version of data.

#### 1.4.1. Strengths

- It deals better with both structured and semistructured data than other nonrelational databases, and it’s easier to update.
- Compared to relational databases, it’s more horizontally scalable and faster at scale.
- Columnar databases compress better than row-based systems.
- Also, large data sets are simple to explore. Wide-column stores are particularly good at aggregation queries, for example.

#### 1.4.2. Weaknesses

- Writes are expensive in the small. While updating is easy to do in bulk, uploading and updating individual records is hard.
- Plus, wide-column stores are slower than relational databases when handling transactions.

#### 1.4.3. Use Cases

- Big data analytics where speed is important
- Data warehousing on big data
- Large scale projects (this database style is not a good tool for average transactional applications)

### 1.5. Search engine (Elasticsearch)

It may seem strange to include search engines in an article about database types. However, Elasticsearch has seen increased popularity in this sphere as developers look for innovative ways to cut down search lag. Elastisearch is a nonrelational, document-based data storage and retrieval solution specifically arranged and optimized for the storage and rapid retrieval of data.

#### 1.5.1. Strengths

- Elastisearch is very scalable.
- It features flexible schema and fast retrieval of records, with advanced search options including full text search, suggestions, and complex search expressions.
- One of the most interesting search features is **stemming**. Stemming analyzes the root form of a word to find relevant records even when another form is used. For example, a user searching an employment database for “paying jobs” would also find positions tagged as “paid” and “pay.”

#### Weaknesses

- Elastisearch is used more as an intermediary or supplementary store than a primary database.
- It has low durability and poor security.
- There’s no innate authentication or access control.
- Also, Elastisearch doesn’t support transactions.

#### Use a search engine like Elastisearch for:

- Improving user experience with faster search results
- Logging



### 2.4 Wide-column store store - Cassandra

#### 2.4.1 Self hosted Cassandra

#### 2.4.2 Managed Cassandra

### 2.5 Search engine -Elasticsearch

#### 2.5.1 Self hosted Elasticsearch

#### 2.5.2 Managed Elasticsearch

## 3. FAQ

## 4. Coming Soon

## 5. References

1. [RDBMS Strengths and Weakneses](http://www.cems.uwe.ac.uk/~pchatter/resources/html/rdb_strengths_weaknesses.html)
