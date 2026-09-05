# Configure a Leitura em Voz Alta Corretamente: Mecanismo de TTS, Idiomas e Prioridade no Shiori

A leitura em voz alta (Text-to-Speech) soa estranha geralmente por um de dois motivos: ou o mecanismo de síntese por trás dela não é o que você pretendia usar, ou o livro está em um idioma que o aplicativo não foi instruído a ler. O primeiro problema deixa todos os livros com som robótico e monótono; o segundo faz um livro específico soar como uma máquina soletrando uma lista telefônica.

Ambas as configurações residem exatamente no mesmo lugar no Shiori: **Settings → TTS Listening**. Essa tela única contém o seletor de **TTS Engine** no topo, a lista de **TTS Languages** logo abaixo, e as opções individuais de voz, tom (Pitch) e velocidade (Speed) para cada idioma. Este guia explica todo o processo na ordem recomendada, com foco especial na parte onde muitos usuários se perdem — a **ordem de prioridade**, que define quem fala quando uma mesma escrita é compartilhada por dois idiomas.

Todas as capturas de tela foram feitas em um smartphone Android real executando o Shiori 2.3.6.

## Por que a ordem da lista é tão importante

O Shiori não pergunta em que idioma o livro está escrito. Ele analisa os caracteres da página, divide cada parágrafo em blocos de uma mesma escrita (alfabeto) e envia cada bloco para a voz correspondente. Isso funciona perfeitamente quando uma escrita pertence a apenas um idioma — o tailandês, por exemplo, só pode ser tailandês.

A situação deixa de ser óbvia quando uma escrita é compartilhada:

| Escrita na página | Idiomas que podem reivindicá-la |
| --- | --- |
| Alfabeto latino | Inglês, português, espanhol, alemão, francês e outros |
| Caracteres Han (Kanji) | Chinês e japonês utilizam ambos |
| Alfabeto cirílico | Russo e idiomas vizinhos |

Quando dois idiomas ativados disputam a mesma escrita, o Shiori precisa de um critério de desempate, e esse critério é a ordem da lista: **o idioma mais acima vence**. O próprio aplicativo explica isso no topo da tela de TTS Languages. É por isso que reordenar não é um capricho estético — para quem lê chinês e japonês, é a diferença entre ouvir um livro em chinês narrado em chinês ou com voz japonesa.

## O que você precisa

* Shiori instalado em um dispositivo Android (usamos v2.3.6 neste tutorial)
* Pelo menos um mecanismo de TTS no aparelho (o padrão do sistema é suficiente)
* Pacotes de voz baixados nas configurações do seu sistema para os idiomas lidos
* Um livro para testar a reprodução

## Passo 1: Abra a tela TTS Listening

1. Na estante de livros, toque na engrenagem de **Settings** na barra superior.
2. Abra a seção **TTS Listening** (com o ícone de fones de ouvido).

Repare no subtítulo logo abaixo dessa linha: ele lista os idiomas ativados no momento em ordem de prioridade. Se um livro está sendo lido pela voz errada, essa linha revela o motivo antes mesmo de você abrir a tela.

A tela se abre com as duas configurações essenciais no topo — **TTS Engine** e **TTS Languages** —, seguidas por **Preview voice**, controles flutuantes, cores de destaque e a seção **Per-language improvements** no rodapé.

![Tela de configurações do Shiori destacando TTS Listening com seus idiomas ativos](01-settings-tts-listening-entry.jpg)
![Tela de configurações TTS Listening no Shiori exibindo TTS Engine, TTS Languages e opções](02-tts-listening-screen.jpg)

## Passo 2: Escolha o mecanismo de TTS (TTS Engine)

Toque no menu suspenso **TTS Engine**. Ele lista todos os mecanismos de fala instalados no aparelho, além da opção **System Default**.

No dispositivo de teste há duas opções: *System Default* e *Serviços de Voz do Google*. A sua lista dependerá do que está instalado — muitos aparelhos trazem um motor do fabricante (como Samsung) e você pode baixar outros da Play Store.

![Menu suspenso TTS Engine exibindo System Default e Google TTS](03-tts-engine-picker.jpg)

**Qual deles você deve escolher?**

