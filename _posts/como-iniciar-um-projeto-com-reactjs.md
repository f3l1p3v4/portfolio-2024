---
id: 01
title: Como iniciar um projeto com Reactjs
description: O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.
tags: Reactjs
date: "2022-12-12"
---

Podemos montar uma estrutura de um projeto React e configurar o build manualmente, porém é um passo muito penoso e confuso de início. Por conta disso, iremos utilizar o comando `create-react-app`, que cria automáticamente uma estrutura básica de um projeto reactjs, pronta para começarmos a desenvolver nossa aplicação.

O pacote Create React App torna muito fácil a criação e o desenvolvimento de aplicações em React.

#### Vamos Lá  👨🏻‍💻

Abaixo irei listar algumas das ferramentas que iremos precisar. 

### Ferramentas necessárias:

* **Node instalado em seu computador. É possível baixar o Node em [nodejs.org](https://nodejs.org/en/).**

* **Um gerenciador de pacotes chamado npm. Ele vem incluído automaticamente na sua instalação do Node.**

* **Um editor de código para trabalhar com seus arquivos de projetos. Recomendo fortemente usar como editor o Visual Studio Code. Você pode baixá-lo [clicando aqui](https://code.visualstudio.com/)**

## Como usar o Create React App

Para usar o Create React App, precisamos primeiro abrir nosso terminal ou a linha de comando no seu computador.

Para criar um novo projeto em React, podemos usar a ferramenta npx, contanto que você tenha, no mínimo, a versão 5.2 do npm.

> Observação: você pode conferir qual versão do npm você tem digitando em seu terminal npm -v

O npx nos dá a capacidade de usar o pacote create-react-app sem ter de instalá-lo primeiro no seu computador, o que é muito conveniente.

Usar o npx também garante que estejamos usando a versão mais recente do Create React App para criar nosso projeto:

```shell
npx create-react-app meu-projeto
```

O comando acima gera a estrutura do nosso projeto e a coloca em uma nova pasta com o nome escolhido, no meu caso `meu-projeto`. Vamos entrar no diretório do projeto utilizando o comando:

> Observação: a criação de uma nova aplicação do React com create-react-app geralmente leva de 2 a 3 minutos, dependendo da velocidade da sua internet pode ser mais.

```shell
cd meu-projeto
```

Agora é só iniciarmos a aplicação.

```shell
npm start
```

O comando acima cria um servidor e que fica escutando todas alterações nos arquivos, depois de criar o servidor é possível acessar o projeto pela a URL
`https://localhost:3000/` no navegador e se tudo correu bem vc verá uma tela de boas vindas:

![Home do Reactjs](/assets/blog/como-iniciar-um-projeto-com-reactjs/iniciando-react-home.jpg "Tela Home do Reactjs")

## Estrutura do projeto React

Há inúmeras maneiras de organizar um projeto React, mas esse não é o foco desse artigo. Aqui, iremos explorar a estrutura default para entendermos como as partes se conectam, e o que realmente é necessário para o bootstrap do React.

Quando usamos o `create-react-app` ele cria essa estrutura inicial:

```shell
meu-projeto/
  node_modules/
  public/
    favicon.ico
    index.html
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
  .gitignore
  package.json
  README.md
```

Para que servem esses arquivos e pastas?

* **`node_modules` é uma pasta que inclui todo o código relacionado às dependências que o Create React App instalou. Você jamais precisará entrar nessa pasta.**

* **`public` é uma pasta que usaremos para armazenar nossos itens estáticos, como as imagens, svgs e fontes da aplicação em React.**

* **`src` é a pasta que contém o código-fonte. É lá que todo nosso código relacionado ao React estará e é nela que trabalharemos fundamentalmente na criação de nossa aplicação.**

* **`.gitignore` é um arquivo usado para excluir os arquivos e pastas do rastreamento do Git. Não precisamos incluir pastas grandes, como a pasta node_modules, por exemplo**

* **`package.json` é o arquivo que gerencia as dependências da aplicação e o que está incluído na pasta node_modules do projeto, além dos scripts de que precisamos para executar a nossa aplicação.**

* **`README.md`  é um arquivo em markdown que inclui muitas dicas úteis e links que podem ajudar você em seu aprendizado no uso do Create React App.**

## pachage.json

Observe abaixo o conteúdo do package.json que lista as dependências do projeto e o script para executar no projeto:

```json
{
  "name": "meu-projeto",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "react": "^17.0.0",
    "react-dom": "^17.0.0"
  },
  "devDependencies": {
    "react-scripts": "2.6.5"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  }
}
```

Podemos observar que temos alguns scripts, que possuem funcionalidades que irei descrever alguns que mais utilizaremos abaixo:

* **`start` Inicia o build no modo de desenvolvimento;**

* **`build` Executa o build do projeto otimizado para produção;**

## Arquivo public/index.html

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
    <title>React App</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

O arquivo index.html vem com a marcação mínima necessária para iniciar nossa aplicação. Porém, é possível observar que não há tags de scripts ou estilos. Não se preocupe, as mesmas serão injetadas automaticamente no build.

Por hora, a única coisa importante a observar é a tag div com o id root na linha #10, é ela que o React irá utilizar para renderizar nossa aplicação.

## Arquivo src/App.js

Vamos explorar o conteúdo do arquivo App.js da pasta src, o App.js contém o componente raiz da aplicação:

```jsx
// src/App.js

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
```

O componente acima é definido com a class e extende a classe Component do React. Existem duas formas de definir componentes: através de functions, ou através de class. Em um futuro artigo, veremos as diferenças entre uma e outra.

Um componente deve sempre implementar um método render, que retorna um JSX do que deve ser mostrado na tela, ou null quando não deve mostrar nada.

### JSX

O que parece ser um HTML dentro do método render, é na verdade JSX, um sintatic sugar para a API do React. As principais diferenças no dia-a-dia entre HTML e JSX são:

* **O class do html passa a se chamar className, porque o termo class é uma palavra reservada no Javascript;**

* **O for da tag label passa a se chamar htmlFor, pelo mesmo motivo do class, de ser uma palavra reservada;**

* **O conteúdo que estiver entre chaves {}, será interpretado como Javascript;**

* **Todos os atributos são nomeados em lower camelcase. Sendo assim, atributos como onclick, passam a se chamar onClick. O mesmo vale para atributos que utilizam hífen -, stroke-width por exemplo, passa a se chamar strokeWidth;**

* **Todo conteúdo do retorno de um render, deve estar dentro de um único wrapper, caso contrário, o seguinte erro é apresentado: Adjacent JSX elements must be wrapped in an enclosing tag while parsing file.O conteúdo que estiver entre chaves {}, será interpretado como Javascript;**

É importante lembrar que o JSX é convertido em um código React, por esse motivo, devemos importar o módulo React em todo arquivo que utiliza a sintaxe.

JSX já é utilizado por outras libs além do React e vem se tornando um padrão para definição de marcação de componentes.

## Como trabalhar com imagens e outros itens

Se olharmos para o nosso componente App, veremos que estamos utilizando um elemento `img`.

E no React para usarmos uma imagem temos que importar, como se fosse uma variável, no caso do meu projeto seria desta forma `import logo from './logo.svg';`.

```jsx
// src/App.js

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
```

Podemos importar arquivos de imagem e outros itens estáticos diretamente em nossos componentes em React. Esse recurso vem da configuração do webpack do Create React App.


## Como alterar os metadados da aplicação

Vamos observar abaixo o código do arquivo index.js, é nele que ocorre a inicialização da nossa aplicação:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

Na linha #2 do arquivo acima, estamos importando o ReactDOM, o módulo do React responsável pela manipulação do DOM.

Na linha #3, importamos nosso componente raiz, o App.js que acabamos de ver mais acima.

O bootstrap do React se baseia em você dizer para ele, o que renderizar e onde injetar o que ele renderizou. Estamos fazendo isso na linha #6, através do método render do ReactDOM, que espera como primeiro parâmetro um componente, e como segundo parâmetro, um elemento do DOM que será utilizado para injetar todo o HTML renderizado.

Para não ficar um post muito longo não abordamos o conteúdo dos arquivos css e svg, pois o nosso foco é o React. Também não abordamos a parte de testes, porque futuramente haverá um post específico sobre este tema.

## Bons estudos e até a próxima :)