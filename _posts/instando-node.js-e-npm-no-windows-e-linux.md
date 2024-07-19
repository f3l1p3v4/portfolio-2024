---
id: 05
title: Instando Node.js e npm no Windows e Linux
description: Instalando o node.js com muita facilidade no windows e linux.
tags: ["NodeJS"]
date: "2022-01-12"
---

Fala pessoal, tudo bem! 😊

Primeiro para instalar o node.js no windows precisamos acessar a página oficial do [nodejs.org](https://nodejs.org/en/).

Bom agora é só escolher uma das opções de download. Existe a versão LTS e a Current, a versão LTS é mais estável e muito mais testada, já a versão Current é a mais atual e com mais funcionabilidades.

Tá mais qual escolher? Eu indico fortemente instalar a versão LTS, pois a chance de dar bugs é muito menor em relação a versão Current.

Depois de escolhido a versão e baixado, execute o instalador, siga as instruções na tela e pronto, o Node está instalado e adicionado ao PATH do Windows. Feche todos os terminais abertos e você está pronto para prosseguir.

Assim que a instalação for finalizada, precisaremos testar se tudo está certo. Então, inicie o seu terminal. Pressione Tecla `Windows + R`, para abrir o programa Executar. Digite powershell e aperte a tecla Enter.

![painel executar](/assets/blog/instando-node.js-e-npm-no-windows-e-linux/instalando-nodejs-executar.png "Painel executar")

Vamos rodar os seguintes comandos no powershell para garantir a instalação do NodeJS e do npm:

1. **Para saber a versão do Node**

   ```shell
   PS C:\Users\DevLoad> node --version 
   v16.11.0
   ```
2. **Para saber a versão do NPM**

   ```shell
   PS C:\Users\DevLoad> npm --version
   v6.4.1
   ```

## Mudando as políticas do Power Shell

Em alguns casos, durante a execução de comandos NPM no Windows, você poderá receber um erro com a seguinte mensagem: "O arquivo XXXX não pode ser carregado porque a execução de scripts foi desabilitada neste sistema"

Isto ocorre pois as políticas de execução do Power Shell em seu sistema não estão habilitada. Para resolver este problema, feche todos os terminais abertos e abra um novo Power Shell em modo administrador (Clicar com botão direito do mouse sobre o ícone do Power Shell e acessar a opção Executar como Administrador).

* **Nesta nova janela que se abriu, como administrador, execute o seguinte comando:**

````
```shell
PS C:\Users\DevLoad> Set-ExecutionPolicy -ExecutionPolicy RemoteSigned
```
````

Feche novamente a janela e reabra o Power Shell ou qualquer terminal que esteja utilizando. Desta vez não precisa ser como administrador. O erro deve parar de acontecer.

# Instalação no Linux (Ubuntu)

No Linux podemos instalar o Node via apt, mas antes precisamos adicionar seu repositório com CURL:

1. **Execute o script abaixo para adicionar o repositório do Node:**

   ```shell
   curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
   ```
2. **Agora para instalar o Node execute:**

   ```shell
   sudo apt-get install -y nodejs
   ```

Logo depois da instalação, no terminal digite node -v e aperte a tecla Enter. Se acaso a versão do Node for exibida, sua instalação foi feita com sucesso!

## Até a próxima ✌️