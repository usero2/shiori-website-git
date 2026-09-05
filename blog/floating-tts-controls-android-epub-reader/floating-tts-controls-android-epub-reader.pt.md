# Continue Ouvindo Enquanto Usa Outros Apps: Controles Flutuantes de TTS do Shiori

Você está na metade de um capítulo com a leitura em voz alta (Text-to-Speech) ativada e chega uma mensagem importante. Você alterna para o aplicativo de mensagens para responder — e agora a narração continua tocando ao fundo, fora de alcance. Para pausar, retroceder uma frase ou conferir qual linha está sendo lida, você precisa sair do que está fazendo e voltar ao aplicativo leitor.

**Os Controles Flutuantes (Floating Controls) resolvem isso.** Ao ativar o recurso, o Shiori desenha um pequeno cartão flutuante sobre qualquer outro aplicativo que você estiver usando. O cartão exibe a frase falada com a palavra atual destacada em estilo karaokê e traz botões completos de reprodução — pausar, avançar frases ou pular direto para o livro está a apenas um toque de distância, sem sair do app em que você está.

Este guia mostra como ativar a função, conceder a permissão necessária, ajustar tamanho, cores e opacidade e usá-la no dia a dia enquanto realiza multitarefas no celular. Todas as capturas de tela foram tiradas em um smartphone Android real executando o Shiori 2.3.6.

## O que o cartão flutuante realmente oferece

O cartão não é apenas um widget de reproduzir e pausar. Na sua forma padrão, ele inclui:

* **Linha de karaokê (Karaoke line):** Uma linha de texto deslizante que acompanha a narração, destacando a palavra falada em outra cor para você ler junto sem abrir o livro.
* **Ir para a posição (Go to position):** O botão mais à esquerda abre o Shiori diretamente no trecho que está sendo lido.
* **Adicionar substituição de texto (Add text replacement):** Abre o diálogo de substituição na hora, ideal quando o sintetizador pronuncia um nome incorretamente.
* **Anterior / Reproduzir-Pausar / Próximo (Previous / Play-Pause / Next):** Botões de transporte bem dimensionados para o polegar.
* **Botão fechar (×):** Fecha o cartão flutuante e interrompe a narração por áudio.

## O que você precisa

* Shiori instalado no seu dispositivo Android (testado aqui na versão 2.3.6)
* Qualquer livro na sua biblioteca — este tutorial utiliza *O Retrato de Dorian Gray*
* Um mecanismo de Text-to-Speech do Android em funcionamento (o padrão do sistema é suficiente)
* Permissão para sobrepor a outros apps, solicitada pelo Shiori ao ativar o recurso

## Passo 1: Ative os Controles Flutuantes

1. Na estante de livros, toque na engrenagem de configurações (**Settings**) na barra superior.
2. Abra a seção **TTS Listening**.
3. Localize a opção **Floating Controls** — "Show playback controls over other apps" — e ative o botão deslizante.

Essa linha possui dois elementos importantes: o interruptor à direita liga e desliga o recurso, e a pequena engrenagem ao lado abre uma página completa de ajustes visuais (usaremos essa engrenagem no Passo 3).

![Tela de configurações de TTS do Shiori com os Controles Flutuantes ligados e a engrenagem de personalização visível](01-floating-controls-switch-in-tts-settings.jpg)

## Passo 2: Permita que o Shiori se sobreponha a outros apps

No momento em que você ativa o botão, o Shiori exibe a seguinte solicitação:

> **Floating Controls** — Allow Shiori to show TTS controls over other apps while reading in background?

Toque em **Allow** (Permitir). Essa é a permissão de sobreposição do Android: sem ela, o sistema operacional não permite que nenhum aplicativo desenhe sobre outro, de modo que o cartão simplesmente nunca apareceria. Se o Android levar você à tela de configurações do sistema, conceda a permissão e volte.

Escolher **Not Now** mantém a reprodução de áudio funcionando normalmente em segundo plano, mas você não terá o cartão flutuante na tela.

