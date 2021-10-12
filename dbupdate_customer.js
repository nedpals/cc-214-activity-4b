const pool = require('./db');

pool.query("UPDATE public.customer SET first_name = $1 WHERE customer_id = $2 RETURNING *",['hotdog',1],(err,res)=>{

     if(err){
        console.log(err.stack);
    }
    else{
        console.log(res.rows);
    }
});
pool.end();