<?php
	$m_name = $_POST['m_id'];
	$m_name = $_POST['m_pwd'];
	$m_email = $_POST['m_email'];
	$m_message = $_POST['m_message'];

		$con = mysqli_connect('localhost','root','','s10614012');
		$sql = "INSERT INTO message(m_name,m_email,m_message) VALUES('$m_id','$_pwd','$m_message','m_email')";
		echo $sql;
		mysql_query($con,$sql);

		header("refresh:1; url=prdselect_db.php");

?>