const mysql = require('mysql2');



// Datatabase connection simulation
const db = mysql.createConnection({
 host: '127.0.0.1',
 user: 'root',
 password: '',
 database: 'hospital_api',
ssl: false
});


module.exports = db;