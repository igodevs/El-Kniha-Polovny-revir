-- Deploy fresh database tables

\i '/docker-entrypoint-initdb.d/tables/users.sql'
\i '/docker-entrypoint-initdb.d/tables/login.sql'
\i '/docker-entrypoint-initdb.d/tables/book.sql'
\i '/docker-entrypoint-initdb.d/tables/announcements_PZ_Kamenec_Vyšná_Sitnica.sql'
\i '/docker-entrypoint-initdb.d/tables/announcements_PZ_Vyšne.sql'
\i '/docker-entrypoint-initdb.d/seed/seed.sql'

