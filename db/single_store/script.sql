-- CREATE DATABASE
create database dbTraining;
use dbTraining;

show partitions on dbTraining;
show partitions extended on dbTraining;

drop database dbTraining;

create database dbTraining partitions 4;

-- CREATE TABLES
create database dbTraining;
USE dbTraining;

CREATE ROWSTORE TABLE orders(
    id_order BIGINT primary key,
    id_customer BIGINT,
    order_date DATETIME,
    status  VARCHAR(20)
) compression = sparse;

SHOW TABLES EXTENDED;
SHOW COLUMNS IN orders;
SHOW INDEX IN orders;


USE dbTraining;
drop TABLE orders;



USE information_schema;
select column_name,column_type,is_sparse from columns where table_name='orders'


    USE dbTraining;
create ROWSTORE table customers(

    customerNumber  BIGINT not null primary key,
    customerName varchar(50) not null,
    contactLastName varchar(50) not null,
    contactFirstName varchar(50) not null,
    phone varchar(50) not null,
    addressLine1  varchar(50) not null ,
    addressLine2  varchar(50) null SPARSE,
    city varchar(50) not null ,
    state varchar(50) not null ,
    postalCode varchar(15) not null ,
    country varchar(50) not null ,
    salesRepEmployeeNumber int  null,
    creditLimit int(100)  null
);



SHOW TABLES EXTENDED ;
SHOW COLUMNS IN customers;
SHOW INDEX IN customers;

drop table customers;

USE information_schema;
select column_name,column_type,is_sparse from columns where table_name='customers'
