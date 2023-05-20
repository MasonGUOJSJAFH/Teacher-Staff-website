create database facutl_database;
use facutl_database;
CREATE TABLE Staff (
                       id INT AUTO_INCREMENT,
                       name VARCHAR(255),
                       title VARCHAR(255),
                       image_url VARCHAR(255),
                       PRIMARY KEY (id)
);
CREATE TABLE Research (
                          id INT AUTO_INCREMENT,
                          staff_id INT,
                          research_title VARCHAR(255),
                          research_summary TEXT,
                          PRIMARY KEY (id),
                          FOREIGN KEY (staff_id) REFERENCES Staff(id)
);
CREATE TABLE Articles (
                          id INT AUTO_INCREMENT,
                          staff_id INT,
                          article_title VARCHAR(255),
                          article_url VARCHAR(255),
                          PRIMARY KEY (id),
                          FOREIGN KEY (staff_id) REFERENCES Staff(id)
);
