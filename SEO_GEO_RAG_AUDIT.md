# Auditoría SEO, GEO, Schema Markup y RAG

**Proyecto:** RMS iQor México  
**Fecha de auditoría:** 19 de agosto de 2026  
**Alcance:** revisión read-only del código, build de producción y respuestas HTTP locales. No se verificó un dominio de producción, Google Search Console ni Core Web Vitals de campo.

## Veredicto

**No-Go.** El proyecto no cumple aún al 100% con los requisitos SEO, GEO y Schema Markup para declararlo listo para producción.

La base técnica es buena: el build de producción pasa, las páginas públicas se prerenderizan, hay un H1 por página de contenido, metadatos en la mayoría de las rutas, textos alternativos en imágenes y breadcrumbs semánticos. Sin embargo, existen bloqueos de descubrimiento, canonicidad, consistencia del marcado estructurado y evidencia comercial.

| Área | Estado | Hallazgo principal |
| --- | --- | --- |
| SEO técnico | No-Go | `/robots.txt` y `/sitemap.xml` responden 404; no hay canónicos ni `metadataBase`. |
| SEO on-page | Parcial | Hay títulos y descripciones por servicio, pero faltan imágenes Open Graph por URL y la ruta de redirección hereda la metadata de inicio. |
| Schema markup | No-Go | El Schema global no representa con precisión cada página y el `FAQPage` se aplica incluso donde las FAQs no son visibles. |
| GEO | Parcial | El contenido de servicios, ubicaciones y cobertura es útil, pero faltan entidades conectadas por página, evidencia y arquitectura editorial de respuestas. |
| RAG | No confirmado | No hay capa RAG: corpus normalizado, embeddings, recuperación, citas ni evaluación. No es requisito para SEO/GEO, pero sí para un asistente propio fiable. |
| Producción | No confirmado | No hay evidencia de dominio desplegado, Search Console, Core Web Vitals ni validación externa de schema. |

## Evidencia confirmada

- `npm run build` terminó correctamente y generó páginas estáticas públicas.
- Las rutas públicas renderizadas contienen un H1 en las páginas de contenido.
- `/agendar-diagnostico` responde `307 Temporary Redirect` hacia `/contacto`.
- `/robots.txt`, `/sitemap.xml` y `/llms.txt` responden `404 Not Found` en el servidor local de producción.
- El proyecto usa datos estructurados `Organization`, `LocalBusiness`, `FAQPage` y microdatos para breadcrumbs.
- Existen metadatos por ruta en contacto, cobertura, nosotros, cumplimiento, privacidad, términos y páginas de servicio.

## Bloqueos prioritarios

### P0 — Descubrimiento y canonicidad

1. Crear `src/app/robots.ts` y `src/app/sitemap.ts`.
2. Definir el dominio canónico real antes de generar URLs absolutas.
3. Agregar `metadataBase`, `alternates.canonical`, `openGraph.url` y una política de indexación por ruta.

El código declara `https://www.iqor.com.mx` en JSON-LD, mientras el proyecto también usa correo bajo `rmsiqor.mx`. Esta discrepancia debe resolverse antes de publicar canónicos, sitemap u Open Graph.

### P0 — Integridad del Schema Markup

El archivo `src/app/layout.tsx` inyecta `Organization` y `FAQPage` globalmente. Esto crea dos problemas:

- Las preguntas de `FAQPage` aparecen también en URLs que no muestran FAQs visibles.
- El set de cuatro preguntas del marcado no coincide plenamente con las ocho preguntas y respuestas visibles en el componente de inicio.

Ruta recomendada:

- Un `@graph` con una organización principal y `@id` estable.
- Tres entidades `LocalBusiness` enlazadas a la organización principal.
- `WebPage` y `BreadcrumbList` específicos por URL.
- Un `Service` por cada página de servicio, enlazado al proveedor y a su área atendida.
- `FAQPage` solo en la página que muestre exactamente esas preguntas y respuestas.

