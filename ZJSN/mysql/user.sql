SET NAMES UTF8;
DROP DATABASE IF EXISTS zjsn;
CREATE DATABASE zjsn CHARSET=UTF8;
USE zjsn;
CREATE TABLE zjsn_user(
lid INT PRIMARY KEY AUTO_INCREMENT,
uname VARCHAR(16),
phone VARCHAR(16),
upwd VARCHAR(16),
user_name VARCHAR(32),
email VARCHAR(20)
);
INSERT INTO zjsn_user VALUES(NULL,'daofeng','13640305417','123456','陈炳俊','1807399623@qq.com')