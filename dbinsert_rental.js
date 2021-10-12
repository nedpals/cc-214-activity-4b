const pool = require('./db');
const sql = `
INSERT INTO public.rental (
    rental_id,
    rental_date,
    inventory_id,
    customer_id,
    return_date,
    staff_id,
    last_update
   
) VALUES ($1, $2, $3, $4, $5, $6, $7)
RETURNING *`;

const data = [
    17000,
    '2013-05-26 14:49:45.738',
    123,
    123,
    '2013-08-26 14:49:45.738',
    2,
    '2013-09-26 14:49:45.738',
    
];

pool.query(sql, data, (err, res) => {
    if (err) {
        console.error(err);
    } else {
        console.log(res.rows);
    }
});