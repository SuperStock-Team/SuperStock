// Muestra y limpia mensajes de error debajo de un campo del formulario.

function limpiarErrorDeCampo(campo) {
  campo.classList.remove("campo--error");
  campo.querySelectorAll(".campo__error").forEach((mensaje) => mensaje.remove());
}

function limpiarErrores() {
  document.querySelectorAll(".campo").forEach(limpiarErrorDeCampo);
}

function mostrarErrorEnCampo(entrada, mensaje) {
  const parrafoError = document.createElement("p");
  parrafoError.className = "campo__error";
  parrafoError.textContent = mensaje;
  entrada.closest(".campo").classList.add("campo--error");
  entrada.after(parrafoError);
}
