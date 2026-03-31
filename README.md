# 🦋 Sofía — Tutora con IA

App educativa para aprendizaje de Matemáticas y Lectura, con tutora IA que responde con paciencia y refuerzo positivo.

---

## Estructura del proyecto

```
sofia-tutora/
├── public/
│   └── index.html      ← La app completa (frontend)
├── api/
│   └── chat.js         ← Proxy seguro hacia la API de Anthropic
├── vercel.json         ← Configuración de Vercel
├── package.json
└── .gitignore
```

---

## Cómo publicar en Vercel (30 minutos, paso a paso)

### Paso 1 — Obtén tu API key de Anthropic

1. Ve a https://console.anthropic.com
2. Crea una cuenta (es gratis para empezar)
3. Ve a "API Keys" → "Create Key"
4. Copia la key (empieza con `sk-ant-...`) y guárdala en un lugar seguro

---

### Paso 2 — Sube el código a GitHub

1. Ve a https://github.com y crea una cuenta si no tienes
2. Haz clic en **"New repository"**
3. Nombre: `sofia-tutora` — marca como **Private** (para que solo tú lo veas)
4. Haz clic en **"Create repository"**
5. En tu laptop, abre la terminal en la carpeta del proyecto y ejecuta:

```bash
git init
git add .
git commit -m "primera versión de Sofía"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/sofia-tutora.git
git push -u origin main
```

(Reemplaza `TU_USUARIO` con tu nombre de usuario de GitHub)

---

### Paso 3 — Conecta con Vercel

1. Ve a https://vercel.com y crea una cuenta con tu GitHub
2. Haz clic en **"Add New Project"**
3. Selecciona el repositorio `sofia-tutora`
4. Haz clic en **"Deploy"** — Vercel detecta la configuración automáticamente

---

### Paso 4 — Agrega la API key de Anthropic (MUY IMPORTANTE)

Esto es lo que mantiene tu API key segura:

1. En Vercel, ve a tu proyecto → **Settings** → **Environment Variables**
2. Agrega una variable nueva:
   - **Name:** `ANTHROPIC_API_KEY`
   - **Value:** tu key de Anthropic (la que empieza con `sk-ant-...`)
3. Haz clic en **Save**
4. Ve a **Deployments** → haz clic en los tres puntos del último deployment → **Redeploy**

---

### Paso 5 — Comparte con tu hija

Vercel te da una URL como: `https://sofia-tutora-tuusuario.vercel.app`

Esa URL es todo lo que tu hija necesita. La puede abrir en cualquier navegador, en su laptop, tablet o celular.

---

## Cómo actualizar la app

Cada vez que quieras cambiar algo (agregar ejercicios, cambiar textos, etc.):

1. Edita los archivos en tu laptop
2. Ejecuta en la terminal:
```bash
git add .
git commit -m "descripción del cambio"
git push
```
3. Vercel detecta el cambio automáticamente y actualiza la app en segundos
4. Tu hija recarga la página y ya tiene la versión nueva

---

## Costos estimados

| Servicio | Costo |
|---|---|
| GitHub | Gratis |
| Vercel | Gratis (hasta 100GB de ancho de banda/mes) |
| Anthropic API | ~$0.01 por conversación. Con uso diario moderado: menos de $5/mes |

---

## Preguntas frecuentes

**¿Mi hija necesita crear una cuenta?**
No. Solo entra a la URL y ya puede usar la app.

**¿Funciona sin internet?**
No, necesita conexión para hablar con Sofía (la IA). Los ejercicios de opción múltiple sí funcionan offline una vez cargada la página.

**¿Puedo cambiar los ejercicios?**
Sí. Abre `public/index.html` y busca los arreglos `MATH` y `READ` — ahí están todos los ejercicios. Puedes agregar, quitar o modificar los que quieras.

**¿Puedo cambiar el nombre "Sofía"?**
Sí. Busca "Sofía" en `index.html` y en `api/chat.js` y reemplázalo con el nombre que quieras.
