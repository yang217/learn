<?php
	$username = $_POST['username'];
	//正确的用户名由小写字母，数字和下划线组成
	if(!eregi("^[a-z0-9_]+$", $username)){
		echo "用户名格式不正确！".$username;
	} else {
		echo "恭喜，这是合法的用户名！";
	}
?>