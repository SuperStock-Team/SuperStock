const ventanaConfirmacion = document.getElementById("modal-eliminar");
const textoNombreProducto = document.getElementById("modal-nombre-producto");
const botonCancelar = document.getElementById("modal-cancelar");
const botonConfirmar = document.getElementById("modal-confirmar");

let idProductoPorEliminar = null;

function abrirConfirmacion(idProducto) {
  const producto = buscarProductoPorId(idProducto);
  idProductoPorEliminar = idProducto;
  textoNombreProducto.textContent = "«" + producto.nombre + "»";
  ventanaConfirmacion.hidden = false;
  botonCancelar.focus();
}

function cerrarConfirmacion() {
  idProductoPorEliminar = null;
  ventanaConfirmacion.hidden = true;
}

function confirmarEliminacion() {
  eliminarProducto(idProductoPorEliminar);
  cerrarConfirmacion();
  actualizarListado();
}

function manejarClicTabla(evento) {
  const botonEliminar = evento.target.closest("[data-id-producto]");
  if (botonEliminar) {
    abrirConfirmacion(botonEliminar.dataset.idProducto);
  }
}

function manejarClicFondo(evento) {
  if (evento.target === ventanaConfirmacion) {
    cerrarConfirmacion();
  }
}

function manejarTecla(evento) {
  if (evento.key === "Escape" && !ventanaConfirmacion.hidden) {
    cerrarConfirmacion();
  }
}

cuerpoTabla.addEventListener("click", manejarClicTabla);
botonCancelar.addEventListener("click", cerrarConfirmacion);
botonConfirmar.addEventListener("click", confirmarEliminacion);
ventanaConfirmacion.addEventListener("click", manejarClicFondo);
document.addEventListener("keydown", manejarTecla);