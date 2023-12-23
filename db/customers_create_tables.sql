\c customer_db

DROP TABLE IF EXISTS customers;

CREATE TABLE customers (
           id uuid NOT NULL,
           first_name VARCHAR(100) NOT NULL,
           last_name VARCHAR(100) NOT NULL,
           address VARCHAR(100) NULL,
           document_type VARCHAR(20) NOT NULL,
           document_number VARCHAR(20) NOT NULL,
           email varchar(100) NOT NULL,
           active bool NOT NULL default true,
           creation_timestamp timestamp NOT NULL,
           PRIMARY KEY (id)
);

insert into customers (id, first_name, last_name, address, document_type, document_number, email, active, creation_timestamp) values ('6b3b8617-fbbf-4c91-b83d-f1a42d621c3e','Manuel','Zegarra','Av. Mi Casa 350','DNI','12345678','mzegarra@gmail.com',true,'2023-01-23T10:54:27Z')