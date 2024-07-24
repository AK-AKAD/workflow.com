<?php


$servername = "localhost";
$serverUser = "root";
$serverPassw = "root";
$loginError = $usernameError = $passwError = $success = "";

if($_SERVER["REQUEST_METHOD"] == "POST"){

    if(empty($_POST["username"])){
        $usernameError = "username is required";
    }elseif(empty($_POST["passw"])){
        $passwerror = "Password is required";
    }else{
        validate($_POST["username"], $_POST["passw"]);
    }
}

function validate($username, $passw){

    $conn = mysqli_connect($servername, $serverUser, $serverPassw);

    if(!$conn){
        die("connection failure ".mysqli_connect_error());
    }

    $sql = "SELECT* FROM user WHERE username = $username AND passw = $passw;";

    if(mysqli_query($conn, $sql)){
        $success = "Login successful";
    }else{
        $loginError = "Login error";
    }
}