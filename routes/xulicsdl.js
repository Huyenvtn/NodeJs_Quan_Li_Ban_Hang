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
    /*if (maloai == 0) {
        dshoa = await pool.query('select  * from hoa order by mahoa desc limit 0,10');
        tenloai = "Danh Sách Hoa Mới";
    }
        else*/
        dssp = await pool.query('select  * from sanpham where maloai=' + maloai);

    var Bangsp = dssp[0];
    //var kq = "<table> <caption>" + "Sản phẩm của Coconut Store"+" </caption > ";

    for (i = 0; i < Bangsp.length; i++) {
 if (i % 5 != 0)
     /*       kq += "<tr>";
        kq += "<td><a href='/?masp=" + Bangsp[i].masp + "'> ";
      kq+=" <img src = 'images/" + Bangsp[i].hinh + ".jpg"+"' /></a > <br>";
        kq += Bangsp[i].tensp + "<br><i>Giá bán :" + Bangsp[i].dongia + "</i>";
        kq += "<br><i>Tên sả phẩm :" + Bangsp[i].tensp + "</i></td>";
    */
   var kq;
kq+= "<li class='one_quarter'>";
kq+= "<div class='card'>"
kq+= "<img src='images/" + Bangsp[i].hinh + ".jpg'>";
kq+= "<p class='title'>&nbsp;"+ Bangsp[i].tensp+"</p>"
kq+= "<div class='Gia'>&nbsp;Giá:" + Bangsp[i].dongia + " VND&nbsp;&nbsp;&nbsp";
kq+= "<a id='Giohang' class='fa fa-lg fa-cart-plus'></a></div>"
kq+= "</div>";
kq+= "</li>";
        if ((i + 1) % 5 == 0)
         kq += "<br>";
    }
    return kq;
    console.log(kq);
};