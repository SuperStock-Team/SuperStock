function manejarEnvioRegistro(evento) {
  evento.preventDefault();
  limpiarErrores();

  const datos = leerDatosFormulario();
  const errores = validarProducto(datos);

  if (Object.keys(errores).length > 0) {
    mostrarErrores(errores);
    return;
  }

  crearProducto(datos);
  window.location.href = "productos.html";
}

formulario.addEventListener("submit", manejarEnvioRegistro);