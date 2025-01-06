<?php
$fname = $_POST["fname"];
$lname = $_POST["lname"];
$nickname =  $_POST["nickname"];
$email = $_POST["email"];
$phone =  $_POST["phone"];

echo $nickname."'s real name is ".$fname." ".$lname.". Shhh!! Don't tell anyone."

// $conn = mysqli_connect("localhost","postgres","","pinball");
// mysqli_query($conn, $sql);
pg_connect("host=localhost,database=pinball,user=postgres, password=")
pg_query("INSERT INTO players (firstname,lastname,nickname,email,phone) VALUES ('$fname','$lname','$nickname','$email','$phone')");
exit;

?>
