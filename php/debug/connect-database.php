<?php

function connectToDatabase()
{

    $host = "aws-0-us-west-1.pooler.supabase.com";
    $dbName = "postgres";
    $userName = "postgres.ontjyfhqgihcyrhskusw";
    $password = "Febrero2@81";
    $port = 6543;

    try {
        $conn = new PDO("pgsql:host= $host;port=$port;dbname=$dbName", $userName, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        return $conn;
    } catch (PDOException $th) {
        die($th->getMessage());
    }

    return null;
}
