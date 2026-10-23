const CLAVE_PRODUCTOS = 'superstock_productos';

function obtenerProductos() {
  const textoGuardado = localStorage.getItem(CLAVE_PRODUCTOS);
  if (textoGuardado === null) {
    return [];
  }
  return JSON.parse(textoGuardado);
}

function guardarProductos(listaProductos) {
  const texto = JSON.stringify(listaProductos);
  localStorage.setItem(CLAVE_PRODUCTOS, texto);
}
