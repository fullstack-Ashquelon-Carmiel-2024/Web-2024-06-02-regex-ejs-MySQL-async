DROP DATABASE classicmodels;

CREATE DATABASE classicmodels 
COLLATE = 'utf8mb4_general_ci';

USE `classicmodels`;

--CREATE DATABASE matosim
/* CREATE DATABASE 
matosim */

-- Get all the columns
-- FROM the table "employees" that belongs
-- to DB "planes"
SELECT * FROM planes.employees;

-- SELECT DOES NOT CHANGE THE DATA
-- ONLY SHOWS IT

DROP TABLE customers;

USE classicmodels;

DROP TABLE IF EXISTS customers;

CREATE TABLE customers (
  customerNumber INT NOT NULL,
  customerName VARCHAR(50) NOT NULL,
  contactLastName VARCHAR(50) NOT NULL,
  contactFirstName VARCHAR(50) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  addressLine1 VARCHAR(50) NOT NULL,
  addressLine2 VARCHAR(50) DEFAULT NULL,
  city VARCHAR(50) NOT NULL,
  state VARCHAR(50) DEFAULT NULL,
  postalCode VARCHAR(15) DEFAULT NULL,
  country VARCHAR(50) NOT NULL,
  salesRepEmployeeNumber INT DEFAULT NULL,
  creditLimit DECIMAL(10,2) DEFAULT NULL,
  PRIMARY KEY (customerNumber),
  KEY salesRepEmployeeNumber (salesRepEmployeeNumber)/*,
  CONSTRAINT customers_ibfk_1 FOREIGN KEY (salesRepEmployeeNumber) REFERENCES employees (employeeNumber)*/
) ;

-- OPTION 1 - all the fields
INSERT INTO customers(customerNumber,customerName,
      contactLastName,contactFirstName,phone,
      addressLine1,addressLine2,city,state,
      postalCode,country,salesRepEmployeeNumber,
      creditLimit) 
VALUES 
(103,'Atelier graphique','Schmitt','Carine','40.32.2555',
'54, rue Royale',NULL,'Nantes',NULL,'44000','France',
1370, 21000.00);

DELETE FROM customers WHERE customerNumber = 112;

-- OPTION2 - not all the fields, but
--    only without the fields that could be NULL
INSERT INTO customers(customerNumber,customerName,
      contactLastName,contactFirstName,phone,
      addressLine1,city,state,
      postalCode,country,salesRepEmployeeNumber,
      creditLimit) 
VALUES 
(112,'Signal Gift Stores','King','Jean','7025551838',
'8489 Strong St.','Las Vegas','NV','83030','USA',1166,
71800.00);