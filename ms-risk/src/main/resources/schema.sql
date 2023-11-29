CREATE TABLE IF NOT EXISTS evaluations (
    id INT NOT NULL,
    calificacionBCP VARCHAR(20),
    calificacionSBS VARCHAR(20),
    customerId INT,
    PRIMARY KEY (id)
    );

truncate table evaluations;

INSERT INTO evaluations(id,calificacionBCP,calificacionSBS,customerId) values (1,'AAB-','A+',1);
INSERT INTO evaluations(id,calificacionBCP,calificacionSBS,customerId) values (2,'AAA-','B',2);
INSERT INTO evaluations(id,calificacionBCP,calificacionSBS,customerId) values (3,'AAA+','A+',3);
