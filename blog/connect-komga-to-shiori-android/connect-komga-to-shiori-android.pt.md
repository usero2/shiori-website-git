# Como conectar o Komga ao Shiori no Android (com capas e sincronização de progresso)

Se você executa o **Komga** em casa, toda a sua biblioteca já fica no seu próprio servidor — mas lê-la no seu celular geralmente significa usar uma aba do navegador ou um aplicativo que mostra apenas uma lista simples de nomes de arquivos sem capas.

O Shiori se conecta ao Komga diretamente. Feito da maneira certa, você obtém suas capas, seus autores, a estrutura das suas séries e sua posição de leitura sincronizada de volta ao servidor. Este guia mostra os passos exatos e — mais importante — qual das três opções do Komga no Shiori você realmente deve escolher.

## Komga, OPDS ou Komga API? Escolha a opção certa primeiro

Quando você adiciona um servidor, o Shiori oferece várias opções de preenchimento rápido, e três delas mencionam o Komga. Elas não são equivalentes:

* **Komga** — conecta-se via **OPDS v1**. Apenas navegação e download.
* **Komga v2** — conecta-se via **OPDS v2**. Também apenas navegação e download.
* **Komga API** — conecta-se via **REST API nativa** do Komga. Esta é a opção que adiciona **capas, detalhes completos do livro e sincronização do progresso de leitura**.

O OPDS é um padrão de catálogo genérico, por isso funciona com quase qualquer servidor — Calibre, Calibre-Web, Standard Ebooks, Project Gutenberg. Essa generalidade também é o seu limite: ele carrega apenas informações suficientes para listar e baixar um arquivo.

A própria API do Komga conhece séries, metadados e progresso de leitura, permitindo que o Shiori mostre uma biblioteca de verdade em vez de uma lista de arquivos, e informe ao Komga onde você parou de ler.

**Use "Komga API" a menos que você tenha um motivo específico para não usar.**

## O que você precisa

* O Komga em execução e acessível na sua rede
* Seu **nome de usuário e senha** do Komga (ou uma chave de API, se preferir)
* O **endereço de rede local (LAN)** do seu servidor — não `localhost`
* O Shiori instalado no seu dispositivo Android

> **Por que não `localhost`?** `localhost` significa *este dispositivo*. Digitado no seu celular, ele aponta para o próprio celular, não para o seu servidor. Você precisa do endereço que seu servidor possui na sua rede — algo como `192.168.1.33`.

## Passo 1 — Abra a lista Library Server

No Shiori, toque em **Collections** (Coleções) na barra de navegação inferior. Role até a seção **Library Server** (Servidor de biblioteca) e toque no botão **+** à sua direita.

![A aba Collections no Shiori, mostrando a seção Library Server com seu botão de adicionar](01-collections-library-server.jpg)

Este é o mesmo lugar onde ficam todas as bibliotecas online — catálogos OPDS, Kavita, buckets S3, compartilhamentos WebDAV — portanto, assim que o Komga for adicionado, ele ficará ao lado de suas outras fontes.

## Passo 2 — Conheça a tela Add Library Server

A tela **Add Library Server** (Adicionar servidor de biblioteca) tem um campo de nome, uma URL do catálogo, uma fileira de chips de preenchimento rápido e um logon opcional.

![A tela Add Library Server mostrando os chips de preenchimento rápido e o texto de ajuda dos servidores suportados](02-add-library-server-form.jpg)

Role para baixo e o Shiori documenta cada tipo de servidor suportado diretamente na tela, incluindo o formato exato da URL esperada. Vale a pena ler uma vez — são as mesmas informações nas quais este artigo foi baseado.

## Passo 3 — Digite o endereço do seu servidor e toque em "Komga API"

A ordem importa aqui. A dica acima dos chips diz *"digite o host e depois toque no seu servidor"*:

1. Digite apenas o endereço do seu servidor no campo **Catalog URL** — por exemplo, `192.168.1.33`
2. Em seguida, toque no chip **Komga API**

O Shiori converte o que você digitou na URL completa que o Komga espera:

```
http://192.168.1.33:25600/api/v1
```

`25600` é a porta padrão do Komga. Se você a alterou, corrija a porta — a captura de tela abaixo mostra `25601`, porque o servidor usado para este guia é executado em uma porta personalizada.

Agora preencha o **Sign-in** (Logon): seu nome de usuário e senha do Komga. (Como alternativa, deixe o nome de usuário em branco e cole uma chave de API do Komga no segundo campo — o Shiori aceita ambas as opções.)

![O formulário preenchido com a URL do Komga API e as credenciais de logon](03-komga-api-url-and-signin.jpg)

Dê ao servidor um nome que você reconheça no topo e escolha um ícone, se desejar.

## Passo 4 — Teste a conexão antes de salvar

