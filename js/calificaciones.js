import { obtainQualifications } from "/js/module/obtainQualifications.js";
import { fillInQualificationFields } from "/js/module/fillInQualificationFields.js";

setTimeout(async () => {
  const matricula = document.getElementById("matricula").textContent;
  console.info(matricula);
  const data = await obtainQualifications(matricula);
  console.info(data);
  fillInQualificationFields(data);
}, 2500);

// Ejemplo de llamada a la función
