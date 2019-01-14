<?php 
 
  $con = mysqli_connect('localhost','root','','s10314454');
  $sql ="SELECT * FROM message";
  $box = mysqli_query($con,$sql);

  while ( $record = mysqli_fetch_assoc ($box)) {

  		echo "<br>";
  		echo $record ['m_id'];
  		echo $record ['m_pwd'];
  		echo $record ['m_email'];
  		echo $record ['m_message'];
  }
?>