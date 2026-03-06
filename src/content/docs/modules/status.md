---
title: Status
description: Monitoramento de serviços e comunicação de incidentes.
---

## Ativação

```bash
cajuos add status
```

## Rotas

```txt
POST /api/status/services
DELETE /api/status/services/:id
GET /api/status/incidents
POST /api/status/incidents
PATCH /api/status/incidents/:id
GET /api/status/:slug
POST /api/status/ping/:projectId
```

## Abrir incidente

```bash
curl -X POST https://cajuos.app/api/status/incidents \
  -H "Authorization: Bearer caju_live_sk_xxx" \
  -H "X-Project-Id: 7f6e..." \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Instabilidade no login",
    "description": "erro 500 intermitente"
  }'
```

## CLI

```bash
cajuos incident create
cajuos incident resolve
```

Página pública: `https://cajuos.app/s/seu-slug`
