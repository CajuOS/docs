---
title: Feedback
description: Inbox público com triagem por tag e status.
---

## Ativação

```bash
cajuos add feedback
```

## Rotas

```txt
POST /api/feedback
GET /api/feedback?page=&limit=&status=&tag=
GET /api/feedback/:slug?page=&limit=
PATCH /api/feedback/:id
POST /api/feedback/:id/to-roadmap
```

## Criar feedback

```bash
curl -X POST https://cajuos.app/api/feedback \
  -H "Content-Type: application/json" \
  -H "X-Project-Id: 7f6e..." \
  -d '{
    "title": "Modo escuro",
    "description": "tema escuro no dashboard",
    "email": "ana@startup.com",
    "tag": "feature"
  }'
```

## Triagem recomendada

`open` → `under_review` → `planned` → `closed`

Página pública: `https://cajuos.app/feedback/seu-slug`
