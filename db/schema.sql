drop if exists burger_db;
CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers
(
	id int AUTO_INCREMENT,
    burger_name varchar(255) NOT NULL,
	devoured BOOLEAN default false not null,
	PRIMARY KEY (id)
);