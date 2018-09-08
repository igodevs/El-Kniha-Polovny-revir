BEGIN TRANSACTION;

CREATE TABLE announcements_PZ_Vyšne (
    id serial PRIMARY KEY,
    id_user int NOT NULL,
    name VARCHAR(100) NOT NULL,
    function_pz varchar(40) NOT NULL,
    ann text NOT NULL,
    file text
);

COMMIT;