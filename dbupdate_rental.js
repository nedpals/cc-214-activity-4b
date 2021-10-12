const pool = require('./db');

pool.query("UPDATE public.rental SET rental_date = $1 WHERE rental_id = $2 RETURNING *",['2002-02-21 21:21:21',1],(err,res)=>{

     if(err){
        console.log(err.stack);
    }
    else{
        console.log(res.rows);
    }
});
pool.end();