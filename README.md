# Proyecto de Gestión de Datos

Este proyecto utiliza una arquitectura modular para la carga y visualización de datos JSON.

## Estructura de Carpetas

```text
proyecto/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── data.js       ← carga los JSON
│   ├── ui.js         ← crea elementos en el DOM
│   └── events.js     ← escucha los eventos
├── json/
│   ├── ListadoGeneral.json
│   ├── agrupacion.json
│   ├── complejaMultiple.json
│   ├── consultaEstadisticas.json
│   └── busquedayfiltrado.json
└── img/
```

## Descripción de Componentes

- **index.html**: Punto de entrada de la aplicación.
- **css/style.css**: Estilos visuales.
- **js/data.js**: Lógica para el fetch y procesamiento de archivos JSON.
- **js/ui.js**: Funciones para renderizar componentes en el DOM.
- **js/events.js**: Manejadores de eventos (clicks, inputs, etc.).
- **json/**: Almacén de archivos de datos.
- **img/**: Directorio para recursos multimedia.
