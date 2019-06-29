-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Generation Time: Jun 29, 2019 at 06:48 AM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `quanlibandua`
--

-- --------------------------------------------------------

--
-- Table structure for table `khachhang`
--

CREATE TABLE `khachhang` (
  `TENKH` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `EMAIL` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `SDT` int(10) DEFAULT NULL,
  `MATKHAU` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `khachhang`
--

INSERT INTO `khachhang` (`TENKH`, `EMAIL`, `SDT`, `MATKHAU`) VALUES
('Nguyễn Văn A', 'anv@gmail.com', 882345167, 'annv'),
('Nguyễn Văn B', 'bnv@gmail.com', 882344567, 'bnnv'),
('Nguyễn Thị C', 'cnt@gmail.com', 882345143, 'ctnt'),
('Nguyễn Thị D', 'dnt@gmail.com', 882345122, 'dtnt'),
(' xcvbn ', 'sdfg@gmail.com', 234567654, 'xcvb');

-- --------------------------------------------------------

--
-- Table structure for table `sanpham`
--

CREATE TABLE `sanpham` (
  `MASP` int(11) NOT NULL DEFAULT 0,
  `MALOAI` int(11) DEFAULT NULL,
  `KHOANGGIA` int(11) DEFAULT NULL,
  `TENSP` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `DONGIA` int(11) DEFAULT NULL,
  `HINH` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `MOTA` varchar(1000) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sanpham`
--

INSERT INTO `sanpham` (`MASP`, `MALOAI`, `KHOANGGIA`, `TENSP`, `DONGIA`, `HINH`, `MOTA`) VALUES
(1, 1, 2, 'Dầu dừa', 30000, 'dau-dua.jpg', 'Dầu dừa nguyên chất được sản xuất sạch sẽ an toàn và chất lượng với quy trình khép kín tại Bến Tre. Dầu dừa được nấu bằng củi và cô đặc trong 5 giờ liền, không chứa bất kì hoá chất nào, 100% dầu dừa nguyên chất chắc lọc từ cơm dừa khô. Trong dầu dừa có chứa thành phần 50% axit lauric. Chất này có tác dụng chống lại các loại vi khuẩn, nấm… nhờ đó nhanh chóng làm dịu, làm lành các vết thương thâm mụn, chàm, và giúp da lên tone nhanh chóng. Đồng thời dầu có chứa nhiều vitamin A, E và dưỡng chất làm đẹp nuôi dưỡng cho đôi môi hồng hào, mềm mịn hơn.Dầu dừa Là sản phẩm làm đẹp an toàn và chất lượng với giá cả vô cùng rẻ.'),
(2, 2, 2, 'Mứt dừa non', 40000, 'mut-dua-non.jpg', 'Mứt dừa non được làm từ cơm dừa mềm còn non, ngào với đường và hương vị được làm tại Bến Tre, không hoá chất, an toàn, chất lượng và đảm bảo về độ dẻo, ngọt vừa và thơm của sản phẩm.Mứt dừa thường không thể thiếu trong hộp bánh mứt của mọi nhà vào ngày tết vì sự hấp dẫn của nó.'),
(3, 2, 2, 'Kẹo dừa', 20000, 'keo-dua.jpg', 'Một sản phẩm mang đậm tính Bến Tre, Kẹo dừa AB vừa béo ngậy có nhiều hương vị , và đa dạng chủng loại, an toàn , sạch sẽ không hoá chất, món quà phương xa cho bạn bè và người thân.Thành phần: Nước cốt dừa, Đường, Đậu , Vani, Sầu riêng, Nước cốt lá dứa.Các loại kẹo dừa: Kẹo dừa đậu phộng sầu riêng, kẹo dừa lá dứa, kẹo dừa thập cẩm,…'),
(4, 2, 3, 'Đuông dừa', 50000, 'duong-dua.jpg', 'Đuông dừa là một món ăn không thể bỏ lỡ, Ab cung cấp đuông dừa Bếbn Tre, béo ngậy, ngon độc và lạ miệng, tự nhiên 100%.'),
(5, 2, 2, 'Chuột dừa', 30000, 'chuot-dua.jpg', 'Chuột dừa ăn dừa và được bắt ngay trên cây dừa, vì chuột dừa ăn dừa ,nên thịt chuột rất thơm ngon.'),
(6, 3, 1, 'Dừa xiêm xanh', 10000, 'dua-xiem-xanh.jpg', 'Dừa xiêm xanh là 1 loại dừa có độ ngọt cao khoảng 8,5 % đường, lượng nước ít khoảng 280ml nước, đây là loại dừa ngọt thanh, ngon nhất trong các loại dừa dùng để giải khác , vỏ mỏng, được rất nhiều người trong và ngoài nước ưa dùng vì độ thạnh mát và ngọt tự nhiên của nó, dừa xiêm xanh tự nhiên được trồng tại Bến Tre ngon, ngọt, sạch và an toàn.'),
(7, 3, 1, 'Dừa ta', 10000, 'dua-ta.jpg', 'Dừa ta thuộc loại dừa nạo có màu xanh, có độ ngọt trung bình, rất nhiều nước, thường lấy nước hoặc cơm dừa dùng để uống, làm rau câu, mứt dừa non, nấu ăn các món như thịt kho hột vịt hoặc cà ri,…'),
(8, 3, 2, 'Dừa dứa', 15000, 'dua-dua.jpg', 'Dừa dứa có độ ngọt vừa , nó có đặc trưng là rất thơm mùi lá dứa, thanh mát, nhiều nước, ngon và lạ.Loại dừa này rất ít người trồng, nhưng luôn đảm bảo an toàn tự nhiên và chất lượng.'),
(9, 3, 1, 'Dừa Tam Quan', 9000, 'dua-tam-quan.jpg', 'Dừa Tam Quan là 1 loại dừa dùng để uống nước giải khát với độ ngọt cao , dừa Tam Quan chỉ đứng sau dừa xiêm xanh với độ ngon ngọt của nó. LƯợng nước của nó cũng ít tương tự dừa xiêm xanh khoảng 280ml.'),
(10, 1, 2, 'Son dừa', 30000, 'son-dua.jpg', 'Đã thử, đã kiểm nghiệm và hoàn toàn đúng! Đây chính là sản phẩm dưỡng môi hiệu quả nhất. Son dừa giúp môi căng mọng, bóng , mềm mịn dưỡng ẩm cho đôi môi với chiết xuất tinh dầu dừa và trong dầu dừa có chất bảo vệ khỏi ảnh nắng mặt trời như SPF4, tây tế bào chết làm hồng môi. Cách dùng: Dùng như son môi thông thường, nhưng dùng nhẹ vì sản phẩm làm từ nguyên liệu tự nhiên nên rất dễ gãy.'),
(11, 3, 2, 'Nước dừa tươi', 20000, 'nuoc-dua-tuoi.jpg', 'Nước dừa tươi là loại nước uống tự nhiên rất tốt cho sức khỏe. Nhiều nghiên cứu đã chỉ ra rằng hoạt tính kháng virus, kháng khuẩn, chống viêm và chống oxy hóa của nước dừa có thể đem lại nhiều lợi ích trong việc phòng và hỗ trợ điều trị nhiều bệnh khác nhau.Nước dừa tự nhiên được lấy khi làm mứt dừa, và nước dừa khô được lấy khi làm dầu dừa.Đảm bảo sạch tự nhiên an toàn và nguyên chất.'),
(12, 2, 3, 'Củ hủ dừa', 200000, 'cu-hu-dua.jpg', 'Củ hủ dừa là phần chồi(ngọn) phía trên của thân dừa có vị ngọt, dòn, màu trắng ngà, củ hủ dừa thường được dùng làm gỏi củ hủ dừa tôm thịt giòn ngọt,củ hủ dừa xào nước cốt dừa,củ hủ dừa hầm giò heo được rất nhiều khách gần xa ưa chuộng.'),
(13, 2, 1, 'Bánh lá dừa', 4000, 'banh-la-dua.jpg', 'Bánh lá dừa – Đặc sản Bến Tre. Đây là món vặt vừa ngon vừa rẻ mà khi đến với Xứ Dừa không thể nào không nhắc đến và phải thưởng thức ít nhất 1 lần. Bánh lá dừa, người ta gọi nó là như vậy bởi vì nó rất thơm và luôn béo ngậy nước cốt dừa, nhiều người còn cho cả cơm dừa xay vào mà không vắt cốt, ở giữa bánh lá dừa đó là 1 trái chuối xiêm chín rục hồng tươi ươm mật, ngọt thật ngọt , cũng nhờ nó mà người thưởng thức món này ăn mãi không ngán.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `khachhang`
--
ALTER TABLE `khachhang`
  ADD PRIMARY KEY (`EMAIL`);

--
-- Indexes for table `sanpham`
--
ALTER TABLE `sanpham`
  ADD PRIMARY KEY (`MASP`),
  ADD UNIQUE KEY `MASP` (`MASP`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
