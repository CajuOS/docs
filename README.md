# cajuOS Docs

![Banner cajuOS Docs](./public/cajuos-docs-readme-banner.png)

Documentação oficial do cajuOS em Astro + Starlight.

## Requisitos

- Node.js 20+
- npm 10+ (ou Bun 1.1+)

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
npm run preview
```

## Estrutura

- `src/content/docs`: páginas de documentação
- `src/styles/custom.css`: tokens visuais da marca
- `astro.config.mjs`: navegação, sidebar e metadados

## Publicação recomendada

1. Vercel ou Cloudflare Pages apontando para este repositório.
2. Build command: `npm run build`.
3. Output dir: `dist`.

## CI

O workflow de CI valida build em pull requests e pushes para `main`.
