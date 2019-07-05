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
var session = require('express-session');
app.use(session({ secret: "Nhỏ thôi bí mật!" }));

ExportSP = async function (req, res){
  var q = url.parse(req.url, true).query;
  
    if (q.muasp != undefined){
        if (req.session.giohang == undefined)
        {
            req.session.giohang = [];
            var sp = {
                masp: q.muasp, hinhsp: q.hinh, tensp: q.tensp,
                dongia: q.dongia, soluong: 1
            };
            req.session.giohang[0] = sp;   
        }
        else
        {
            var damua = 0; 
            for (i = 0; i < req.session.giohang.length; i++)
            {
                if (req.session.giohang[i].masp == q.muasp) 
                {
                    req.session.giohang[i].soluong++;
                    damua = 1;
                    break;
                }
            }
            if (damua == 0) {
                var sp = {
                  masp: q.muasp, hinhsp: q.hinh, tensp: q.tensp,
                  dongia: q.dongia, soluong: 1
                };
                req.session.giohang[req.session.giohang.length] = sp;
            }
        }
    }

    var tenkh = "<a href=/?dangnhap=1>Đăng nhập</a>";
    var thoat = "<a href=/?dangky=1>Đăng ký</a>";
    if (req.session.kh == "") {
        tenkh = "Thông tin dang nhap sai";
        req.session.kh = undefined;
    }
    else if (req.session.kh != undefined) {
        tenkh = req.session.kh.TENKH;
        thoat = "<a href=/?thoat=1>Thoát</a>";
    }
    var xgh = "";
    if (req.session.giohang != undefined && req.session.giohang.length > 0)
        xgh = csdl.HienThiGioHang(req.session.giohang);
    if (q.thanhtoan == 1 || q.muasp != undefined){
          res.render("thanhtoan", {
            giohang: xgh,
            hoten: tenkh, thoat: thoat
        });
        }else if (q.sanpham != undefined) {
            if (q.maloai != undefined) {
                var  maloai = q.maloai;
                dssp = await csdl.HienThiSP(maloai);
                res.render("sanpham",{
                    dssp: dssp,
                    hoten: tenkh, thoat: thoat
                })
            }
            else if (q.khoanggia != undefined) {
                var  khoanggia = q.khoanggia;
                dssp = await csdl.PhanLoaiGiaSP(khoanggia);
                res.render("sanpham",{
                    dssp: dssp,
                    hoten: tenkh, thoat: thoat
                })
            }
            else if (q.tensp != undefined) {
                var tensp = q.tensp;
               var dssp = await csdl.HienThiSPTen(tensp);
                res.render("sanpham",{
                    dssp: dssp,
                    hoten: tenkh, thoat: thoat
                })
            } else if (q.masp != undefined){
                var  masp = q.masp;
                    sp = await csdl.ChiTietSP(masp);
                    res.render("sanpham",{
                        dssp: sp,
                        hoten: tenkh, thoat: thoat
                    })
            }
            else{
                    var  maloai = 0;
                    dssp = await csdl.HienThiSP(maloai);
                    res.render("sanpham",{
                        dssp: dssp,
                        hoten: tenkh, thoat: thoat
                    })
            }
        } else {
    
    if (q.lienhe == 1)
        res.render("lienhe", {
            hoten: tenkh, thoat: thoat
        });
    else if (q.baiviet == 1){
        res.render("camnang", {
            hoten: tenkh, thoat: thoat
        });
    } else{
        res.render("index", {
            hoten: tenkh, thoat: thoat
        });
    }
}
};

app.get("/", async function (req, res) {
  var q = url.parse(req.url, true).query;
  if (q.dangky == 1) {
      res.render("dangky");
  } else if (q.dangnhap == 1){
    res.render("dangnhap");
    }else { 
        if (q.thoat == 1)
            req.session.kh = undefined;
        await ExportSP(req, res);
    }
});

app.post("/dangnhap", async function (req, res) {
  var email = req.body.email;
  var matkhau = req.body.matkhau;
  var kq = await csdl.DangNhap(email, matkhau);
  if (kq == 0) 
      req.session.kh = "";
  else
      req.session.kh = kq;
        await ExportSP(req, res);
});

app.post("/dangky", async function (req, res) {
  var tenkh = req.body.ten_kh;
  var email = req.body.email_kh;
  var sdt = req.body.sdt_kh;
  var matkhau = req.body.mk_kh;
  var kq = await csdl.Dang_ky(tenkh, email, sdt, matkhau);
        await ExportSP(req, res);
});

var server = http.createServer(app);
server.listen(8000);
