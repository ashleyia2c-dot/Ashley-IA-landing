# Ashley IA — Landing page

Landing estática single-page para [Ashley](https://github.com/ashleyia2c-dot/Ashley-IA).

- HTML + CSS + JS vanilla — cero build, cero dependencias
- Trilingüe (EN / ES / FR) con auto-detect del idioma del navegador
- Preparada para desplegar en Cloudflare Pages (gratis)
- CTAs enlazando al checkout de Lemon Squeezy

## Archivos

```
Ashley-IA-landing/
├── index.html           ← estructura de la página
├── styles.css           ← tema oscuro pink/purple
├── script.js            ← i18n + language switcher
├── assets/
│   ├── ashley-portrait.jpg   ← hero image
│   ├── ashley-soft.jpg       ← pricing card avatar
│   ├── ashley-excited.jpg    ← extra (no usado aún)
│   └── favicon.ico
└── README.md            ← este archivo
```

## Preview local

Doble-click en `index.html` y se abre en tu navegador. Funciona sin servidor
(todos los paths son relativos). El switcher de idioma y el localStorage
funcionan igual en local y en producción.

## Cosas por añadir antes del launch

- [ ] Vídeo demo real (reemplazar `.video-placeholder` en `index.html` con
      un `<iframe src="https://www.youtube.com/embed/VIDEO_ID" allowfullscreen></iframe>`)
- [ ] Logo propio (reemplazar `ashley-portrait.jpg` por el logo definitivo)
- [ ] Screenshots del app en acción (sección nueva o dentro del carrusel)
- [ ] Testimonios / social proof (cuando haya users)
- [ ] Open Graph image propia (actualmente usa el portrait; lo ideal es una
      imagen 1200×630 con branding)
- [ ] Dominio propio (ej. `ashley-ia.com` — Cloudflare te lo conecta en 2 min)

## Deploy a Cloudflare Pages

### 1. Crear repo en GitHub

```bash
cd "C:\Users\Mister Squishi\Desktop\Ashley-IA-landing"
git init
git add .
git commit -m "Initial landing page"
```

Luego en GitHub → **New repository** → nombre `Ashley-IA-landing` → crear.

```bash
git remote add origin https://github.com/ashleyia2c-dot/Ashley-IA-landing.git
git branch -M main
git push -u origin main
```

### 2. Conectar con Cloudflare Pages

1. Ir a [dash.cloudflare.com](https://dash.cloudflare.com) (crear cuenta gratis si no tienes)
2. Sidebar → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
3. Autorizar GitHub si es la primera vez
4. Seleccionar el repo `Ashley-IA-landing`
5. En la pantalla de build settings:
   - **Framework preset:** `None`
   - **Build command:** *dejar vacío*
   - **Build output directory:** `/`
6. Click **Save and Deploy**

En ~30 segundos tendrás la URL `ashley-ia-landing.pages.dev` (o similar) online.

### 3. Cambiar nombre / URL (opcional)

Si quieres que la URL sea exactamente `ashley-ia.pages.dev`:

1. En el panel del proyecto de Pages → **Settings** → **General**
2. Cambiar el nombre del proyecto a `ashley-ia`
3. La URL se actualiza automáticamente

### 4. Custom domain (opcional, cuando compres dominio propio)

1. Comprar dominio (Namecheap, Porkbun, Cloudflare Registrar)
2. En el panel del proyecto → **Custom domains** → **Set up a custom domain**
3. Introducir `ashley-ia.com` (por ejemplo)
4. Cloudflare te da los DNS records que hay que añadir en tu registrador
5. En 5-30 min propaga y ya va por el dominio propio

## Flujo de edición futuro

Una vez desplegado:

```bash
# editar index.html / styles.css / script.js localmente
git add .
git commit -m "Update copy"
git push
```

Cloudflare detecta el push y redeploya automáticamente en ~20 segundos.
Cada branch además genera una preview URL (útil para probar cambios antes
de mergearlos a `main`).

## Licencia

Todos los derechos reservados. Assets de Ashley (portraits) son propiedad
del proyecto Ashley IA.
