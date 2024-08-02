<?php
$servername = "mysql:host=localhost;dbname=personal";
$username = "root";
$passw = "akinoluwaIS19";
$error = "";

function checklist(){
    try{
        /*
        $conn = mysqli_connect($severname, $username, $passw);
        if(!$conn){
            die("connection failure".mysqli_connect_error());
        }
        */

        $pdo = new PDO($servername, $username, $passw);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $stmt = $pdo->prepare("SELECT* FROM prjInfo");
        $stmt->execute();

        // CODE TO LIST THE RESULT IN ROWS
         /*
        $sql = "SELECT* FROM prjInfo";

        $result = mysqli_query($conn, $sql);

        if(mysqli_num_rows($result) > 0){
            $row = mysqli_fetch_assoc($result);
        }else{
            $error = "No results";
        }
            */

    }catch(PDOException $e){
        $error = $e->getMessage();
    }
    
    // Create Code to loop thorugh while results in the checklist page.
}
