<?php
include 'db.php';

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

function validate($pdo, $username, $passw){
    try{
       
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