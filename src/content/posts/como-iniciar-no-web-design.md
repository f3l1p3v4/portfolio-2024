---
id: 02
title: Como iniciar no web design
description: HTML (Hypertext Markup Language) é o principal bloco de construção da criação de um site.
tags: ["HTML"]
date: "2021-03-17"
---

Olá pessoal!!!

Muitas pessoas que desejam iniciar na área do desenvolvimento web desistem muito rápido pois acham muito difícil, porque muitas das vezes querem iniciar com um framework ou coisas mais avançadas e acabam esquecendo do bom e velho HTML puro, lógica de programação e pulam etapas que são muito importantes para um conhecimento solido.

HTML (Hypertext Markup Language) é o principal bloco de construção da criação de um site. HTML é uma linguagem de marcação muito básica e requer a memorização de algumas dezenas de comandos HTML que estruturam o visual e o layout de uma página da Web. Antes de escrever qualquer código HTML ou projetar sua primeira página na Web, você deve decidir sobre um editor HTML ou editor de texto, como Bloco de Notas ou WordPad.

Depois de instalar um editor HTML e estiver pronto para começar a configurar seu site, pense em como você quer que o site pareça e seja configurado. Considere até mesmo desenhar suas ideias, para ajudar a visualizar o site e páginas no site. Abaixo estão algumas considerações para pensar ao projetar sua página web.

1. Como você vai armazenar todos os arquivos? Todos os arquivos estarão na mesma pasta ou diretório? Se você planeja ter muitas fotos e arquivos diferentes, recomendamos que você armazene as páginas, arquivos e imagens em diretórios separados.
2. Os arquivos HTML serão armazenados como . HTM ou . Arquivos HTML? Não há vantagem ou desvantagem de ir com .htm ou .html. No entanto, é uma boa ideia ficar com a mesma extensão.
3. Você planeja ter um modelo para as páginas? Todas as páginas vão ter o mesmo olhar e sentimento geral?
4. Como a navegação será tratada? Você se sente melhor para o menu de navegação estar à esquerda, inferior ou superior de cada página?

> Perceba que sua página web vai mudar com o tempo à medida que você encontra coisas que não funcionam. Ao longo da vida útil do site Computer Hope, mudamos nosso site completo várias dezenas de vezes.

## Escrever HTML básico

Depois de instalar um editor HTML e configurar uma pasta, você está pronto para começar a criar sua página. Comece criando um arquivo chamado index.htm ou index.html como sua página inicial. Todos os servidores na Internet procuram um arquivo index se nenhum arquivo for especificado. Por exemplo, ao digitar <https://devload.com.br>, o servidor está acessando o endereço <https://devload.com.br/index.html>.

Uma vez que você tenha criado o arquivo .htm ou index.html e ele está aberto em seu editor HTML, recomendamos inserir o código-fonte abaixo em sua página. Se o seu editor HTML colocar automaticamente o código HTML em sua página você pode pular essa etapa.

```html
<html>
 <head>
  <title>Minha primeira página web</title>
 </head>
 <body>
    O conteúdo da sua página da web vai aqui.
 </body>
</html>
```

O código acima é um exemplo muito básico do código que ajuda a compor cada página da Web. Como você pode ver, o código começa com `<html>`, que está definindo que tudo dentro `<html>` é um código HTML. Em seguida, você tem `<head>`, que é definir o título do seu documento HTML. Em terceiro lugar, temos a seção `<title>` seção dentro `<head>`, que define o título da página da Web que é exibido na parte superior da janela do navegador da Internet. Finalmente, a seção `<body>` que contém o que é mostrado na página da Web.

Abaixo está o código adicional para a `<section>` corpo do código para ajudar a familiarizá-lo com alguns dos comandos HTML mais usados.

```html
<center><h1>Bem-vindo ao meu site</h1></center>
<hr>
<br>
<p>Olá e bem vindo ao meu primeiro site.<br><br>
<b>Esses são meus links favoritos:</b><br>
<ul>
<li><a href="https://devload.com.br">Site para desenvolvedores</a></li>
<li><a href="http://www.google.com">Google</a></li>
</ul>
</p>
```

Como você pode ver olhando para o código acima, você perceberá que os comandos HTML básicos são bastante simples de usar. Primeiro, começamos com `<center>`, que está dizendo ao navegador para centralizar as informações nessas tags. Em seguida, o `<h1>`ou a posição de um título diz ao navegador para exibir o texto no maior estilo de título. Em seguida, o `<hr>`diz ao navegador para exibir uma linha diretamente na tela. A terceira linha contém `<br>`que cria uma quebra de linha na página. Em seguida, o `<p>` é abreviação de "parágrafo" e ajuda a separar o texto na página. Em seguida, o `<b>`é abreviação de negrito e irá em negrito o texto contido na tag. Em seguida, o `<ul>`começa uma lista de balas e cada bala é representada pela `<li>`. Finalmente, a tag "`<a href"">` é um método de criação de um link para outro local. Neste exemplo, estamos criando uma lista de links para o **Blog para desenvolvimento** e o **Google**.

## Visualizando a página da Web

Depois de criar um site básico, você pode querer verificar como o site se parece. Com os arquivos armazenados localmente no seu computador, você não precisa se conectar à Internet para visualizar sua página web.

