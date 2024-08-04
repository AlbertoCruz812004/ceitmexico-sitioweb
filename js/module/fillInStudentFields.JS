export const fillInStudentFields = (data) => {
  document.getElementById(
    "nombre"
  ).innerHTML += `${data.nombre} ${data.apellido}`;
  document.getElementById("matricula").innerHTML += data.matricula;
  document.getElementById("horario").innerHTML += `${data.horarioI.substring(
    0,
    5
  )} - ${data.horarioF.substring(0, 5)}`;
  document.getElementById("curso").innerHTML += data.curso;
};
