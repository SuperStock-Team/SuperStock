# SuperStock

Sistema de inventario para supermercados y tiendas de barrio, con registro de códigos de barras EAN-13.
Hecho con HTML5, CSS3 y JavaScript puro. Los datos se guardan en `localStorage`.

**Integrantes:** George Mackleiff Torres Serrano y Jeremy Anthuan Pabón

## Cómo usarlo

Abre `index.html` en el navegador (doble clic). No necesita servidor ni instalación.

## Funciones

- Registrar, listar, editar y eliminar productos (CRUD), con datos que se conservan al recargar.
- Buscador que filtra el listado mientras se escribe (nombre, código o categoría, sin importar tildes).
- Validación del código EAN-13 (13 dígitos, dígito verificador correcto y código único).
- Vista previa y detalle con el código de barras dibujado.
- Confirmación antes de eliminar y avisos de operación exitosa.

## Estructura

```
SuperStock/
├── css/estilos.css
├── js/
│   ├── modelo/          datos y reglas (no tocan la pantalla)
│   │   ├── almacenamiento.js   único archivo que usa localStorage
│   │   ├── productos.js        CRUD, búsqueda y filtrado
│   │   └── validaciones.js     reglas de validación
│   ├── vistas/          actualizan la pantalla (DOM)
│   │   ├── vista-listado.js    tabla y buscador
│   │   ├── vista-detalle.js    detalle del producto
│   │   ├── vista-formulario.js leer, rellenar y mostrar errores del formulario
│   │   └── aviso.js            mensajes de confirmación
│   ├── controladores/   atienden los eventos y conectan modelo y vista
│   │   ├── vista-registro.js
│   │   ├── vista-edicion.js
│   │   └── vista-eliminacion.js
│   └── utilidades/      ayudantes de formato
│       ├── formato.js          precio y fecha
│       └── codigo-barras.js    dibuja el EAN-13 en SVG
├── index.html
├── productos.html
├── registrar-producto.html
├── editar-producto.html
└── detalle-producto.html
```

## Buenas prácticas aplicadas

Nombres descriptivos, responsabilidad única por archivo, funciones cortas, código sin repetir (DRY) y uso de `const` y `let` (sin `var`).
