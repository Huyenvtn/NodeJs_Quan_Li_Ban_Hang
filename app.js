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

app.get("/", async function (req, res) {
  var q = url.parse(req.url, true).query;
  if (q.dangky == 1) {       
      res.render("dangky");
  }
  else if (q.sanpham == 1){
    if (q.maloai != undefined){
      var  maloai = q.maloai;
        dssp = await csdl.HienThiSP(maloai);
      res.render("sanpham", {headline: 'Đăng nhập', dssp:dssp})
    }else{
     var maloai = 0;
      dssp = await csdl.HienThiSP(maloai);  
      res.render("sanpham", {headline: 'Đăng nhập', dssp:dssp})}
  }
  else if (q.thanhtoan == 1){
    res.render("thanhtoan")
  } else if(q.dangnhap == 1){
      res.render("dangnhap")
  } else if (q.baiviet == 1){
    res.render("camnang", {headline: 'Đăng nhập'})
  }else
    {
      res.render("index");
  }   
});
app.get ("/index", function (req, res){
  res.render("index");
});

app.post("/dangnhapthanhcong", async function (req, res) {
  var emaildn = req.body.email;
  var matkhau = req.body.matkhau;
  var kq = await csdl.DangNhap(email, matkhau);
  if (kq == 0) 
      req.session.kh = "";
  else
      req.session.kh = kq;
  await XuatDuLieu(req, res);
});

app.post("/dangkythanhcong", async function (req, res) {
  var tenkh = req.body.ten_kh;
  var email = req.body.email_kh;
  var sdt = req.body.sdt_kh;
  var matkhau = req.body.mk_kh;
  console.log(tenkh);
  console.log(sdt);
  var kq = await csdl.Dang_ky(tenkh, email, sdt, matkhau);
  var maloai = 0;
  var dssp = await csdl.HienThiSP(maloai);
  res.render("sanpham", {headline: 'Chào '+ tenkh, dssp: dssp});
});
var server = http.createServer(app);
server.listen(8000);

//module.exports = app;

//app.set('port', (8080));
// DataBase 
//XuatDuLieu = async function (req, res){};

  //await XuatDuLieu(req, res);