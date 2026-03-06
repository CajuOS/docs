---
title: Início rápido
description: Do zero ao primeiro fluxo público em 15-30 minutos.
---

## Pré-requisitos

- Node.js 18+ ou Bun
- Conta no cajuOS (`/cadastro`)
- API key gerada no dashboard

## 1) Autenticar no CLI

```bash
cajuos login
# cole sua API key quando solicitado
```

Modo não interativo:

```bash
cajuos login --apiKey caju_live_sk_xxx
```

## 2) Criar projeto

```bash
cajuos init
# nome: Meu App
# slug: meu-app
```

Modo não interativo:

```bash
cajuos init --name "Meu App" --slug "meu-app"
```

## 3) Ativar módulos essenciais

```bash
cajuos add waitlist
cajuos add feedback
cajuos add roadmap
cajuos add changelog
cajuos add status
```

## 4) Validar status operacional

```bash
cajuos status
```

## 5) Primeiro feedback via API

```bash
curl -X POST https://cajuos.app/api/feedback \
  -H "Content-Type: application/json" \
  -H "X-Project-Id: proj_123" \
  -d '{
    "title": "Integração com Zapier",
    "description": "Webhook para automações",
    "email": "ana@startup.com",
    "tag": "feature"
  }'
```

## 6) Embed de widget

```html
<script type="module" src="https://cdn.cajuos.dev/sdk.js"></script>
<cajuos-roadmap project-slug="meu-app"></cajuos-roadmap>
```

## Checklist final

- API key salva em `~/.cajuos/config.json`
- Projeto registrado em `.cajuos.json`
- Módulos ativados com `cajuos add`
- `cajuos status` sem erro
- Um endpoint testado via `curl`

## Erros comuns

- `401 Unauthorized`: refaça `cajuos login`
- `403 X-Project-Id is required`: inclua o header
- `409 slug_already_exists`: use outro slug
