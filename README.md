# AppsMart Technology - React + Vite

Página profesional de desarrollador para AppsMart Technology.

## Incluye

- React + Vite
- Diseño moderno responsive
- Página principal de desarrollador
- Secciones: Nosotros, Servicios, Misión, Visión, Valores, Proceso, Contacto
- Páginas internas: Política de Privacidad, Términos y Condiciones, Política de Cookies
- Botón Appsem Store

## Cómo probar localmente

```bash
npm install
npm run dev
```

## Cómo subir a Vercel

1. Sube esta carpeta a GitHub.
2. En Vercel pulsa Add New > Project.
3. Importa el repositorio.
4. Configuración:
   - Framework Preset: Vite
   - Build Command: npm run build
   - Output Directory: dist
5. Pulsa Deploy.

## Cambiar el enlace de Appsem Store

Abre `src/main.jsx` y cambia:

```js
const APP_STORE_URL = 'https://appsem-store.vercel.app';
```

por el enlace real de tu tienda de apps.
