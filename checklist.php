<?php
header("Content-Type: application/json");
include 'db.php';

if($_SERVER['REQUEST_METHOD'] == 'POST'){

    if($_POST['action'] == 'insert'){
        
        uploadTask($pdo, $_POST['task'], $_POST['activity'], $_POST['assignee'], $_POST['due_date'],$_POST['typeofInfo'], $_POST['status']);
        
    }elseif($_POST['action'] == 'update'){
        update($pdo, $_POST['id'], $_POST['prjName'], $_POST['task'], $_POST['Assignee'], $_POST['Status']);
    }
}

if($_SERVER['REQUEST_METHOD'] == 'GET'){
    if($_GET['info'] == 'list'){

        getTasks($pdo);
    }

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
        if (count($results) > 0) {
            $resultsString = implode("\n", array_map(function($row) {
                return implode(",", $row);
            }, $results));
        
            echo $resultsString;
        } else {
            echo "No results found.";
        }

    }catch(PDOException $e){
        $error = $e->getMessage();
    }
    
    // Create Code to loop thorugh while results in the checklist page.
}

function uploadTask($pdo, $Task, $Activity, $Assignee, $Due_date, $typeofInfo, $Status){
    try{
        
        $stmt = $pdo->prepare('INSERT INTO TABLE prjInfo (activity, due_date, users, task, typeofInfo, stat) VALUES(?,?,?,?,?,?)');
        $stmt->bindParam(1, $Activity);
        $stmt->bindParam(2, $Due_date);
        $stmt->bindParam(3, $Assignee);
        $stmt->bindParam(4, $Task);
        $stmt->bindParam(5, $typeofInfo);
        $stmt->bindParam(6, $Status);

        $stmt->execute();
        echo json_encode("Success");
        // get the id of the last record created
        /*
        $lastId = $stmt->fetch('id_no');
        echo $lastid;
        */
    }catch(PDOException $e){
        $e->getMessage();
        echo $e;
    }
}