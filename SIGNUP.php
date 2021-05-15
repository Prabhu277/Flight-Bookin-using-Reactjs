<?php
session_start();
$FIRSTNAME="";
$LASTNAME="";
$PASSPORTNUMBER="";
$ADHARCARDNUMBER="";
$EMAILID="";
$PASSWORD="";

$errors = array();
$db = mysqli_connect('localhost','root','',) or die ("Could not connect to DB");
if (isset($_POST['SUBMIT'])) {
    $FIRSTNAME = mysqli_real_escape_string($db, $_POST['FIRSTNAME']);
    $LASTNAME = mysqli_real_escape_string($db, $_POST['LASTNAME']);
    $PASSPORTNUMBER = mysqli_real_escape_string($db, $_POST['PASSPORTNUMBER']);
    $ADHARCARDNUMBER = mysqli_real_escape_string($db, $_POST['ADHARCARDNUMBER']);
    $EMAILID = mysqli_real_escape_string($db, $_POST['EMAILID']);
    $PASSWORD = mysqli_real_escape_string($db, $_POST['PASSWORD']);

}

if($FIRSTNAME!=""&&$LASTNAME!=""&&$PASSPORTNUMBER!="" &&$ADHARCARDNUMBER!=""  &&$EMAILID!=""  &&$PASSWORD!="")
     {
        $sql = "INSERT INTO SIGNUP VALUES ('$FIRSTNAME','$LASTNAME','$PASSPORTNUMBER', '$ADHARCARDNUMBER', '$EMAILID', '$PASSWORD')"; 
        mysqli_query($db,$sql); 
    }
?>
