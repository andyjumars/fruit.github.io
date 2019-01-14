<?php 
 
  $con = mysqli_connect('localhost','root','','s10314454');
  $sql ="SELECT * FROM message";
  $box = mysqli_query($con,$sql);

  while ( $record = mysqli_fetch_assoc ($box)) {

  		echo "<br>";
  		echo $record ['m_bn'];
  		echo $record ['m_pie'];
  		echo $record ['m_ap'];
  		echo $record ['m_fru'];
  }
?>

