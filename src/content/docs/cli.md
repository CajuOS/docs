---
title: CLI
description: Referência de comandos da CLI do cajuOS.
---

A CLI conversa com `${CAJUOS_API_URL:-https://cajuos.app}/api`.

## Comandos principais

| Comando | Descrição |
| --- | --- |
| `cajuos login` | Autentica API key em `~/.cajuos/config.json` |
| `cajuos init` | Cria projeto e salva `.cajuos.json` |
| `cajuos add <módulo>` | Ativa módulo no projeto atual |
| `cajuos status` | Mostra plano, módulos e uso |
| `cajuos waitlist list` | Lista inscritos com paginação |
| `cajuos changelog post` | Publica changelog em modo interativo |
| `cajuos changelog list` | Lista posts de changelog |
| `cajuos roadmap` | Lista itens de roadmap |
| `cajuos roadmap add` | Cria item de roadmap |
| `cajuos incident create` | Abre incidente na status page |
| `cajuos incident resolve` | Resolve incidente aberto |

## Fluxo base

```bash
cajuos login --apiKey caju_live_sk_xxx
cajuos init --name "Meu App" --slug "meu-app"
cajuos add waitlist
cajuos add feedback
cajuos status
```

## Opções reais

- `cajuos login`: `--apiKey`, `-k`
- `cajuos init`: `--name`, `-n`, `--slug`, `-s`
- `cajuos waitlist list`: `--page`, `-p`, `--limit`, `-l`
- `cajuos add`: `waitlist`, `changelog`, `roadmap`, `feedback`, `status`

## Troubleshooting

- "você não está autenticado": executar `cajuos login`
- `.cajuos.json` não encontrado: executar `cajuos init`
- `X-Project-Id is required`: rodar dentro do diretório correto do projeto
