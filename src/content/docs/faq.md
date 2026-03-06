---
title: FAQ
description: Perguntas frequentes sobre operação e integração.
---

## Quais módulos existem hoje?

Waitlist, Changelog, Roadmap, Feedback e Status.

## Preciso de cartão para começar?

Não. O plano free pode ser usado sem cartão.

## Como autentico a CLI?

```bash
cajuos login --apiKey caju_live_sk_xxx
```

## Como saber se bati limite do plano?

A API retorna `402 limit_reached` nas rotas com cota.

## Posso integrar sem widget?

Sim. Use apenas API HTTP com `Authorization` e `X-Project-Id`.
