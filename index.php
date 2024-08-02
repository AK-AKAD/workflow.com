<?php

include 'login.php';
include 'db.php';

$email = $_POST['email'];

try{
    // get all tasks concerning the specific user
    $stmt = $pdo->prepare("SELECT* FROM prjInfo WHERE email = :email AND typeofInfo = task");
    $stmt->bindParam(":email", $email, PDO::PARAM_STR);

    $task[] = $stmt->execute();

    // get all announcements
    $stmt = $pdo->prepare("SELECT* FROM prjInfo where email = :email AND typeofInfo = announcement");
    $stmt->bindParam(":email", $email, PDO::PARAM_STR);


    //get events concerning the specific user
    $stmt = $pdo->prepare("SELECT* FROM events WHERE email = :email");
    $stmt->bindParam(":email", $email, PDO::PARAM_STR);

    $events[] = $stmt->execute();

    //get all messages sent from and recieved to the specific user
    $stmt = $pdo->prepare("SELECT* FROM messages WHERE sender = :email");
    $stmt->bindParam(":email", $email, PD0::PARAM_STR);

    $SentMSG[] = $stmt->execute();

    $stmt = $pdo->prepare("SELECT* FROM messages WHERE reciever = :email");
    $stmt->bindParam(":email", $email, PD0::PARAM_STR);

    $recievedMSG[] = $stmt->execute();
}catch($PDOException $e){
    $error = $e->getMessage();
}
