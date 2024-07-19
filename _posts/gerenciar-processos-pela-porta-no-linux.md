---
id: 07
title: Gerenciar Processos pela Porta no Linux
description: Aprenda a listar e matar processos específicos que estão utilizando determinadas portas no seu sistema operacional.
tags: ["Terminal", "Netstat", "Linux"]
date: "2024-08-19"
---

Esses comandos permitem que você gerencie processos específicos que estão utilizando determinadas portas, evitando a necessidade de reiniciar o computador.

## Linux

### Listar Todos os Processos

Para listar todos os processos que estão rodando em uma porta específica (por exemplo, porta 8000), use o comando:

```bash
sudo netstat -tlpn
```

### Listar Processos em uma Porta Específica

Para listar todos os processos que estão rodando em uma porta específica (por exemplo, porta 8000), use o comando:

```bash
sudo netstat -tlpn | grep 8000
```
### Matar Processo Usando Porta

Para matar o processo que está rodando na porta 8000, use o comando:

```bash
sudo kill -9 `sudo lsof -t -i:8000`
```

ou

```bash
sudo kill -9 $(sudo lsof -t -i:8000)
```
## Dica Extra

Você também pode usar ferramentas como htop para uma visualização mais interativa. Para instalar htop:

```bash
sudo apt-get install htop
```

Depois, inicie htop com:

```bash
htop
```

Dentro do htop, você pode procurar pelo processo específico e matar diretamente pelo PID.

## Até a próxima ✌️