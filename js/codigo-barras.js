const CODIFICACION_L = [
  '0001101',
  '0011001',
  '0010011',
  '0111101',
  '0100011',
  '0110001',
  '0101111',
  '0111011',
  '0110111',
  '0001011',
];
const CODIFICACION_G = [
  '0100111',
  '0110011',
  '0011011',
  '0100001',
  '0011101',
  '0111001',
  '0000101',
  '0010001',
  '0001001',
  '0010111',
];
const CODIFICACION_R = [
  '1110010',
  '1100110',
  '1101100',
  '1000010',
  '1011100',
  '1001110',
  '1010000',
  '1000100',
  '1001000',
  '1110100',
];
const PARIDAD_PRIMER_DIGITO = [
  'LLLLLL',
  'LLGLGG',
  'LLGGLG',
  'LLGGGL',
  'LGLLGG',
  'LGGLLG',
  'LGGGLL',
  'LGLGLG',
  'LGLGGL',
  'LGGLGL',
];

function codificarEan13(codigo) {
  const digitos = codigo.split('').map(Number);
  const paridad = PARIDAD_PRIMER_DIGITO[digitos[0]];
  const izquierda = digitos
    .slice(1, 7)
    .map(
      (digito, posicion) =>
        (paridad[posicion] === 'L' ? CODIFICACION_L : CODIFICACION_G)[digito],
    )
    .join('');
  const derecha = digitos
    .slice(7)
    .map((digito) => CODIFICACION_R[digito])
    .join('');
  return '101' + izquierda + '01010' + derecha + '101';
}

function crearRectangulos(bits) {
  return [...bits.matchAll(/1+/g)]
    .map((barra) => {
      const inicio = barra.index;
      const esGuarda =
        inicio < 3 || (inicio >= 45 && inicio < 50) || inicio >= 92;
      const alto = esGuarda ? 70 : 64;
      return `<rect x="${inicio + 9}" y="0" width="${barra[0].length}" height="${alto}"/>`;
    })
    .join('');
}

function crearTextoSvg(x, texto) {
  return `<text x="${x}" y="84" font-family="monospace" font-size="11">${texto}</text>`;
}

function generarSvgEan13(codigo) {
  const rectangulos = crearRectangulos(codificarEan13(codigo));
  const numeros =
    crearTextoSvg(0, codigo[0]) +
    crearTextoSvg(15, codigo.slice(1, 7)) +
    crearTextoSvg(61, codigo.slice(7));
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 113 90" role="img" aria-label="Código de barras ${codigo}">
    <rect width="113" height="90" fill="#fff"/>
    <g fill="#0f172a">${rectangulos}${numeros}</g>
  </svg>`;
}
