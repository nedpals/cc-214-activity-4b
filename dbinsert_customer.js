const pool = require('./db');
const sql = `
INSERT INTO public.customer (
    customer_id,
    store_id,
    first_name,
    last_name,
    email,
    address_id,
    activebool,
    create_date,
    last_update,
    active
) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
RETURNING *`;

const data = [
    650,
    2,
    'Kila',
    'Shi',
    'hey@sakilacustomer.org',
    5,
    true,
    new Date(),
    '2013-05-26 14:49:45.738',
    1
];

pool.query(sql, data, (err, res) => {
    if (err) {
        console.error(err);
    } else {
        console.log(res.rows);
    }
});

pool.end();