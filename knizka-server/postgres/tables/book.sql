BEGIN TRANSACTION;

CREATE TABLE book_PZ_Kamenec_Vyšná_Sitnica (
    id serial PRIMARY KEY,
    id_user int NOT NULL,
    email text NOT NULL,
    date text NOT NULL,
    insert_time text NOT NULL,
    time text NOT NULL,
    name VARCHAR(100) NOT NULL,
    guest_name varchar(70),
    location varchar(40) NOT NULL,
    hunting_method varchar(30) NOT NULL,
    species_gender varchar(30),
    count smallint,
    time_location varchar(50),
    u_n character(8),
    tag_number varchar(50),
    other text
);

CREATE TABLE book_PZ_Vyšne (
    id serial PRIMARY KEY,
    id_user int NOT NULL,
    email text NOT NULL,
    date text NOT NULL,
    insert_time text NOT NULL,
    time text NOT NULL,
    name VARCHAR(100) NOT NULL,
    guest_name varchar(70),
    location varchar(40) NOT NULL,
    hunting_method varchar(30) NOT NULL,
    species_gender varchar(30),
    count smallint,
    time_location varchar(50),
    u_n character(8),
    tag_number varchar(50),
    other text
);

COMMIT;