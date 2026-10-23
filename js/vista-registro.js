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
  window.location.href = 'productos.html';
}

formulario.addEventListener('submit', manejarEnvioRegistro);
const productos = [];

document.getElementById('form-producto').addEventListener('submit', (e) => {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const codigo = document.getElementById('codigo').value;
  const precio = document.getElementById('precio').value;
  const file = document.getElementById('imagen').files[0];

  // Crear URL temporal para la imagen
  const urlImagen = URL.createObjectURL(file);

  const producto = { nombre, codigo, precio, imagen: urlImagen };
  productos.push(producto);

  mostrarProductos(productos);
});
