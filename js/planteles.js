function buttonActive(idButton) {
  const botones = document.querySelectorAll(".btn");
  const button = document.getElementById(idButton);

  botones.forEach((boton) => {
    boton.classList.remove("active");
  });
  button.classList.add("active");
}

const PLANTELES = {
  altotonga: {
    nombre: "Altotonga",
    direccion: "Calle. Juarez #20 Interior 5, Col. Centro",
    telefono: "226-316-22-23",
    correo: "ceit_altver@outlook.com",
  },
  acayucan: {
    nombre: "Acayucan",
    direccion: "Calle. Juan de la Luz Enríquez #308 Col. Centro",
    telefono: "924-247-47-46",
    correo: "ceit_aca.ver@hotmail.com",
  },
  sanAndresTuxtla: {
    nombre: "San Andres Tuxtla",
    direccion: "Calle. 27 de Septiembre #11 Col. Ampliación Belen Grande",
    telefono: "294-688-03-70",
    correo: "ceit_sndres@outlook.com",
  },
  misantla: {
    nombre: "Misantla",
    direccion: "Calle. Jose M Morelos y Pavón 105-B Altos",
    telefono: "235-323-08-55",
    correo: "ceitmisantla_4@outlook.com",
  },
  minatitlan: {
    nombre: "Minatitlan",
    direccion: "Av. Miguel Hidalgo #32 Col. Centro",
    telefono: "922-223-94-65",
    correo: "ceit_minatitlan@outlook.com",
  },
  martinez: {
    nombre: "Martinez",
    direccion: "Ignacio Zaragoza 408 Altos Col. Centro",
    telefono: "232-373-70-58",
    correo: "ceitmartinez@outlook.com",
  },
};

const mostrarInformacion = (nombrePlantel, idButton) => {
  const button = document.getElementById("name");
  const informacionPlantel = PLANTELES[nombrePlantel];
  if (button.textContent !== informacionPlantel.nombre) {
    buttonActive(idButton);
    const informacionHTML = `
    <h2>CEIT <span id="name">${informacionPlantel.nombre}</span></h2>
    <p><strong>Dirección:</strong> ${informacionPlantel.direccion}</p>
    <p><strong>Teléfono:</strong> ${informacionPlantel.telefono}</p>
    <p><strong>Correo Electrónico:</strong> ${informacionPlantel.correo}</p>
  `;

    document.getElementById("information").innerHTML = informacionHTML;
  }
};
