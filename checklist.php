<?php
$servername = "localhost";
$username = "root";
$passw = "root";
$error = "";

function checklist(){
    $conn = mysqli_connect($severname, $username, $passw);
    if(!$conn){
        die("connection failure".mysqli_connect_error());
    }

    $sql = "SELECT* FROM prjInfo";

    $result = mysqli_query($conn, $sql);

    if(mysqli_num_rows($result) > 0){
        $row = mysqli_fetch_assoc($result);
    }else{
        $error = "No results";
    }
    // Create Code to loop thorugh while results in the checklist page.
}
