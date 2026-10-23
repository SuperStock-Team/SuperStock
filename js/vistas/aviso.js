const CLAVE_AVISO = "superstock_aviso";
const DURACION_AVISO_MS = 3500;

// Guarda un mensaje para mostrarlo en la página siguiente (después de redirigir).
function guardarAviso(texto) {
  sessionStorage.setItem(CLAVE_AVISO, texto);
}

function mostrarAviso(texto) {
  const elementoAviso = document.getElementById("aviso");
  elementoAviso.textContent = texto;
  elementoAviso.hidden = false;
  setTimeout(() => {
    elementoAviso.hidden = true;
  }, DURACION_AVISO_MS);
}

function mostrarAvisoPendiente() {
  const texto = sessionStorage.getItem(CLAVE_AVISO);
  if (texto === null) return;
  sessionStorage.removeItem(CLAVE_AVISO);
  mostrarAviso(texto);
}
