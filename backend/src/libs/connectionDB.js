const config = require('../config/config.json');
const mysql = require ('mysql');

const connection = mysql.createConnection({
    host    : config.HOST,
    user    : config.USER,
    password: config.PASSWORD,
    database: config.DATABASE
});

//Check connect
connection.connect(error=>{
    if(error) throw error;
    console.log('Database server running');
});

module.exports = connection;