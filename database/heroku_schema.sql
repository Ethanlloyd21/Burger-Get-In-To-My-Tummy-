CREATE DATABASE IF NOT EXISTS xv2q7ala16zwrdmf;

USE xv2q7ala16zwrdmf;

DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers (
	id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT false
);

INSERT INTO burgers 
    (burger_name) 
VALUES 
('Double Stack burger'),
('Cheeseburger'),
('Bacon Cheeseburger'),
('Veggy burger');