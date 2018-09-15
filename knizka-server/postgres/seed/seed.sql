BEGIN TRANSACTION;

INSERT INTO users (name, email, name_pz, function_pz, joined) values ('Bc. Igor Savko', 'igor@gmail.com', 'PZ Kamenec Vyšná Sitnica', 'Člen', '2018-01-01');

INSERT INTO users (name, email, name_pz, function_pz, joined) values ('Mgr. Igor Savko', 'a@a.com', 'PZ Kamenec Vyšná Sitnica', 'Hospodár', '2018-01-01');

INSERT INTO users (name, email, name_pz,function_pz, joined) values ('Adam Vrba', 'b@b.com', 'PZ Vyšne', 'Člen', '2018-01-01');

INSERT INTO users (name, email, name_pz, function_pz, joined) values ('Adam Vrba2', 'c@c.com', 'PZ Vyšne', 'Hospodár', '2018-01-01');

INSERT INTO login (id, hash,email) values(1, '$2a$10$EDG6KncDz2vVu0E8QC5acOM.sdujt8EkZ2.wXHg49IEBYOK3GzUpy', 'igor@gmail.com');

INSERT INTO login (id, hash,email) values(2, '$2a$10$EDG6KncDz2vVu0E8QC5acOM.sdujt8EkZ2.wXHg49IEBYOK3GzUpy', 'a@a.com');

INSERT INTO login (id, hash,email) values(3, '$2a$10$EDG6KncDz2vVu0E8QC5acOM.sdujt8EkZ2.wXHg49IEBYOK3GzUpy', 'b@b.com');

INSERT INTO login (id, hash,email) values(4, '$2a$10$EDG6KncDz2vVu0E8QC5acOM.sdujt8EkZ2.wXHg49IEBYOK3GzUpy', 'c@c.com');

INSERT INTO book_PZ_Kamenec_Vyšná_Sitnica (
    id_user, email,  date, insert_time, time, name, guest_name, location, 
    hunting_method)
    values
    (2 ,'a@a.com',  '07.08.2018', '07.08.2018 07:30',  current_time,'Mgr. Igor Savko', '', 
    'Kamenec', 'Posliedka');

INSERT INTO book_PZ_Kamenec_Vyšná_Sitnica (
    id_user, email,  date, insert_time, time, name, guest_name, location, 
    hunting_method)
    values
    (1, 'igor@gmail.com', '06.08.2018', '06.08.2018 06:30',  current_time,'Bc. Igor Savko', 'Janko Hrasko', 
    'Vlcie', 'Posliedka');



INSERT INTO book_PZ_Vyšne (
    id_user, email,  date, insert_time, time, name, guest_name, location, 
    hunting_method)
    values
    (3, 'b@b.com', '07.08.2018', '07.08.2018 07:30',  current_time,'Adam Vrba', '', 
    'Aaaaa', 'Ppppp');

INSERT INTO book_PZ_Vyšne (
    id_user, email,  date, insert_time, time, name, guest_name, location, 
    hunting_method)
    values
    (4, 'c@c.com', '06.08.2018', '06.08.2018 06:30', current_time,'Adam Vrba2', '', 
    'Bbbbb', 'Sssss');

COMMIT;