DROP TABLE IF EXISTS items;

CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    style VARCHAR(255),
    price INT
);
