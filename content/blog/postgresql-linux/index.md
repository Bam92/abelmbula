---
title: Getting Started with PostgreSQL on GNU/Linux OS
date: "2020-07-31T22:23:03.284Z"
description: "Learn how to install and use PostgreSQL on Ubuntu, Debian..."
published: true
---

PostgreSQL /ˈpoʊstɡrɛs ˌkjuː ˈɛl/ is a relational database system like MySQL or other SQL-like database systems. It is  open-source and used as a primary database for many web applications as well as mobile and analytics applications. PostgreSQL supports most popular programming languages.

In this tutorial, I want to learn how you can use PostgreSQL in your UNIX-like computer. Hope that you'll find this interesting!

First thing first, let's install it in our machine.

# Installation

PostgreSQL is included by default in your system packet manager. So, you can just use your distribution packet manager to install it. I am on Debian, I use `apt` by default.

```bash
sudo apt update && sudo apt install postgresql-12 # to get postgresql v12
```

You can also use backports (if you have enabled in your system) to get the latest version.

I personally prefer to use the `PostgreSQL Apt Repository` so that I ensure I have the latest version and don't miss important updates.

The steps to use postgreSQL apt repository are as follow:

```bash
# Create the file repository configuration:
sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'

# Import the repository signing key:
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -

# update && install
sudo apt update && sudo apt install postgresql
```

Congratulations, you have installed `PostgreSQL`. You can check the connection status of the database server with `pg_isready` utility. Also, the `postgres` service is started by default. You can check its status with `systemctl`.

```bash
systemctl status postgresql
```

