
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
DROP TABLE IF EXISTS `books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `books` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL COMMENT '项目名称',
  `identify` varchar(20) NOT NULL COMMENT '文档标识',
  `description` varchar(255) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0' COMMENT '状态',
  `groups` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL COMMENT '创建人ID',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Unique_identify` (`identify`) COMMENT '标识唯一'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `books` WRITE;
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
/*!40000 ALTER TABLE `books` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `document_histories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `document_histories` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `document_id` int(10) unsigned NOT NULL,
  `name` varchar(255) NOT NULL,
  `markdown` longtext COMMENT 'markdown 原始内容',
  `user_id` int(11) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `document_histories` WRITE;
/*!40000 ALTER TABLE `document_histories` DISABLE KEYS */;
/*!40000 ALTER TABLE `document_histories` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `documents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `documents` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL COMMENT '文档标题',
  `book_id` int(11) NOT NULL COMMENT '项目ID',
  `parent_id` int(11) NOT NULL DEFAULT '0' COMMENT '上级文档',
  `sort` int(11) NOT NULL DEFAULT '0' COMMENT '排序',
  `markdown` longtext COMMENT 'markdown 原始内容',
  `content` longtext COMMENT 'markdown解析后内容',
  `user_id` int(11) NOT NULL COMMENT '文档创建人',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `documents` WRITE;
/*!40000 ALTER TABLE `documents` DISABLE KEYS */;
/*!40000 ALTER TABLE `documents` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `group_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `group_user` (
  `user_id` int(10) unsigned NOT NULL,
  `group_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`user_id`,`group_id`),
  KEY `group_user_group_id_foreign` (`group_id`),
  CONSTRAINT `group_user_group_id_foreign` FOREIGN KEY (`group_id`) REFERENCES `groups` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `group_user_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `group_user` WRITE;
/*!40000 ALTER TABLE `group_user` DISABLE KEYS */;
INSERT INTO `group_user` VALUES (1,1);
/*!40000 ALTER TABLE `group_user` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `groups` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `groups_name_unique` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `groups` WRITE;
/*!40000 ALTER TABLE `groups` DISABLE KEYS */;
INSERT INTO `groups` VALUES (1,'PHP','PHP开发工作组','2018-04-03 20:07:09','2018-04-04 00:06:00'),(3,'Java','Java开发工作组','2018-04-04 00:05:57','2018-04-04 00:06:05'),(4,'Web前端','Web前端开发工作组','2018-04-04 00:06:44','2018-04-04 00:06:44'),(5,'Ios','Ios开发工作组','2018-04-04 00:07:07','2018-04-04 00:07:07'),(6,'Android','Android开发工作组','2018-04-04 00:07:41','2018-04-04 00:07:41');
/*!40000 ALTER TABLE `groups` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2018_03_22_033222_entrust_setup_tables',1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `permission_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `permission_role` (
  `permission_id` int(10) unsigned NOT NULL,
  `role_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`permission_id`,`role_id`),
  KEY `permission_role_role_id_foreign` (`role_id`),
  CONSTRAINT `permission_role_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `permission_role_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `permission_role` WRITE;
/*!40000 ALTER TABLE `permission_role` DISABLE KEYS */;
INSERT INTO `permission_role` VALUES (2,2),(3,2),(4,2),(5,2),(6,2),(7,2),(8,2),(9,2),(10,2),(11,2),(12,2),(13,3),(14,3),(15,3),(16,3),(17,3),(27,3),(28,3),(29,3),(30,3),(31,3),(32,3),(33,3),(34,3),(35,3),(36,3),(37,3),(38,3),(39,3),(18,4),(19,4),(20,4),(21,4),(22,4),(23,4),(24,4),(25,4),(26,4);
/*!40000 ALTER TABLE `permission_role` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `permissions` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `display_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `permissions_name_unique` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `permissions` WRITE;
/*!40000 ALTER TABLE `permissions` DISABLE KEYS */;
INSERT INTO `permissions` VALUES (2,'book.index','项目列表','获取本用户组的项目列表并分页','2018-03-22 23:48:05','2018-04-04 01:02:18'),(3,'book.store','添加项目','添加项目默认分配的项目组是添加人的用户组','2018-03-22 23:48:05','2018-04-04 01:02:49'),(4,'book.document.show','获取文档','获取项目下某个文档的详细内容','2018-03-22 23:48:05','2018-04-04 01:04:45'),(5,'book.document.destroy','删除文档','删除项目下的某个文档信息','2018-03-22 23:48:05','2018-04-04 01:07:24'),(6,'book.document.update','更新文档','更新项目下某个文档的内容','2018-03-22 23:48:05','2018-04-04 01:09:45'),(7,'book.destroy','删除项目','删除某个项目','2018-03-22 23:48:05','2018-04-04 01:12:58'),(8,'book.show','获取项目','获取项目详细内容','2018-03-22 23:48:05','2018-04-04 01:14:15'),(9,'book.update','更新项目','更新项目内容','2018-03-22 23:48:05','2018-04-04 01:15:14'),(10,'book.document.store','添加文档','给项目添加一个新的文档','2018-03-22 23:48:05','2018-04-04 01:15:46'),(11,'book.document.index','文档列表','获取项目下所有文档列表','2018-03-22 23:48:05','2018-04-04 01:21:22'),(12,'book.group','分配项目组','分配项目所属用户组','2018-03-22 23:48:05','2018-04-04 01:23:02'),(13,'group.store','添加用户组','添加用户组','2018-03-22 23:48:05','2018-04-04 01:24:40'),(14,'group.index','用户组列表','获取用户组列表并分页','2018-03-22 23:48:05','2018-04-04 01:24:57'),(15,'group.destroy','删除用户组','删除某个用户组','2018-03-22 23:48:05','2018-04-04 01:25:15'),(16,'group.update','更新用户组','更新用户组信息','2018-03-22 23:48:05','2018-04-04 01:27:02'),(17,'group.show','获取用户组','获取用户组内容','2018-03-22 23:48:05','2018-04-04 01:31:13'),(18,'permission.store','添加权限','添加权限信息','2018-03-22 23:48:05','2018-04-04 01:27:48'),(19,'permission.index','权限列表','获取权限列表并分页','2018-03-22 23:48:05','2018-04-04 01:28:08'),(20,'permission.update','更新权限','更新权限内容','2018-03-22 23:48:05','2018-04-04 01:29:24'),(21,'permission.show','获取权限','获取权限内容','2018-03-22 23:48:05','2018-04-04 01:31:27'),(22,'permission.destroy','删除权限','删除某个权限','2018-03-22 23:48:05','2018-04-04 01:32:57'),(23,'role.index','用户组列表','获取用户组列表并分页','2018-03-22 23:48:05','2018-04-04 01:52:04'),(24,'role.store','更新用户组','更新用户组信息','2018-03-22 23:48:05','2018-04-04 01:52:11'),(25,'role.getpermission','获取用户组权限','获取用户组下所有的权限','2018-03-22 23:48:05','2018-04-04 01:52:18'),(26,'role.postpermission','更新用户组权限','更新用户组的权限','2018-03-22 23:48:05','2018-04-04 01:52:26'),(27,'role.show','获取用户组','获取用户组信息','2018-03-22 23:48:05','2018-04-04 01:52:32'),(28,'role.update','更新用户组','更新用户组信息','2018-03-22 23:48:05','2018-04-04 01:52:39'),(29,'role.destroy','删除用户组','删除用户组','2018-03-22 23:48:05','2018-04-04 01:52:44'),(30,'user.store','添加用户','添加用户','2018-03-22 23:48:05','2018-04-04 01:44:13'),(31,'user.index','用户列表','获取用户列表并分页','2018-03-22 23:48:05','2018-04-04 01:44:28'),(32,'user.getgroup','获取用户的用户组','获取用户的用户组','2018-03-22 23:48:05','2018-04-04 01:46:24'),(33,'user.postgroup','更新用户用户组','更新用户用户组','2018-03-22 23:48:05','2018-04-04 01:46:44'),(34,'user.password','更新用户密码','更新用户密码','2018-03-22 23:48:05','2018-04-04 01:47:25'),(35,'user.postrole','获取用户权限组','获取用户权限组','2018-03-22 23:48:05','2018-04-04 01:49:17'),(36,'user.getrole','更新用户权限组','更新用户权限组','2018-03-22 23:48:05','2018-04-04 01:49:27'),(37,'user.show','获取用户','获取用户信息','2018-03-22 23:48:05','2018-04-04 01:49:55'),(38,'user.destroy','删除用户','删除用户信息','2018-03-22 23:48:05','2018-04-04 01:50:21'),(39,'user.update','更新用户','更新用户信息','2018-03-22 23:48:05','2018-04-04 01:50:33');
/*!40000 ALTER TABLE `permissions` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `role_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `role_user` (
  `user_id` int(10) unsigned NOT NULL,
  `role_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`user_id`,`role_id`),
  KEY `role_user_role_id_foreign` (`role_id`),
  CONSTRAINT `role_user_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `role_user_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `role_user` WRITE;
/*!40000 ALTER TABLE `role_user` DISABLE KEYS */;
INSERT INTO `role_user` VALUES (1,2),(1,3),(1,4);
/*!40000 ALTER TABLE `role_user` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `roles` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `display_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `roles_name_unique` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (2,'books','项目管理者','项目所有权限','2018-04-04 00:08:54','2018-04-04 00:09:59'),(3,'users','用户管理者','用户管理者','2018-04-04 00:09:15','2018-04-04 00:09:53'),(4,'permissions','权限管理者','权限管理者','2018-04-04 00:09:48','2018-04-04 00:09:48');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL COMMENT '用户名',
  `email` varchar(50) NOT NULL COMMENT '登录邮箱',
  `phone` char(11) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=211 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'管理大神','luffyzhao@vip.126.com','17708289019','$2y$10$pUNkSPvvywBOtLkoNYSuvuOiobylyWY20RiY9Aci367zIDy0fNnHm','1PNjzAGXxu','2018-03-19 21:59:25','2018-04-10 17:32:53');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

