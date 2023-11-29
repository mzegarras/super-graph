CREATE TABLE IF NOT EXISTS accounts (
    id INT NOT NULL,
    number VARCHAR(255),
    balance NUMERIC(10,4),
    currency INT,
    customerId INT,
    PRIMARY KEY (id)
    );

truncate table accounts;
INSERT INTO accounts(id,number,balance,currency,customerId) values (1,'191-1111111-1',1000,1,1);
INSERT INTO accounts(id,number,balance,currency,customerId) values (2,'191-1111111-2',2000,1,1);
INSERT INTO accounts(id,number,balance,currency,customerId) values (3,'191-1111111-3',3000,1,1);

INSERT INTO accounts(id,number,balance,currency,customerId) values (4,'192-1111111-1',1000,1,2);
INSERT INTO accounts(id,number,balance,currency,customerId) values (5,'192-1111111-2',2000,1,2);
INSERT INTO accounts(id,number,balance,currency,customerId) values (6,'192-1111111-3',3000,1,2);

INSERT INTO accounts(id,number,balance,currency,customerId) values (7,'193-1111111-1',1000,1,3);
INSERT INTO accounts(id,number,balance,currency,customerId) values (8,'193-1111111-2',2000,1,3);
INSERT INTO accounts(id,number,balance,currency,customerId) values (9,'193-1111111-3',3000,1,3);


/*
CREATE TABLE IF NOT EXISTS phones (
    id INT NOT NULL,
    phone VARCHAR(255),
    company VARCHAR(255),
    customerId INT NOT NULL,
    PRIMARY KEY (id)
    );

truncate table phones;
INSERT INTO phones(id,phone,company,customerId) values (1,'999999999','Claro',1);
INSERT INTO phones(id,phone,company,customerId) values (2,'999999998','Claro',1);
INSERT INTO phones(id,phone,company,customerId) values (3,'999999997','Claro',1);

INSERT INTO phones(id,phone,company,customerId) values (4,'899999999','Claro',2);
INSERT INTO phones(id,phone,company,customerId) values (5,'899999998','Claro',2);
INSERT INTO phones(id,phone,company,customerId) values (6,'899999997','Claro',2);

INSERT INTO phones(id,phone,company,customerId) values (7,'799999999','Claro',3);
INSERT INTO phones(id,phone,company,customerId) values (8,'799999998','Claro',3);
INSERT INTO phones(id,phone,company,customerId) values (9,'799999997','Claro',3);
 */