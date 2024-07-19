---
id: 04
title: Trabalhando com data no JavaScript
description: Vamos aprender manipular datas no JavaScript, utilizando a classe Date, como pegar a data atual e utilizar os métodos da classe.
tags: ["Javascript"]
date: "2022-08-22"
---
O JavaScript possui a classe chamada Date que nos permite trabalhar com data e hora. Podemos manipular datas acessando diretamente pelos atributos da classe ou pelos métodos disponibilizados pela própria classe.

## Javascript

```javascript
const hoje = new Date()
console.log(hoje)
```

O resultado será parecido com este:

```javascript
// 2022-08-23T15:20:37.960Z
```

## Aprendendo a manipular data

```javascript
const hoje = new Date();

console.log(
    'Hoje é ' +
    hoje.getDate() +
    ' do ' +
    hoje.getMonth() +
    ' de ' +
    hoje.getFullYear()
);
```

O resultado será parecido com este:

```javascript
// Hoje é 23 do 7 de 2022
```

## Tá más como isso aconteceu ?

explicando o código...

```javascript
const hoje = new Date();
```

O código acima irá criar uma nova variável de data com o new Date, criando um novo objeto e em seguido preenche-lo com a data atual.

```javascript
console.log(
  'Hoje é ' +
    hoje.getDate() +
    ' do ' +
    hoje.getMonth() +
    ' de ' +
    hoje.getFullYear()
);
```

Já neste trecho de código acima, o que está dentro das aspas será um texto, com um sinal de `+` para concatenar com os códigos que iremos entender agora.

O `getDate()`, por sua vez, equivale ao dia do mês.

O `getMonth()`, equivalem ao mês do ano.

O `getFullYear()`, representa o ano com 4 dígitos.

O problema de usar o `new Date()` sem fazer nenhuma tratativa e que por exemplo o `getMonth` sempre começa com o número 0, no caso o mês de Agosto será 7 e não 8, isso é padrão do `javascript`, porém o usuário não sabe disso, por isso iremos criar um Array para resolver este problema. 

## Como criar um Array para tratar os dados do Date()

```javascript
var dias = new Array(
  'domingo',
  'segunda',
  'terça',
  'quarta',
  'quinta',
  'sexta',
  'sábado'
);

var meses = new Array(
  'janeiro',
  'fevereiro',
  'março',
  'abril',
  'maio',
  'junho',
  'agosto',
  'outubro',
  'novembro',
  'dezembro'
);

var hoje = new Date();

console.log(
  'Hoje é ' +
    dias[hoje.getDay()] +
    ', ' +
    hoje.getDate() +
    ' de ' +
    meses[hoje.getMonth()] +
    ' de ' +
    hoje.getFullYear() +
    '.'
);
```

Resultado:

```javascript
// Hoje é quinta, 25 de outubro de 2022.
```

Explicando o código:

```javascript
var dias = new Array(
  'domingo',
  'segunda',
  'terça',
  'quarta',
  'quinta',
  'sexta',
  'sábado'
);

var meses = new Array(
  'janeiro',
  'fevereiro',
  'março',
  'abril',
  'maio',
  'junho',
  'agosto',
  'outubro',
  'novembro',
  'dezembro'
);
```

Essa é a parte do código, no array dias, eu dei nomes para os dias da semana. Sendo zero pera domingo, e agora um será segunda, e assim por diante. Da mesma forma com o array dos meses.

```javascript
console.log(
  'Hoje é ' +
    dias[hoje.getDay()] +
    ', ' +
    hoje.getDate() +
    ' de ' +
    meses[hoje.getMonth()] +
    ' de ' +
    hoje.getFullYear() +
    '.'
);
```

No console.log, colocamos o array que será utilizado, e logo depois, entre colchetes, a função que retorna o índice do dia e do mês no vetor.

## Outra forma de trabalhar com datas utilizando JavaScript

```javascript
var hoje = new Date();
var dia = hoje.getDate().toString().padStart(2, '0');
var mes = String(hoje.getMonth() + 1).padStart(2, '0');
var ano = hoje.getFullYear();

console.log(`${dia}/${mes}/${ano}`);
```

Resultado:

```javascript
// 23/08/2022
```

Explicando o código:

```javascript
const dia = hoje.getDate().toString().padStart(2, '0');
const mes = String(hoje.getMonth() + 1).padStart(2,'0')
```

No código acima a variável `dia` e `mes` utilizamos o `getDate()` e `getMonth`, porém em casos onde o número do dia e mês é menor que `10`, podemos adicionamos um `0` a esquerda utilizando o método `padStart(),` para o resultado não ser assim  `23/8/2022` mas assim `23/08/2022`. 

## Outros métodos do new Date()

```javascript
var hoje = new Date()
hoje.getDate() // O dia do mês
hoje.getDay() // O valor inteiro do dia da semana
hoje.getFullYear() // O ano com quatro dígitos
hoje.getHours() // A hora do dia
hoje.getMilliseconds() // O número de milissegundos desde o ultimo segundo
hoje.getMinutes() // O número de minutos desde a última hora
hoje.getMonth() // o mês do ano
hoje.getTime() // O número de milissegundos desde a meia noite de 1° de janeiro de 1970
hoje.TolocaleString() // A data e hora local em formato de string
```

## Conclusão

Neste post fizemos uma pequena introdução de como manipular datas no JavaScript. Usando a classe `Date()`, você poderá fazer eventos muito mais complexos. Saiba mais sobre o funcionamento da classe acessando a [documentação](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date).

## Até a próxima ✌️