
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
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL COMMENT '项目名称',
  `identify` varchar(20) NOT NULL COMMENT '文档标识',
  `description` varchar(255) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0' COMMENT '状态',
  `version` bigint(11) NOT NULL DEFAULT '0',
  `user_id` int(11) NOT NULL COMMENT '创建人ID',
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Unique_identify` (`identify`) COMMENT '标识唯一'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `books` WRITE;
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
/*!40000 ALTER TABLE `books` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `documents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `documents` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
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
DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL COMMENT '用户名',
  `email` varchar(50) NOT NULL COMMENT '登录邮箱',
  `phone` char(11) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'畅霞','qui85@example.org','18019077060','$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm','HAdSxgWInr','2018-03-18 18:39:51','2018-03-18 18:39:51'),(2,'霍鹏','accusantium_omnis@example.com','13971668220','$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm','v5UG6NdkvJ','2018-03-18 18:39:51','2018-03-18 18:39:51'),(3,'台林','minus.odio@example.com','17777268528','$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm','VFqjfq1ngg','2018-03-18 18:39:51','2018-03-18 18:39:51'),(4,'邵正平','ut99@example.org','15564490332','$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm','0xk8wF4wkG','2018-03-18 18:39:51','2018-03-18 18:39:51'),(5,'辜凯','jfacilis@example.com','13811915858','$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm','QtiaVt2YKY','2018-03-18 18:39:51','2018-03-18 18:39:51'),(6,'左建华','quisquam.quidem@example.com','17014457272','$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm','WgwyNWsrmr','2018-03-18 18:39:51','2018-03-18 18:39:51'),(7,'牛新华','iusto_ipsa@example.net','13002202036','$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm','2Md2IxCYFk','2018-03-18 18:39:51','2018-03-18 18:39:51'),(8,'毕兰英','zvoluptas@example.com','18554662453','$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm','qAzbhLFyQA','2018-03-18 18:39:51','2018-03-18 18:39:51'),(9,'雷欢','vel21@example.com','15774119359','$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm','cYTfIuVRTk','2018-03-18 18:39:51','2018-03-18 18:39:51'),(10,'芦振国','aut_eum@example.net','15564156081','$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm','p2NHyThQFk','2018-03-18 18:39:51','2018-03-18 18:39:51'),(11,'冀凯','edoloremque@example.com','13922638311','$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm','1DWjof2SdN','2018-03-18 18:39:51','2018-03-18 18:39:51'),(12,'敖旭','cupiditate81@example.net','14533034141','$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm','JvjSbuGsUi','2018-03-18 18:39:51','2018-03-18 18:39:51'),(13,'朱捷','qcommodi@example.org','13256380781','$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm','cWsaY4z8ea','2018-03-18 18:39:51','2018-03-18 18:39:51'),(14,'明坤','mlaborum@example.com','15194151059','$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm','8VJeBqlhZl','2018-03-18 18:39:51','2018-03-18 18:39:51'),(15,'习莉','ab_consequatur@example.org','17160579964','$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm','lxcR8z0VEk','2018-03-18 18:39:52','2018-03-18 18:39:52'),(16,'曲洪','ndistinctio@example.com','15979086362','$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm','T1n2dHJfrF','2018-03-18 18:39:52','2018-03-18 18:39:52'),(17,'保英','nihil39@example.net','18460311279','$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm','duviWXhjAh','2018-03-18 18:39:52','2018-03-18 18:39:52'),(18,'万明','qdignissimos@example.com','17182429864','$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm','ayaoXALH4S','2018-03-18 18:39:52','2018-03-18 18:39:52'),(19,'樊佳','pariatur.sapiente@example.net','18828745529','$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm','q59lckrkjt','2018-03-18 18:39:52','2018-03-18 18:39:52'),(20,'龚平','rerum96@example.net','18197609690','$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm','wzRqOWT67u','2018-03-18 18:39:52','2018-03-18 18:39:52'),(21,'廉娟','modi46@example.net','18984470289','$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm','AiU1mRzL3n','2018-03-18 18:39:52','2018-03-18 18:39:52'),(22,'涂文','in_et@example.org','18305022438','$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm','UII9bOOyzj','2018-03-18 18:39:52','2018-03-18 18:39:52'),(23,'孟浩','aspernatur.ipsum@example.org','17190938208','$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm','DA3KV6BRx3','2018-03-18 18:39:52','2018-03-18 18:39:52'),(24,'习梅','laudantium.laudantium@example.com','17001403265','$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm','X6RFOUeaV7','2018-03-18 18:39:52','2018-03-18 18:39:52'),(25,'华芬','nihil_consequatur@example.net','15777081216','$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm','o9Ua2IF1ke','2018-03-18 18:39:52','2018-03-18 18:39:52'),(26,'詹燕','praesentium.sit@example.org','17050893290','$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm','PQs1NSMvCS','2018-03-18 18:39:52','2018-03-18 18:39:52'),(27,'卓岩','in.perspiciatis@example.net','13697785081','$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm','6cAAEEGBAM','2018-03-18 18:39:52','2018-03-18 18:39:52'),(28,'尹玉英','quam57@example.org','13485373407','$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm','uGazQrcEIX','2018-03-18 18:39:52','2018-03-18 18:39:52'),(29,'丁新华','nihil.ipsa@example.com','18373011326','$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm','GGFYXGnTnH','2018-03-18 18:39:52','2018-03-18 18:39:52'),(30,'花成','aliquam_et@example.net','18858429407','$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm','QIlmo4S7x8','2018-03-18 18:39:52','2018-03-18 18:39:52'),(31,'蓝海燕','officia04@example.org','17190221441','$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm','FUAv6BPfkx','2018-03-18 18:39:52','2018-03-18 18:39:52'),(32,'邬晶','eaut@example.org','13324286586','$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm','SfisBcjUfL','2018-03-18 18:39:52','2018-03-18 18:39:52'),(33,'毕建军','pvel@example.net','15762775264','$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm','ODJbaWEkOo','2018-03-18 18:39:52','2018-03-18 18:39:52'),(34,'池文','et_et@example.com','17168418557','$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm','IUhWO9PSpU','2018-03-18 18:39:52','2018-03-18 18:39:52'),(35,'兰捷','jvoluptas@example.org','13968142467','$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm','Yz5upa4b64','2018-03-18 18:39:52','2018-03-18 18:39:52'),(36,'耿爱华','nihil.accusantium@example.com','17075639495','$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm','6xkH5BfnLb','2018-03-18 18:39:52','2018-03-18 18:39:52'),(37,'甄帆','ad51@example.net','17892165967','$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm','4JmSYBNvTZ','2018-03-18 18:39:52','2018-03-18 18:39:52'),(38,'常子安','udeleniti@example.org','13064597526','$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm','iXH88js2lJ','2018-03-18 18:39:52','2018-03-18 18:39:52'),(39,'俞玉兰','hnumquam@example.com','17016087475','$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm','uGpzY9atzR','2018-03-18 18:39:52','2018-03-18 18:39:52'),(40,'木波','et_veritatis@example.org','15062087722','$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm','EH6y28R9RK','2018-03-18 18:39:52','2018-03-18 18:39:52'),(41,'谢艳','amet_ut@example.org','17091135358','$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm','pkDQibEmx2','2018-03-18 18:39:52','2018-03-18 18:39:52'),(42,'奚华','assumenda46@example.com','13757403140','$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm','SItLKFaZ1l','2018-03-18 18:39:53','2018-03-18 18:39:53'),(43,'刘凤英','ratione.aut@example.net','18948185673','$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm','LZXCQIeIqt','2018-03-18 18:39:53','2018-03-18 18:39:53'),(44,'车嘉俊','aperiam27@example.org','17077806331','$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm','bP9DYpU6SD','2018-03-18 18:39:53','2018-03-18 18:39:53'),(45,'强晧','quibusdam37@example.net','17764476906','$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm','zM7zRW5FYF','2018-03-18 18:39:53','2018-03-18 18:39:53'),(46,'邢智明','dolor70@example.org','13593427860','$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm','4OOjQpE9mD','2018-03-18 18:39:53','2018-03-18 18:39:53'),(47,'靳钟','facilis13@example.com','17088684907','$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm','zG7ZulCSaM','2018-03-18 18:39:53','2018-03-18 18:39:53'),(48,'蔡祥','aut90@example.com','15628457976','$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm','ZclMxaPOqg','2018-03-18 18:39:53','2018-03-18 18:39:53'),(49,'郜阳','wut@example.net','18310054839','$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm','AXE72O1dbl','2018-03-18 18:39:53','2018-03-18 18:39:53'),(50,'宗倩','occaecati.tempore@example.com','17135354364','$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm','IvjCKAgI0Y','2018-03-18 18:39:53','2018-03-18 18:39:53');
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

