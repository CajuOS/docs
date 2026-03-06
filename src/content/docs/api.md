---
title: API
description: Referência HTTP oficial do cajuOS.
---

## Base URL e headers

```txt
Produção: https://cajuos.app/api
Desenvolvimento: http://localhost:3001/api

Content-Type: application/json
Authorization: Bearer caju_live_sk_xxx
X-Project-Id: <projectId>   # obrigatório em rotas por projeto
```

## Autenticação

```txt
GET /auth/me
GET /me
ALL /auth/*
```

## Projetos

```txt
GET /projects
POST /projects
GET /projects/:id/status
POST /projects/:id/modules
```

Criar projeto:

```bash
curl -X POST https://cajuos.app/api/projects \
  -H "Authorization: Bearer caju_live_sk_xxx" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Meu App",
    "slug": "meu-app",
    "bootstrapWaitlist": true
  }'
```

## Módulos

### Waitlist

```txt
POST /waitlist/add
GET /waitlist/list?projectId=&page=&limit=
POST /waitlist/unsubscribe
GET /waitlist/:slug
POST /waitlist/:slug/add
DELETE /waitlist/:id
```

### Changelog

```txt
GET /changelog?page=&limit=
POST /changelog
POST /changelog/:id/publish
GET /changelog/:slug?page=&limit=
PATCH /changelog/:id
DELETE /changelog/:id
```

### Roadmap

```txt
POST /roadmap
GET /roadmap
GET /roadmap/:slug
PATCH /roadmap/:id
DELETE /roadmap/:id
POST /roadmap/:id/vote
```

### Feedback

```txt
POST /feedback
GET /feedback?page=&limit=&status=&tag=
GET /feedback/:slug?page=&limit=
PATCH /feedback/:id
POST /feedback/:id/to-roadmap
```

### Status

```txt
POST /status/services
DELETE /status/services/:id
GET /status/incidents
POST /status/incidents
PATCH /status/incidents/:id
GET /status/:slug
POST /status/ping/:projectId
```

## Health

```txt
GET /health
GET /health/live
GET /health/ready
```

## Status codes

- `200`: sucesso
- `400`: payload inválido
- `401`: token inválido/ausente
- `402`: limite de plano atingido (`limit_reached`)
- `403`: acesso negado ou `X-Project-Id` ausente
- `404`: recurso não encontrado
- `409`: duplicidade
- `429`: rate limit
