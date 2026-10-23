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
  guardarAviso("Producto «" + datos.nombre + "» añadido correctamente.");
  window.location.href = "productos.html";
}

<<<<<<< HEAD:js/vista-registro.js
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
=======
formulario.addEventListener("submit", manejarEnvioRegistro);
>>>>>>> 4ceb6d30fc513a74c346e794b4c687b4c85feaf1:js/controladores/vista-registro.js