![Diálogo de permissão dos Controles Flutuantes com as opções Not Now e Allow](02-allow-controls-over-other-apps.jpg)

## Passo 3: Personalize a forma do cartão na página Floating control

Toque na engrenagem ao lado do interruptor dos Controles Flutuantes. A página **Floating control** se abre com uma pré-visualização ao vivo (**Preview**) no topo: qualquer alteração redesenha o cartão instantaneamente.

As opções nesta página incluem:

* **Karaoke ticker on floating controls:** Exibe uma única linha de texto em vez do parágrafo inteiro. A palavra falada fica alinhada à esquerda (ou à direita em livros da direita para a esquerda). Mantenha ativado para acompanhar a leitura ou desligue para exibir apenas botões.
* **Keep the word in the middle:** Centraliza a palavra narrada na linha, mantendo seu olhar focado sempre no mesmo ponto da tela.
* **Hide the control buttons:** Oculta os botões de reprodução, transformando o cartão em uma barra minimalista de texto com o botão de localização.
* **Full-width floating card:** Estende o cartão por toda a largura da tela, permitindo que ele seja movido apenas verticalmente.
* **Snap the floating card to an edge:** Ajusta a fixação nas bordas. **Free** deixa o cartão exatamente onde você soltar; **Top** e **Bottom** fazem o cartão deslizar para a borda superior ou inferior após o arrasto.

![Página de configurações Floating control no Shiori com cartão de teste e opções de personalização](03-floating-control-options-and-preview.jpg)

## Passo 4: Ajuste tamanho, espaçamento e cores

Role a mesma página para baixo para encontrar os controles de aparência:

| Configuração | Padrão | O que modifica |
| --- | --- | --- |
| Floating control size | ×1.0 | Escala o cartão inteiro, inclusive os botões |
| Margin | 8dp | Distância entre o cartão e as bordas da tela |
| Padding | 8dp | Espaçamento interno dentro do cartão |
| Font size | 13sp | Tamanho da fonte da linha de karaokê |
| Background opacity | 90% | Nível de transparência em relação ao app de baixo |

Abaixo dos controles deslizantes existem três paletas: **Text colour** para o texto geral, **Aloud text colour** para a palavra em reprodução e **Background colour** para o fundo do cartão. Como o cartão fica sobre outros aplicativos com fundos variados, o contraste é fundamental: texto claro sobre fundo escuro com alta opacidade garante legibilidade perfeita em qualquer tela.

Se quiser que o cartão seja discreto, reduza a **Background opacity** em vez de diminuir o tamanho: um cartão semitransparente legível é muito mais agradável do que um cartão minúsculo difícil de enxergar.

![Parte inferior da página de ajustes com barras deslizantes de tamanho, margens, fonte e três paletas de cores](04-floating-card-size-and-colours.jpg)

## Passo 5: Inicie a reprodução de áudio no leitor

O cartão flutuante só aparece quando há algo sendo reproduzido. Abra um livro da sua estante e toque no botão de reprodução (**Play**) na barra inferior do leitor.

Enquanto o Shiori estiver no primeiro plano, você terá a experiência completa: o parágrafo lido em destaque, a palavra atual marcada e a barra inferior indicando o avanço no capítulo.

![O Retrato de Dorian Gray aberto no Shiori com leitura TTS ativa e destaque de parágrafo e palavra](05-start-listening-in-the-reader.jpg)

## Passo 6: Saia do app — o cartão acompanha você

Agora mude para outro aplicativo ou volte para a tela inicial do celular. O cartão flutuante aparecerá no topo da tela, acompanhando a narração palavra por palavra.

Arraste o cartão pelo corpo para onde desejar. Se o alinhamento estiver em **Free**, ele fica onde for solto; com **Top** ou **Bottom**, ele desliza para a borda. Se você perder o cartão de vista após vários arrastos, basta **tocar duas vezes seguidas no cartão (Double-tap)** para trazê-lo de volta ao centro da tela.

