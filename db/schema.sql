CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers
(
	id int AUTO_INCREMENT,
    burger_name varchar(255) NOT NULL,
	devoured BOOLEAN default false,
	PRIMARY KEY (id)
);