* **System Default:** É a escolha mais segura. Segue o que você configurou nas configurações do Android, mantendo a gestão centralizada.
* **Nomear um motor explicitamente:** Ideal quando um mecanismo específico tem vozes muito superiores para seu idioma, ou quando você alterou o padrão do Android para outro app mas quer que o Shiori use um motor dedicado de alta fidelidade.

Essa escolha define a qualidade de todas as vozes. Cada idioma ativado no próximo passo só poderá oferecer as vozes que este mecanismo disponibiliza.

## Passo 3: Entenda para que serve o "Preview voice"

Toque em **Preview voice** e leia com atenção a primeira linha do diálogo:

> Usado pelos botões de teste e na leitura avulsa de trechos selecionados, não pela voz que narra o livro inteiro.

Este diálogo controla apenas os botões de reprodução ▶ nas configurações e o recurso "Ler seleção em voz alta" — **não** a narração contínua dos livros. Ele tem sua própria seleção de motor e uma linha de idioma onde **Auto** detecta o texto selecionado.

![Diálogo Preview voice no Shiori com botões de motor e chips de idioma Auto, English e Thai](04-preview-voice-dialog.jpg)

Muitas pessoas trocam o motor aqui, ouvem o teste melhorar e não entendem por que o livro continua com o som antigo. Para alterar a narração do *livro*, configure o TTS Engine no Passo 2 e as vozes individuais no Passo 6.

## Passo 4: Ative os idiomas que você realmente lê

De volta à tela TTS Listening, toque em **TTS Languages**.

A lista exibe todos os idiomas suportados. Os ativos ficam no topo com a caixa marcada; os inativos aparecem em cinza abaixo. Cada linha traz as setas de prioridade **▲ ▼**, a caixa de seleção, o nome nativo do idioma e a seta para expandir parâmetros.

![Tela TTS Languages no Shiori com inglês, tailandês e japonês ativados no topo](05-tts-languages-list.jpg)

Marque apenas os idiomas que você realmente lê. Quanto menos idiomas ativados, maior a precisão do sintetizador, pois menos disputas de escrita ocorrerão.

**Como encontrar um idioma:** Use a caixa **Search language…**. Lembre-se de que os nomes aparecem em sua escrita original. Se buscar pelo nome em inglês não der resultado, use o código de duas letras (ex: digite `zh` para encontrar chinês).

Novos idiomas ativados vão para o **final** do grupo ativo. Ao marcar chinês, ele ficará abaixo de japonês — o que ajustaremos no Passo 5.

![Busca em TTS Languages com o código zh exibindo o resultado em chinês](06-search-language-by-code.jpg)

## Passo 5: Ajuste a ordem de prioridade dos idiomas

Este é o passo que resolve "meu livro em chinês está sendo lido com sotaque japonês".

Como chinês e japonês compartilham os caracteres Han (Kanji), quem estiver mais acima na lista assume a leitura. Na primeira imagem, japonês está acima de chinês, recebendo todos os caracteres Han.

Toque na seta **▲** na linha do chinês uma vez. Ele trocará de lugar com japonês, e agora os caracteres Han serão lidos com voz chinesa.

![Lista com japonês acima de chinês, dando prioridade ao japonês](07-priority-japanese-above-chinese.jpg)
![Mesma lista após tocar na seta para cima, com chinês acima de japonês](08-priority-chinese-above-japanese.jpg)

Três detalhes importantes:

* **As setas só movem idiomas dentro do grupo ativo:** A seta ▼ da última linha ativa fica desabilitada, pois idiomas desativados não têm prioridade.
* **A ordem é global, não por livro:** Representa sua preferência: "quando a escrita for ambígua, priorize este idioma".
* **Apenas a ambiguidade é afetada:** Mover chinês acima de japonês não afeta textos em português ou inglês.

A mesma regra vale para o alfabeto latino: se lê inglês e português, coloque o mais frequente no topo.

## Passo 6: Ajuste tom, velocidade e voz para cada idioma

Toque na seta à direita de qualquer linha ativa para expandi-la:

