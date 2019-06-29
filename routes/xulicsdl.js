
module.exports.Dang_ky =
    async function (TENKH, EMAIL, SDT, MATKHAU) {
    var mysql = require('mysql2/promise');
    var pool = mysql.createPool({
        host: 'localhost',
        user: 'root',
        database: 'quanlibandua',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
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