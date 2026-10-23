function crearMensajeDisponibilidad(producto) {
  return estaMarcadoDisponible(producto)
    ? "«" + producto.nombre + "» está disponible de nuevo."
    : "«" + producto.nombre + "» quedó como no disponible.";
}

function manejarClicDisponibilidad(evento) {
  const botonEstado = evento.target.closest("[data-id-disponibilidad]");
  if (!botonEstado) return;

  const productoActualizado = alternarDisponibilidad(botonEstado.dataset.idDisponibilidad);
  actualizarListado();
  mostrarAviso(crearMensajeDisponibilidad(productoActualizado));
}

cuerpoTabla.addEventListener("click", manejarClicDisponibilidad);
