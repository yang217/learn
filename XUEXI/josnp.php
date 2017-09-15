<?php
$callback=$_GET['callback'];
$data=array('a','b','c');
echo $callbacl.'('.json_encode($data).')';
?>