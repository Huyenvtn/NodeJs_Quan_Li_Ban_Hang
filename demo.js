var http = require('http');
var express = require('express');
const app = express()
const port = 8000
var ejsEngine = require("ejs-locals");
app.engine("ejs", ejsEngine);
app.set("view engine", "ejs");
var url = require('url');
//db
var mysql = require('mysql'); // include thêm module mysql
// Tạo kết nối với Database
var pool = mysql.createPool({
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
//var con = mysql.createConnection({
  //host: "localhost",
  //user: "userqlbd",
  //password: "php0210",
  //database: "quanlibandua",
  //insecureAuth : true
//});
//con.connect(function(err){
  //if(err) throw err
    //return;
  //console.log('Connection established');
//});
//app.get('/', function (req, res) {
    //res.send('Got a POST request')
  //})
//app.listen(port, ()=>console.log('Listen on port ${port}'))