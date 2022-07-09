-- drops table
DROP TABLE book_info;
-- creates brand new table
CREATE TABLE book_info (
    id serial PRIMARY KEY,
    isbn VARCHAR (50) NOT NULL,
    title VARCHAR (100) NOT NULL,
    author VARCHAR (100) NOT NULL
);