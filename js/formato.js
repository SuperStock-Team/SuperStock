const MESES_ABREVIADOS = [
  'ene',
  'feb',
  'mar',
  'abr',
  'may',
  'jun',
  'jul',
  'ago',
  'sep',
  'oct',
  'nov',
  'dic',
];

function formatearPrecio(precio) {
  return '$ ' + precio.toLocaleString('es-CO', { useGrouping: 'always' });
}

function formatearFecha(fechaIso) {
  if (fechaIso === '') return 'Sin fecha';
  const [anio, mes, dia] = fechaIso.split('-');
  return `${Number(dia)} de ${MESES_ABREVIADOS[Number(mes) - 1]} de ${anio}`;
}
