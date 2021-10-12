const pool = require('./db');

pool.query("UPDATE public.film SET description = $1 WHERE film_id = $2 RETURNING *",['Gusto ko maging hotdog',2],(err,res)=>{


     if(err){
        console.log(err.stack);
    }
    else{
        console.log(res.rows);
    }
});
pool.end();