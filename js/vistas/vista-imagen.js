const campoImagen = document.getElementById("imagen");
const contenedorImagenPrevia = document.getElementById("imagen-vista-previa");
const botonQuitarImagen = document.getElementById("imagen-quitar");
const TEXTO_SIN_IMAGEN = "Sin imagen";

// Texto (data URL) de la imagen elegida; "" significa que el producto no tiene imagen.
let imagenSeleccionada = "";

function obtenerImagenSeleccionada() {
  return imagenSeleccionada;
}

function crearElementoImagenPrevia(url) {
  const imagen = document.createElement("img");
  imagen.src = url;
  imagen.alt = "Vista previa de la imagen del producto";
  return imagen;
}

function mostrarImagenPrevia() {
  const hayImagen = imagenSeleccionada !== "";
  contenedorImagenPrevia.replaceChildren(
    hayImagen ? crearElementoImagenPrevia(imagenSeleccionada) : TEXTO_SIN_IMAGEN
  );
  botonQuitarImagen.hidden = !hayImagen;
}

function establecerImagenSeleccionada(url) {
  imagenSeleccionada = url;
  mostrarImagenPrevia();
}

function mostrarErrorImagen(mensaje) {
  campoImagen.value = "";
  mostrarErrorEnCampo(campoImagen, mensaje);
}

async function procesarArchivoElegido(archivo) {
  const mensajeError = validarArchivoImagen(archivo);
  if (mensajeError !== "") {
    mostrarErrorImagen(mensajeError);
    return;
  }
  try {
    establecerImagenSeleccionada(await convertirArchivoAUrlGuardable(archivo));
  } catch (error) {
    mostrarErrorImagen("No se pudo leer la imagen. Prueba con otra.");
  }
}

function manejarCambioImagen() {
  limpiarErrorDeCampo(campoImagen.closest(".campo"));
  const archivo = campoImagen.files[0];
  if (archivo) {
    procesarArchivoElegido(archivo);
  }
}

function manejarQuitarImagen() {
  campoImagen.value = "";
  limpiarErrorDeCampo(campoImagen.closest(".campo"));
  establecerImagenSeleccionada("");
}

campoImagen.addEventListener("change", manejarCambioImagen);
botonQuitarImagen.addEventListener("click", manejarQuitarImagen);
mostrarImagenPrevia();
