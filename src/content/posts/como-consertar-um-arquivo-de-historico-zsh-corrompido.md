---
id: 08
title: Como consertar um arquivo de histórico zsh corrompido
description: Ocasionalmente, você pode descobrir que tem um arquivo de histórico zsh corrompido que o impede...
tags: ["Terminal", "Zsh", "Linux"]
date: "2024-07-23"
---

Olá pessoal!!!


Ocasionalmente, você pode descobrir que tem um arquivo de histórico zsh corrompido que o impede de usar CTRL + R ou de usar o comando `fc`. Veja como consertar isso.

## Arquivo de histórico ZSH corrompido

Se você usar [zsh](https://www.zsh.org) para seu shell ocasionalmente, poderá encontrar a seguinte mensagem indicando um arquivo de histórico corrompido.

```bash
zsh: corrupt history file /home/go/.zsh_history
```

Isso evita pesquisar no histórico com CTRL+R e editar comandos anteriores com fc.

## Como corrigi-lo

Para consertar, execute os seguintes comandos

```bash
cd ~
mv .zsh_history .zsh_history_bad
strings .zsh_history_bad > .zsh_history
fc -R .zsh_history
rm ~/.zsh_history_bad
```

Vamos analisar o que cada linha desse comando está fazendo:

1. cd ~:

> Este comando muda o diretório atual para o diretório home do usuário.


2. mv .zsh_history .zsh_history_bad:

> Este comando renomeia o arquivo .zsh_history para .zsh_history_bad. Basicamente, ele está movendo o arquivo de histórico do Zsh para um novo nome.

3. strings .zsh_history_bad > .zsh_history:

> Este comando utiliza a ferramenta strings para extrair todas as sequências de caracteres legíveis do arquivo .zsh_history_bad e redireciona a saída para um novo arquivo .zsh_history. Isso é útil para remover quaisquer caracteres binários corrompidos ou não legíveis do arquivo de histórico.

4. fc -R .zsh_history:

> Este comando recarrega o histórico do Zsh a partir do arquivo .zsh_history. O fc é um comando built-in do Zsh para manipular o histórico de comandos.

5. rm ~/.zsh_history_bad:

> Este comando remove o arquivo .zsh_history_bad, que já não é mais necessário após ter sido processado.

## Resumo

Esses comandos são usados para corrigir um arquivo de histórico do Zsh que pode estar corrompido. O procedimento envolve:

1. Mudar para o diretório home do usuário.

2. Renomear o arquivo de histórico atual para preservar o original.

3. Extrair e salvar apenas as sequências de caracteres legíveis do histórico corrompido para um novo arquivo de histórico.

4. Recarregar o histórico do shell a partir do arquivo limpo.

5. Remover o arquivo de histórico corrompido original.

## Até a próxima ✌️