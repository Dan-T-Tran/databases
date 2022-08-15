DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
   m_id INTEGER AUTO_INCREMENT,
   content TEXT,
   user_id INTEGER,
   roomname VARCHAR(30),
   PRIMARY KEY (m_id)
);

/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  user_id INTEGER AUTO_INCREMENT,
  username VARCHAR(30) NOT NULL,
  PRIMARY KEY (user_id)
);

-- CREATE TABLE rooms (
--   room_id INTEGER PRIMARY KEY AUTO_INCREMENT,
--   roomname VARCHAR(30) NOT NULL
-- );



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

