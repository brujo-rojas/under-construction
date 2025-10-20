## Sitio "En construcción" — Gimnasio (sin frameworks)

### Cómo usar
- Abre `index.html` directamente en tu navegador, o sirve la carpeta con un servidor estático.

### Servir localmente (opcional)
```bash
python3 -m http.server 5173
# luego abre: http://localhost:5173
```

### Estructura
- `index.html`: estructura semántica, accesible y responsiva
- `styles.css`: estilos modernos, modo claro/oscuro automático y animaciones sutiles
- `script.js`: validación básica de email y toast; guarda correos en `localStorage` o envía a un endpoint externo
- `assets/logo.svg`: logo simple en SVG

### Despliegue en Netlify
1. Crea un sitio en Netlify y conecta este repo (o arrastra la carpeta a la UI).
2. Configuración automática para sitio estático; el `publish` es la raíz (`.`).
3. `netlify.toml` ya incluye caché para `styles.css` y `script.js`.
4. Opcional: añade dominio y HTTPS desde el panel de Netlify.

### Personalización rápida
- Cambia el nombre de la marca en `index.html` (`Titan Gym`).
- Ajusta colores en `:root` de `styles.css`.
- Reemplaza el `logo.svg` por el de tu marca.
- Sustituye el envío falso en `script.js` por tu endpoint.

### Integrar Formspree (gratis)
1) Crea un formulario en `https://formspree.io` y copia tu endpoint, por ejemplo: `https://formspree.io/f/xyzabcd`.
2) En `index.html`, agrega el endpoint en el atributo `data-endpoint` del formulario `#notify-form`:
```html
<form id="notify-form" class="notify" novalidate data-endpoint="https://formspree.io/f/xyzabcd">
```
3) Listo. El envío usará `fetch` con `FormData` (`email`) y mostrará un toast.


# under-construction
web simple temporal para webs en construcción 
