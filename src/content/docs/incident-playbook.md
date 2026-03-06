---
title: Playbook de incidentes
description: Runbook oficial para resposta operacional no cajuOS.
---

## Objetivo

Reduzir MTTR com processo simples, dono claro e atualização pública sem atraso.

## Papéis mínimos

- Incident commander
- Owner técnico
- Owner de comunicação

## SLA de comunicação

| Nível | Primeira comunicação | Atualizações |
| --- | --- | --- |
| Crítico | até 10 min | a cada 15 min |
| Alto | até 20 min | a cada 30 min |
| Médio/Baixo | até 30 min | a cada 60 min |

## Fluxo

1. Detectar impacto.
2. Abrir incidente em `investigating`.
3. Publicar status inicial.
4. Evoluir para `identified` → `monitoring` → `resolved`.
5. Encerrar com causa e prevenção.

## Comandos

```bash
cajuos incident create
cajuos incident resolve
```
