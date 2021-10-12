const pool = require('./db');

pool.query("SELECT first_name || ' ' || last_name as full_name, email FROM public.customer LIMIT 3", (err, res) => {
    if (err) {
        console.error(err);
    } else {
        console.log(res.rows);
    }
});

pool.end();