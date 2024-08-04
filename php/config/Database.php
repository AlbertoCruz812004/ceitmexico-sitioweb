<?php

class Database
{

    private $host = "";
    private $username = "";
    private $password = "";
    private $name_database = "";

    private $conn;

    public function connect()
    {
        $this->conn = null;

        try {
            $this->conn = new PDO("pgsql:host=$this->host;dbname=$this->name_database", $this->username, $this->password);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            echo $e->getMessage();
        }

        return $this->conn;
    }
}
