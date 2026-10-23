function calcularDigitoVerificador(primeros12Digitos) {
  const suma = primeros12Digitos.split('').reduce((total, digito, posicion) => {
    const peso = posicion % 2 === 0 ? 1 : 3;
    return total + Number(digito) * peso;
  }, 0);
  return (10 - (suma % 10)) % 10;
}

function esEnteroMayorOIgualA(numero, minimo) {
  return Number.isInteger(numero) && numero >= minimo;
}

function tieneFormatoEan13(codigoBarras) {
  return /^\d{13}$/.test(codigoBarras);
}

function tieneDigitoVerificadorCorrecto(codigoBarras) {
  return (
    calcularDigitoVerificador(codigoBarras.slice(0, 12)) ===
    Number(codigoBarras[12])
  );
}

function esEan13Valido(codigoBarras) {
  return (
    tieneFormatoEan13(codigoBarras) &&
    tieneDigitoVerificadorCorrecto(codigoBarras)
  );
}

function validarCodigoBarras(codigoBarras, idActual) {
  if (codigoBarras === '') return 'El código de barras es obligatorio.';
  if (!tieneFormatoEan13(codigoBarras))
    return 'El código debe tener exactamente 13 dígitos.';
  if (!tieneDigitoVerificadorCorrecto(codigoBarras))
    return 'El dígito verificador del código no es válido.';
  if (existeCodigoBarras(codigoBarras, idActual))
    return 'Ya existe un producto con este código.';
  return '';
}

function validarPrecio(precio) {
  if (precio === null) return 'El precio es obligatorio.';
  if (!esEnteroMayorOIgualA(precio, 1))
    return 'El precio debe ser un entero mayor que cero.';
  return '';
}

function validarCantidad(cantidad) {
  if (cantidad === null) return 'La cantidad disponible es obligatoria.';
  if (!esEnteroMayorOIgualA(cantidad, 0))
    return 'La cantidad debe ser un entero mayor o igual a cero.';
  return '';
}

function validarStockMinimo(stockMinimo) {
  return esEnteroMayorOIgualA(stockMinimo, 0)
    ? ''
    : 'El stock mínimo debe ser un entero mayor o igual a cero.';
}

function validarProducto(datos, idActual = null) {
  const errores = {
    codigoBarras: validarCodigoBarras(datos.codigoBarras, idActual),
    nombre: datos.nombre === '' ? 'El nombre del producto es obligatorio.' : '',
    categoria: datos.categoria === '' ? 'Selecciona una categoría.' : '',
    precio: validarPrecio(datos.precio),
    cantidad: validarCantidad(datos.cantidad),
    stockMinimo: validarStockMinimo(datos.stockMinimo),
    unidadMedida:
      datos.unidadMedida === '' ? 'Selecciona una unidad de medida.' : '',
  };
  return Object.fromEntries(
    Object.entries(errores).filter(([, mensaje]) => mensaje !== ''),
  );
}
