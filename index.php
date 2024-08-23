<?php
header("Content-Type: application/json");

include 'login.php';
include 'db.php';

if($_SERVER['REQUEST_METHOD'] == 'GET'){
    if(isset($_GET['info'])){
        
        if($_GET['info'] == 'index'){
            index($pdo, $_POST['email']);
    
        }elseif($_GET['info'] == 'firstname'){
            $stmt = $pdo->prepare("SELECT* FROM userTable WHERE email = ?");
            $stmt->bindParam(1, $_POST['email']);
    
            $stmt->execute();
            $results = $stmt->fetch(PDO::FETCH_ASSOC);
    
            if ($results) {
                $resultString = $results[0];
                echo $resultString;
            } else {
                echo "No results found.";
            }
        }elseif($_GET['info'] == 'messages'){
    
            //get all messages sent from and recieved to the specific user
            $stmt = $pdo->prepare("SELECT* FROM messages WHERE sender = ? AND reciever = ?");
            $stmt->bindParam(1, $_POST['email']);
            $stmt->bindParam(2, $_POST['email']);
    
            $stmt->execute();
            $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
            if (count($results) > 0) {
                $sentMSG = implode("\n", array_map(function($row) {
                    return "sender: "+$row[0]+"\n"+"reciever: "+$row[1]+"\n"+"msg: "+$row[2];
                }, $results));
    
                echo $sentMSG;
            } else {
                echo "No results found.";
            }
    
        }
    }
    
}

function getTasks($pdo, $email){
    try{

        // get all tasks concerning the specific user
        $stmt = $pdo->prepare("SELECT* FROM prjInfo WHERE email = ? AND typeofInfo = task");
        $stmt->bindParam(1, $email);
        $stmt->execute();

        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        if(count($results) > 0){
            $result = implode("\n", array_map(function($row) {
                return $row[4];
            }, $results));

        }else{
            echo "No results found";
        }
        
    }catch(PDOExcpetion $e){
        $e->getMessage();
        echo $e;
    }
}
    
function getAnnounce(){
    try{

        //get all announcements
        $stmt = $pdo->prepare("SELECT* FROM prjInfo where email = ? AND typeofInfo = announcement");
        $stmt->bindParam(1, $_POST['email']);

        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

        if(count($results) > 0){
            $recievedMSG = implode("\n", array_map(function($row) {
                return $row[5];
            }, $results));

            echo $recievedMSG;
        }else{
            echo "No results found";
        }
    }catch(PDOException $e){
        $e->getMessage();
        echo $e;
    }
}

function getEvents(){
    try{

        //get events concerning the specific user
        $stmt = $pdo->prepare("SELECT* FROM events WHERE email = ?");
        $stmt->bindParam(1, $_POST['email']);
    
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

        if(count($result) > 0){
            $recievedMSG = implode("\n", array_map(function($row) {
                return implode(",", $row);
            }, $results));

            echo $recievedMSG;
        }else{
            echo "No reuslts found";
        }
    
    }catch(PDOException $e){
        $error = $e->getMessage();
    }
}
