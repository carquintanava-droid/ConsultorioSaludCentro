let horarios = ["09:00", "10:00", "11:00", "15:00", "16:00"];
let selectHorario = document.getElementById("horario");
for (let i = 0; i < horarios.length; i++) {
  let opcion = document.createElement("option");
  opcion.value = horarios[i];
  opcion.textContent = horarios[i];
  selectHorario.appendChild(opcion);
}
document.getElementById("formCita").addEventListener("submit", function(event) {
  event.preventDefault();
  let nombre = document.getElementById("nombre").value;
  let correo = document.getElementById("correo").value;
  let fecha = document.getElementById("fecha").value;
  let especialidad = document.getElementById("especialidad").value;
  let horario = document.getElementById("horario").value;

  document.getElementById("errorNombre").textContent = "";
  document.getElementById("errorCorreo").textContent = "";
  document.getElementById("errorFecha").textContent = "";
  document.getElementById("errorEspecialidad").textContent = "";
  document.getElementById("errorHorario").textContent = "";
 
  let correcto = true;
  let hoy = new Date();
  let año = hoy.getFullYear();
  let mes = String(hoy.getMonth() + 1).padStart(2, "0");
  let dia = String(hoy.getDate()).padStart(2, "0");
  let fechaHoy = año + "-" + mes + "-" + dia;

    if (nombre.length < 3 || nombre.length > 60) {
    document.getElementById("errorNombre").textContent =
      "El nombre debe tener entre 3 y 60 caracteres.";
    correcto = false;
  }
    if (correo == "" || !correo.includes("@")) {

    document.etElementById("errorCorreo").textContent =
      "Ingrese un correo valido.";
    correcto = false;
  }

    if (fecha == "") {
    document.getElementById("errorFecha").textContent =
      "Seleccione una fecha.";
    correcto = false;
  } else if (fecha < fechaHoy) {
    document.getElementById("errorFecha").textContent =
      "La fecha no puede ser anterior a hoy.";
    correcto = false;
  }
    if (especialidad == "") {
    document.getElementById("errorEspecialidad").textContent =

      "Seleccione una especialidad.";
    correcto = false;
  }
    if (horario == "") {
    document.getElementById("errorHorario").textContent =
      "Seleccione un horario.";
    correcto = false;
  } else if (horario == "11:00") {
    document.getElementById("errorHorario").textContent =
      "El horario 11:00 no esta disponible.";
    correcto = false;
  }
     if (correcto == true) {

    let solicitud = {
      nombre: nombre,
      correo: correo,
      fecha: fecha,
      especialidad: especialidad,
      horario: horario
    };
    sessionStorage.setItem(
      "solicitud",
      JSON.stringify(solicitud)
    );
    window.location.href = "confirmacion-cita.html";
  }
});
