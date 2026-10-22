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
<<<<<<< HEAD
  guardarAviso("Producto «" + datos.nombre + "» añadido correctamente.");
  window.location.href = "productos.html";
}

formulario.addEventListener("submit", manejarEnvioRegistro);
=======
  window.location.href = 'productos.html';
}

formulario.addEventListener('submit', manejarEnvioRegistro);
>>>>>>> 03fba78bab7faafc11eab1053a48bae273e3cc54
