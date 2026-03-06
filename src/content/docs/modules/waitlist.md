---
title: Waitlist
description: Captação de demanda com posição de fila e gestão de inscritos.
---

## Ativação

```bash
cajuos add waitlist
```

## Rotas

```txt
POST /api/waitlist/add
GET /api/waitlist/list?projectId=&page=&limit=
POST /api/waitlist/unsubscribe
GET /api/waitlist/:slug
```

## Add lead (público)

```bash
curl -X POST https://cajuos.app/api/waitlist/add \
  -H "Content-Type: application/json" \
  -d '{
    "projectId": "7f6e...",
    "email": "ana@startup.com",
    "name": "Ana"
  }'
```

## Widget

```html
<script type="module" src="https://cdn.cajuos.dev/sdk.js"></script>
<cajuos-waitlist project-id="7f6e..."></cajuos-waitlist>
```

Página pública: `https://cajuos.app/w/seu-slug`
