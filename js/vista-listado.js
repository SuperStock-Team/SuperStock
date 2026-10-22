<<<<<<< HEAD
const cuerpoTabla = document.getElementById("cuerpo-tabla");
const mensajeVacio = document.getElementById("mensaje-vacio");

const ICONOS = {
  ver: '<svg class="icono" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>',
  editar: '<svg class="icono" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 20l1-5L16 4l4 4L9 19z"/></svg>',
  eliminar: '<svg class="icono" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/></svg>',
};

function crearCelda(clases, texto) {
  const celda = document.createElement("td");
=======
const cuerpoTabla = document.getElementById('cuerpo-tabla');
const mensajeVacio = document.getElementById('mensaje-vacio');

const ICONOS = {
  ver: '<svg class="icono" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>',
  editar:
    '<svg class="icono" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 20l1-5L16 4l4 4L9 19z"/></svg>',
  eliminar:
    '<svg class="icono" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/></svg>',
};

function crearCelda(clases, texto) {
  const celda = document.createElement('td');
>>>>>>> 03fba78bab7faafc11eab1053a48bae273e3cc54
  celda.className = clases;
  celda.textContent = texto;
  return celda;
}

function crearCeldaProducto(producto) {
<<<<<<< HEAD
  const celda = document.createElement("td");
  celda.className = "col-producto";

  const enlaceNombre = document.createElement("a");
  enlaceNombre.className = "producto-nombre";
  enlaceNombre.href = "detalle-producto.html?id=" + producto.id;
  enlaceNombre.textContent = producto.nombre;

  const existencias = document.createElement("span");
  existencias.className = "texto-suave";
  existencias.textContent = producto.cantidad + " " + producto.unidadMedida;
=======
  const celda = document.createElement('td');
  celda.className = 'col-producto';

  const enlaceNombre = document.createElement('a');
  enlaceNombre.className = 'producto-nombre';
  enlaceNombre.href = 'detalle-producto.html?id=' + producto.id;
  enlaceNombre.textContent = producto.nombre;

  const existencias = document.createElement('span');
  existencias.className = 'texto-suave';
  existencias.textContent = producto.cantidad + ' ' + producto.unidadMedida;
>>>>>>> 03fba78bab7faafc11eab1053a48bae273e3cc54

  celda.append(enlaceNombre, existencias);
  return celda;
}

function crearCeldaStock(producto) {
<<<<<<< HEAD
  const celda = document.createElement("td");
  celda.className = "col-stock";

  const estado = calcularEstadoStock(producto);
  const etiqueta = document.createElement("span");
  etiqueta.className = "etiqueta etiqueta--" + estado.toLowerCase();
=======
  const celda = document.createElement('td');
  celda.className = 'col-stock';

  const estado = calcularEstadoStock(producto);
  const etiqueta = document.createElement('span');
  etiqueta.className = 'etiqueta etiqueta--' + estado.toLowerCase();
>>>>>>> 03fba78bab7faafc11eab1053a48bae273e3cc54
  etiqueta.textContent = estado;

  celda.append(etiqueta);
  return celda;
}

function crearEnlaceAccion(icono, destino, descripcion) {
<<<<<<< HEAD
  const enlace = document.createElement("a");
  enlace.className = "accion";
  enlace.href = destino;
  enlace.setAttribute("aria-label", descripcion);
=======
  const enlace = document.createElement('a');
  enlace.className = 'accion';
  enlace.href = destino;
  enlace.setAttribute('aria-label', descripcion);
>>>>>>> 03fba78bab7faafc11eab1053a48bae273e3cc54
  enlace.innerHTML = icono;
  return enlace;
}

function crearBotonEliminar(producto) {
<<<<<<< HEAD
  const boton = document.createElement("button");
  boton.type = "button";
  boton.className = "accion accion--peligro";
  boton.dataset.idProducto = producto.id;
  boton.setAttribute("aria-label", "Eliminar " + producto.nombre);
=======
  const boton = document.createElement('button');
  boton.type = 'button';
  boton.className = 'accion accion--peligro';
  boton.dataset.idProducto = producto.id;
  boton.setAttribute('aria-label', 'Eliminar ' + producto.nombre);
>>>>>>> 03fba78bab7faafc11eab1053a48bae273e3cc54
  boton.innerHTML = ICONOS.eliminar;
  return boton;
}

function crearCeldaAcciones(producto) {
<<<<<<< HEAD
  const celda = document.createElement("td");
  celda.className = "col-acciones acciones";
  celda.append(
    crearEnlaceAccion(ICONOS.ver, "detalle-producto.html?id=" + producto.id, "Ver " + producto.nombre),
    crearEnlaceAccion(ICONOS.editar, "editar-producto.html?id=" + producto.id, "Editar " + producto.nombre),
    crearBotonEliminar(producto)
=======
  const celda = document.createElement('td');
  celda.className = 'col-acciones acciones';
  celda.append(
    crearEnlaceAccion(
      ICONOS.ver,
      'detalle-producto.html?id=' + producto.id,
      'Ver ' + producto.nombre,
    ),
    crearEnlaceAccion(
      ICONOS.editar,
      'editar-producto.html?id=' + producto.id,
      'Editar ' + producto.nombre,
    ),
    crearBotonEliminar(producto),
>>>>>>> 03fba78bab7faafc11eab1053a48bae273e3cc54
  );
  return celda;
}

function crearFilaProducto(producto) {
<<<<<<< HEAD
  const fila = document.createElement("tr");
  fila.append(
    crearCeldaProducto(producto),
    crearCelda("col-codigo codigo", producto.codigoBarras),
    crearCelda("col-categoria", producto.categoria),
    crearCelda("col-precio precio", formatearPrecio(producto.precio)),
    crearCeldaStock(producto),
    crearCeldaAcciones(producto)
=======
  const fila = document.createElement('tr');
  fila.append(
    crearCeldaProducto(producto),
    crearCelda('col-codigo codigo', producto.codigoBarras),
    crearCelda('col-categoria', producto.categoria),
    crearCelda('col-precio precio', formatearPrecio(producto.precio)),
    crearCeldaStock(producto),
    crearCeldaAcciones(producto),
>>>>>>> 03fba78bab7faafc11eab1053a48bae273e3cc54
  );
  return fila;
}

function mostrarProductos(productos) {
  const filas = productos.map(crearFilaProducto);
  cuerpoTabla.replaceChildren(...filas);
  mensajeVacio.hidden = productos.length > 0;
}

<<<<<<< HEAD
const campoBuscador = document.getElementById("buscador");

function actualizarListado() {
  const productosFiltrados = filtrarProductos(obtenerProductos(), campoBuscador.value);
  mostrarProductos(productosFiltrados);
}

campoBuscador.addEventListener("input", actualizarListado);

actualizarListado();
mostrarAvisoPendiente();
=======
const campoBuscador = document.getElementById('buscador');

function actualizarListado() {
  const productosFiltrados = filtrarProductos(
    obtenerProductos(),
    campoBuscador.value,
  );
  mostrarProductos(productosFiltrados);
}

campoBuscador.addEventListener('input', actualizarListado);

actualizarListado();
>>>>>>> 03fba78bab7faafc11eab1053a48bae273e3cc54