Toque em **Test connection** (Testar conexão). Vale muito a pena não pular este passo: ele informa se o endereço, a porta e as credenciais estão todos corretos *antes* de você salvá-los.

![Resultado do Test connection: Connected — Komga (REST API)](04-test-connection-connected.jpg)

Você deve ver:

```
Connected — Komga (REST API)
```

Essa mensagem confirma duas coisas distintas — que o Shiori alcançou o servidor e que ele detectou a **REST API nativa** em vez de recorrer a um catálogo simples. Se disser outra coisa, você não obterá as capas nem a sincronização de progresso.

Se o teste falhar, verifique estes pontos na ordem:

* **Timed out / cannot reach** (Tempo limite esgotado / não é possível alcançar) — IP incorreto ou o celular está em uma rede diferente do servidor. Verifique se ambos estão no mesmo Wi-Fi.
* **Unauthorized** (Não autorizado) — nome de usuário ou senha incorretos. Os nomes de usuário do Komga geralmente são o endereço de e-mail completo.
* **Connected, but not as REST API** (Conectado, mas não como REST API) — a parte `/api/v1` da URL está ausente ou a porta está incorreta.

Em seguida, toque em **Save** (Salvar) no canto superior direito.

## Passo 5 — Seu servidor aparece na lista

O Komga agora aparece na sua lista **Library Server** com um cadeado, mostrando que as credenciais estão salvas para ele.

![O servidor Komga salvo na lista Library Server com sua URL oculta](05-komga-in-library-server-list.jpg)

Observe que o Shiori oculta o endereço do servidor nesta lista. Isso é proposital — evita expor a estrutura da sua rede interna na tela quando você empresta seu celular para alguém ou compartilha uma captura de tela.

## Passo 6 — Navegue pela sua biblioteca

Toque no servidor para abri-lo. Você verá suas bibliotecas do Komga, uma caixa de busca que pesquisa diretamente no catálogo e um controle de ordenação.

![Navegando pelo catálogo do Komga, mostrando a biblioteca e a caixa de busca do catálogo](06-browse-komga-catalog.jpg)

A navegação estruturada (breadcrumbs) no topo mostra onde você está, permitindo voltar vários níveis com um único toque em vez de pressionar Voltar repetidamente.

## Passo 7 — Capas, autores e leitura com um toque

Abra uma biblioteca e veja as vantagens que a API nativa oferece:

![A lista de livros mostrando a capa, títulos, autores, formato e tamanho](07-books-with-covers-and-authors.jpg)

Cada livro é exibido com sua **capa**, **título**, **autor**, **formato** e **tamanho de arquivo** — extraídos diretamente dos metadados do Komga. Cada linha tem duas ações:

* **Read** (o ícone de livro) — começar a ler
* **Download** (o ícone de nuvem) — guardar uma cópia no dispositivo para leitura offline

Como você se conectou por meio da REST API, sua posição de leitura é enviada de volta ao Komga. Pare no meio de um capítulo no seu celular e o Komga saberá — assim, o próximo dispositivo que você usar começará do lugar certo.

## Dicas

* **Os livros baixados ficam disponíveis offline.** Toque no ícone de nuvem antes de um voo ou do trajeto diário com sinal fraco; o livro vai direto para a sua estante normal.
* **A busca pesquisa no servidor, não apenas no que está na tela.** A caixa de busca consulta o Komga diretamente, o que é fundamental quando sua biblioteca ultrapassa algumas telas de rolagem.
* **Lendo fora de casa?** Estes passos usam um endereço de rede local (LAN), que só funciona na sua própria rede. Acessar o Komga de fora exige uma VPN de volta à sua rede ou um proxy reverso com HTTPS — vale a pena configurar ambos corretamente em vez de expor o Komga diretamente à internet.
* **Adicionar um segundo servidor segue o mesmo fluxo.** Kavita, Calibre-Web, catálogos OPDS, WebDAV e S3 usam todos essa mesma tela, e o Shiori detecta o tipo para você.

## Leitura relacionada

* [Como sincronizar o Shiori com o Kavita (OPDS e REST API)](/blog/how-to-setup-kavita-rest-api/) — a mesma ideia para um servidor Kavita
* [Como conectar um catálogo OPDS ao seu leitor de e-books Android](/blog/connect-opds-catalog-android-ereader/) — a alternativa de catálogo genérico
* [Leia sua estante na nuvem: Adicione um bucket S3 como servidor de biblioteca](/blog/s3-bucket-library-server-android-epub/) — para armazenamento em nuvem em vez de um servidor

## Seu servidor, sua biblioteca, seu celular

O Komga mantém seus livros sob seu controle no hardware que você possui. Conectá-lo ao Shiori por meio da API nativa significa que você não abre mão disso no celular — você obtém as capas, os metadados e a posição de leitura, sem entregar sua biblioteca para a nuvem de terceiros.

Baixe o Shiori, aponte-o para o seu servidor Komga e continue exatamente de onde parou.