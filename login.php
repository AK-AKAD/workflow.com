<?php

$loginError = $emailError = $passwError = $success = "";

if($_SERVER["REQUEST_METHOD"] == "POST"){

    if(empty($_POST["email"])){
        $emailError = "email is required";

    }elseif(empty($_POST["passw"])){
        $passwError = "Password is required";

    }else{
        validate($_POST["email"], $_POST["passw"]);
    }
}

function validate($username, $passw){
    try{
        $servername = "mysql:host=localhost;dbname=personal";
        $serverUser = "root";
        $serverPassw = "akinoluwaIS19";
        $pdo = new PDO($servername, $serverUser, $serverPassw);
        $pdo -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $stmt = $pdo->prepare("SELECT * FROM userTable WHERE username = :username AND passw = :passw");
        $stmt->bindParam(':username', $username, PDO::PARAM_STR);
        $stmt->bindParam(':passw', $passw, PDO::PARAM_STR);

        $stmt->execute();

        header('Location: index.html');
        exit();
    }catch(PDOException $e){
        $loginError = $e->getMessage();
    }
}