BEGIN TRANSACTION;

CREATE TABLE users (
    id serial PRIMARY KEY,
    name VARCHAR(100),
    email text UNIQUE NOT NULL,
    name_pz text NOT NULL,
    function_pz varchar(40) NOT NULL,
    joined TIMESTAMP NOT NULL,
    location varchar(40) ,
    hunting_method varchar(30) 
);

COMMIT;