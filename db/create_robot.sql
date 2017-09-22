INSERT INTO robots
( email, auth_id)
VALUES
($1, $2)
RETURNING *;