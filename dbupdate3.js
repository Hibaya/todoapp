const pool = require("./db");

const sql = 'UPDATE public.assignment SET todo_id = $1, cat_id = $2 WHERE asgmnt_id = 8 RETURNING *';
const data = [3,7];

pool.query(sql,data,(err,res)=>{
if(err){
	console.log(err.stack);
	}else{
	     console.log(res.rows[0]);
	}
});
pool.end();