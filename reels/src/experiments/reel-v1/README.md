# Reel de prueba V1 — sin subtítulos

Edición experimental independiente de ReelBase; no define una plantilla final.
La primera prueba omite subtítulos por indicación del usuario.

- Fuente: `public/videos/reel-v1-source.mp4` (56,27 segundos).
- Salida: 1080×1920, 30 fps, 1624 fotogramas (54,13 segundos).
- Audio original sincronizado con los cortes, sin música ni voz añadida.
- Recortes conservadores de pausas a partir de 43 segundos y silencio final.
- Zooms suaves de hasta 2,5%, manteniendo el rostro en el encuadre.

Intervalos conservados del original (fotogramas a 30 fps, final excluido):
`[0,1302)`, `[1319,1349)`, `[1361,1595)`, `[1611,1669)`.

Exportar:

```bash
npm run render -- ReelTrialV1 out/reel-v1-sin-subtitulos.mp4
```