Abra o navegador do computador e digite a localização da sua página web. Por exemplo, se você tiver colocado o arquivo de index.htm ou index.html em uma pasta "site", você digitaria no navegador `c:\site\index.htm` ou `c:\site\index.html` em um PC Windows. Se você tem o Microsoft Windows ou a Apple, você também pode clicar duas vezes no arquivo da página da Web para abrir a página em um navegador.

> Alguns editores HTML também permitem que você visualize a página clicando no botão de visualização no editor HTML.
> A visualização de uma página da Web localmente permite que você experimente e certifique-se de que a página funcione antes de ter tempo para carregar a página no **servidor**. Ver uma página dessa maneira também é útil se você não tiver um lugar para armazenar sua página web.

## Exibindo imagens

Depois de criar um site básico, você pode melhorar a aparência do site adicionando imagens. Existem dois métodos de exibição de imagens em sua página web. O primeiro método é vincular-se a outro site para exibir as imagens usando o código a seguir.

```html
<img src="https://devload.com.br/static/0e1a0c8e237d312edd2cff94f5a9377f/f9526/presentation.avif" alt="Devload">
```

Usando a tag HTML acima, você pode exibir imagens de outros sites, o que também é chamado de **hotlink**. No entanto, aconselhamos a não usar esse tipo de link, pois pode fazer com que sua página da Web seja carregada mais lentamente e possa fazer com que imagens perdidas ocorram se o outro site remover as imagens. O método alternativo e recomendado seria usar o código abaixo.

```html
<img src="photo.png" alt="My Photo">
```

Ou se você tiver uma pasta de "imagens":

```html
<img src="images/photo.png" alt="Minha foto">
```

Se o arquivo `photo.png` existir no computador, a imagem será mostrada em seu site. Adicionar fotos é uma excelente maneira de enfeitar o site. No entanto, não se empolgue adicionando várias imagens (especialmente imagens animadas), pois pode parecer brega e aumentar o tempo necessário para carregar a página da Web. Lembre-se, o tempo médio que alguém olha para um site é de 10 segundos, então você quer que suas páginas da Web carreguem o mais rápido possível.

Finalmente, nunca coloque imagens de grande porte em sua página inicial. Imagens grandes diminuirão drasticamente o carregamento da página da Web e podem fazer com que um visitante saia.

## Entendendo diretórios

Ao criar outros **diretórios** (pastas) no computador que contenham imagens ou arquivos HTML, você precisa entender a estrutura do diretório. Muitas vezes, os usuários criam erroneamente um link ruim que permite que a página funcione offline, mas não na Internet ou em outro computador.

Ao acessar arquivos em outros diretórios que estão à frente do diretório atual, primeiro especifique o diretório e, em seguida, o nome do arquivo. Por exemplo, se você estiver tentando acessar ou exibir o arquivo da photo.png na pasta de imagem, crie o link como mostrado abaixo.

```
image/photo.png
```

Observe na linha acima que o diretório é primeiro especificado e, em seguida, o arquivo.

Em seguida, se você quiser acessar o arquivo de imagem photo.png e no caso tenha que voltar um diretório, você teria de usar o exemplo abaixo.

```
../photo.png
```

Neste exemplo, observe os dois pontos (..) estes dizem ao navegador que você deseja voltar um diretório. Se você quisesse voltar para um diretório e depois para outro diretório, você primeiro faria .. / e, em seguida, o diretório como mostrado no exemplo abaixo.

```
../outro-diretorio/photo.png
```

Essa regra pode ser aplicada ao maior número possível de diretórios. Por exemplo, se você quisesse voltar três diretórios e depois entrar no diretório de imagens, então você usaria o exemplo abaixo.

```
../../../image/photo.png
```

Um erro comum com os usuários do PC (Windows) é que o editor HTML pode especificar o arquivo a ser localizado no disco rígido do computador, como `c:\mywebpage\image\photo.png`. Um caminho local funciona bem no disco rígido do computador (localmente); no entanto, quando postado na Internet, ninguém além da pessoa com o arquivo localmente pode exibir o arquivo.

Finalmente, lembre-se ao especificar o diretório que você está usando uma barra dianteira `(/)` e não uma barra invertida.

## Caso sensível

É importante lembrar que muitos dos servidores da Internet estão utilizando o Linux ou uma variante *nix. Com Linux e Unix, os nomes dos arquivos são sensíveis ao caso. Se você vincular ao arquivo "Mypage.htm", e o arquivo no servidor for "mypage.htm", a página não será carregada por causa do "M" maiúscula. Nós sempre recomendamos a criação de todas as páginas da Web, imagens e arquivos em todas as minúsculas.

## Além do básico

Projetar páginas da Web vai muito mais fundo do que essa introdução básica de páginas da Web. Uma vez que você tenha uma boa compreensão de HTML e familiarize-se com CSS para formatar o layout corretamente de suas páginas web. Para fazer recursos mais avançados em seu site, como fóruns, contadores de páginas da Web ou formulário de e-mail, você precisa se familiarizar com linguagens de programação, como **JavaScript**, **PHP** e outros.

Se o básico for muito avassalador, existem vários serviços de CMS, como [](https://www.netlifycms.org/)WordPress e serviços de blog, para facilitar o processo. No entanto, tenha em mente que muitos desses serviços só oferecem modelos e plugins que permitem personalizar seu site. Se você quiser realmente personalizar seu site, você vai precisar saber alguns dos fundamentos.

## Abraço, até o próximo post!!!