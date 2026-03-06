---
title: Changelog
description: Publicação de updates com notificação opcional para inscritos.
---

## Ativação

```bash
cajuos add changelog
```

## Rotas

```txt
GET /api/changelog?page=&limit=
POST /api/changelog
POST /api/changelog/:id/publish
GET /api/changelog/:slug?page=&limit=
PATCH /api/changelog/:id
DELETE /api/changelog/:id
```

## Criar post

```bash
curl -X POST https://cajuos.app/api/changelog \
  -H "Authorization: Bearer caju_live_sk_xxx" \
  -H "X-Project-Id: 7f6e..." \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Exportação CSV",
    "body": "Agora você exporta em /dashboard/export",
    "notify": true
  }'
```

## CLI

```bash
cajuos changelog post
cajuos changelog list
```

Página pública: `https://cajuos.app/c/seu-slug`
