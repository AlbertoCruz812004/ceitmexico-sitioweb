<?php

class SessionCalificaciones {
    public function verifySession()
    {
        session_start();

        if (!isset($_SESSION['alumno'])) {
            http_response_code(401);
            exit();
        } else {
            $this->sendUserDataAsJson();
        }
    }

    private function sendUserDataAsJson()
    {
        http_response_code(200);
        header('Content-Type: application/json');
        echo json_encode($_SESSION['alumno']);
        exit();
    }
}