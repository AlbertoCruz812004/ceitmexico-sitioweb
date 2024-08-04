export const fillInQualificationFields = (data) => {
  const modulos = {
    "Introducción": "intro",
    "Access": "access",
    "Excel": "excel",
    "Word": "word",
    "Power Point": "powerpoint",
    "Visual Basic": "visual",
    "HTML": "html",
    "Java": "java",
    "Corel Draw": "corel",
    "Adobe": "adobe",
    "Análisis": "analisis"
  };

  // Inicializa todas las calificaciones a 0
  // for (const key in modulos) {
  //   document
  //     .querySelectorAll(`.${modulos[key]}`)
  //     .forEach((element) => (element.innerHTML = "0"));
  // }

  // Llena las calificaciones obtenidas
  for (const item of data.calificaciones) {
    const moduloClass = modulos[item.nombre_modulo];
    if (moduloClass) {
      document
        .querySelectorAll(`.${moduloClass}`)
        .forEach((element) => (element.innerHTML = `Calificación: ${item.calificacion}`));
    }
  }
};
