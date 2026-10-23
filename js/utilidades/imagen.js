const LADO_MAXIMO_IMAGEN_PX = 400;
const CALIDAD_JPEG = 0.8;
const TAMANO_MAXIMO_ARCHIVO_BYTES = 5 * 1024 * 1024;

function validarArchivoImagen(archivo) {
  if (!archivo.type.startsWith("image/")) {
    return "El archivo debe ser una imagen (JPG, PNG o WEBP).";
  }
  if (archivo.size > TAMANO_MAXIMO_ARCHIVO_BYTES) {
    return "La imagen pesa más de 5 MB. Elige una más liviana.";
  }
  return "";
}

function leerArchivoComoUrl(archivo) {
  return new Promise((resolver, rechazar) => {
    const lector = new FileReader();
    lector.onload = () => resolver(lector.result);
    lector.onerror = () => rechazar(lector.error);
    lector.readAsDataURL(archivo);
  });
}

function cargarImagen(url) {
  return new Promise((resolver, rechazar) => {
    const imagen = new Image();
    imagen.onload = () => resolver(imagen);
    imagen.onerror = () => rechazar(new Error("No se pudo leer la imagen."));
    imagen.src = url;
  });
}

function calcularTamanoReducido(ancho, alto) {
  const escala = Math.min(1, LADO_MAXIMO_IMAGEN_PX / Math.max(ancho, alto));
  return { ancho: Math.round(ancho * escala), alto: Math.round(alto * escala) };
}

// Reduce la imagen para que ocupe poco espacio en localStorage (límite ~5 MB).
function reducirImagen(imagen) {
  const { ancho, alto } = calcularTamanoReducido(imagen.naturalWidth, imagen.naturalHeight);
  const lienzo = document.createElement("canvas");
  lienzo.width = ancho;
  lienzo.height = alto;

  const contexto = lienzo.getContext("2d");
  contexto.fillStyle = "#ffffff";
  contexto.fillRect(0, 0, ancho, alto);
  contexto.drawImage(imagen, 0, 0, ancho, alto);

  return lienzo.toDataURL("image/jpeg", CALIDAD_JPEG);
}

// Devuelve un texto (data URL) que sí se puede guardar en localStorage.
async function convertirArchivoAUrlGuardable(archivo) {
  const urlOriginal = await leerArchivoComoUrl(archivo);
  const imagen = await cargarImagen(urlOriginal);
  return reducirImagen(imagen);
}
