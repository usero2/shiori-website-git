# Leia Notas de Rodapé e Links sem Perder o Lugar no Android

Livros acadêmicos, clássicos anotados e obras com notas de fim de capítulo compartilham o mesmo incômodo no celular: tocar em uma nota de rodapé arremessa você para o final do arquivo, perdendo completamente o ponto de leitura.

O Shiori gerencia links internos de forma inteligente. Ao tocar em uma nota de rodapé ou referência cruzada, uma **janela pop-up de prévia** desliza na parte inferior para que você leia a nota sem sair do parágrafo. Já os links para a internet exigem confirmação antes de abrir o navegador.

## Por Que Isso É Essencial na Leitura Acadêmica

* **Links internos (notas de rodapé):** Devem ser conferidos rapidamente sem interromper a fluidez da leitura.
* **Links externos (sites da web):** Abrem outro aplicativo, exigindo confirmação para evitar toques acidentais.

## O Que Você Precisa

* Shiori instalado no Android (testado na v2.3.4c11)
* Qualquer EPUB com links de notas de rodapé (como *O Príncipe* de Maquiavel no Project Gutenberg)

## Passo 1: Localize a Nota de Rodapé no Texto

As notas aparecem como números sobrescritos ao lado de um pequeno ícone de link — como em `Lodovico[1]` no Capítulo III de *O Príncipe*.

![Página do Capítulo III de O Príncipe com nota de rodapé inline](01-footnote-reference-marker-in-chapter-text.jpg)

## Passo 2: Toque para Ver a Prévia Pop-up

Ao tocar na nota, o Shiori não pula de página: um card desliza na parte inferior com o título do capítulo e o texto da nota, com botões **Cancel** e **Navigate**.

![Pop-up de prévia da nota de rodapé com botões de ação](02-footnote-preview-popup.jpg)

Leia a anotação e toque em **Cancel** para fechar e continuar de onde parou.

## Passo 3: Toque em "Navigate" se Precisar de Mais Detalhes

Para notas muito extensas, toque no botão **Navigate** dentro do card de prévia. O Shiori rola suavemente até a posição da nota no próprio livro, sem sair do app.

![Posição da nota de rodapé mantendo a barra de progresso](03-footnote-navigate-stays-in-book.jpg)

## Passo 4: Links Externos Recebem Tratamento Especial

Citações e créditos frequentemente contêm endereços da web (como `www.gutenberg.org`). O Shiori identifica esses links para evitar que o navegador abra inesperadamente.

![Texto com link externo para www.gutenberg.org](04-external-link-in-book-text.jpg)

## Passo 5: Confirmação Segura Antes de Sair do App

Ao tocar no link externo, uma caixa de diálogo exibe o endereço completo (`https://www.gutenberg.org/`). Você pode escolher **Cancel** para continuar no livro ou **Navigate** para abrir o navegador.

![Diálogo de confirmação com URL completa](05-external-link-confirmation-dialog.jpg)

## Solução de Problemas

**Ao tocar em uma nota a página pula em vez de abrir a prévia**  
Alguns arquivos EPUB mal formatados não incluem links HTML válidos (`<a>`).

**O texto da prévia parece cortado**  
O pop-up foi feito para consultas rápidas. Toque em **Navigate** para ler a nota completa.

## Leituras Relacionadas

* [How to Highlight Text and Take Notes in an Android EPUB Reader](/blog/highlight-and-take-notes-epub-android/)
* [5 Best Sites to Download Free EPUB Books](/blog/free-epub-sources/)
