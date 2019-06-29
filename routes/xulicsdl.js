
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
};