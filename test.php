<?php $mysql_conf = array('host' => '127.0.0.1:3306', //IP : 端口

'db' => 'test', //要连接的数据库

'db_user' => 'root', //数据库用户名

'db_pwd' => '123456', //密码

);$mysqli = @new mysqli($mysql_conf['host'], $mysql_conf['db_user'], $mysql_conf['db_pwd']);if ($mysqli->connect_errno) {die("could not connect to the database:\n" . $mysqli->connect_error);//诊断连接错误

}$mysqli->query("set names 'utf8';");//编码转化

$select_db = $mysqli->select_db($mysql_conf['db']);if (!$select_db) {die("could not connect to the db:\n" . $mysqli->error);

}//建一张表

$sql = "create table User(

name char(16),

id char(16)

)";$res = $mysqli->query($sql);if (!$res) {die("sql error:\n" . $mysqli->error);

}$res->free();$mysqli->close();?>
