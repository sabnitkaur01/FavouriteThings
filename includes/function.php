<?php
    $result = array();

    function getAllUsers($conn) {
        $query = "SELECT * FROM tbl_data";

        $runQuery = $conn->query($query);

        while($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
            $result[] = $row;
        }
        echo (json_encode($result));
    }
    function getSingleUser($conn, $target) {
        $query = "SELECT * FROM tbl_data WHERE id=" . $target . "";

        $runQuery = $conn->query($query);

        while($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
            $result[] = $row;
        }
        echo (json_encode($result));
    }