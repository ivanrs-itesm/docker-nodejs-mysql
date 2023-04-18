const express = require('express');
const mysql = require('mysql');
const app = express();

const connection = mysql.createPool({
	host: process.env.MYSQL_HOST || 'localhost',
	user: process.env.MYSQL_USER || 'root',
	password: process.env.MYSQL_PASSWORD || 'itesm',
	database: process.env.MYSQL_DATABASE || 'test_database'
});

app.get('/', (req, res) => {

	connection.query('SELECT * FROM employees' , (err, rows) => {
		if(err){
			res.json({
			success: false,
			err
			});
		}

		else{res.json({
			success: true,
			rows
			});
		}
	});
});

app.listen(3000, () => console.log('Server on port 3000'));