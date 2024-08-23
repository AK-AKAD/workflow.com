<?php

include 'db.php';

if($_SERVER['REQUEST_METHOD'] === 'GET'){
    if($_GET['action'] == 'find'){
        findUser($pdo, $_GET['user']);

    }elseif($_GET['action'] == 'list'){
        list($pdo);
    }
}

function findUser($pdo, $user){

    try{
        $stmt = $pdo->prepare('SELECT* FROM userTable WHERE firstName OR lastName LIKE ? ');
        $stmt -> bindParam(1, $user);

        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        if(count($result) > 1){
            $resultString = $result['firstName'];
            echo $resultString;
        }else{
            echo "no result";
        }
    }catch(PDOException $e){
        $e->getMessage();
        echo $e;
    }
}

function list($pdo){
// list all users registered
    try{
        $stmt = $pdo->prepare('SELECT* FROM userTable');
        $stmt->execute();

        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    }catch(PDOException $e){
        $e->getMessage();
        echo $e;
    }
}