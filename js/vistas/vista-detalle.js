const idProducto = new URLSearchParams(window.location.search).get("id");

function escribirTexto(idElemento, texto) {
  document.getElementById(idElemento).textContent = texto;
}

function mostrarEstadoStock(producto) {
  const etiqueta = document.getElementById("detalle-estado");
  const estado = calcularEstadoStock(producto);
  etiqueta.textContent = estado;
  etiqueta.className = "etiqueta " + claseEtiquetaStock(estado);
}

function mostrarDatosProducto(producto) {
  escribirTexto("detalle-nombre", producto.nombre);
  escribirTexto("detalle-descripcion", producto.descripcion || "Sin descripción.");
  escribirTexto("detalle-precio", formatearPrecio(producto.precio));
  escribirTexto("detalle-unidad", "por " + producto.unidadMedida);
  escribirTexto("detalle-codigo", producto.codigoBarras);
  escribirTexto("detalle-categoria", producto.categoria);
  escribirTexto("detalle-cantidad", producto.cantidad + " " + producto.unidadMedida);
  escribirTexto("detalle-minimo", producto.stockMinimo);
  escribirTexto("detalle-vencimiento", formatearFecha(producto.fechaVencimiento));
  escribirTexto("detalle-proveedor", producto.proveedor || "Sin proveedor");
  escribirTexto("detalle-codigo-texto", producto.codigoBarras);
}

function mostrarCodigoBarras(producto) {
  document.getElementById("detalle-barras").innerHTML = generarSvgEan13(producto.codigoBarras);
}

function mostrarImagenProducto(producto) {
  const imagen = document.getElementById("detalle-imagen");
  imagen.hidden = !producto.imagen;
  if (producto.imagen) {
    imagen.src = producto.imagen;
    imagen.alt = "Imagen de " + producto.nombre;
  }
}

function mostrarDetalleProducto(producto) {
  mostrarDatosProducto(producto);
  mostrarEstadoStock(producto);
  mostrarImagenProducto(producto);
  mostrarCodigoBarras(producto);
  document.getElementById("enlace-editar").href = "editar-producto.html?id=" + producto.id;
}

function mostrarProductoNoEncontrado() {
  document.getElementById("contenido-detalle").hidden = true;
  document.getElementById("mensaje-no-encontrado").hidden = false;
}

const productoSeleccionado = buscarProductoPorId(idProducto);

if (productoSeleccionado) {
  mostrarDetalleProducto(productoSeleccionado);
} else {
  mostrarProductoNoEncontrado();
}