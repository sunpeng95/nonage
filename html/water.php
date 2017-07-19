<?php
    $db = mysqli_connect("localhost","root","11111111","water");
    $sql = "SELECT * FROM think";
    $result = mysqli_query($db,$sql);
    $response = mysqli_fetch_all($result);
    mysqli_close($db);
    echo json_encode($response);
?>