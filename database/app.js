const mysql = require('mysql');


const conn = mysql.createConnection({
	host: "localhost",
	user: "root",
	database: "client",
	password: ""
});

conn.connect(  err=> {
	if(err) {
	console.log(err);
	return err;
	}
	else {
	console.log('Database ----- OK');
	}
});

let query="SELECT * FROM user";

conn.query(query, (err, result)=>{
	console.log(err);
	console.log(result);
	//console.log(result[1]['lastname']);
});

conn.end( err => {
	if (err){
	console.log(err);
	return err;
	}
	else{
	console.log('Database ----- Close');
	}
});
