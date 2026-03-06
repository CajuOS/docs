---
title: SDK
description: SDK oficial em Web Components para embeds públicos.
---

O pacote `@cajuos/sdk` expõe componentes Web Components para usar em qualquer stack.

## Instalação

```bash
bun add @cajuos/sdk
# ou npm i @cajuos/sdk
```

## Uso por bundler

```ts
import "@cajuos/sdk";
```

## Uso por CDN

```html
<script type="module" src="https://cdn.cajuos.dev/sdk.js"></script>
```

## Componentes

| Componente | Atributos | Finalidade |
| --- | --- | --- |
| `<cajuos-waitlist>` | `project-id`, `api-url` | Captura de leads e posição |
| `<cajuos-changelog>` | `project-slug`, `limit`, `api-url` | Timeline de updates |
| `<cajuos-roadmap>` | `project-slug`, `api-url` | Roadmap público com votos |
| `<cajuos-feedback>` | `project-slug`, `api-url` | Inbox público de feedback |
| `<cajuos-status>` | `project-slug`, `api-url` | Status page pública |

## Exemplo

```html
<script type="module" src="https://cdn.cajuos.dev/sdk.js"></script>
<cajuos-roadmap project-slug="meu-app"></cajuos-roadmap>
```

## API URL customizada

```html
<cajuos-status
  project-slug="meu-app"
  api-url="https://staging.cajuos.app"
></cajuos-status>
```

```html
<script>
  window.CAJUOS_API_URL = "https://staging.cajuos.app";
</script>
```
