<?php
include 'db.php';

$firstNameError = $lastNameError = $emailError = $passwError = $CpasswError = $signupError = "";

if($_SERVER["REQUEST_METHOD"]=="POST"){
    if(empty($POST["firstName"])){
        $firstNameError = "Please fill in your first name";
    }elseif(empty($POST["lastName"])){
        $lastNameError = "Please fill in yout last name";
    }elseif(empty($POST["email"])){
        $emailError = "Please fill in your email address";
    }elseif(empty($POST["passw"])){
        $passwError = "Please fill in your password";
    }elseif(empty($POST["Cpassw"])){
        $CpasswError = "please confirm your password";
    }elseif($POST["passw"] != $POST["Cpassww"]){
        $CpasswError = "password doesn't match";
    }else{
        signup($pdo, $POST["firstName"], $POST["lastName"], $POST["email"], $POST["passw"]);
    }
}

function signup($pdo, $firstName, $lastName, $email, $Upassw){
    try{
        $stmt = $pdo->prepare("INSERT INTO userTable (firstName, lastName, email, passw) VALUES(:firstName, :lastName, :email, :passw)");
        $stmt->bindParam(":username", $firstName, PDO::PARAM_STR);
        $stmt->bindParam(":passw", $lastName, PDO::PARAM_STR);
        $stmt->bindParam(":passw", $email, PDO::PARAM_STR);
        $stmt->bindParam(":passw", $Upassw, PDO::PARAM_STR);

        $stmt->execute();
        header('Location: login.php');
    }catch(PDOException $e){
        $signupError = $e->getMessage();
    }
    
}