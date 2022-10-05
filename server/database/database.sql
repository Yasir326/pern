CREATE DATABASE test_api;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(40) NOT NULL,
    last_name VARCHAR(40) NOT NULL,
    email TEXT NOT NULL

);

INSERT INTO users (first_name, last_name, email)
    VALUES('Joe', 'Rogan', 'joe.rogan@gmail.com');

INSERT INTO users (first_name, last_name, email)
    VALUES('Yasir', 'Khan', 'yasir.khan@gmail.com');

ALTER TABLE users ADD CONSTRAINT constraint_name UNIQUE (email);