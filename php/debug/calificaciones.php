<?php

require_once 'connect-database.php';

function getCalificaciones($matricula)
{
    $conn = connectToDatabase();

    $query = "SELECT modulo.nombre_modulo, calificaciones.califacion AS calificacion FROM alumno
            INNER JOIN calificaciones ON calificaciones.matricula_alumno = alumno.matricula
            INNER JOIN modulo ON modulo.id = calificaciones.id_modulo
            WHERE alumno.matricula = :matricula";

    $stmt = $conn->prepare($query);
    $stmt->bindParam(":matricula", $matricula, PDO::PARAM_STR);
    $stmt->execute();

    $calificaciones = $stmt->fetchAll(PDO::FETCH_ASSOC);

    if (!empty($calificaciones)) {

        echo json_encode([
            'status' => 'success',
            'calificaciones' => $calificaciones
        ]);
    } else {
        echo json_encode([
            'status' => 'error',
            'message' => 'Alumno no encontrado'
        ]);
    }

    $conn = null;
}

if (isset($_POST['matricula'])) {
    getCalificaciones($_POST['matricula']);
} else {
    echo json_encode([
        'status' => 'error',
        'message' => 'No se proporcionó matrícula'
    ]);
}
