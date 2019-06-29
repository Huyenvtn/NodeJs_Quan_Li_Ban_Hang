var http = require('http');
var express = require('express');
var app = express();
var ejsEngine = require("ejs-locals");
app.engine("ejs", ejsEngine);
app.set("view engine", "ejs");
var csdl = require("./routes/xulicsdl");
const bodyParser = require('body-parser');
var url = require('url');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
//app.set('port', (8080));
// DataBase 
//XuatDuLieu = async function (req, res){};
  app.get("/", async function (req, res) {
    var q = url.parse(req.url, true).query;
    if (q.dangky == 1) {
        
      res.render("dangky");

  }else  {
      res.render("index");
  }
    
});
app.post("/dangky", async function (req, res) {
  var tenkh = req.body.ten_kh;
  var email = req.body.email_kh;
  var sdt = req.body.sdt_kh;
  var matkhau = req.body.mk_kh;
  console.log(tenkh);
  console.log(sdt);
  var kq = await csdl.Dang_ky(tenkh, email, sdt, matkhau);
  res.render("index");
  //await XuatDuLieu(req, res);
});

var server = http.createServer(app);

server.listen(8000);

//module.exports = app;
