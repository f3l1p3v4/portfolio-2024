---
id: 11
title: "Introdução a redes de computadores"
description: Segundo Tanenbaum (1997), empresas possuem diversos computadores, dispositivos e sistemas.
tags: ["Redes de Computadores", "Ciencia da Computacao"]
date: "2024-08-06"
---

Segundo Tanenbaum (1997), empresas possuem diversos computadores, dispositivos e sistemas. O compartilhamento desses recursos é um dos principais desafios do administrador de redes, que deve garantir que os usuários possam acessar dispositivos como impressoras e repositórios de arquivos.

Forouzan (2006) define que, em uma rede privada, os recursos e sistemas compartilhados ficam restritos à organização e podem ser estruturados de duas formas:

- **Intranet**: Uma rede privada que utiliza a estrutura da internet, mas com serviços de rede como servidores de arquivos, impressão e web de uso interno.
- **Extranet**: Embora popularmente conhecida como internet, seus recursos são acessíveis apenas com autorização de um administrador de rede da empresa.

De acordo com Forouzan (2006), o conjunto de dispositivos e links que conectam redes geograficamente distribuídas, ou redes locais, deve atender aos seguintes critérios:

- **Desempenho**: Medido por métricas como largura de banda, latência e taxa de transferência.
- **Confiabilidade**: Garantia da Qualidade de Serviço (QoS) para uma entrega eficiente de dados.
- **Segurança**: Implementação de políticas para proteger a rede contra ameaças e acessos não autorizados.

Além disso, é possível verificar se o pacote de internet contratado atende às necessidades da empresa ou residência através de sites de medição.

Para prover a comunicação entre dois pontos distintos, independentemente de a rede ser interna ou externa, Tanenbaum (1997) define dois tipos de tecnologias utilizadas: links de difusão e links ponto a ponto.

- **Redes de Difusão**: Há apenas um canal de comunicação compartilhado por todas as máquinas. Kurose (2006) exemplifica que as rádios FM utilizam redes de difusão, pois as estações de transmissão enviam sinais para os rádios receptores em residências e veículos.
- **Redes Ponto a Ponto**: Os pacotes percorrem diversos dispositivos intermediários até atingir o destino correto. A comunicação é feita entre transmissor e receptor, independentemente de quantos caminhos e nós o pacote passe. Para entender esse conceito, faça os seguintes passos:

1. Abra o Prompt de Comando (cmd) ou no terminal do Linux.
2. Digite: `tracert google.com` (no Linux `traceroute`).

Windows:

```bash
tracert google.com
```

Linux:

```bash
traceroute
```

### Dispositivos de Rede:

- **Placas de Rede**: Responsáveis pelo tratamento de endereçamentos no envio e recebimento das mensagens.

- **Modem**: Segundo Forouzan (2006), o modem realiza a modulação e demodulação das mensagens, também conhecido como transceptor. 

```bash
| TIPO                     | FUNÇÃO                                     |
| ------------------------ | ------------------------------------------ |
| Analógico                | Transmissão por canal de voz               |
| Cable Modem              | Transmissão de dados via rede de TV a cabo |
| ADSL                     | Par de fios da linha de assinante          |
| Canal E1, E3 e E4        | Canais digitais de telecomunicações        |
| Ópticos                  | Transmissões por fibras ópticas            |
```

Existem modems residenciais com conexão cabeada, 4G, fibra óptica e wi-fi integrado.

- **Hub**: Tanenbaum (1997) define que o hub contém várias linhas de entrada para distribuir conexões. O cascateamento deve ser evitado não apenas com hubs, mas também com roteadores, switches ou bridges.

## Até a próxima ✌️