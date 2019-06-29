//var http = require('http');
var express = require('express');
var app = express();
//const port = 8000
//var ejsEngine = require("ejs-locals");
//app.engine("ejs", ejsEngine);
//app.set("view engine", "ejs");
//var url = require('url');
//db
var mysql = require('mysql'); // include thêm module mysql 
console.log('Get connection ...');
 
var conn = mysql.createConnection({
  database: 'quanlibandua',
  host: "localhost",
  user: "root",
  password: ""
});
 
conn.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
app.get('/', function(req, res){
  var sql = 'SELECT * FROM khachhang';
conn.query(sql, function(error, result){

if (error) throw error;
console.log('– USER TABLE — ' , result);
res.json(result); 
});
/*
  conn.query("SELECT * FROM khachhang", function(error, rows, fields){
  if(!!error){
    console.log('Error query');
  } else{
    console.log('Success query');
  }
});*/
})
app.listen(8003);
// Tạo kết nối với Database
/*var pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "quanlibandua",
  password: ""
});
app.get('/', function(req, res){
var sql = 'SELECT * FROM khachhang';
pool.query(sql, function(error, result){

if (error) throw error;
console.log('– USER TABLE — ' , result);
res.json(result); 
});
});
app.listen(port,()=>console.log('Listen on port ${port}'));
console.log('—– server is listening —–');
//var connString = 'mysql://userqlbd:php0210@localhost/quanlibandua?charset=utf8_general_ci&timezone=-0700';
//var conn = mysql.createConnection(connString);
*/

//app.listen(port, ()=>console.log('Listen on port ${port}'))