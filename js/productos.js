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
    producto.id === id ? { ...producto, ...datosNuevos, id } : producto,
  );
  guardarProductos(productosActualizados);
}

function eliminarProducto(id) {
  const productosRestantes = obtenerProductos().filter(
    (producto) => producto.id !== id,
  );
  guardarProductos(productosRestantes);
}

function normalizarTexto(texto) {
  return texto
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

function filtrarProductos(productos, textoBusqueda) {
  const texto = normalizarTexto(textoBusqueda);
  return productos.filter((producto) =>
    [producto.nombre, producto.codigoBarras, producto.categoria].some((campo) =>
      normalizarTexto(campo).includes(texto),
    ),
  );
}

function calcularEstadoStock(producto) {
  return producto.cantidad === 0 ? 'Agotado' : 'Disponible';
}

function existeCodigoBarras(codigoBarras, idAExcluir = null) {
  return obtenerProductos().some(
    (producto) =>
      producto.codigoBarras === codigoBarras && producto.id !== idAExcluir,
  );
}
function mostrarProductos(lista) {
  const cuerpoTabla = document.getElementById('cuerpo-tabla');
  cuerpoTabla.innerHTML = '';

  lista.forEach((p) => {
    const fila = document.createElement('tr');

    fila.innerHTML = `
      <td><img src="${p.imagen}" alt="${p.nombre}" class="producto-img"></td>
      <td>${p.nombre}</td>
      <td>${p.codigoBarras}</td>
      <td>${p.categoria}</td>
      <td>$${p.precio}</td>
      <td>${p.cantidad} ${p.unidad}</td>
      <td>${p.estado}</td>
      <td>
        <!-- aquí van tus botones de acciones -->
      </td>
    `;

    cuerpoTabla.appendChild(fila);
  });
}
