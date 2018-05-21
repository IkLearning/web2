/*
 Navicat Premium Data Transfer

 Source Server         : hi
 Source Server Type    : MySQL
 Source Server Version : 50719
 Source Host           : localhost:3306
 Source Schema         : web2

 Target Server Type    : MySQL
 Target Server Version : 50719
 File Encoding         : 65001

 Date: 21/05/2018 16:12:54
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for bill_detail
-- ----------------------------
DROP TABLE IF EXISTS `bill_detail`;
CREATE TABLE `bill_detail`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_bill` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `unit_price` float NOT NULL,
  `created_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk_bills_bill_detail`(`id_bill`) USING BTREE,
  INDEX `fk_bills_products`(`id_product`) USING BTREE,
  CONSTRAINT `fk_bills_bill_detail` FOREIGN KEY (`id_bill`) REFERENCES `bills` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_bills_products` FOREIGN KEY (`id_product`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 29 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of bill_detail
-- ----------------------------
INSERT INTO `bill_detail` VALUES (2, 2, 7, 2, 160000, '2018-03-15 23:43:05', '2018-03-15 23:43:05');
INSERT INTO `bill_detail` VALUES (3, 3, 7, 1, 160000, '2018-03-21 04:53:25', '2018-03-21 04:53:25');
INSERT INTO `bill_detail` VALUES (7, 7, 7, 1, 160000, '2018-05-04 09:02:40', '2018-05-04 09:02:40');
INSERT INTO `bill_detail` VALUES (13, 13, 15, 1, 320000, '2018-05-07 06:21:18', '2018-05-07 06:21:18');
INSERT INTO `bill_detail` VALUES (14, 14, 13, 1, 280000, '2018-05-07 21:11:51', '2018-05-07 21:11:51');
INSERT INTO `bill_detail` VALUES (15, 15, 13, 2, 280000, '2018-05-08 22:26:36', '2018-05-08 22:26:36');
INSERT INTO `bill_detail` VALUES (16, 16, 15, 1, 320000, '2018-05-08 22:29:36', '2018-05-08 22:29:36');
INSERT INTO `bill_detail` VALUES (17, 16, 23, 1, 180000, '2018-05-08 22:29:36', '2018-05-08 22:29:36');
INSERT INTO `bill_detail` VALUES (18, 17, 13, 1, 280000, '2018-05-09 20:20:03', '2018-05-09 20:20:03');
INSERT INTO `bill_detail` VALUES (19, 18, 7, 1, 160000, '2018-05-10 17:10:44', '2018-05-10 17:10:44');
INSERT INTO `bill_detail` VALUES (20, 18, 15, 1, 320000, '2018-05-10 17:10:44', '2018-05-10 17:10:44');
INSERT INTO `bill_detail` VALUES (21, 19, 7, 1, 160000, '2018-05-13 05:39:30', '2018-05-13 05:39:30');
INSERT INTO `bill_detail` VALUES (22, 20, 22, 1, 150000, '2018-05-15 19:54:48', '2018-05-15 19:54:48');
INSERT INTO `bill_detail` VALUES (23, 21, 13, 1, 280000, '2018-05-15 19:59:20', '2018-05-15 19:59:20');
INSERT INTO `bill_detail` VALUES (24, 22, 7, 1, 160000, '2018-05-15 20:03:42', '2018-05-15 20:03:42');
INSERT INTO `bill_detail` VALUES (25, 23, 13, 1, 280000, '2018-05-15 20:08:13', '2018-05-15 20:08:13');
INSERT INTO `bill_detail` VALUES (26, 24, 13, 1, 280000, '2018-05-15 20:26:15', '2018-05-15 20:26:15');
INSERT INTO `bill_detail` VALUES (27, 25, 7, 1, 160000, '2018-05-18 06:16:45', '2018-05-18 06:16:45');
INSERT INTO `bill_detail` VALUES (28, 26, 7, 1, 160000, '2018-05-18 07:18:11', '2018-05-18 07:18:11');

-- ----------------------------
-- Table structure for bill_states
-- ----------------------------
DROP TABLE IF EXISTS `bill_states`;
CREATE TABLE `bill_states`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of bill_states
-- ----------------------------
INSERT INTO `bill_states` VALUES (1, 'Đang xử lý', '2018-03-03 10:32:48', '2018-03-03 10:32:48');
INSERT INTO `bill_states` VALUES (2, 'Đang giao hàng', '2018-03-03 10:32:48', '2018-03-03 10:32:48');
INSERT INTO `bill_states` VALUES (3, 'Đã giao hàng', '2018-03-03 10:32:48', '2018-03-03 10:32:48');

-- ----------------------------
-- Table structure for bills
-- ----------------------------
DROP TABLE IF EXISTS `bills`;
CREATE TABLE `bills`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_customer` int(11) NOT NULL,
  `id_marker` int(11) NOT NULL,
  `id_state` int(11) NOT NULL DEFAULT 1,
  `date_order` date NULL DEFAULT NULL,
  `total` float NULL DEFAULT NULL,
  `payment` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `note` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `created_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk_bills_customers`(`id_customer`) USING BTREE,
  INDEX `fk_bills_markers`(`id_marker`) USING BTREE,
  INDEX `fk_bills_bill_states`(`id_state`) USING BTREE,
  CONSTRAINT `fk_bills_bill_states` FOREIGN KEY (`id_state`) REFERENCES `bill_states` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_bills_customers` FOREIGN KEY (`id_customer`) REFERENCES `customer` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_bills_markers` FOREIGN KEY (`id_marker`) REFERENCES `markers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 27 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of bills
-- ----------------------------
INSERT INTO `bills` VALUES (2, 2, 4, 3, '2018-03-15', 320000, 'ATM', 'Vui lòng chuyển đúng hạn', '2018-03-15 23:43:05', '2018-03-15 23:43:05');
INSERT INTO `bills` VALUES (3, 3, 2, 3, '2018-03-20', 160000, 'COD', 'Vui lòng chuyển đúng hạn', '2018-03-21 04:53:25', '2018-03-21 04:53:25');
INSERT INTO `bills` VALUES (6, 6, 2, 3, '2018-03-21', 120000, 'COD', 'Vui lòng chuyển đúng hạn', '2018-03-21 07:11:53', '2018-05-08 22:43:21');
INSERT INTO `bills` VALUES (7, 7, 4, 1, '2018-05-04', 160000, 'PAYPAL', 'Host mới', '2018-05-04 09:02:40', '2018-05-04 09:02:40');
INSERT INTO `bills` VALUES (8, 8, 3, 3, '2018-05-04', 120000, 'COD', 'á', '2018-05-04 15:52:36', '2018-05-08 22:43:33');
INSERT INTO `bills` VALUES (10, 10, 1, 3, '2018-05-05', 120000, 'COD', 'giao đúng hẹn', '2018-05-06 03:55:43', '2018-05-07 06:23:33');
INSERT INTO `bills` VALUES (11, 11, 1, 3, '2018-05-06', 120000, 'COD', 'giao nhanh', '2018-05-06 17:08:15', '2018-05-07 21:14:36');
INSERT INTO `bills` VALUES (12, 12, 3, 1, '2018-05-06', 120000, 'COD', 'giao  về tân bình', '2018-05-07 03:35:11', '2018-05-07 03:35:11');
INSERT INTO `bills` VALUES (13, 13, 1, 1, '2018-05-06', 320000, 'COD', '213', '2018-05-07 06:21:18', '2018-05-07 06:21:18');
INSERT INTO `bills` VALUES (14, 14, 1, 1, '2018-05-07', 280000, 'COD', '01692389739', '2018-05-07 21:11:51', '2018-05-07 21:11:51');
INSERT INTO `bills` VALUES (15, 15, 6, 1, '2018-05-08', 560000, 'COD', 'giao nhan', '2018-05-08 22:26:36', '2018-05-08 22:26:36');
INSERT INTO `bills` VALUES (16, 16, 2, 1, '2018-05-08', 500000, 'COD', 'giao nhanh', '2018-05-08 22:29:36', '2018-05-08 22:29:36');
INSERT INTO `bills` VALUES (17, 17, 3, 3, '2018-05-09', 280000, 'COD', '32', '2018-05-09 20:20:03', '2018-05-09 20:22:07');
INSERT INTO `bills` VALUES (18, 18, 3, 1, '2018-05-10', 480000, 'COD', 'ưqwq', '2018-05-10 17:10:44', '2018-05-10 17:10:44');
INSERT INTO `bills` VALUES (19, 19, 1, 1, '2018-05-12', 160000, 'COD', 'ưqw', '2018-05-13 05:39:30', '2018-05-13 05:39:30');
INSERT INTO `bills` VALUES (20, 20, 5, 1, '2018-05-15', 150000, 'COD', 'Giao hàng buổi tối', '2018-05-15 19:54:48', '2018-05-15 19:54:48');
INSERT INTO `bills` VALUES (21, 21, 5, 1, '2018-05-15', 280000, 'COD', 'Giao lẹ', '2018-05-15 19:59:20', '2018-05-15 19:59:20');
INSERT INTO `bills` VALUES (22, 22, 3, 1, '2018-05-15', 160000, 'COD', 'ưq', '2018-05-15 20:03:42', '2018-05-15 20:03:42');
INSERT INTO `bills` VALUES (23, 23, 1, 1, '2018-05-15', 280000, 'COD', 'Giao buổi tối', '2018-05-15 20:08:13', '2018-05-15 20:08:13');
INSERT INTO `bills` VALUES (24, 24, 3, 1, '2018-05-15', 280000, 'COD', 'Giao lẹ', '2018-05-15 20:26:15', '2018-05-15 20:26:15');
INSERT INTO `bills` VALUES (25, 25, 1, 1, '2018-05-17', 160000, 'COD', 'assa', '2018-05-18 06:16:45', '2018-05-18 06:16:45');
INSERT INTO `bills` VALUES (26, 26, 1, 1, '2018-05-18', 160000, 'COD', 'giao nhanh', '2018-05-18 07:18:11', '2018-05-18 07:18:11');

-- ----------------------------
-- Table structure for customer
-- ----------------------------
DROP TABLE IF EXISTS `customer`;
CREATE TABLE `customer`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `gender` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `address` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `phone_number` varchar(20) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `note` varchar(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `lat` float(10, 6) NOT NULL,
  `lng` float(10, 6) NOT NULL,
  `created_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 27 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of customer
-- ----------------------------
INSERT INTO `customer` VALUES (1, 'hieuanva', 'Nữ', 'hieuvan@gmail.com', 'Lê Thị Riêng, Quận 1', '234567890-', 'không chú', 0.000000, 0.000000, '2018-03-07 17:26:03', '2018-02-21 21:16:09');
INSERT INTO `customer` VALUES (2, 'Hiếu Văn', 'Nam', 'hieuvan@gmail.com', 'Lê thị riêng', '1234567890', 'Vui lòng chuyển đúng hạn', 0.000000, 0.000000, '2018-03-07 17:26:13', '2018-02-21 21:20:07');
INSERT INTO `customer` VALUES (3, 'Tân', 'Nữ', 'tannguyen@gmail.com', 'Lê Thị Riêng, Quận 1', '23456789', 'Vui lòng giao hàng trước 5h', 0.000000, 0.000000, '2018-03-07 17:26:19', '2018-02-21 21:29:31');
INSERT INTO `customer` VALUES (4, 'Hiếu Văn', 'Nam', 'huongnguyen@gmail.com', 'Lê thị riêng', '99999999999999999', 'k', 0.000000, 0.000000, '2018-03-07 17:26:28', '2018-02-23 18:46:05');
INSERT INTO `customer` VALUES (6, 'Hiếu Văn', 'Nam', '123123123@gmail.com', 'Bình Thạnh, Hồ Chí Minh, Việt Nam', '123123', '123123', 10.810583, 106.709145, '2018-03-15 23:38:14', '2018-03-15 23:38:14');
INSERT INTO `customer` VALUES (7, 'fakedy', 'nam', 'luvanhieu96@gmail.com', '169/72/85 Lê Thánh Tôn Nối Dài, Phường 22, Bình Thạnh, Hồ Chí Minh, Vietnam', '0934110397', 'Host mới', 10.794209, 106.715469, '2018-05-04 09:02:40', '2018-05-04 09:02:40');
INSERT INTO `customer` VALUES (8, 'Tan Nguyen', 'nam', 'tannguyenhoang18@gmail.com', '2 Trà Khúc, Phường 2, Tân Bình, Hồ Chí Minh, Việt Nam', '01692389739', 'á', 10.805745, 106.665901, '2018-05-04 15:52:36', '2018-05-04 15:52:36');
INSERT INTO `customer` VALUES (9, 'Hiếu', 'nam', 'luvanhieu96@gmail.com', '12 Nguyễn Văn Bảo, phường 4, Gò Vấp, Hồ Chí Minh, Việt Nam', '01692047938', 'Đặt mua', 10.822306, 106.687325, '2018-05-04 20:43:10', '2018-05-04 20:43:10');
INSERT INTO `customer` VALUES (10, 'tân gò vâp', 'nam', 'tannguyenhoang18@gmail.com', '89-93 Nguyễn Thái Sơn, phường 4, Gò Vấp, Hồ Chí Minh, Việt Nam', '01692389739', 'giao đúng hẹn', 10.821631, 106.684517, '2018-05-06 03:55:43', '2018-05-06 03:55:43');
INSERT INTO `customer` VALUES (11, 'Tân Test Gò Vấp', 'nam', 'tannguyenhoang18@gmail.com', '93 Nguyễn Thái Sơn, phường 4, Gò Vấp, Hồ Chí Minh, Việt Nam', '0091231', 'giao nhanh', 10.821737, 106.684494, '2018-05-06 17:08:15', '2018-05-06 17:08:15');
INSERT INTO `customer` VALUES (12, 'Tân tân bình', 'nam', 'tan@gmail.com', '12 Cộng Hòa, Phường 4, Tân Bình, Hồ Chí Minh, Việt Nam', '0164565456', 'giao  về tân bình', 10.801027, 106.661041, '2018-05-07 03:35:11', '2018-05-07 03:35:11');
INSERT INTO `customer` VALUES (13, 'tân', 'nam', 'tannguyrn@gmail.com', '89 Nguyễn Thái Sơn, phường 4, Gò Vấp, Hồ Chí Minh, Việt Nam', '213', '213', 10.821733, 106.684341, '2018-05-07 06:21:18', '2018-05-07 06:21:18');
INSERT INTO `customer` VALUES (14, 'sơn gò vấp', 'nam', 'son@gmail.com', 'Nhà E, Nhà E trường Đại Học Công Nghiệp, 4 Nguyễn Văn Bảo, phường 4, Gò Vấp, Hồ Chí Minh, Việt Nam', '83847387', '01692389739', 10.822390, 106.687508, '2018-05-07 21:11:51', '2018-05-07 21:11:51');
INSERT INTO `customer` VALUES (15, 'trương nguyễn ngọc châu', 'nam', 'tnngocchau1996@gmail.com', 'Nong Lam University Ho Chi Minh City, KP6, Linh Trung, Thủ Đức, Ho Chi Minh City, Vietnam', '0912', 'giao nhan', 10.871981, 106.792595, '2018-05-08 22:26:36', '2018-05-08 22:26:36');
INSERT INTO `customer` VALUES (16, 'ngọc', 'nam', 'abcde@gmail.com', 'Chợ Thủ Đức, Linh Tây, Thủ Đức, Ho Chi Minh City, Vietnam', '0968135', 'giao nhanh', 10.851198, 106.754280, '2018-05-08 22:29:36', '2018-05-08 22:29:36');
INSERT INTO `customer` VALUES (17, 'nguyễn văn a', 'nam', 'a@gmail.com', '2 Trà Khúc, Phường 2, Tân Bình, Hồ Chí Minh, Việt Nam', '353', '32', 10.805746, 106.665955, '2018-05-09 20:20:02', '2018-05-09 20:20:02');
INSERT INTO `customer` VALUES (18, 'tân', 'nam', 'tannguyenhoang18@gmail.com', '10 Phổ Quang, Phường 2, Tân Bình, Hồ Chí Minh, Việt Nam', '1692389739', 'ưqwq', 10.805648, 106.666000, '2018-05-10 17:10:44', '2018-05-10 17:10:44');
INSERT INTO `customer` VALUES (19, 'Tan Nguyen', 'nam', 'tannguyenhoang18@gmail.com', '77 Nguyễn Thái Sơn, Phường 4, Gò Vấp, Hồ Chí Minh, Việt Nam', '01692389739', 'ưqw', 10.821469, 106.684402, '2018-05-13 05:39:30', '2018-05-13 05:39:30');
INSERT INTO `customer` VALUES (20, 'Hiếu', 'nam', 'luvanhieu96@gmail.com', '11 Đường Nguyễn Duy, phường 8, Quận 8, Hồ Chí Minh, Việt Nam', '01692047938', 'Giao hàng buổi tối', 10.746903, 106.676292, '2018-05-15 19:54:48', '2018-05-15 19:54:48');
INSERT INTO `customer` VALUES (21, 'Hiếu', 'nam', 'luvanhieu96@gmail.com', '11 Đường Nguyễn Duy, phường 8, Quận 8, Hồ Chí Minh, Việt Nam', '01692047938', 'Giao lẹ', 10.746903, 106.676292, '2018-05-15 19:59:20', '2018-05-15 19:59:20');
INSERT INTO `customer` VALUES (22, 'tân', 'nam', 'tannguyenhoang18@gmail.com', '2 Trà Khúc, Phường 2, Tân Bình, Hồ Chí Minh, Việt Nam', '1692389739', 'ưq', 10.805695, 106.665977, '2018-05-15 20:03:42', '2018-05-15 20:03:42');
INSERT INTO `customer` VALUES (23, 'Hiếu', 'nam', 'luvanhieu96@gmail.com', '14 Nguyễn Văn Bảo, phường 4, Gò Vấp, Hồ Chí Minh, Việt Nam', '01692047938', 'Giao buổi tối', 10.823193, 106.686005, '2018-05-15 20:08:13', '2018-05-15 20:08:13');
INSERT INTO `customer` VALUES (24, 'Hiếu', 'nam', 'luvanhieu96@gmail.com', 'Vòng xoay Lăng Cha Cả, Phường 4, Tân Bình, Hồ Chí Minh, Việt Nam', '01692047938', 'Giao lẹ', 10.800357, 106.660774, '2018-05-15 20:26:15', '2018-05-15 20:26:15');
INSERT INTO `customer` VALUES (25, 'ass', 'nam', 'a@gmail.com', '89 Nguyễn Thái Sơn, Gò Vấp, Ho Chi Minh City, Vietnam', 'sas', 'assa', 10.821733, 106.684341, '2018-05-18 06:16:45', '2018-05-18 06:16:45');
INSERT INTO `customer` VALUES (26, 'Tan Nguyen', 'nam', 'tannguyenhoang18@gmail.com', '93 Nguyễn Thái Sơn, phường 4, Gò Vấp, Hồ Chí Minh, Việt Nam', '01692389739', 'giao nhanh', 10.821673, 106.684547, '2018-05-18 07:18:11', '2018-05-18 07:18:11');

-- ----------------------------
-- Table structure for districts
-- ----------------------------
DROP TABLE IF EXISTS `districts`;
CREATE TABLE `districts`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `id_region` int(11) NOT NULL,
  `id_province` int(11) NOT NULL,
  `created_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk_districts_id_region_regions`(`id_region`) USING BTREE,
  INDEX `fk_districts_id_province_provinces`(`id_province`) USING BTREE,
  CONSTRAINT `fk_districts_id_province_provinces` FOREIGN KEY (`id_province`) REFERENCES `provinces` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_districts_id_region_regions` FOREIGN KEY (`id_region`) REFERENCES `regions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 58 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of districts
-- ----------------------------
INSERT INTO `districts` VALUES (1, 'Quận 1', 3, 3, '2018-03-15 23:38:14', '2018-03-15 23:38:14');
INSERT INTO `districts` VALUES (2, 'Quận 2', 3, 3, '2018-03-15 23:38:14', '2018-03-15 23:38:14');
INSERT INTO `districts` VALUES (3, 'Quận 3', 3, 3, '2018-03-15 23:38:14', '2018-03-15 23:38:14');
INSERT INTO `districts` VALUES (4, 'Quận 4', 3, 3, '2018-03-15 23:38:14', '2018-03-15 23:38:14');
INSERT INTO `districts` VALUES (5, 'Quận 5', 3, 3, '2018-03-15 23:38:14', '2018-03-15 23:38:14');
INSERT INTO `districts` VALUES (6, 'Quận 6', 3, 3, '2018-03-15 23:38:14', '2018-03-15 23:38:14');
INSERT INTO `districts` VALUES (7, 'Quận 7', 3, 3, '2018-03-15 23:38:14', '2018-03-15 23:38:14');
INSERT INTO `districts` VALUES (8, 'Quận 8', 3, 3, '2018-03-15 23:38:14', '2018-03-15 23:38:14');
INSERT INTO `districts` VALUES (9, 'Quận 9', 3, 3, '2018-03-15 23:38:14', '2018-03-15 23:38:14');
INSERT INTO `districts` VALUES (10, 'Quận 10', 3, 3, '2018-03-15 23:38:14', '2018-03-15 23:38:14');
INSERT INTO `districts` VALUES (11, 'Quận 11', 3, 3, '2018-03-15 23:38:14', '2018-03-15 23:38:14');
INSERT INTO `districts` VALUES (12, 'Quận 12', 3, 3, '2018-03-15 23:38:14', '2018-03-15 23:38:14');
INSERT INTO `districts` VALUES (13, 'Quận Bình Thạnh', 3, 3, '2018-03-15 23:38:14', '2018-03-15 23:38:14');
INSERT INTO `districts` VALUES (14, 'Quận Tân Bình', 3, 3, '2018-03-15 23:38:14', '2018-03-15 23:38:14');
INSERT INTO `districts` VALUES (15, 'Quận Gò Vấp', 3, 3, '2018-03-15 23:38:14', '2018-03-15 23:38:14');
INSERT INTO `districts` VALUES (16, 'Quận Thủ Đức', 3, 3, '2018-03-15 23:38:14', '2018-03-15 23:38:14');
INSERT INTO `districts` VALUES (17, 'Quận Tân Phú', 3, 3, '2018-03-15 23:38:14', '2018-03-15 23:38:14');
INSERT INTO `districts` VALUES (18, 'Quận Bình Tân', 3, 3, '2018-03-15 23:38:14', '2018-03-15 23:38:14');
INSERT INTO `districts` VALUES (19, 'Quận Bình Chánh', 3, 3, '2018-03-15 23:38:14', '2018-03-15 23:38:14');
INSERT INTO `districts` VALUES (20, 'Cần Giờ', 3, 3, '2018-03-15 23:38:14', '2018-03-15 23:38:14');
INSERT INTO `districts` VALUES (21, 'Hóc Môn', 3, 3, '2018-03-15 23:38:14', '2018-03-15 23:38:14');
INSERT INTO `districts` VALUES (22, 'Củ Chi', 3, 3, '2018-03-15 23:38:14', '2018-03-15 23:38:14');
INSERT INTO `districts` VALUES (23, 'Hai Bà Trưng', 1, 1, '2018-05-04 10:42:23', '2018-05-04 10:42:23');
INSERT INTO `districts` VALUES (24, 'Hải Châu', 2, 2, '2018-05-04 10:43:37', '2018-05-04 10:43:37');
INSERT INTO `districts` VALUES (25, 'Thanh Khê', 2, 2, '2018-05-04 10:43:40', '2018-05-04 10:43:40');
INSERT INTO `districts` VALUES (26, 'Sơn Trà', 2, 2, '2018-05-04 10:43:48', '2018-05-04 10:43:48');
INSERT INTO `districts` VALUES (27, 'Ngũ Hành Sơn', 2, 2, '2018-05-04 10:44:47', '2018-05-04 10:44:47');
INSERT INTO `districts` VALUES (28, 'Liên Chiểu', 2, 2, '2018-05-04 10:44:56', '2018-05-04 10:44:56');
INSERT INTO `districts` VALUES (29, 'Hòa Vang', 2, 2, '2018-05-04 10:45:05', '2018-05-04 10:45:05');
INSERT INTO `districts` VALUES (30, 'Cẩm Lệ', 2, 2, '2018-05-04 10:45:14', '2018-05-04 10:45:14');
INSERT INTO `districts` VALUES (31, 'Hoàng Sa', 2, 2, '2018-05-04 10:45:25', '2018-05-04 10:45:25');
INSERT INTO `districts` VALUES (32, 'Ba Đình', 1, 1, '2018-05-04 10:46:31', '2018-05-04 10:46:31');
INSERT INTO `districts` VALUES (33, 'Hoàn Kiếm', 1, 1, '2018-05-04 10:46:38', '2018-05-04 10:46:38');
INSERT INTO `districts` VALUES (34, 'Đống Đa', 1, 1, '2018-05-04 10:46:47', '2018-05-04 10:46:47');
INSERT INTO `districts` VALUES (35, 'Tây Hồ', 1, 1, '2018-05-04 10:46:52', '2018-05-04 10:46:52');
INSERT INTO `districts` VALUES (36, 'Cầu Giấy', 1, 1, '2018-05-04 10:46:58', '2018-05-04 10:46:58');
INSERT INTO `districts` VALUES (37, 'Thanh Xuân', 1, 1, '2018-05-04 10:47:06', '2018-05-04 10:47:06');
INSERT INTO `districts` VALUES (38, 'Hoàng Mai', 1, 1, '2018-05-04 10:47:13', '2018-05-04 10:47:13');
INSERT INTO `districts` VALUES (39, 'Long Biên', 1, 1, '2018-05-04 10:47:20', '2018-05-04 10:47:20');
INSERT INTO `districts` VALUES (40, 'Từ Liêm', 1, 1, '2018-05-04 10:47:23', '2018-05-04 10:47:23');
INSERT INTO `districts` VALUES (41, 'Thanh Trì', 1, 1, '2018-05-04 10:47:28', '2018-05-04 10:47:28');
INSERT INTO `districts` VALUES (42, 'Gia Lâm', 1, 1, '2018-05-04 10:47:34', '2018-05-04 10:47:34');
INSERT INTO `districts` VALUES (43, 'Đông Anh', 1, 1, '2018-05-04 10:47:39', '2018-05-04 10:47:39');
INSERT INTO `districts` VALUES (44, 'Sóc Sơn', 1, 1, '2018-05-04 10:47:56', '2018-05-04 10:47:56');
INSERT INTO `districts` VALUES (45, 'Hà Đông', 1, 1, '2018-05-04 10:48:03', '2018-05-04 10:48:03');
INSERT INTO `districts` VALUES (46, 'Sơn Tây', 1, 1, '2018-05-04 10:48:07', '2018-05-04 10:48:07');
INSERT INTO `districts` VALUES (47, 'Ba Vì', 1, 1, '2018-05-04 10:48:14', '2018-05-04 10:48:14');
INSERT INTO `districts` VALUES (48, 'Phúc Thọ', 1, 1, '2018-05-04 10:48:19', '2018-05-04 10:48:19');
INSERT INTO `districts` VALUES (49, 'Thạch Thất', 1, 1, '2018-05-04 10:48:29', '2018-05-04 10:48:29');
INSERT INTO `districts` VALUES (50, 'Quốc Oai', 1, 1, '2018-05-04 10:48:34', '2018-05-04 10:48:34');
INSERT INTO `districts` VALUES (51, 'Mỹ Đức', 1, 1, '2018-05-04 10:48:41', '2018-05-04 10:48:41');
INSERT INTO `districts` VALUES (52, 'Ứng Hòa', 1, 1, '2018-05-04 10:48:47', '2018-05-04 10:48:47');
INSERT INTO `districts` VALUES (53, 'Thường Tín', 1, 1, '2018-05-04 10:48:51', '2018-05-04 10:48:51');
INSERT INTO `districts` VALUES (54, 'Phú Xuyên', 1, 1, '2018-05-04 10:48:59', '2018-05-04 10:48:59');
INSERT INTO `districts` VALUES (55, 'Mê Linh', 1, 1, '2018-05-04 10:49:04', '2018-05-04 10:49:04');
INSERT INTO `districts` VALUES (56, 'Phú Nhuận', 3, 3, '2018-05-04 10:53:32', '2018-05-04 10:53:32');
INSERT INTO `districts` VALUES (57, 'Nhà Bè', 3, 3, '2018-05-04 11:00:41', '2018-05-04 11:00:41');

-- ----------------------------
-- Table structure for markers
-- ----------------------------
DROP TABLE IF EXISTS `markers`;
CREATE TABLE `markers`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `id_region` int(11) NOT NULL,
  `id_province` int(11) NOT NULL,
  `id_district` int(11) NOT NULL,
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `phone` int(11) NOT NULL,
  `lat` float(10, 6) NOT NULL,
  `lng` float(10, 6) NOT NULL,
  `created_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk_markers_id_region_regions`(`id_region`) USING BTREE,
  INDEX `fk_markers_id_province_provinces`(`id_province`) USING BTREE,
  INDEX `fk_markers_id_district_districts`(`id_district`) USING BTREE,
  CONSTRAINT `fk_markers_id_district_districts` FOREIGN KEY (`id_district`) REFERENCES `districts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_markers_id_province_provinces` FOREIGN KEY (`id_province`) REFERENCES `provinces` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_markers_id_region_regions` FOREIGN KEY (`id_region`) REFERENCES `regions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of markers
-- ----------------------------
INSERT INTO `markers` VALUES (1, 'Chi Nhánh Gò Vấp', 3, 3, 15, '21 Lê Lợi, Phường 3, Gò Vấp, Hồ Chí Minh, Việt Nam', 934110397, 10.820472, 106.685928, '2018-03-15 23:38:14', '2018-05-04 04:39:46');
INSERT INTO `markers` VALUES (2, 'Chi Nhánh Chợ Thủ Đức', 3, 3, 16, 'Võ Văn Ngân, Linh Tây, Thủ Đức, Hồ Chí Minh, Việt Nam', 934110397, 10.850966, 106.754807, '2018-03-15 23:38:14', '2018-05-04 04:39:49');
INSERT INTO `markers` VALUES (3, 'Chi Nhánh Tân Bình', 3, 3, 14, '29 Cộng Hòa, Phường 4, Tân Bình, Hồ Chí Minh, Việt Nam', 934110397, 10.800809, 106.656769, '2018-03-15 23:38:14', '2018-05-04 04:39:53');
INSERT INTO `markers` VALUES (4, 'Chi Nhánh Bình Thạnh', 3, 3, 13, 'Xô Viết Nghệ Tĩnh, phường 21, Bình Thạnh, Hồ Chí Minh, Việt Nam', 934110397, 10.799813, 106.711098, '2018-03-15 23:38:14', '2018-05-04 04:39:55');
INSERT INTO `markers` VALUES (5, 'Chi Nhánh Quận 11', 3, 3, 11, 'Lạc Long Quân, Quận 11, Hồ Chí Minh, Việt Nam', 934110397, 10.758812, 106.639130, '2018-03-15 23:38:14', '2018-05-04 04:39:58');
INSERT INTO `markers` VALUES (6, 'Chi Nhánh Quận 9', 3, 3, 19, 'q9 Lê Văn Việt, Hiệp Phú, Quận 9, Hồ Chí Minh, Việt Nam', 934110397, 10.848572, 106.782692, '2018-03-15 23:38:14', '2018-05-04 04:40:00');
INSERT INTO `markers` VALUES (7, 'Chi Nhánh Hai Bà Trưng', 1, 1, 23, 'Hai Ba Trung Lake, Đồng Xuân, Hai Bà Trưng District, Hanoi, Vietnam', 934110397, 21.012150, 105.856369, '2018-05-04 11:36:18', '2018-05-04 11:36:18');
INSERT INTO `markers` VALUES (8, 'Chi Nhánh Tân Phú', 3, 3, 17, '23 Văn Cao, Phú Thạnh, Tân Phú, Hồ Chí Minh, Việt Nam', 193334234, 10.783280, 106.620972, '2018-05-05 16:58:24', '2018-05-05 16:58:24');

-- ----------------------------
-- Table structure for new_detail
-- ----------------------------
DROP TABLE IF EXISTS `new_detail`;
CREATE TABLE `new_detail`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_new` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `created_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk_news_new_detail`(`id_new`) USING BTREE,
  INDEX `fk_news_products`(`id_product`) USING BTREE,
  CONSTRAINT `fk_news_new_detail` FOREIGN KEY (`id_new`) REFERENCES `news` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_news_products` FOREIGN KEY (`id_product`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of new_detail
-- ----------------------------
INSERT INTO `new_detail` VALUES (1, 1, 42, '2018-03-03 10:32:48', '2018-03-03 10:32:48');
INSERT INTO `new_detail` VALUES (2, 1, 43, '2018-03-03 10:32:48', '2018-03-03 10:32:48');
INSERT INTO `new_detail` VALUES (3, 1, 44, '2018-03-03 10:32:48', '2018-03-03 10:32:48');
INSERT INTO `new_detail` VALUES (4, 1, 45, '2018-03-03 10:32:48', '2018-03-03 10:32:48');
INSERT INTO `new_detail` VALUES (5, 2, 59, '2018-05-05 16:55:13', '2018-05-05 16:55:13');
INSERT INTO `new_detail` VALUES (6, 2, 21, '2018-05-05 16:55:13', '2018-05-05 16:55:13');
INSERT INTO `new_detail` VALUES (7, 2, 22, '2018-05-05 16:55:13', '2018-05-05 16:55:13');
INSERT INTO `new_detail` VALUES (8, 2, 21, '2018-05-05 16:55:13', '2018-05-05 16:55:13');
INSERT INTO `new_detail` VALUES (9, 3, 4, '2018-05-18 07:17:37', '2018-05-18 07:17:37');
INSERT INTO `new_detail` VALUES (10, 3, 23, '2018-05-18 07:17:37', '2018-05-18 07:17:37');
INSERT INTO `new_detail` VALUES (11, 3, 18, '2018-05-18 07:17:37', '2018-05-18 07:17:37');
INSERT INTO `new_detail` VALUES (12, 3, 19, '2018-05-18 07:17:37', '2018-05-18 07:17:37');

-- ----------------------------
-- Table structure for news
-- ----------------------------
DROP TABLE IF EXISTS `news`;
CREATE TABLE `news`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `description` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL,
  `date_offer` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP,
  `created_at` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of news
-- ----------------------------
INSERT INTO `news` VALUES (1, 'WOW COMBO MÁT LẠNH', 'Ăn những món này sẽ giúp cơ thể bạn mát hơn trong những ngày nắng nóng', '2018-04-15 07:00:00', '2018-03-03 10:32:48', '2018-03-03 10:32:48');
INSERT INTO `news` VALUES (2, 'Món ngon mỗi này', 'ngon bổ rẻ', '2018-05-05 07:00:00', '2018-05-05 16:55:13', '2018-05-05 16:55:13');
INSERT INTO `news` VALUES (3, 'Món ngon mỗi này', 'ngon bổ rẻ đến ngay nào', '2018-05-18 07:00:00', '2018-05-18 07:17:37', '2018-05-18 07:17:37');

-- ----------------------------
-- Table structure for product_images
-- ----------------------------
DROP TABLE IF EXISTS `product_images`;
CREATE TABLE `product_images`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_product` int(11) NOT NULL,
  `new` int(11) NULL DEFAULT NULL,
  `image` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `created_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk_products_product_images`(`id_product`) USING BTREE,
  CONSTRAINT `fk_products_product_images` FOREIGN KEY (`id_product`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of product_images
-- ----------------------------
INSERT INTO `product_images` VALUES (1, 62, 1, '1520022767_0.png', '2018-03-03 10:32:48', '2018-03-03 10:32:48');

-- ----------------------------
-- Table structure for products
-- ----------------------------
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `id_type` int(11) NOT NULL,
  `description` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL,
  `unit_price` float NULL DEFAULT 0,
  `promotion_price` float NULL DEFAULT 0,
  `image` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `unit` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `new` tinyint(4) NULL DEFAULT 0,
  `slug` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `view` int(11) NULL DEFAULT 0,
  `last_visited` timestamp(0) NULL DEFAULT NULL,
  `created_at` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `products_id_type_foreign`(`id_type`) USING BTREE,
  CONSTRAINT `products_id_type_foreign` FOREIGN KEY (`id_type`) REFERENCES `type_products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 63 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of products
-- ----------------------------
INSERT INTO `products` VALUES (4, 'Bánh Crepe Đào', 5, '<p style=\"text-align: justify;\"><span style=\"color: rgb(227, 55, 55);\">- Phần vỏ bánh:&nbsp;1 trứng gà; 85 gr bột mì, 240 ml sữa tươi không đường, 20 gr đường, 15 gr bơ hâm chảy</span></p><p style=\"text-align: justify;\"><span style=\"color: rgb(227, 55, 55);\">- 2 trái đào, gọt vỏ, thái miếng</span></p><p style=\"text-align: justify;\"><span style=\"color: rgb(227, 55, 55);\">- Phần kem:&nbsp;100 gr kem whipping và 15 gr đường</span></p>', 160000, 0, 'crepe-dao.jpg', 'hộp', 0, 'banh-crepe-dao-4', 3, '2018-03-03 11:04:56', '2017-12-26 17:00:16', '2018-05-09 20:11:41');
INSERT INTO `products` VALUES (5, 'Bánh Crepe Dâu', 5, '', 160000, 0, 'crepedau.jpg', 'hộp', 0, 'banh-crepe-dau', 3, '2018-03-03 11:04:56', '2017-12-26 17:00:16', '2016-10-25 12:11:00');
INSERT INTO `products` VALUES (6, 'Bánh Crepe Pháp', 5, '', 200000, 180000, 'crepe-phap.jpg', 'hộp', 0, 'banh-crepe-phap', 3, '2018-03-03 11:04:56', '2017-12-26 17:00:16', '2016-10-25 12:11:00');
INSERT INTO `products` VALUES (7, 'Bánh Crepe Táo', 5, '<p><span style=\"color: rgb(226, 139, 65);\">–&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 200g bột mì</span></p><p><span style=\"color: rgb(226, 139, 65);\">–&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 250ml sữa tươi không đường</span></p><p><span style=\"color: rgb(226, 139, 65);\">–&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 125ml nước lọc.</span></p><p><span style=\"color: rgb(226, 139, 65);\">–&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 120g đường</span></p><p><span style=\"color: rgb(226, 139, 65);\">–&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2 quả trứng gà</span></p><p><span style=\"color: rgb(226, 139, 65);\">–&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6 quả táo</span></p><p><span style=\"color: rgb(226, 139, 65);\">–&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ½ quả chanh.</span></p><p><span style=\"color: rgb(226, 139, 65);\">–&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2 thìa bơ</span></p><p><span style=\"color: rgb(226, 139, 65);\">–&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1 chén bột ca cao</span></p><p><span style=\"color: rgb(226, 139, 65);\">–&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1 cốc sữa chua.</span></p>', 160000, 0, 'crepe-tao.jpg', 'hộp', 1, 'banh-crepe-tao-7', 3, '2018-03-03 11:04:56', '2017-12-26 17:00:16', '2018-05-09 20:16:53');
INSERT INTO `products` VALUES (8, 'Bánh Crepe Trà xanh', 5, '', 160000, 150000, 'crepe-traxanh.jpg', 'hộp', 0, 'banh-crepe-tra-xanh', 3, '2018-03-03 11:04:56', '2016-10-26 17:00:16', '2016-10-25 12:11:00');
INSERT INTO `products` VALUES (9, 'Bánh Crepe Sầu riêng và Dứa', 5, '', 160000, 150000, 'saurieng-dua.jpg', 'hộp', 0, 'banh-crepe-sau-rieng-va-dua', 3, '2018-03-03 11:04:56', '2016-10-26 17:00:16', '2016-10-25 12:11:00');
INSERT INTO `products` VALUES (12, 'Bánh sinh nhật rau câu trái cây', 3, '', 200000, 180000, '210215-banh-sinh-nhat-rau-cau-body- (6).jpg', 'cái', 0, 'banh-sinh-nhat-rau-cau-trai-cay', 3, '2018-03-03 11:04:56', '2016-10-12 16:00:00', '2016-10-27 16:24:00');
INSERT INTO `products` VALUES (13, 'Bánh kem Chocolate Dâu', 3, '', 300000, 280000, 'banh kem sinh nhat.jpg', 'cái', 1, 'banh-kem-chocolate-dau', 3, '2018-03-03 11:04:56', '2016-10-12 16:00:00', '2016-10-27 16:24:00');
INSERT INTO `products` VALUES (14, 'Bánh kem Dâu III', 3, '', 300000, 280000, 'Banh-kem (6).jpg', 'cái', 0, 'banh-kem-dau-iii', 3, '2018-03-03 11:04:56', '2016-10-12 16:00:00', '2016-10-27 16:24:00');
INSERT INTO `products` VALUES (15, 'Bánh kem Dâu I', 3, '', 350000, 320000, 'banhkem-dau.jpg', 'cái', 1, 'banh-kem-dau-i', 3, '2018-03-03 11:04:56', '2016-10-12 16:00:00', '2016-10-27 16:24:00');
INSERT INTO `products` VALUES (16, 'Bánh trái cây II', 3, '', 150000, 120000, 'banhtraicay.jpg', 'hộp', 0, 'banh-trai-cay-ii', 3, '2018-03-03 11:04:56', '2016-10-12 16:00:00', '2016-10-27 16:24:00');
INSERT INTO `products` VALUES (17, 'Apple Cake', 3, '', 250000, 240000, 'Fruit-Cake_7979.jpg', 'cai', 0, 'apple-cake', 3, '2018-03-03 11:04:56', '2016-10-12 16:00:00', '2016-10-27 16:24:00');
INSERT INTO `products` VALUES (18, 'Bánh ngọt nhân cream táo', 2, '', 180000, 0, '20131108144733.jpg', 'hộp', 0, 'banh-ngot-nhan-cream-tao', 3, '2018-03-03 11:04:56', '2016-10-13 16:20:00', '2016-10-19 17:20:00');
INSERT INTO `products` VALUES (19, 'Bánh Chocolate Trái cây', 2, '', 150000, 0, 'Fruit-Cake_7981.jpg', 'hộp', 1, 'banh-chocolate-trai-cay', 3, '2018-03-03 11:04:56', '2016-10-13 16:20:00', '2016-10-19 17:20:00');
INSERT INTO `products` VALUES (20, 'Bánh Chocolate Trái cây II', 2, '', 150000, 0, 'Fruit-Cake_7981.jpg', 'hộp', 0, 'banh-chocolate-trai-cay-ii', 3, '2018-03-03 11:04:56', '2016-10-13 16:20:00', '2016-10-19 17:20:00');
INSERT INTO `products` VALUES (21, 'Peach Cake', 2, '', 160000, 150000, 'Peach-Cake_3294.jpg', 'cái', 0, 'peach-cake', 3, '2018-03-03 11:04:56', '2016-10-13 16:20:00', '2016-10-19 17:20:00');
INSERT INTO `products` VALUES (22, 'Bánh bông lan trứng muối I', 1, '', 160000, 150000, 'banhbonglantrung.jpg', 'hộp', 1, 'banh-bong-lan-trung-muoi-i', 3, '2018-03-03 11:04:56', '2016-10-13 16:20:00', '2016-10-19 17:20:00');
INSERT INTO `products` VALUES (23, 'Bánh bông lan trứng muối II', 1, '', 180000, 0, 'banhbonglantrungmuoi.jpg', 'hộp', 0, 'banh-bong-lan-trung-muoi-ii', 3, '2018-03-03 11:04:56', '2016-10-13 16:20:00', '2016-10-19 17:20:00');
INSERT INTO `products` VALUES (24, 'Bánh French', 1, '', 180000, 0, 'banh-man-thu-vi-nhat-1.jpg', 'hộp', 0, 'banh-french', 3, '2018-03-03 11:04:56', '2016-10-13 16:20:00', '2016-10-19 17:20:00');
INSERT INTO `products` VALUES (25, 'Bánh mì Australia', 1, '', 80000, 70000, 'dung-khoai-tay-lam-banh-gato-man-cuc-ngon.jpg', 'hộp', 0, 'banh-mi-australia', 3, '2018-03-03 11:04:56', '2016-10-13 16:20:00', '2016-10-19 17:20:00');
INSERT INTO `products` VALUES (26, 'Bánh mặn thập cẩm', 1, '', 50000, 0, 'Fruit-Cake.png', 'hộp', 0, 'banh-man-thap-cam', 3, '2018-03-03 11:04:56', '2016-10-13 16:20:00', '2016-10-19 17:20:00');
INSERT INTO `products` VALUES (27, 'Bánh Muffins trứng', 1, '', 100000, 80000, 'maxresdefault.jpg', 'hộp', 0, 'banh-muffins-trung', 3, '2018-03-03 11:04:56', '2016-10-13 16:20:00', '2016-10-19 17:20:00');
INSERT INTO `products` VALUES (28, 'Bánh Scone Peach Cake', 1, '', 120000, 0, 'Peach-Cake_3300.jpg', 'hộp', 1, 'banh-scone-peach-cake', 3, '2018-03-03 11:04:56', '2016-10-13 16:20:00', '2016-10-19 17:20:00');
INSERT INTO `products` VALUES (29, 'Bánh mì Loaf I', 1, '', 100000, 0, 'sli12.jpg', 'hộp', 0, 'banh-mi-loaf-i', 3, '2018-03-03 11:04:56', '2016-10-13 16:20:00', '2016-10-19 17:20:00');
INSERT INTO `products` VALUES (30, 'Bánh kem Chocolate Dâu I', 4, '', 380000, 350000, 'sli12.jpg', 'cái', 1, 'banh-kem-chocolate-dau', 3, '2018-03-03 11:04:56', '2016-10-13 16:20:00', '2016-10-19 17:20:00');
INSERT INTO `products` VALUES (31, 'Bánh kem Trái cây I', 4, '', 380000, 350000, 'Fruit-Cake.jpg', 'cái', 0, 'banh-kem-trai-cay-i', 3, '2018-03-03 11:04:56', '2016-10-13 16:20:00', '2016-10-19 17:20:00');
INSERT INTO `products` VALUES (32, 'Bánh kem Trái cây II', 4, '', 380000, 350000, 'Fruit-Cake_7971.jpg', 'cái', 0, 'banh-kem-trai-cay-i', 3, '2018-03-03 11:04:56', '2016-10-13 16:20:00', '2016-10-19 17:20:00');
INSERT INTO `products` VALUES (33, 'Bánh kem Doraemon', 4, '', 280000, 250000, 'p1392962167_banh74.jpg', 'cái', 1, 'banh-kem-doremon', 3, '2018-03-03 11:04:56', '2016-10-13 16:20:00', '2016-10-19 17:20:00');
INSERT INTO `products` VALUES (34, 'Bánh kem Caramen Pudding', 4, '', 280000, 0, 'Caramen-pudding636099031482099583.jpg', 'cái', 1, 'banh-kem-caramen-pudding', 3, '2018-03-03 11:04:56', '2016-10-13 16:20:00', '2016-10-19 17:20:00');
INSERT INTO `products` VALUES (35, 'Bánh kem Chocolate Fruit', 4, '', 320000, 300000, 'chocolate-fruit636098975917921990.jpg', 'cái', 1, 'banh-kem-chocolate-fruit', 3, '2018-03-03 11:04:56', '2016-10-13 16:20:00', '2016-10-19 17:20:00');
INSERT INTO `products` VALUES (36, 'Bánh kem Coffee Chocolate GH6', 4, '', 320000, 300000, 'COFFE-CHOCOLATE636098977566220885.jpg', 'cái', 0, 'banh-kem-coffee-chocolate', 3, '2018-03-03 11:04:56', '2016-10-13 16:20:00', '2016-10-19 17:20:00');
INSERT INTO `products` VALUES (37, 'Bánh kem Mango Mouse', 4, '', 320000, 300000, 'mango-mousse-cake.jpg', 'cái', 1, 'banh-kem-mango-mouse', 3, '2018-03-03 11:04:56', '2016-10-13 16:20:00', '2016-10-19 17:20:00');
INSERT INTO `products` VALUES (38, 'Bánh kem Matcha Mouse', 4, '', 350000, 330000, 'MATCHA-MOUSSE.jpg', 'cái', 0, 'banh-kem-matcha-mouse', 3, '2018-03-03 11:04:56', '2016-10-13 16:20:00', '2016-10-19 17:20:00');
INSERT INTO `products` VALUES (39, 'Bánh kem Flower Fruit', 4, '', 350000, 330000, 'flower-fruits636102461981788938.jpg', 'cái', 0, 'banh-kem-flower-fruit', 3, '2018-03-03 11:04:56', '2016-10-13 16:20:00', '2016-10-19 17:20:00');
INSERT INTO `products` VALUES (40, 'Bánh kem Strawberry Delight', 4, '', 350000, 330000, 'strawberry-delight636102445035635173.jpg', 'cái', 0, 'banh-kem-strawberry-delight', 3, '2018-03-03 11:04:56', '2016-10-13 16:20:00', '2016-10-19 17:20:00');
INSERT INTO `products` VALUES (41, 'Bánh kem Raspberry Delight', 4, '', 350000, 330000, 'raspberry.jpg', 'cái', 0, 'banh-kem-raspberry-delight', 3, '2018-03-03 11:04:56', '2016-10-13 16:20:00', '2016-10-19 17:20:00');
INSERT INTO `products` VALUES (42, 'Beefy Pizza', 6, 'Thịt bò xay, ngô, sốt BBQ, phô mai mozzarella', 150000, 130000, '40819_food_pizza.jpg', 'cái', 0, 'beefy-pizza', 3, '2018-03-03 11:04:56', '2016-10-13 16:20:00', '2016-10-19 17:20:00');
INSERT INTO `products` VALUES (43, 'Hawaii Pizza', 6, 'Sốt cà chua, ham , dứa, pho mai mozzarella', 120000, 0, 'hawaiian paradise_large-900x900.jpg', 'cái', 1, 'hawaii-pizza', 3, '2018-03-03 11:04:56', '2016-10-13 16:20:00', '2016-10-19 17:20:00');
INSERT INTO `products` VALUES (44, 'Smoke Chicken Pizza', 6, 'Gà hun khói,nấm, sốt cà chua, pho mai mozzarella.', 120000, 0, 'chicken black pepper_large-900x900.jpg', 'cái', 0, 'smoke-chicken-pizza', 3, '2018-03-03 11:04:56', '2016-10-13 16:20:00', '2016-10-19 17:20:00');
INSERT INTO `products` VALUES (45, 'Sausage Pizza', 6, 'Xúc xích klobasa, Nấm, Ngô, sốtcà chua, pho mai Mozzarella.', 120000, 0, 'pizza-miami.jpg', 'cái', 0, 'sausage-pizza', 3, '2018-03-03 11:04:56', '2016-10-13 16:20:00', '2016-10-19 17:20:00');
INSERT INTO `products` VALUES (46, 'Ocean Pizza', 6, 'Tôm , mực, xào cay,ớt xanh, hành tây, cà chua, phomai mozzarella.', 120000, 0, 'seafood curry_large-900x900.jpg', 'cái', 0, 'ocean-pizza', 3, '2018-03-03 11:04:56', '2016-10-13 16:20:00', '2016-10-19 17:20:00');
INSERT INTO `products` VALUES (47, 'All Meaty Pizza', 6, 'Ham, bacon, chorizo, pho mai mozzarella.', 140000, 0, 'all1).jpg', 'cái', 0, 'all-meaty-pizza', 3, '2018-03-03 11:04:56', '2016-10-13 16:20:00', '2016-10-19 17:20:00');
INSERT INTO `products` VALUES (48, 'Tuna Pizza', 6, 'Cá Ngừ, sốt Mayonnaise,sốt càchua, hành tây, pho mai Mozzarella', 140000, 0, '54eaf93713081_-_07-germany-tuna.jpg', 'cái', 0, 'tuna-pizza', 3, '2018-03-03 11:04:56', '2016-10-13 16:20:00', '2016-10-19 17:20:00');
INSERT INTO `products` VALUES (49, 'Bánh su kem nhân dừa', 7, '', 120000, 100000, 'maxresdefault.jpg', 'cái', 0, 'banh-su-kem-nhan-dua', 3, '2018-03-03 11:04:56', '2016-10-13 16:20:00', '2016-10-19 17:20:00');
INSERT INTO `products` VALUES (50, 'Bánh su kem sữa tươi', 7, '', 120000, 100000, 'sukem.jpg', 'cái', 0, 'banh-su-kem-sua-tuoi', 3, '2018-03-03 11:04:56', '2016-10-13 16:20:00', '2016-10-19 17:20:00');
INSERT INTO `products` VALUES (51, 'Bánh su kem sữa tươi chiên giòn', 7, '', 150000, 0, '1434429117-banh-su-kem-chien-20.jpg', 'hộp', 0, 'banh-su-kem-sua-tuoi-chien-gion', 3, '2018-03-03 11:04:56', '2016-10-13 16:20:00', '2016-10-19 17:20:00');
INSERT INTO `products` VALUES (52, 'Bánh su kem dâu sữa tươi', 7, '', 150000, 0, 'sukemdau.jpg', 'hộp', 0, 'banh-su-kem-dau-sua-tuoi', 3, '2018-03-03 11:04:56', '2016-10-13 16:20:00', '2016-10-19 17:20:00');
INSERT INTO `products` VALUES (53, 'Bánh su kem bơ sữa tươi', 7, '', 150000, 0, 'He-Thong-Banh-Su-Singapore-Chewy-Junior.jpg', 'hộp', 0, 'banh-su-kem-bo-sua-tuoi', 3, '2018-03-03 11:04:56', '2016-10-13 16:20:00', '2016-10-19 17:20:00');
INSERT INTO `products` VALUES (54, 'Bánh su kem nhân trái cây sữa tươi', 7, '', 150000, 0, 'foody-banh-su-que-635930347896369908.jpg', 'hộp', 1, 'banh-su-kem-nhan-trai-cay-sua-tuoi', 3, '2018-03-03 11:04:56', '2016-10-13 16:20:00', '2016-10-19 17:20:00');
INSERT INTO `products` VALUES (55, 'Bánh su kem cà phê', 7, '', 150000, 0, 'banh-su-kem-ca-phe-1.jpg', 'hộp', 0, 'banh-su-kem-ca-phe', 3, '2018-03-03 11:04:56', '2016-10-13 16:20:00', '2016-10-19 17:20:00');
INSERT INTO `products` VALUES (56, 'Bánh su kem phô mai', 7, '', 150000, 0, '50020041-combo-20-banh-su-que-pho-mai-9.jpg', 'hộp', 0, 'banh-su-kem-pho-mai', 3, '2018-03-03 11:04:56', '2016-10-13 16:20:00', '2016-10-19 17:20:00');
INSERT INTO `products` VALUES (57, 'Bánh su kem sữa tươi chocolate', 7, '', 150000, 0, 'combo-20-banh-su-que-kem-sua-tuoi-phu-socola.jpg', 'hộp', 1, 'banh-su-kem-sua-tuoi-chocolate', 3, '2018-03-03 11:04:56', '2016-10-13 16:20:00', '2016-10-19 17:20:00');
INSERT INTO `products` VALUES (58, 'Bánh Macaron Pháp', 2, 'Thưởng thức macaron, người ta có thể tìm thấy từ những hương vị truyền thống như mâm xôi, chocolate, cho đến những hương vị mới như nấm và trà xanh. Macaron với vị giòn tan của vỏ bánh, béo ngậy ngọt ngào của phần nhân, với vẻ ngoài đáng yêu và nhiều màu sắc đẹp mắt, đây là món bạn không nên bỏ qua khi khám phá nền ẩm thực Pháp.', 200000, 180000, 'Macaron9.jpg', '', 0, 'banh-macaron-phap', 3, '2018-03-03 11:04:56', '2016-10-27 07:00:00', '2016-10-12 07:00:00');
INSERT INTO `products` VALUES (59, 'Bánh Tiramisu - Italia', 2, 'Chỉ cần cắn một miếng, bạn sẽ cảm nhận được tất cả các hương vị đó hòa quyện cùng một chính vì thế người ta còn ví món bánh này là Thiên đường trong miệng của bạn', 200000, 0, '234.jpg', '', 0, 'banh-tiramisu-italia', 3, '2018-03-03 11:04:56', '2016-10-27 07:00:00', '2016-10-12 07:00:00');
INSERT INTO `products` VALUES (60, 'Bánh Táo - Mỹ', 2, 'Bánh táo Mỹ với phần vỏ bánh mỏng, giòn mềm, ẩn chứa phần nhân táo thơm ngọt, điểm chút vị chua dịu của trái cây quả sẽ là một lựa chọn hoàn hảo cho những tín đồ bánh ngọt trên toàn thế giới.', 200000, 0, '1234.jpg', '', 0, 'banh-tao-my', 3, '2018-03-03 11:04:56', '2016-10-27 07:00:00', '2016-10-12 07:00:00');
INSERT INTO `products` VALUES (61, 'Bánh Cupcake - Anh Quốc', 6, 'Những chiếc cupcake có cấu tạo gồm phần vỏ bánh xốp mịn và phần kem trang trí bên trên rất bắt mắt với nhiều hình dạng và màu sắc khác nhau. Cupcake còn được cho là chiếc bánh mang lại niềm vui và tiếng cười như chính hình dáng đáng yêu của chúng.', 150000, 120000, 'cupcake.jpg', 'cái', 1, 'banh-cupcake-anh-quoc', 3, '2018-03-03 11:04:56', '2016-10-27 07:00:00', '2016-10-27 07:00:00');
INSERT INTO `products` VALUES (62, 'Bánh Sachertorte', 6, 'Sachertorte là một loại bánh xốp được tạo ra bởi loại&nbsp;chocholate&nbsp;tuyệt hảo nhất của nước Áo. Sachertorte có vị ngọt nhẹ, gồm nhiều lớp bánh được làm từ ruột bánh mì và bánh sữa chocholate, xen lẫn giữa các lớp bánh là mứt mơ. Món bánh chocholate này nổi tiếng tới mức thành phố Vienna của Áo đã ấn định&nbsp;tổ chức một ngày Sachertorte quốc gia, vào 5/12 hằng năm', 250000, 220000, '111.jpg', 'cái', 0, 'banh-sachertorte', 3, '2018-03-03 11:04:56', '2016-10-27 07:00:00', '2016-10-27 07:00:00');

-- ----------------------------
-- Table structure for provinces
-- ----------------------------
DROP TABLE IF EXISTS `provinces`;
CREATE TABLE `provinces`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `id_region` int(11) NOT NULL,
  `created_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk_provinces_id_region_regions`(`id_region`) USING BTREE,
  CONSTRAINT `fk_provinces_id_region_regions` FOREIGN KEY (`id_region`) REFERENCES `regions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of provinces
-- ----------------------------
INSERT INTO `provinces` VALUES (1, 'Hà Nội', 1, '2018-03-15 23:38:14', '2018-03-15 23:38:14');
INSERT INTO `provinces` VALUES (2, 'Đà Nẵng', 2, '2018-03-15 23:38:14', '2018-03-15 23:38:14');
INSERT INTO `provinces` VALUES (3, 'TP. Hồ Chí Minh', 3, '2018-03-15 23:38:14', '2018-03-15 23:38:14');

-- ----------------------------
-- Table structure for regions
-- ----------------------------
DROP TABLE IF EXISTS `regions`;
CREATE TABLE `regions`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of regions
-- ----------------------------
INSERT INTO `regions` VALUES (1, 'Miền Bắc', '2018-03-15 23:38:14', '2018-03-15 23:38:14');
INSERT INTO `regions` VALUES (2, 'Miền Trung', '2018-03-15 23:38:14', '2018-03-15 23:38:14');
INSERT INTO `regions` VALUES (3, 'Miền Nam', '2018-03-15 23:38:14', '2018-03-15 23:38:14');

-- ----------------------------
-- Table structure for slide
-- ----------------------------
DROP TABLE IF EXISTS `slide`;
CREATE TABLE `slide`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `link` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `image` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of slide
-- ----------------------------
INSERT INTO `slide` VALUES (1, '', 'banner1.jpg');
INSERT INTO `slide` VALUES (2, '', 'banner2.jpg');
INSERT INTO `slide` VALUES (3, '', 'banner3.jpg');
INSERT INTO `slide` VALUES (4, '', 'banner4.jpg');

-- ----------------------------
-- Table structure for type_products
-- ----------------------------
DROP TABLE IF EXISTS `type_products`;
CREATE TABLE `type_products`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `description` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `image` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `created_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of type_products
-- ----------------------------
INSERT INTO `type_products` VALUES (1, 'Bánh mặn', 'Nếu từng bị mê hoặc bởi các loại tarlet ngọt thì chắn chắn bạn không thể bỏ qua những loại tarlet mặn. Ngoài hình dáng bắt mắt, lớp vở bánh giòn giòn cùng với nhân mặn như thịt gà, nấm, thị heo ,… của bánh sẽ chinh phục bất cứ ai dùng thử.', 'banh-man-thu-vi-nhat-1.jpg', '2018-03-06 21:09:04', '2018-03-06 21:09:04');
INSERT INTO `type_products` VALUES (2, 'Bánh ngọt', 'Bánh ngọt là một loại thức ăn thường dưới hình thức món bánh dạng bánh mì từ bột nhào, được nướng lên dùng để tráng miệng. Bánh ngọt có nhiều loại, có thể phân loại dựa theo nguyên liệu và kỹ thuật chế biến như bánh ngọt làm từ lúa mì, bơ, bánh ngọt dạng bọt biển. Bánh ngọt có thể phục vụ những mục đính đặc biệt như bánh cưới, bánh sinh nhật, bánh Giáng sinh, bánh Halloween..', '20131108144733.jpg', '2017-12-12 16:16:15', '2017-12-13 15:38:35');
INSERT INTO `type_products` VALUES (3, 'Bánh trái cây', 'Bánh trái cây, hay còn gọi là bánh hoa quả, là một món ăn chơi, không riêng gì của Huế nhưng khi \"lạc\" vào mảnh đất Cố đô, món bánh này dường như cũng mang chút tinh tế, cầu kỳ và đặc biệt. Lấy cảm hứng từ những loại trái cây trong vườn, qua bàn tay khéo léo của người phụ nữ Huế, món bánh trái cây ra đời - ngọt thơm, dịu nhẹ làm đẹp lòng biết bao người thưởng thức.', 'banhtraicay.jpg', '2017-12-18 14:33:33', '2017-12-15 21:25:27');
INSERT INTO `type_products` VALUES (4, 'Bánh kem', 'Với người Việt Nam thì bánh ngọt nói chung đều hay được quy về bánh bông lan – một loại tráng miệng bông xốp, ăn không hoặc được phủ kem lên thành bánh kem. Tuy nhiên, cốt bánh kem thực ra có rất nhiều loại với hương vị, kết cấu và phương thức làm khác nhau chứ không chỉ đơn giản là “bánh bông lan” chung chung đâu nhé!', 'banhkem.jpg', '2017-12-26 17:29:19', '2017-12-26 16:22:22');
INSERT INTO `type_products` VALUES (5, 'Bánh crepe', 'Crepe là một món bánh nổi tiếng của Pháp, nhưng từ khi du nhập vào Việt Nam món bánh đẹp mắt, ngon miệng này đã làm cho biết bao bạn trẻ phải “xiêu lòng”', 'crepe.jpg', '2017-12-28 18:00:00', '2017-12-27 18:00:23');
INSERT INTO `type_products` VALUES (6, 'Bánh Pizza', 'Pizza đã không chỉ còn là một món ăn được ưa chuộng khắp thế giới mà còn được những nhà cầm quyền EU chứng nhận là một phần di sản văn hóa ẩm thực châu Âu. Và để được chứng nhận là một nhà sản xuất pizza không hề đơn giản. Người ta phải qua đủ mọi các bước xét duyệt của chính phủ Ý và liên minh châu Âu nữa… tất cả là để đảm bảo danh tiếng cho món ăn này.', 'pizza.jpg', '2017-12-26 07:19:00', '2018-03-06 21:09:04');
INSERT INTO `type_products` VALUES (7, 'Bánh su kem', 'Bánh su kem là món bánh ngọt ở dạng kem được làm từ các nguyên liệu như bột mì, trứng, sữa, bơ.... đánh đều tạo thành một hỗn hợp và sau đó bằng thao tác ép và phun qua một cái túi để định hình thành những bánh nhỏ và cuối cùng được nướng chín. Bánh su kem có thể thêm thành phần Sô cô la để tăng vị hấp dẫn. Bánh có xuất xứ từ nước Pháp.', 'sukemdau.jpg', '2017-12-26 07:19:00', '2018-03-06 21:09:05');

-- ----------------------------
-- Table structure for type_users
-- ----------------------------
DROP TABLE IF EXISTS `type_users`;
CREATE TABLE `type_users`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `shop` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of type_users
-- ----------------------------
INSERT INTO `type_users` VALUES (1, 'admin', 0);
INSERT INTO `type_users` VALUES (2, 'Chi nhánh Gò Vấp', 1);
INSERT INTO `type_users` VALUES (3, 'Chi nhánh Thủ Đức', 2);
INSERT INTO `type_users` VALUES (4, 'Chi nhánh Tân Bình', 3);
INSERT INTO `type_users` VALUES (5, 'Chi nhánh Bình Thạnh', 4);
INSERT INTO `type_users` VALUES (6, 'Chi Nhánh quận 11', 5);
INSERT INTO `type_users` VALUES (7, 'Chi nhánh Quận 9', 6);
INSERT INTO `type_users` VALUES (8, 'Chi nhánh Hai Bà Trưng', 7);

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `phone` varchar(20) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `remember_token` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `type` int(11) NOT NULL DEFAULT 8,
  `created_at` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk_types_users`(`type`) USING BTREE,
  CONSTRAINT `fk_types_users` FOREIGN KEY (`type`) REFERENCES `type_users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, 'Hiếu Văn', 'admin', 'hieuvan.php@gmail.com', '$2y$10$em4zKi9jleLK16ZDfBxLLOQ2eVQftPRAgqKV5ueiIB8SLABrbqw2u', '23456789', 'Hoàng Diệu 2', 'H5N0woHIx6ymmWcl0hxctx7bzawLXfwCQ0QfZqx3NmsCcIlCxed4EofzgAOl', 1, '2018-03-29 05:31:27', '2018-05-06 17:13:46');
INSERT INTO `users` VALUES (4, 'Cửa Hàng Gò Vấp', 'tkgovap', 'govap@gmail.com', '$2y$10$ffIKjCPQ/DjIwIAaMuEa5ucEjvAMuFewqreEQYs2w/Pe4ggf51x5W', NULL, NULL, NULL, 2, '2018-05-06 03:54:55', '2018-05-06 17:14:54');
INSERT INTO `users` VALUES (6, 'Cửa hàng Thủ Đức', 'tkthuduc', 'thuduc@gmail.com', '$2y$10$wHLoY42v7FkKY3SW1TVzceP2A1EA8TSldIn7OIoQZeRc1t8c.3nfW', NULL, NULL, NULL, 3, '2018-05-06 17:17:12', '2018-05-06 10:17:40');
INSERT INTO `users` VALUES (7, 'Cửa hàng Tân Bình', 'tktanbinh', 'tanbinh@gmail.com', '$2y$10$Ci8csFGwMDSBDYRAw7xSTeGCI/xGUH6WPIXuPd/7QW7m8jd/npCrq', NULL, NULL, NULL, 4, '2018-05-06 17:18:27', '2018-05-06 10:18:55');
INSERT INTO `users` VALUES (8, 'Cửa hàng Bình Thạnh', 'tkbinhthanh', 'binhthanh@gmail.com', '$2y$10$qdhME9SwyVjsPDmLj09PwuohrrK4f5WTpltISU0UdSr6RWFKTSh9i', NULL, NULL, NULL, 5, '2018-05-06 17:19:46', '2018-05-06 10:20:03');
INSERT INTO `users` VALUES (9, 'Cửa hàng quận 11', 'tkquan11', 'quan11@gmail.com', '$2y$10$QKDItA8UH/39.P.Km1p6ze1DIGC59TAgHCOClnhPdTNurJWsTQZeC', NULL, NULL, NULL, 6, '2018-05-06 17:20:38', '2018-05-06 10:20:55');
INSERT INTO `users` VALUES (10, 'Cửa hàng Hai Bà Trưng ( Hà Nội )', 'tkhaibatrung', 'haibatrung@gmail.com', '$2y$10$kVhlGG/DKLiWby32lLH/uuZ7icQpu7GwSmK8dek8qEiJsxB/XRxQ2', NULL, NULL, NULL, 8, '2018-05-06 17:22:02', '2018-05-06 17:22:02');

SET FOREIGN_KEY_CHECKS = 1;
