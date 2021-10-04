const pool = require('./db');
const sql = `
INSERT INTO public.film (
    title,
    description,
    release_year,
    language_id,
    rental_duration,
    rental_rate,
    length,
    replacement_cost,
    rating,
    last_update,
    special_features
) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
RETURNING *`;

const data = [
    'Fast and the Furious Toril Drift 2',
    'Very scary movie mura kag nilupad',
    2022,
    1,
    1,
    5.99,
    24,
    5.59,
    'R',
    new Date(),
    ['None. Kusog ang music']
];

pool.query(sql, data, (err, res) => {
    if (err) {
        console.error(err);
    } else {
        console.log(res.rows);
    }
});

pool.end();