---
id: 10
title: "Introdução à comunicação de dados e ao eleprocessamento"
description: Os primeiros estudos e desenvolvimentos ocorridos foram posteriores ao período pós-Segunda Guerra Mundial...
tags: ["Redes de Computadores", "Ciencia da Computacao"]
date: "2024-07-31"
---

Olá pessoal!!!

- Segundo Kurose (2006), os primeiros estudos relacionados a redes de computadores ocorreram no início da década de 1960;
- Leonardo Kleinrock (1961 a 1964) desenvolveu uma técnica de comutação de pacotes em rajadas;
- Paul Baran (1964) efetuou a transmissão segura de voz em redes militares;
- Em 1969, a UCLA instalou a primeira rede com a capacidade de transmissão de mensagens por meio de interfaces;
- Em 1972, foi criado o primeiro protocolo de comunicação em rede, chamado NCP (Network Control Protocol).

## O início – 1961 a 1972

Os primeiros estudos e desenvolvimentos ocorridos foram
posteriores ao período pós-Segunda Guerra Mundial. Esses fatos
históricos acabaram por beneficiar a ciência da computação, pois havia
um interesse dos dois eixos envolvidos nos conflitos para a
interceptação e decodificação dos códigos

## Surgimento de Mais Redes – 1972 a 1980

Segundo Kurose (2006), em meados dos anos 1970, surgiram novos estudos e novas experiências das redes:

- ALOHAnet, uma rede que ligava as universidades existentes nas ilhas do Havaí;
- Cyclades, rede francesa com comutação de pacotes;
- Ainda ao final dos anos 1970, o interesse militar americano na comunicação via rede favoreceu as pesquisas (DARPA), e foram projetadas as primeiras versões dos protocolos TCP, IP e UDP.

## Aumento do número de redes – 1980 a 1990

Kurose (2006) descreve que, ao final da década de 1980, as universidades formaram uma confederação de redes com aproximadamente cem mil dispositivos. Grande parte disso se deu no dia 1º de janeiro de 1983, quando o protocolo TCP/IP foi adotado oficialmente. Além disso, surgiu o sistema de controle de nomes de domínios (DNS), que possibilitou a associação de um número IP a um nome de domínio.

Na década de 1980, o projeto Minitel, desenvolvido na França, disponibilizou para 20% da população três tipos de serviços digitais: acesso à lista telefônica, navegação por sites particulares e a utilização de home banking (serviços bancários).

## Período Evolutivo da Internet – Década de 1990

A maior contribuição, segundo Kurose (2006), surgiu na década de 1990. A principal delas foi a World Wide Web, inventada no CERN (European Center for Nuclear Physics). Ocorreu a evolução do hipertexto para desenvolvimento de websites e dos navegadores (Netscape e Internet Explorer).

Na segunda metade dos anos 1990, tanto as empresas privadas quanto as pesquisas em meios acadêmicos fizeram com que surgissem os seguintes serviços:

- E-mail, com a possibilidade de anexar arquivos.
- E-commerce com a navegação web.
- Mensagens instantâneas; na época, o ICQ.
- Compartilhamento de arquivos MP3 do tipo P2P, na época o Napster.

### Atualmente

Houve uma evolução das tecnologias, como vídeo on demand, VoIP, jogos on-line, streaming de músicas, entre outros. Além disso, objetos utilizados no nosso cotidiano passaram a se conectar à rede mundial, tais como carros, celulares, televisores, entre diversos outros dispositivos.

Os protocolos acabam por criar uma dependência, o que ocorre porque de nada adiantaria o desenvolvimento do protocolo HTTP se não houvesse o DNS para resolver o nome dos sites onde os hipertextos estão hospedados. E jamais um servidor, independentemente dos serviços disponibilizados, conseguiria ser atingido se não houvesse os protocolos TCP/IP.

### Sinal Analógico

Segundo Tanenbaum (1997), os sinais analógicos são ondas eletromagnéticas que assumem infinitos valores ao longo do tempo. Este sinal é representado por uma onda senoidal. Amplitude (Volts), Frequência (Hertz), e Fase (onda senoidal).

![Sinal analógico](/assets/blog/10/01.jpg "Sinal analógico")

### Sinal digital

O sinal digital é representado por 0 s e 1 s, ou seja, de forma
binária. É possível diminuir a taxa de oscilação, fenômeno este
responsável pelo aumento da qualidade de serviço.

Os sinais digitais não sofrem degradação dos serviços por
interferência ou ruídos. Pode-se transmitir maior quantidade de
informações.

![Sinal analógico](/assets/blog/10/02.jpg "Sinal analógico")

### Modos de transmissão

Basicamente, Kurose (2006) define três categorias:

**Simplex:** caracteriza-se pela comunicação ser em sentido único, em
que um emite a mensagem e o outro a recebe.

**Half-duplex:** ambos os dispositivos conectados no link podem
transmitir o sinal, mas somente um dispositivo pode transmitir de cada
vez. (HUB)

**Full-duplex:** caracteriza-se pela capacidade de transmitir e receber as
mensagens de forma simultânea. (SWITCH)

![Sinal analógico](/assets/blog/10/03.jpg "Sinal analógico")

### Meios de transmissão

Tanenbaum (1997) define que, para que os sinais possam ser
transmitidos, existem dois tipos de meios de transmissão:

**Guiado:**

- **Par-trançado:** Consiste em pares de fios de cobre entrelaçados para reduzir a interferência. Utilizado em redes de telefonia e locais (LANs). Tipos principais: UTP (Unshielded Twisted Pair) e STP (Shielded Twisted Pair).
- **Cabo coaxial:** Composto por um núcleo de cobre, isolante, blindagem metálica trançada e capa externa. Utilizado para transmissão de TV, internet a cabo e redes locais.
- **Fibra óptica:** Usa filamentos de vidro ou plástico para transmitir dados como pulsos de luz. Oferece alta velocidade e largura de banda, ideal para longas distâncias e redes de alta capacidade.

**Não guiado:**

- **Rádio:** o sinal do rádio é feito por torres de transmissão até o ponto
de instalação das antenas receptoras. Apesar das distâncias
alcançadas, o sinal recebe atenuação de vários obstáculos.
- **Micro-ondas:** neste tipo de transmissão, as ondas viajam em linha
reta entre o emissor e o receptor; portanto, para fazer a ligação entre
duas redes, faz-se necessário que haja visada entre as antenas.
- **Satélites:** nos sinais são enviados para os objetos que ficam
estacionados acima da atmosfera terrestre, conhecidos como
geoestacionários. São divididos em LEO (Low Earth Orbit), MEO
(Medium Earth Orbit) e HEO (Hight Earth Orbit).

## Até a próxima ✌️