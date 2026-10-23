function generarId() {
  return Date.now().toString();
}

function buscarProductoPorId(id) {
  return obtenerProductos().find((producto) => producto.id === id);
}

function crearProducto(datosProducto) {
  const productos = obtenerProductos();
  const nuevoProducto = { disponible: true, ...datosProducto, id: generarId() };
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

const ESTADO_DISPONIBLE = "Disponible";
const ESTADO_NO_DISPONIBLE = "No disponible";
const ESTADO_AGOTADO = "Agotado";

// Los productos guardados antes de existir este dato se consideran disponibles.
function estaMarcadoDisponible(producto) {
  return producto.disponible !== false;
}

function calcularEstadoStock(producto) {
  if (!estaMarcadoDisponible(producto)) return ESTADO_NO_DISPONIBLE;
  return producto.cantidad === 0 ? ESTADO_AGOTADO : ESTADO_DISPONIBLE;
}

function alternarDisponibilidad(id) {
  const producto = buscarProductoPorId(id);
  const cambios = { disponible: !estaMarcadoDisponible(producto) };
  actualizarProducto(id, cambios);
  return { ...producto, ...cambios };
}

function existeCodigoBarras(codigoBarras, idAExcluir = null) {
  return obtenerProductos().some(
    (producto) => producto.codigoBarras === codigoBarras && producto.id !== idAExcluir
  );
}