For more information on installation, go [here](https://www.postgresql.org/download/linux/)

# First-time connection to PostgreSQL

The admin database user is `postgres` and the CLI utility to use is `psql`. The syntax to connect to the server is this: `psql [database name] database user` or `psql -U database user [database name]`. In our case we have `postgres` which also have a default database named `postgres`.

```bash
psql -U postgres
```

But what do we get? An error.

```bash
psql: error: could not connect to server: FATAL:  Peer authentication failed for user "postgres"
```

> **Be aware**<br>
> If you don't the database argument on connection, PostgreSQL will try to connect a database which has the same name as the username

Why? Because there's no password set yet. On most Unix-like systems, the connection to the server is turned off by default. To allow connections, you need to follow these two steps:

- Set a password for the `postgres` user
- Allow local connections to PostgreSQL

Let's start by the first step.

## Setting a password for the postgres user

Switch to `postgres` user:

```bash
sudo -u postgres psql
```

Enter your system user password when asked.

Set the password as follow:

```bash
\password postgres
```

Type your secure and secret password twice as the tool asks to do.

To quit the `postgres` user, use `\q` or `CTRL` + `D`.

> **Note**<br>
> You can also use `passwd` utility to set the password for `postgres` user
>
> ```bash
> sudo passwd postgres
> ```

The next step is to allow local connections to the server.

## Allowing local connections

Connections to PostgrSQL is controlled by the `pg_hba.conf` file. You need to locate it in your system (`locate pg_hba.conf`). On Debian it is located at `/etc/postgresql/12/main/pg_hba.conf` (12 is the version of my server, yours maybe different).

Open the configuration file with your preferred editor (I use [nano](../nano-setup) here) with `sudo` privilege

```bash
sudo nano /etc/postgresql/12/main/pg_hba.conf
```

Scroll down till you find the line below

```
# Database administrative login by Unix domain socket
local   all             postgres                                peer
```

Change the peer method to `md5`. Save and close the file (`CTRL` + `X` and `Y` + Enter).

Also, find the line

```
# IPv4 local connections:
host    all             all             127.0.0.1/32            peer
```

Change `peer` to `trust`.

- `peer` means it will trust the authenticity of UNIX user hence does not ask for the password
- `md5` means it will always ask for a password, and validate it after hashing with `md5`
- `trust` means anyone who can connect to the server is authorized to access the database

You can now restart the service:

```bash
sudo systemctl restart postgresql
```

or

```bash
sudo service postgresql restart
```

Everything is OK now. Let's try to connect to our database.

```bash
psql -U postgres
```

Once connected, you can get all connection info With this command: `\conninfo`.

# Basic Usage

If you're familiar with other SQL-like database systems like `MySQL` or `MariaDB` you'll be a bit confused with `PostgreSQL` specific command. But don't worry too much, `PostgreSQL` also support `SQL` commands.

Let's go.

## Create a new user or database

I usually prefer to create a new role for each database I've to create.

> **Warning**<br>
> You should avoid to use the admin user (`postgres`) for nonadmin tasks.

Connect as an admin user to `PostgreSQL` (`psql -U postgres`) and type

```sql
CREATE USER kali WITH PASSWORD 's3cr3T' CREATEDB;
```

Here we create a new account and grant it the create database role. Make sure you use a secure password. To see the list of user, use the command `\du`.

Let's also create a new database and grant all privileges on it to our new user.

```sql
CREATE DATABASE test_db;
```

Now we can grant permissions:

```sql
GRANT ALL PRIVILEGES ON DATABASE test_db TO kali;
```

Nothing tricky here. Our newly created user has all privileges on the newly created database `test_db`.

If you want to connect to `kali` user without quitting `PostgreSQL` you can use `\c` command like this:

```bash
\c test_db kali
```

Connect to database `test_db` as user `kali`.

> **Note**<br>
> To drop a database that you're the owner, use
>
> ```sql
> DROP DATABASE name
> ```

## Create or delete a table

The syntax is as follow...

```sql
CREATE TABLE [IF NOT EXISTS] table_name (
   column1 datatype(length) column_contraint,
   column2 datatype(length) column_contraint,
   column3 datatype(length) column_contraint,
   table_constraints
);
```

... where `datatype` can be `serial`, `VARCHAR`... and `constraints` can be `PRIMARY KEY`, `UNIQUE`...

Here's a real example:

```sql
CREATE TABLE users (
	id serial PRIMARY KEY,
	username VARCHAR ( 50 ) UNIQUE NOT NULL,
	password VARCHAR ( 50 ) NOT NULL,
	email VARCHAR ( 255 ) UNIQUE NOT NULL
);
```

If we want to delete this table we'll use this syntax:

```sql
DROP TABLE IF EXISTS name;
```

If other tables depend on it, use `CASCADE`

```sql
DROP TABLE IF EXISTS name CASCADE;
```

> **Note**<br>
> To get the description of a table use `\d table_name`

## Table: insert, read and delete entries

In this section, we want to learn how to work with entries (data) in a table.

**Insertion**

The syntax to insert data into a table is

```sql
INSERT INTO table_name(column1, column2, …)
VALUES (value1, value2, …);
```

Let's insert 5 entries in our table (`users`).

```sql
INSERT INTO users(username, password, email)
VALUES
('bam', 'B@m:321', 'bam@ulikis.cd'),
('salimas', 'sal1989', 'salimas@gmail.com'),
('pati', 'kav87', 'reseacher@unikis.cd'),
('yves', '1v3s:321', 'yves@yves.com'),
('val', 'valnas123', 'valnas@gmail.com')
;
```

Here we insert multiple entries at once. We have ignored the `id` column because PostgreSQL will automatically handle it.

**Read**

To read entries we use the `SELECT` command.

```sql
SELECT * FROM users;
```

Displays all entries from the table `users`.

```sql
SELECT * FROM users ORDER BY username;
```

This command will order the output by `username` (an existing column in the table).

**Deletion**

Use the command `DELETE` like this:

```sql
DELETE FROM table_name
WHERE condition;
```

To illustrate this, let's say we want delete the fourth entry (which is id 4).

```sql
DELETE FROM users
WHERE id=4;
```

Here I use `id` column. If I wanted to use `username` column, I'd write like this:

```sql
DELETE FROM users
WHERE username='yves';
```

That's all for today.

# Let's Recap

In this tutorial, we have learned how to set up `PostgreSQL` in a UNIX-like machine and how to use basic commands like `CREATE USER/DATABASE/TABLE`, `DROP DATABASE/TABLE`, and more.

It was an introductory course, so if you want learn more you can read the [documentation](https://www.postgresql.org/docs/).

Thank you for learning with me.