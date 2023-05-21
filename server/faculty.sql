drop database facutl_database;
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
                                               ('Albert Einstein', 'Professor of Physics', 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg'),
                                               ('Marie Curie', 'Professor of Chemistry', 'https://upload.wikimedia.org/wikipedia/commons/7/71/Marie_Curie_c1920.jpg');

INSERT INTO Research (staff_id, research_title, research_summary) VALUES
                                                                      (1, 'Theory of Relativity', 'Investigation of the fundamentals of spacetime.'),
                                                                      (2, 'Radioactivity', 'Discovery of radium and polonium, furthering understanding of atomic structure.');

INSERT INTO Articles (staff_id, article_title, article_url) VALUES
                                                                (1, 'On the Electrodynamics of Moving Bodies', 'https://www.wikisource.org/wiki/On_the_Electrodynamics_of_Moving_Bodies'),
                                                                (2, 'Radioactive Substances', 'https://www.gutenberg.org/ebooks/54206');
