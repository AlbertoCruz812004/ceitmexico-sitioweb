export const obtainQualifications = async (matricula) => {
  try {
    const response = await fetch("/php/debug/calificaciones.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `matricula=${encodeURIComponent(matricula)}`,
    });

    const data = await response.json();

    if (data.status === "success") {
      return data;
    } else {
      console.error(data.message);
    }
  } catch (error) {
    console.error("Error al obtener las calificaciones:", error);
  }
};
