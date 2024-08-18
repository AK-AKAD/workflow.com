<?php
include 'db.php';

if($_SERVER['REQUEST_METHOD'] == 'POST'){

    if($_POST['action'] == 'insert'){
        uploadTask($pdo, $_POST['prjName'], $_POST['task']);
        
    }elseif($_POST['action'] == 'update'){
        update($pdo, $_POST['id'], $_POST['prjName'], $_POST['task'], $_POST['Assignee'], $_POST['Status']);
    }
}

if($_SERVER['REQUEST_METHOD'] == 'GET'){
    getTasks($pdo);
}

function update($pdo, $id_no, $prjName, $Task, $Assignee, $Status){
    try{

        $stmt = $pdo->prepare('UPDATE checklist SET prjName = ?, task = ?, assignee = ?, stat = ? WHERE id_no = ?');
        $stmt->bindParam(1, $prjName);
        $stmt->bindParam(2, $Task);
        $stmt->bindParam(3, $Assignee);
        $stmt->bindParam(4, $Status);
        $stmt->bindParam(5, $id_no);

        $stmt->execute();

    }catch(PDOException $e){
        $e->getMessage();
        echo $e;
    }
}

function getTasks($pdo){
    try{
       
        $stmt = $pdo->prepare("SELECT* FROM prjInfo WHERE typeofInfo = 'task'");
        $result = $stmt->execute();

        // CODE TO LIST THE RESULT IN ROWS
        echo $result;

    }catch(PDOException $e){
        $error = $e->getMessage();
    }
    
    // Create Code to loop thorugh while results in the checklist page.
}

function uploadTask($pdo){
    try{

        $stmt = $pdo->prepare('INSERT INTO TABLE prjInfo (prjName, task, assignee, preogress) VALUES(?,?,?,?)');
        $stmt->bindParam(1, $prjName);
        $stmt->bindParam(2, $task);
        $stmt->bindParam(3, $assignee);
        $stmt->bindParam(4, $status);

        $stmt->execute();
        // get the id of the last record created
        $lastId = $stmt->fetch('id_no');
        echo $lastid;

    }catch(PDOException $e){
        $e->getMessage();
        echo $e;
    }
}