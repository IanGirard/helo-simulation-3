CREATE TABLE IF NOT EXISTS robots (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(180),
    last_name VARCHAR(180),
    gender VARCHAR(180),
    hair_color VARCHAR(50),
    eye_color VARCHAR(50),
    hobby VARCHAR(50),
    birth_day INTEGER,
    birth_month VARCHAR(20),
    birth_year INTEGER,
    img TEXT,
    auth_id TEXT
)