-- drops table
DROP TABLE reviews;
-- creates brand new table
CREATE TABLE reviews (
    id serial PRIMARY KEY,
    isbn VARCHAR (50) NOT NULL,
    added_by VARCHAR (100) NOT NULL,
    p1 VARCHAR (100) NOT NULL,
    p2 VARCHAR (100) NOT NULL,
    p3 VARCHAR (100) NOT NULL,
    p4 VARCHAR (100) NOT NULL,
    p5 VARCHAR (100) NOT NULL,
    p6 VARCHAR (100) NOT NULL,
    p7 VARCHAR (100) NOT NULL,
    p8 VARCHAR (100) NOT NULL,
    p9 VARCHAR (100) NOT NULL,
    p10 VARCHAR (100) NOT NULL,
);