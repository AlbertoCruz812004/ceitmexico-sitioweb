<?php

class User
{
    private $conn;

    public $matricula;
    public $name;
    public $itinerary;
    public $password;

    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function login()
    {
        $query = "SELECT matricula, name, itinerary, password_student FROM student INNER JOIN person ON person.curp = student.curp WHERE matricula = :matricula";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":matricula", $this->matricula);
        $stmt->execute();

        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($row && password_verify($this->password, $row['password_student'])) {
            return $row['matricula'];
        } else {
            return false;
        }
    }
}
