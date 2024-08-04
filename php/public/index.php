<?php

include_once '../controllers/AuthController.php';

header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($data['matricula']) && isset($data['password'])) {
    $authController = new AuthController();
    $response = $authController->login($data['matricula'], $data['password']);
    echo json_encode($response);
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request']);
}
