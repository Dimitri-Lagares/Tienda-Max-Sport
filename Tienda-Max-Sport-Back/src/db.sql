CREATE SCHEMA `pqr's-schema` ;
CREATE TABLE `pqr's-schema`.`pqr's-table` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `document` VARCHAR(45) NOT NULL,
  `type-of-document` VARCHAR(45) NOT NULL,
  `first-name` VARCHAR(45) NOT NULL,
  `second-name` VARCHAR(45) NULL,
  `first-last-name` VARCHAR(45) NOT NULL,
  `second-last-name` VARCHAR(45) NULL,
  `cellular-number` VARCHAR(45) NULL,
  `telephone-number` VARCHAR(45) NULL,
  `email` VARCHAR(45) NOT NULL,
  `pqr's-title` VARCHAR(45) NOT NULL,
  `ticket's-type` VARCHAR(45) NOT NULL,
  `ticket's-content` VARCHAR(45) NOT NULL,
  `ticket's-state` VARCHAR(45) NOT NULL,

  PRIMARY KEY (`id`));