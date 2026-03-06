---
title: Roadmap
description: Backlog público com status e votação por email.
---

## Ativação

```bash
cajuos add roadmap
```

## Rotas

```txt
POST /api/roadmap
GET /api/roadmap
GET /api/roadmap/:slug
PATCH /api/roadmap/:id
DELETE /api/roadmap/:id
POST /api/roadmap/:id/vote
```

## Votar em item

```bash
curl -X POST https://cajuos.app/api/roadmap/35a2.../vote \
  -H "Content-Type: application/json" \
  -d '{"email":"ana@startup.com"}'
```

## Status sugeridos

- `planned`
- `in_progress`
- `done`

Página pública: `https://cajuos.app/r/seu-slug`
