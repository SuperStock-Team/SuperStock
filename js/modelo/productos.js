function generarId() {
  return Date.now().toString();
}

function buscarProductoPorId(id) {
  return obtenerProductos().find((producto) => producto.id === id);
}

function crearProducto(datosProducto) {
  const productos = obtenerProductos();
  const nuevoProducto = { ...datosProducto, id: generarId() };
  productos.push(nuevoProducto);
  guardarProductos(productos);
  return nuevoProducto;
}

function actualizarProducto(id, datosNuevos) {
  const productosActualizados = obtenerProductos().map((producto) =>
    producto.id === id ? { ...producto, ...datosNuevos, id } : producto
  );
  guardarProductos(productosActualizados);
}

function eliminarProducto(id) {
  const productosRestantes = obtenerProductos().filter(
    (producto) => producto.id !== id
  );
  guardarProductos(productosRestantes);
}

function normalizarTexto(texto) {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function filtrarProductos(productos, textoBusqueda) {
  const texto = normalizarTexto(textoBusqueda);
  return productos.filter((producto) =>
    [producto.nombre, producto.codigoBarras, producto.categoria].some(
      (campo) => normalizarTexto(campo).includes(texto)
    )
  );
}

function calcularEstadoStock(producto) {
  return producto.cantidad === 0 ? "Agotado" : "Disponible";
}

function existeCodigoBarras(codigoBarras, idAExcluir = null) {
  return obtenerProductos().some(
    (producto) => producto.codigoBarras === codigoBarras && producto.id !== idAExcluir
  );
}