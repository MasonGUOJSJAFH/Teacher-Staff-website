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


INSERT INTO Staff (name, title, image_url) VALUES
                                               ('John Doe', 'Professor', 'https://example.com/images/john_doe.jpg'),
                                               ('Jane Smith', 'Lecturer', 'https://example.com/images/jane_smith.jpg');

INSERT INTO Research (staff_id, research_title, research_summary) VALUES
                                                                      (1, 'Research 1', 'Summary of research 1'),
                                                                      (2, 'Research 2', 'Summary of research 2');

INSERT INTO Articles (staff_id, article_title, article_url) VALUES
                                                                (1, 'Article 1', 'https://example.com/articles/article1.pdf'),
                                                                (2, 'Article 2', 'https://example.com/articles/article2.pdf');
