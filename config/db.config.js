'use strict';
const mysql = require('mysql');
// local mysql db connection
const dbConn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'node_mysql_crud_db'
});
dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});

//ec2-user
// const dbConn = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : '@United100',
//   database : 'node_mysql_crud_db'
// });
// dbConn.connect(function(err) {
//   if (err) throw err;
//   console.log("Database Connected!");
// });
module.exports = dbConn;