No debe usarse FAQ schema como promesa de rich result: Google limita regularmente esa apariencia a sitios gubernamentales y de salud.

### P0 — Evidencia y confianza

Antes de mantener o ampliar afirmaciones comerciales y regulatorias, deben existir fuentes aprobadas y trazables para, entre otras:

- tasas de recuperación de hasta 85% y de 74.2%;
- “0 quejas CONDUSEF”;
- tiempos o SLA garantizados;
- certificaciones, cobertura en 32 entidades y capacidades tecnológicas;
- datos de la red global iQor.

La auditoría no determina que esas afirmaciones sean falsas; las clasifica como **no confirmadas por evidencia dentro del repositorio**. En servicios financieros, legales y de cobranza, la falta de prueba reduce confianza, dificulta citación por sistemas de IA y aumenta riesgo reputacional.

### P1 — SEO social y metadatos avanzados

- Crear imagen Open Graph y Twitter Card por página estratégica.
- Declarar `openGraph.images`, `twitter.images`, `og:url` y canonical por ruta.
- Definir indexación explícita para privacidad, términos y rutas de redirección cuando aplique.

### P1 — Preparación GEO

GEO no se resuelve solo con Schema. La web necesita una capa de contenido que responda con precisión a las preguntas de búsqueda y que permita atribuir cada afirmación a evidencia.

Se recomienda modelar y mantener:

- fichas canónicas de cada servicio: alcance, exclusiones, proceso, sectores, ubicación, CTA y fuentes;
- fichas de sedes: dirección, teléfono, área atendida, responsable y evidencia de operación;
- biblioteca de preguntas por intención: contratación, compliance, cobertura, privacidad, tiempos y resultados;
- casos de uso con fecha, metodología, universo, rango de resultados y limitaciones;
- glosario editorial consistente para cobranza administrativa, extrajudicial, legal, BPO, gestoría y análisis de cartera.

## RAG: distinción necesaria

No se detectó una implementación RAG en este sitio. Tampoco es necesaria para que buscadores indexen o citen sus páginas.

Si el objetivo incluye un asistente propio, la capa mínima debe ser:

1. documentos fuente aprobados y versionados;
2. fragmentación con metadatos de servicio, región, vigencia y fuente;
3. embeddings y recuperación híbrida;
4. respuestas con citas y control de afirmaciones;
5. pruebas de recuperación, seguridad y actualización.

Un `llms.txt` podría añadirse como documento informativo, pero no es un estándar de SEO ni garantiza presencia en resultados con IA. No sustituye sitemap, contenido verificable, estructura semántica ni autoridad.

## Criterio de Go

El sitio podrá pasar a **Go técnico SEO/GEO** cuando se cumpla lo siguiente:

- [ ] Dominio canónico confirmado y aplicado en metadata, JSON-LD, sitemap y Open Graph.
- [ ] `robots.txt` y sitemap disponibles con URLs absolutas y canónicas.
- [ ] Validación de schema sin errores y con correspondencia exacta entre marcado y contenido visible.
- [ ] Schema específico por servicio, página y ubicación.
- [ ] Imágenes sociales y etiquetas de compartición implementadas.
- [ ] Afirmaciones sensibles respaldadas, moderadas o retiradas.
- [ ] Sitemap enviado y procesado en Search Console.
- [ ] Inspección de URLs y Core Web Vitals de producción revisados.

## Fuentes externas consultadas

- Google Search Central: [Build and submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- Google Search Central: [Local Business structured data](https://developers.google.com/search/docs/appearance/structured-data/local-business)
- Google Search Central: [Changes to FAQ rich results](https://developers.google.com/search/blog/2023/08/howto-faq-changes)
- Google Search Help: [AI Overviews in Search](https://support.google.com/websearch/answer/14901683)
- Schema.org: [LocalBusiness](https://schema.org/LocalBusiness)
