const idProductoEditado = new URLSearchParams(window.location.search).get('id');
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
<<<<<<< HEAD
  guardarAviso("Producto «" + datos.nombre + "» actualizado correctamente.");
  window.location.href = "productos.html";
=======

  mostrarAviso('Producto actualizado correctamente.');

  window.location.href = 'productos.html';
>>>>>>> 03fba78bab7faafc11eab1053a48bae273e3cc54
}

function mostrarProductoNoEncontrado() {
  formulario.hidden = true;
  document.getElementById('mensaje-no-encontrado').hidden = false;
}

if (productoEditado) {
  rellenarFormulario(productoEditado);
  actualizarVistaPrevia();
  formulario.addEventListener('submit', manejarEnvioEdicion);
} else {
  mostrarProductoNoEncontrado();
}
