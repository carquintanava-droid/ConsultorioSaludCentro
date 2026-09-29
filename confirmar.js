let datos = 
sessionStorage.getItem("solicitud");
let resultado = 
document.getElementById("resultado");

if (datos != null) {
    let solicitud = JSON.parse(datos);
    resultado.innerHTML = 

    resultado = 
        "<p><strong>Nombre:</strong>>" + solicitud.nombre + "</p>" 
        +"<p><strong>Especialidad:</strong>"+ +solicitud.especialidad +"</p>"
        +"<p><strong>Fecha:</strong>+solicitud.fecha + </p>" 
        +"<p><strong>Horario:</strong> + solicitud.horario +</p>";
} else {
    resultado.innerHTML =
        "<p> No existen datos de una solicitud.</p>+    
        "<a href ='index.html'> Regresar al formulario </a>"; 
}
