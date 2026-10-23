const formulario = document.querySelector('.formulario');
const contenedorVistaPrevia = document.getElementById('vista-previa');
const TEXTO_VISTA_PREVIA =
  'La vista previa del código aparecerá cuando el código sea válido.';

// Relaciona cada dato del producto con el id de su campo en el HTML.
const IDS_CAMPOS = {
  codigoBarras: 'codigo',
  nombre: 'nombre',
  categoria: 'categoria',
  descripcion: 'descripcion',
  precio: 'precio',
  cantidad: 'cantidad',
  stockMinimo: 'minimo',
  unidadMedida: 'unidad',
  fechaVencimiento: 'vencimiento',
  proveedor: 'proveedor',
};

function leerTexto(idCampo) {
  return document.getElementById(idCampo).value.trim();
}

function leerNumero(idCampo) {
  const texto = leerTexto(idCampo);
  return texto === '' ? null : Number(texto);
}

function leerDatosFormulario() {
  return {
    codigoBarras: leerTexto(IDS_CAMPOS.codigoBarras),
    nombre: leerTexto(IDS_CAMPOS.nombre),
    categoria: leerTexto(IDS_CAMPOS.categoria),
    descripcion: leerTexto(IDS_CAMPOS.descripcion),
    precio: leerNumero(IDS_CAMPOS.precio),
    cantidad: leerNumero(IDS_CAMPOS.cantidad),
    stockMinimo: leerNumero(IDS_CAMPOS.stockMinimo) ?? 0,
    unidadMedida: leerTexto(IDS_CAMPOS.unidadMedida),
    fechaVencimiento: leerTexto(IDS_CAMPOS.fechaVencimiento),
    proveedor: leerTexto(IDS_CAMPOS.proveedor),
  };
}

function rellenarFormulario(producto) {
  Object.entries(IDS_CAMPOS).forEach(([claveDato, idCampo]) => {
    document.getElementById(idCampo).value = producto[claveDato] ?? '';
  });
}

function limpiarErrores() {
  document
    .querySelectorAll('.campo__error')
    .forEach((mensaje) => mensaje.remove());
  document
    .querySelectorAll('.campo--error')
    .forEach((campo) => campo.classList.remove('campo--error'));
}

function mostrarError(claveCampo, mensaje) {
  const entrada = document.getElementById(IDS_CAMPOS[claveCampo]);
  const parrafoError = document.createElement('p');
  parrafoError.className = 'campo__error';
  parrafoError.textContent = mensaje;
  entrada.closest('.campo').classList.add('campo--error');
  entrada.after(parrafoError);
}

function mostrarErrores(errores) {
  Object.entries(errores).forEach(([claveCampo, mensaje]) =>
    mostrarError(claveCampo, mensaje),
  );
}

function actualizarVistaPrevia() {
  const codigoBarras = leerTexto(IDS_CAMPOS.codigoBarras);
  if (esEan13Valido(codigoBarras)) {
    contenedorVistaPrevia.innerHTML = generarSvgEan13(codigoBarras);
  } else {
    contenedorVistaPrevia.textContent = TEXTO_VISTA_PREVIA;
  }
}

document
  .getElementById(IDS_CAMPOS.codigoBarras)
  .addEventListener('input', actualizarVistaPrevia);
