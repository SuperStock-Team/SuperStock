const cuerpoTabla = document.getElementById("cuerpo-tabla");
const mensajeVacio = document.getElementById("mensaje-vacio");

const ICONOS = {
  imagen: '<svg class="icono" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="1.5"/><path d="M21 16l-5-5-9 9"/></svg>',
  ver: '<svg class="icono" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>',
  editar: '<svg class="icono" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 20l1-5L16 4l4 4L9 19z"/></svg>',
  eliminar: '<svg class="icono" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/></svg>',
};

function crearCelda(clases, texto) {
  const celda = document.createElement("td");
  celda.className = clases;
  celda.textContent = texto;
  return celda;
}

function crearMiniatura(producto) {
  if (producto.imagen) {
    const imagen = document.createElement("img");
    imagen.className = "miniatura";
    imagen.src = producto.imagen;
    imagen.alt = "Imagen de " + producto.nombre;
    imagen.loading = "lazy";
    return imagen;
  }
  const espacioVacio = document.createElement("span");
  espacioVacio.className = "miniatura miniatura--vacia";
  espacioVacio.innerHTML = ICONOS.imagen;
  return espacioVacio;
}

function crearTextoProducto(producto) {
  const contenedor = document.createElement("div");
  contenedor.className = "producto-texto";

  const enlaceNombre = document.createElement("a");
  enlaceNombre.className = "producto-nombre";
  enlaceNombre.href = "detalle-producto.html?id=" + producto.id;
  enlaceNombre.textContent = producto.nombre;
  contenedor.append(enlaceNombre);

  if (producto.descripcion) {
    const descripcion = document.createElement("p");
    descripcion.className = "producto-descripcion";
    descripcion.textContent = producto.descripcion;
    contenedor.append(descripcion);
  }

  const existencias = document.createElement("span");
  existencias.className = "texto-suave";
  existencias.textContent = producto.cantidad + " " + producto.unidadMedida;
  contenedor.append(existencias);

  return contenedor;
}

function crearCeldaProducto(producto) {
  const celda = document.createElement("td");
  celda.className = "col-producto";

  const envoltorio = document.createElement("div");
  envoltorio.className = "producto-celda";
  envoltorio.append(crearMiniatura(producto), crearTextoProducto(producto));

  celda.append(envoltorio);
  return celda;
}

// La etiqueta de estado es un botón: un clic cambia entre disponible y no disponible.
function crearEtiquetaEstado(producto) {
  const estado = calcularEstadoStock(producto);
  const etiqueta = document.createElement("button");
  etiqueta.type = "button";
  etiqueta.className = "etiqueta etiqueta--boton " + claseEtiquetaStock(estado);
  etiqueta.textContent = estado;

  if (estado === ESTADO_AGOTADO) {
    etiqueta.disabled = true;
    etiqueta.title = "Sin existencias: aumenta la cantidad desde Editar.";
  } else {
    etiqueta.dataset.idDisponibilidad = producto.id;
    etiqueta.title = "Clic para cambiar la disponibilidad";
  }
  return etiqueta;
}

function crearCeldaStock(producto) {
  const celda = document.createElement("td");
  celda.className = "col-stock";
  celda.append(crearEtiquetaEstado(producto));
  return celda;
}

function crearEnlaceAccion(icono, destino, descripcion) {
  const enlace = document.createElement("a");
  enlace.className = "accion";
  enlace.href = destino;
  enlace.setAttribute("aria-label", descripcion);
  enlace.innerHTML = icono;
  return enlace;
}

function crearBotonEliminar(producto) {
  const boton = document.createElement("button");
  boton.type = "button";
  boton.className = "accion accion--peligro";
  boton.dataset.idProducto = producto.id;
  boton.setAttribute("aria-label", "Eliminar " + producto.nombre);
  boton.innerHTML = ICONOS.eliminar;
  return boton;
}

function crearCeldaAcciones(producto) {
  const celda = document.createElement("td");
  celda.className = "col-acciones acciones";
  celda.append(
    crearEnlaceAccion(ICONOS.ver, "detalle-producto.html?id=" + producto.id, "Ver " + producto.nombre),
    crearEnlaceAccion(ICONOS.editar, "editar-producto.html?id=" + producto.id, "Editar " + producto.nombre),
    crearBotonEliminar(producto)
  );
  return celda;
}

function crearFilaProducto(producto) {
  const fila = document.createElement("tr");
  fila.append(
    crearCeldaProducto(producto),
    crearCelda("col-codigo codigo", producto.codigoBarras),
    crearCelda("col-categoria", producto.categoria),
    crearCelda("col-precio precio", formatearPrecio(producto.precio)),
    crearCeldaStock(producto),
    crearCeldaAcciones(producto)
  );
  return fila;
}

function mostrarProductos(productos) {
  const filas = productos.map(crearFilaProducto);
  cuerpoTabla.replaceChildren(...filas);
  mensajeVacio.hidden = productos.length > 0;
}

const campoBuscador = document.getElementById("buscador");

function actualizarListado() {
  const productosFiltrados = filtrarProductos(obtenerProductos(), campoBuscador.value);
  mostrarProductos(productosFiltrados);
}

campoBuscador.addEventListener("input", actualizarListado);

actualizarListado();
mostrarAvisoPendiente();
