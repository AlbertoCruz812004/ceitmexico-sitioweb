<?php

include 'connect-database.php';

$conn = connectToDatabase();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $matricula = $_POST["matricula"];
    $password = $_POST["password"];


    $query = "SELECT persona.nombre_persona, persona.apellidos, grupo.horario_inicio ,grupo.horario_fin ,curso.nombre FROM alumno
    INNER JOIN persona ON persona.id = alumno.id_persona
    INNER JOIN grupo ON grupo.id = alumno.id_grupo
    INNER JOIN curso ON curso.id = grupo.id_curso
    WHERE alumno.matricula = :matricula AND alumno.password = :password";

    $stmt = $conn->prepare($query);
    $stmt->bindParam(":matricula", $matricula, PDO::PARAM_STR);
    $stmt->bindParam(":password", $password, PDO::PARAM_STR);
    $stmt->execute();

    if ($stmt->rowCount() > 0) {
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        session_start();
        $_SESSION['alumno'] = [
            'matricula' => $matricula,
            'nombre' => $row["nombre_persona"],
            'apellido' => $row["apellidos"],
            'horarioI' => $row["horario_inicio"],
            'horarioF' => $row["horario_fin"],
            'curso' => $row["nombre"],
        ];

        $_SESSION['matricula'] = $matricula;

        header("Location: /templates/student-profile.html");
        exit;
    } else {
        error_log('Alumno no encontrado');
    }
}

$conn = null;
