const pool = require('./db');

pool.query('SELECT last_update FROM public.rental;', (err, res) => {
    if (err) {
        console.error(err);
    } else {
        console.log(res.rows);
    }
});

pool.end();