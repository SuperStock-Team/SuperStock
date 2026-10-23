const idProducto = new URLSearchParams(window.location.search).get('id');

function escribirTexto(idElemento, texto) {
  document.getElementById(idElemento).textContent = texto;
}

function mostrarEstadoStock(producto) {
  const etiqueta = document.getElementById('detalle-estado');
  const estado = calcularEstadoStock(producto);
  etiqueta.textContent = estado;
  etiqueta.className = 'etiqueta etiqueta--' + estado.toLowerCase();
}

function mostrarDatosProducto(producto) {
  escribirTexto('detalle-nombre', producto.nombre);
  escribirTexto(
    'detalle-descripcion',
    producto.descripcion || 'Sin descripción.',
  );
  escribirTexto('detalle-precio', formatearPrecio(producto.precio));
  escribirTexto('detalle-unidad', 'por ' + producto.unidadMedida);
  escribirTexto('detalle-codigo', producto.codigoBarras);
  escribirTexto('detalle-categoria', producto.categoria);
  escribirTexto(
    'detalle-cantidad',
    producto.cantidad + ' ' + producto.unidadMedida,
  );
  escribirTexto('detalle-minimo', producto.stockMinimo);
  escribirTexto(
    'detalle-vencimiento',
    formatearFecha(producto.fechaVencimiento),
  );
  escribirTexto('detalle-proveedor', producto.proveedor || 'Sin proveedor');
  escribirTexto('detalle-codigo-texto', producto.codigoBarras);
}

function mostrarCodigoBarras(producto) {
  document.getElementById('detalle-barras').innerHTML = generarSvgEan13(
    producto.codigoBarras,
  );
}

function mostrarDetalleProducto(producto) {
  mostrarDatosProducto(producto);
  mostrarEstadoStock(producto);
  mostrarCodigoBarras(producto);
  document.getElementById('enlace-editar').href =
    'editar-producto.html?id=' + producto.id;
}

function mostrarProductoNoEncontrado() {
  document.getElementById('contenido-detalle').hidden = true;
  document.getElementById('mensaje-no-encontrado').hidden = false;
}

const productoSeleccionado = buscarProductoPorId(idProducto);

if (productoSeleccionado) {
  mostrarDetalleProducto(productoSeleccionado);
} else {
  mostrarProductoNoEncontrado();
}
