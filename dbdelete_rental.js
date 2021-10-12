const pool = require("./db");

pool.query("DELETE FROM public.rental WHERE rental_id = $1 RETURNING *",[17000],(err,res)=>{
    if(err){
        console.log(err.stack);
    }
    else{
        console.log(res.rows);
    }
});
pool.end();