* **Pitch (Tom)** e **Speed (Velocidade)**: sliders em relação ao valor padrão
* **▶ preview**: botão para ouvir uma frase de teste no idioma selecionado
* **Menu Voice**: lista com todas as vozes fornecidas pelo motor

![Linha de inglês expandida com sliders de Pitch e Speed, botão de teste e menu de vozes](09-language-pitch-speed-voice.jpg)

Configurar cada idioma separadamente permite ouvir sua língua materna em ritmo mais acelerado e um idioma em aprendizado em ritmo mais pausado.

## Passo 7: Escolha uma voz — offline ou online e sotaques

Abra o menu **Voice** em um idioma expandido. Abaixo de **Default**, as vozes são listadas com sua região e disponibilidade:

* **Offline / Online:** Vozes *Offline* ficam gravadas no aparelho e funcionam sem gastar internet. Vozes *Online* são processadas na nuvem, soam muito mais naturais e humanas, mas consomem dados móveis.
* **Prefixos regionais:** Permitem escolher variações de sotaque (ex: inglês britânico, americano, australiano).

![Menu suspenso Voice com vozes identificadas como Offline e Online](10-voice-picker-offline-online.jpg)

## Passo 8: Confira as melhorias específicas por idioma

No rodapé da tela TTS Listening fica a seção **Per-language improvements**. Com tailandês ativado, surgem opções exclusivas:

* **Thai word segmentation:** segmenta palavras em idiomas sem espaços, essencial para evitar pronúncias truncadas.
* **Thai word dictionary:** dicionário para ensinar a pronúncia correta de termos específicos.

![Seção Per-language improvements exibindo o botão de segmentação em tailandês](11-per-language-improvements-thai.jpg)

## Passo 9: Altere tudo isso sem sair do livro

Você não precisa voltar às configurações no meio de um capítulo. No leitor, o ícone de fones na barra de ferramentas abre um painel completo com a mesma lista de idiomas, setas **▲ ▼** e controles de velocidade e tom.

O idioma que está falando no momento é exatamente o que está no topo dessa lista.

![Painel de TTS dentro do leitor de livros exibindo a lista e sliders de controle](12-reader-tts-panel-active-language.jpg)

## Passo 10: Deixe o Shiori detectar idiomas desconhecidos

Se um livro utilizar uma escrita que não está ativada em nenhum idioma da sua lista, o Shiori exibirá um aviso automático:

> **Enable Arabic voice?** — Este livro parece estar em árabe, que ainda não está ativado. Deseja ativá-lo para usar a voz correta?

Toque em **Enable** e o idioma será ativado e colocado no **topo** da lista automaticamente, garantindo que o livro atual seja lido com a voz correta sem demora.

![Aviso perguntando se deseja ativar a voz árabe detectada no livro](13-enable-detected-language-prompt.jpg)
![Painel do leitor após ativar árabe, posicionado no topo da lista com leitura ativa](14-enabled-language-on-top-reading.jpg)

## Configurações recomendadas

| O que você lê | O que ativar | Ordem recomendada |
| --- | --- | --- |
| Apenas um idioma | Somente esse idioma | Sem necessidade de ordenar (mais estável) |
| Português + termos em inglês | Português e inglês | Português no topo; inglês assume trechos latinos |
| Chinês e japonês | Ambos (+ inglês) | O idioma mais lido no topo (decide os caracteres Han) |
| Vários idiomas europeus | Apenas os que você realmente lê | O principal no topo; os demais assumem textos claros |

## Perguntas frequentes (FAQ)

**O livro está sendo lido no idioma errado.**  
Dois idiomas ativados compartilham a mesma escrita. Abra a lista TTS Languages e suba o idioma correto com a seta ▲.

**A voz parou de funcionar sem Wi-Fi.**  
Você selecionou uma voz *Online*. Mude para uma voz *Offline* no menu Voice antes de viajar.

**A voz parece muito robótica.**  
Depende do motor do sistema. Troque o TTS Engine no Passo 2 ou escolha uma voz de maior qualidade no Passo 7.

## Conclusão

O mecanismo define a beleza da voz; a ordem da lista define quem fala. Ajuste o motor uma vez, ative apenas o que lê e desfrute de leituras em voz alta impecáveis em qualquer livro.
