module.exports.Dang_ky =
    async function (TENKH, EMAIL, SDT, MATKHAU) {
    var mysql = require('mysql2/promise');
    var conn = mysql.createPool({
        host: 'localhost',
        user: 'root',
        database: 'quanlibandua',
        password: '',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    });
        var kq;
        var caulenh = "insert into khachhang(TENKH, EMAIL,";
        caulenh+="SDT, MATKHAU) "
        caulenh += "values('"+ TENKH + "','"
            + EMAIL;
        caulenh += "','" + SDT + "','" + MATKHAU + "')";
        console.log(caulenh);
       kq = await conn.query(caulenh);
        console.log(kq);
    return kq;
};

module.exports.DangNhap = async function (email, matkhau) {
    var mysql = require('mysql2/promise');
    var pool = mysql.createPool({
        host: 'localhost',
        user: 'root',
        database: 'quanlibandua',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    });
    var dskh;
    dskh = await pool.query("select * from khachhang where EMAIL='"
        + email + "' and MATKHAU='" + matkhau + "'");
    var kq;
    BangKh = dskh[0];
    if (BangKh.length > 0) {
        kq = BangKh[0];
    }
    else
        kq = 0;
    return kq;
};

module.exports.PhanLoaiSP = async function () {
    var mysql = require('mysql2/promise');
    var pool = mysql.createPool({
        host: 'localhost',
        user: 'root',
        database: 'quanlibandua',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    });
    var dsloaisp = await pool.query('SELECT * from sanpham ');
    Bangloaisp = dsloaisp[1];
    var kq = "";
    for (i = 0; i < Bangloaisp.length; i++) {

        kq += "<a href='/?maloai="
            + Bangloaisp[i].Maloai + "'>" + Bangloaisp[i].Maloai + "</a><br>";
    }

    return kq;
}

module.exports.GioHangTong = function (giohang) {
    var tongtien = 0;
    var soluong = 0;
    var kq=""
    for (i = 0; i < giohang.length; i++) {

        soluong += giohang[i].soluong*1;
        tongtien += giohang[i].soluong * giohang[i].dongia;

    }
    kq += "<br>Số lượng : " + soluong;
    kq += "<br>Tổng tiền :" + tongtien;
    kq += "<br><a href='/?ttgh=1'>Thông tin giỏ hàng</a>";
    return kq;

};
/*
module.exports.HienThiGioHang = function (giohang) {
    var tongtien = 0;
    var kq = "<table width='90%' border='1' cellspacing='0' ";
    kq+="cellpadding = '0' > ";
    kq += "<tr><td width='5%'>STT</td><td width='30%'>Tên hoa</td>";
    kq += "<td width='10%'>SL</td> <td width='15%'>Giá</td>";
    kq+="<td width='15%'>Thành tiền</td><td width='10%'>Xóa</td><td>Sửa</td></tr > ";
    for (i = 0; i < giohang.length; i++) {
        kq += "<tr><td>" + (i + 1) + "</td><td>" + giohang[i].tenhoa
            + "</td>";
        kq += "<td><input type='number' id='txtsl" + giohang[i].mahoa+"' value='" + giohang[i].soluong +"'/></td><td>" + giohang[i].dongia + "</td>";
        kq += "<td>" + giohang[i].soluong * giohang[i].dongia
            + "</td>";
        kq += "<td><a href='#' onClick='xoahoa(" + giohang[i].mahoa+")'>Xóa</a></td>" ;
        kq += "<td><a href='#' onClick='suahoa(" + giohang[i].mahoa +")'>Sửa</a></td></tr>";
        tongtien += giohang[i].soluong * giohang[i].dongia;
    }
    kq += "<tr><td colspan='7' align='right'>Tổng tiền :" + tongtien + "</td></tr>";
    kq += "</table";
    return kq;

};*/

module.exports.HienThiSP = async function (maloai) {
    var mysql = require('mysql2/promise');
    var pool = mysql.createPool({
        host: 'localhost',
        user: 'root',
        database: 'quanlibandua',
        password: '',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    });
    var dssp;
    if (maloai == 0){
        dssp = await pool.query('select  * from sanpham');
    }   
    else{
    dssp = await pool.query('select  * from sanpham where maloai=' + maloai);
    };
    Bangsp = dssp[0];
    var kq='';
    for (i = 0; i < Bangsp.length; i++) {
        if (i % 6 == 0)
            kq += "<ul class='nospace clear'>";
            kq += "<li class='one_quarter'>";
            kq += "<div class='card'>";
            kq += "<img width= '200px' height='200px' src='images/" + Bangsp[i].HINH + "'/>"
            kq += "<a href='/?sanpham=1&masp=" + Bangsp[i].MASP + "'> ";
            kq += "<p class='title'>&nbsp;"+ Bangsp[i].TENSP +"</p></a>";
            kq += "<div class='Gia'>&nbsp;Giá:" + Bangsp[i].DONGIA + " VND&nbsp;&nbsp;&nbsp"
            kq += "<a href='/?mua=1&masp=" + Bangsp[i].MASP +"'>" + "<i class='fa fa-lg fa-cart-plus'></i></a></div>";
            kq += "</div>";
            kq += "</li>&nbsp;&nbsp;&nbsp;&nbsp";
        
        if ((i + 1) % 6 == 0)
            kq += "</ul>";
        }
    return kq;
};

module.exports.ChiTietSP = async function (masp) {
    var mysql = require('mysql2/promise');
    var pool = mysql.createPool({
        host: 'localhost',
        user: 'root',
        database: 'quanlibandua',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    });
    var sp;
    var kq='';
    if(masp != 0){
        sp = await pool.query('select  * from sanpham where masp=' + masp);
        var spht = sp[0];
        kq += "<table>"
        kq += "<tr>"
        kq += "<td width='250px' height='250px'> <img  width='250px' src = 'images/" + spht[0].HINH + "' /></td>";
        kq += "<td><p style='font - size: 14px; color: #303FDD'><b>"
        kq += spht[0].TENSP + "</b ></p >";
        kq += "<i><strong>Giá bán : " + spht[0].DONGIA + " </strong> VND</i><br>";
           
        kq += "<strong>Thành phần chính : </strong><br>" + spht[0].MOTA ;
        kq += "<p><strong>Số lượng: </strong></p>"
        kq += "<div class='product-quantity'>";
        kq +=  "<input type='number' value='1' min='1'></div>";
        kq += "<p><a href='#' class='buy-now btn btn-sm height-auto px-4 py-3 btn-primary'><i class='fa fa-lg fa-cart-plus'></i></a></p>";   
        kq += "<br></td>";
        kq+="</tr > ";
        kq += "</table>";
    }
    else
        {
            kq += "<h2>Không tìm thấy !</h2>";
        }
    return kq;
};