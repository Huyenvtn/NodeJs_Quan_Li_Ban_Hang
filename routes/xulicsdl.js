
module.exports.Dang_ky =
    async function (TENKH, EMAIL, SDT, MATKHAU) {
    var mysql = require('mysql');
    var pool = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'quanlibandua',
        password: ''
    });
    pool.connect(function(err) {
        if (err) throw err;
        console.log("Connected!!!")
      });
        var kq;
        var caulenh = "insert into khachhang(TENKH, EMAIL,";
        caulenh+="SDT, MATKHAU) "
        caulenh += "values('"+ TENKH + "','"
            + EMAIL;
        caulenh += "','" + SDT + "','" + MATKHAU + "')";
        console.log(caulenh);
       kq = await pool.query(caulenh);
        console.log(kq);
    return kq;
    pool.end();
};
/*
module.exports.HienThiLoaiHoa = async function () {
    var mysql = require('mysql');
    var pool = mysql.createPool({
        host: 'localhost',
        user: 'root',
        database: 'quanlibandua',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    });
    var dsloaihoa = await pool.query('SELECT * from loaihoa ');
    Bangloaihoa = dsloaihoa[0];
    var kq = "";
    for (i = 0; i < Bangloaihoa.length; i++) {

        kq += "<a href='/?maloai="
            + Bangloaihoa[i].Maloai + "&&tenloai=" + Bangloaihoa[i].Tenloai + "'>" + Bangloaihoa[i].Tenloai + "</a><br>";
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

};
module.exports.HienThiHoa = async function (maloai,tenloai) {
    var mysql = require('mysql2/promise');
    var pool = mysql.createPool({
        host: 'localhost',
        user: 'root',
        database: 'qlbh',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    });
    var dshoa;
    if (maloai == 0) {
        dshoa = await pool.query('select  * from hoa order by mahoa desc limit 0,10');
        tenloai = "Danh Sách Hoa Mới";
    }
        else
        dshoa = await pool.query('select  * from hoa where maloai=' + maloai);

    Banghoa = dshoa[0];
    var kq = "<table> <caption>" + tenloai+" </caption > ";

    for (i = 0; i < Banghoa.length; i++) {

        if (i % 5 == 0)
            kq += "<tr>";
        kq += "<td><a href='/?mahoa=" + Banghoa[i].mahoa + "'> "
      kq+=" <img src = 'hinh_anh/" + Banghoa[i].hinh + "' /></a > <br>";
        kq += Banghoa[i].tenhoa + "<br><i>Giá bán :" + Banghoa[i].dongia + "</i>"
        kq += "<br><a href='/?muahoa=" + Banghoa[i].mahoa + "&tenhoa=";
        kq += Banghoa[i].tenhoa + "&dongia=" + Banghoa[i].dongia
            kq+= "&maloai=" + maloai + "&tenloai=" + tenloai + "'>";
        kq += "<img src='hinh_anh/gio_hang.jpg'></a></td>";
    

        if ((i + 1) % 5 == 0)
            kq += "</tr>";

    }
    kq += "</table>";

    return kq;
};

module.exports.HienThiChiTietHoa = async function (mahoa,tenhoa) {
    var mysql = require('mysql2/promise');
    var pool = mysql.createPool({
        host: 'localhost',
        user: 'root',
        database: 'qlbh',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    });
    var dshoa;
    if(mahoa!=0)
        dshoa = await pool.query("select  * from hoa where mahoa=" + mahoa);
    else
        dshoa = await pool.query("select  * from hoa where tenhoa like'%" + tenhoa + "%' or mota like '%" + tenhoa +"'");

    
    Banghoa = dshoa[0];
    var kq = "<table>";

    for (i = 0; i < Banghoa.length; i++) {
        if(i%2==0)
            kq += "<tr>";
        kq += "<td valign='center'> <img src = 'hinh_anh/" + Banghoa[i].hinh + "' /></td>";
        kq += "<td><p  style='font - size: 14px; color: #303FDD'><b>"
        kq += Banghoa[i].tenhoa + "</b ></p >";
        kq += "<i>Giá bán :" + Banghoa[i].dongia + "</i><br>";
        kq += "Thành phần chính :<br>" + Banghoa[i].mota + "</td>";
        if((i+1)%2==0)
         kq+="</tr > ";
    }
    kq += "</table>";

    return kq;
};
module.exports.DangNhap = async function (tendn, matkhau) {
    var mysql = require('mysql2/promise');
    var pool = mysql.createPool({
        host: 'localhost',
        user: 'root',
        database: 'qlbh',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    });
    var dskh;
    dskh = await pool.query("select * from khachhang where TenDN='"
        + tendn + "' and MatKhau='" + matkhau + "'");
    var kq;
    BangKh = dskh[0];
    if (BangKh.length > 0) {
        kq = BangKh[0];
    }
    else
        kq = 0;
    return kq;
};
module.exports.Dang_ky =
    async function (tendn, matkhau, ho_ten, email, dia_chi, so_dt) {
    var mysql = require('mysql2/promise');
    var pool = mysql.createPool({
        host: 'localhost',
        user: 'root',
        database: 'qlbh',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    });
        var kq;
        var caulenh = "insert into khachhang(TenDN,MatKhau,HoTen,";
        caulenh+="DiaChi, DienThoai, Email) "
        caulenh += "values('" + tendn + "','" + matkhau + "','"
            + ho_ten + "','" + dia_chi;
        caulenh += "','" + so_dt + "','" + email + "')";
        console.log(caulenh);
       kq = await pool.query(caulenh);
        console.log(kq);
    return kq;
};
*/