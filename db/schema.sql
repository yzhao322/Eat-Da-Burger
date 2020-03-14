### Schema
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
drop database if exists burger_db;
CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burger
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(300) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
