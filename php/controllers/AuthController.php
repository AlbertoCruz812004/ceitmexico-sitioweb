<?php

include_once '../config/Database.php';
include_once '../models/User.php';

class AuthController
{
    private $db;
    private $user;

    public function __construct()
    {
        $database = new Database();
        $this->db = $database->connect();
        $this->user = new User($this->db);
    }

    public function login($matricula, $password)
    {
        $this->user->matricula = $matricula;
        $this->user->password = $password;

        $userId = $this->user->login();

        if ($userId) {
            return ['success' => true, 'matricula' => $userId];
        } else {
            return ['success' => false, 'message' => 'Invalid login credentials'];
        }
    }
}
