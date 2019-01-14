<?php
	$m_contact = $_POST['m_contact'];

		$con = mysqli_connect('localhost','root','','s10314454');
		$sql = "INSERT INTO message(m_contact) VALUES('m_contact')";
		echo $sql;
		mysql_query($con,$sql);

 		header("refresh:1; url=selectt_db.php");
?>


