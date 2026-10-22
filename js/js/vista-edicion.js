const idProductoEditado = new URLSearchParams(window.location.search).get("id");
const productoEditado = buscarProductoPorId(idProductoEditado);

function manejarEnvioEdicion(evento) {
  evento.preventDefault();
  limpiarErrores();

  const datos = leerDatosFormulario();
  const errores = validarProducto(datos, idProductoEditado);

  if (Object.keys(errores).length > 0) {
    mostrarErrores(errores);
    return;
  }

  actualizarProducto(idProductoEditado, datos);
  window.location.href = "productos.html";
}

function mostrarProductoNoEncontrado() {
  formulario.hidden = true;
  document.getElementById("mensaje-no-encontrado").hidden = false;
}

if (productoEditado) {
  rellenarFormulario(productoEditado);
  actualizarVistaPrevia();
  formulario.addEventListener("submit", manejarEnvioEdicion);
} else {
  mostrarProductoNoEncontrado();
}