![Cartão flutuante do Shiori sobreposto a um navegador web, exibindo a frase narrada e os controles](06-floating-card-over-another-app.jpg)

## Passo 7: O layout minimalista de largura total

Se o formato padrão do cartão parecer grande demais, ative **Hide the control buttons** e **Full-width floating card** juntos. O resultado é uma barra fina que atravessa a tela: apenas o botão de posição, um pequeno botão de pausa, a linha de karaokê e o botão fechar.

Esse layout se desloca apenas na vertical. Você pode fixá-lo logo abaixo da barra de status ou acima da barra de gestos inferior, deixando o aplicativo principal totalmente livre para uso.

![Controles flutuantes no modo de largura total minimalista, exibindo uma barra fina sobre o navegador](07-minimal-full-width-card.jpg)

## Passo 8: Corrija uma pronúncia errada sem voltar ao leitor

O segundo botão do cartão abre a tela **Add Text Replacement** diretamente de onde você estiver.

Digite a palavra original em **Find (from)**, digite a pronúncia correta em **Replace with (to)**, selecione o modo **TTS** (para alterar apenas a voz sem modificar o texto visual do livro) e salve. Em poucos segundos a pronúncia é corrigida e a narração continua sem interrupções.

![Diálogo Add Text Replacement aberto diretamente a partir do cartão flutuante](08-add-text-replacement-from-the-card.jpg)

## Solução de problemas (FAQ)

**O cartão flutuante nunca aparece.**  
A permissão de sobreposição provavelmente foi recusada. Desative e ative a chave **Floating Controls** nas configurações para reexibir o diálogo, ou acerte a permissão nas configurações do sistema Android em "Sobrepor a outros apps".

**O cartão aparece mas sem nenhum texto.**  
A opção **Karaoke ticker on floating controls** foi desativada, colocando o cartão no modo exclusivo de botões. Reative a opção nas configurações.

**O cartão fica difícil de ler em apps com fundo claro.**  
Aumente a **Background opacity** para 90%–100% e escolha um fundo escuro com texto branco ou amarelo para alto contraste constante.

**O cartão ficou preso em um canto difícil de alcançar.**  
Dê um **toque duplo no cartão** para recentralizá-lo na tela instantaneamente.

**A reprodução parou ao fechar o cartão no ×.**  
Esse é o comportamento padrão esperado: o botão × fecha o cartão e interrompe o áudio. Para ocultar o widget mas continuar ouvindo no fundo, basta desligar a chave **Floating Controls** nas configurações.

## Dicas práticas

* **Compatibilidade com RTL (Direita para Esquerda):** Em livros em árabe ou hebraico, a linha de texto alinha a palavra falada à direita de forma automática.
* **Marcador instantâneo:** Ao escutar enquanto faz outras atividades, um toque no botão mais à esquerda abre o leitor exatamente na frase alcançada pela voz.
* **Ajuste antes de usar:** A pré-visualização no topo da página de ajustes é interativa. Use-a para encontrar a escala e a fonte ideais antes de usar em outros apps.

## Leitura relacionada

* [Acompanhe a Leitura com Destaque em Estilo Karaokê no Shiori](/blog/read-along-tts-karaoke-highlight-epub-android/)
* [Text-to-Speech Multilíngue no Shiori: Troca Inteligente de Vozes](/blog/multi-language-text-to-speech-android-epub/)
* [Leitura em Voz Alta de Textos Selecionados no Android](/blog/read-selected-text-aloud-epub-android/)
* [Substituição de Texto e Regex para EPUB no Android](/blog/text-replacement-regex-epub-android/)

## Conclusão

Os Controles Flutuantes trazem para o topo da tela as partes mais vitais da leitura — a linha atual falada e os controles essenciais de áudio. Ative o recurso, conceda a permissão e desfrute de seus livros sem precisar interromper suas tarefas no celular.
