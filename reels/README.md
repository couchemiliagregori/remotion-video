# Base de Reels con Remotion

Proyecto React + TypeScript para vídeos verticales **1080×1920 (9:16)**.
La composición `ReelBase` está vacía, a **30 fps**, con una duración inicial de
**10 segundos (300 fotogramas)**. No contiene estilos, animaciones ni medios.

## Inicio

Requiere Node.js 22 o superior y npm.

```bash
cd reels
npm ci
npm run dev
```

Abrir la URL que indique Remotion Studio (normalmente http://localhost:3000).
Seleccionar `ReelBase`; el lienzo vacío es intencional.

## Estructura

- `src/index.ts`: punto de entrada de Remotion.
- `src/Root.tsx`: registro de composiciones; añadir una por vídeo o plantilla.
- `src/config/video.ts`: dimensiones, fps y duración predeterminados.
- `src/compositions/`: composición vacía y futuras composiciones.
- `src/components/`: componentes que se compartirán entre vídeos.
- `src/styles/`: futuros estilos visuales independientes; aún no hay estilos.
- `public/videos/`, `public/audio/`, `public/images/`, `public/fonts/`: recursos.
- `remotion.config.ts`: empaquetado y exportación H.264, píxeles yuv420p.

## Reutilización

Crear una composición en `src/compositions/` y registrarla como un elemento
`<Composition>` propio en `src/Root.tsx`, con un ID único. Usar los valores de
`REEL_VIDEO` como base; cada composición puede tener su propia duración y fps.
Mantener los estilos de cada plantilla en módulos separados en `src/styles/`
y compartir solo los componentes que lo requieran. Los recursos locales se
referencian con `staticFile()` desde `public/`; no incluir `public/` en la ruta.
Para incorporar vídeo y audio, usar `Video` y `Audio` de `@remotion/media`.

## Comprobaciones y comandos

```bash
npm run lint          # ESLint + TypeScript
npm run typecheck     # Solo TypeScript
npm run build         # Empaquetar en build/
npm run compositions  # Enumerar composiciones usando Chromium
```

Para futuras exportaciones, cuando haya contenido:

```bash
npm run render -- ReelBase out/reel.mp4
```

La exportación no se ejecuta automáticamente. En Linux sin Chrome descargado,
puede indicarse un navegador instalado con `--browser-executable=/usr/bin/chromium`.
No se fija esa ruta en el proyecto para conservar su portabilidad.

Las versiones de Remotion están fijadas y `package-lock.json` permite reinstalar
las mismas dependencias mediante `npm ci`. Para añadir paquetes de Remotion,
usar `npx remotion add @remotion/nombre` para mantener versiones compatibles.
