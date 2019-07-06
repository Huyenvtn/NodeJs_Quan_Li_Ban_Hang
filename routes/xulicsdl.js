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
        caulenh += "values('"+ TENKH + "','" + EMAIL;
        caulenh += "','" + SDT + "','" + MATKHAU + "')";
        kq = await conn.query(caulenh);
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
    var kh;
    kh = await pool.query("select * from khachhang where EMAIL='"
        + email + "' and MATKHAU='" + matkhau + "'");
    var kq;
    BangKh = kh[0];
    if (BangKh.length > 0) {
        kq = BangKh[0];
    }
    else
        kq = 0;
    return kq;
};

module.exports.PhanLoaiGiaSP = async function (khoanggia) {
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
    var dssptheogia;
    if (khoanggia == 0){
        dssptheogia = await pool.query('select  * from sanpham');
    }   
        else
        dssptheogia = await pool.query("select  * from sanpham where KHOANGGIA=" + khoanggia);
    Bangloaisp = dssptheogia[0];
    var kq;
    for (i = 0; i < Bangloaisp.length; i++) {
        if (i % 6 == 0)
            kq += "<ul class='nospace clear'>";
            kq += "<li class='one_quarter'>"
            kq += "<div class='card'>";
            kq += "<img width= '200px' height='200px' src='images/" + Bangloaisp[i].HINH + "'/>"
            kq += "<a href='/?sanpham=1&masp=" + Bangloaisp[i].MASP + "'> ";
            kq += "<p class='title'>&nbsp;"+ Bangloaisp[i].TENSP +"</p></a>";
            kq += "<div class='Gia'>&nbsp;Giá:" + Bangloaisp[i].DONGIA + " VND&nbsp;&nbsp;&nbsp"
            kq += "<a href='/?muasp=" + Bangloaisp[i].MASP + "&tensp=";
            kq += Bangloaisp[i].TENSP + "&dongia=" + Bangloaisp[i].DONGIA + "&hinh=" + Bangloaisp[i].HINH + "'>" + "<i class='fa fa-lg fa-cart-plus'></i></a></div>";
            kq += "</div>"
            kq += "</li>&nbsp;&nbsp;&nbsp;&nbsp";
            if ((i + 1) % 6 == 0)
            kq += "</ul>";
    }
    return kq;
};

module.exports.HienThiGioHang = function (giohang) {
    var tongtien = 0;
    var kq;
    for (i = 0; i < giohang.length; i++) {
    kq += "<div class='product'>"
    kq += "<div class='product-image'>"
    
    kq += "  <img src='images/" + giohang[i].hinhsp +"'/>"
    kq += "</div>"
    kq += "<div class='product-details'>"
    kq += "  <div class='product-title'>" + giohang[i].tensp +"</div>"
    kq += "</div>"
    kq += "<div class='product-price'> " + giohang[i].dongia +"vnd</div>"
    kq += "<div class='product-quantity'> " + giohang[i].soluong +"</div>"
    kq += "<div class='product-removal'>"
    kq += "  <button class='remove-product'>"
    kq += "    Xóa"
    kq += "  </button>"
    kq += "</div>"
    kq += "<div class='product-line-price'>" + giohang[i].soluong * giohang[i].dongia +"vnd</div>"
    kq += "</div>";
    tongtien += giohang[i].soluong * giohang[i].dongia;

}
kq += "<div class='totals'>"
kq += "<div class='totals-item totals-item-total'>"
kq += "<label>TỔNG CỘNG</label>"
kq += "<div class='totals-value' id='cart-total'> " + tongtien + "vnd</div>"
kq += "  </div>"
kq += "  </div>"
    return kq;
};

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
        else
        dssp = await pool.query('select  * from sanpham where maloai=' + maloai);
    Bangsp = dssp[0];
    var kq;
    for (i = 0; i < Bangsp.length; i++) {
        if (i % 6 == 0)
            kq += "<ul class='nospace clear'>";
            kq += "<li class='one_quarter'>"
            kq += "<div class='card'>";
            kq += "<img width= '200px' height='200px' src='images/" + Bangsp[i].HINH + "'/>"
            kq += "<a href='/?sanpham=1&masp=" + Bangsp[i].MASP + "'> ";
            kq += "<p class='title'>&nbsp;"+ Bangsp[i].TENSP +"</p></a>";
            kq += "<div class='Gia'>&nbsp;Giá:" + Bangsp[i].DONGIA + " VND&nbsp;&nbsp;&nbsp"
            kq += "<a href='/?muasp=" + Bangsp[i].MASP + "&tensp=";
            kq += Bangsp[i].TENSP + "&dongia=" + Bangsp[i].DONGIA + "&hinh=" + Bangsp[i].HINH + "'>" + "<i class='fa fa-lg fa-cart-plus'></i></a></div>";
            kq += "</div>"
            kq += "</li>&nbsp;&nbsp;&nbsp;&nbsp";
            if ((i + 1) % 6 == 0)
            kq += "</ul>";
    }
    return kq;
};

module.exports.HienThiSPTen = async function (tensp) {
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
    if (tensp == 0){
        dssp = await pool.query('select  * from sanpham');
    }   else
        dssp = await pool.query("select  * from sanpham where tensp like'%" + tensp + "%' or mota like '%" + tensp +"%'");
    Bangsp = dssp[0];
    var kq;
    for (i = 0; i < Bangsp.length; i++) {
        if (i % 6 == 0)
            kq += "<ul class='nospace clear'>";
            kq += "<li class='one_quarter'>"
            kq += "<div class='card'>";
            kq += "<img width= '200px' height='200px' src='images/" + Bangsp[i].HINH + "'/>"
            kq += "<a href='/?sanpham=1&masp=" + Bangsp[i].MASP + "'> ";
            kq += "<p class='title'>&nbsp;"+ Bangsp[i].TENSP +"</p></a>";
            kq += "<div class='Gia'>&nbsp;Giá:" + Bangsp[i].DONGIA + " VND&nbsp;&nbsp;&nbsp"
            kq += "<a href='/?muasp=" + Bangsp[i].MASP + "&tensp=";
            kq += Bangsp[i].TENSP + "&dongia=" + Bangsp[i].DONGIA + "&hinh=" + Bangsp[i].HINH + "'>" + "<i class='fa fa-lg fa-cart-plus'></i></a></div>";
            kq += "</div>"
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
    var kq;
    if(masp != 0){
        sp = await pool.query('select  * from sanpham where masp=' + masp);
        var spht = sp[0];
        kq += "<table>"
        kq += "<tr>"
        kq += "<td valign='center'> <img src = 'images/" + spht[0].HINH + "' /></td>";
        kq += "<td><p  style='font - size: 14px; color: #303FDD'><b>"
        kq += spht[0].TENSP + "</b ></p >";
        kq += "<i><strong>Giá bán : " + spht[0].DONGIA + " </strong> VND</i><br>";
           
        kq += "<strong>Thành phần chính : </strong><br>" + spht[0].MOTA ;
        kq += "<p><strong>Số lượng: </strong></p>"
        kq += "<div class='product-quantity'>";
        kq +=  "<input type='number' value='1' min='1'></div>";
        kq += "<p><a href='/?muasp=" + spht[0].MASP + "&tensp=";
        kq += spht[0].TENSP + "&dongia=" + spht[0].DONGIA + "&hinh=" + spht[0].HINH + "' class='buy-now btn btn-sm height-auto px-4 py-3 btn-primary'><i class='fa fa-lg fa-cart-plus'></i></a></p>";   
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