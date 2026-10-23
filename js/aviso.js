function mostrarAviso(mensaje) {
  const aviso = document.createElement('div');
  aviso.textContent = mensaje;
  aviso.style.backgroundColor = '#4CAF50'; //verde
  aviso.style.color = 'white';
  aviso.style.padding = '10px';
  aviso.style.margin = '10px 0';
  aviso.style.borderRadius = '5px';
  aviso.style.textAlign = 'center';

  document.body.prepend(aviso);

  setTimeout(() => {
    aviso.remove();
  }, 3000);
}
