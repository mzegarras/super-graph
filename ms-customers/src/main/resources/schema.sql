CREATE TABLE IF NOT EXISTS customers (
    id INT NOT NULL,
    name VARCHAR(255),
    lastName VARCHAR(255),
    address VARCHAR(255),
    documentType VARCHAR(20),
    documentNumber VARCHAR(20),
    PRIMARY KEY (id)
    );

truncate table customers;
INSERT INTO customers(id,name,lastName,address,documentType,documentNumber) values (1,'Pedro','Picapiedra','Av. Casa 2030','DNI','12345678');
INSERT INTO customers(id,name,lastName,address,documentType,documentNumber) values (2,'Pablo','Marmol','Av. Alfrente 1030','CE','123456789');
INSERT INTO customers(id,name,lastName,address,documentType,documentNumber) values (3,'Bruno','Diaz','Av. Gotica 1000','DNI','87654321');

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