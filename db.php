<?php

$servername = "mysql:host=localhost;dbname=personal";
$username = "root";
$passw = "akinoluwaIS19";

$Error = "";

try{
    $pdo = new PDO($servername, $username, $passw);
    $pdo->setAttribute(PDO::ATTRI_ERRMODE, PDO::ERRMODE_EXCEPTION);

}catch(PDOException $e){
    $Error = $e->getMessage();
}