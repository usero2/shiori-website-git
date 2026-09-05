# Como Usar o Google Fonts no Shiori: Baixe Fontes e Configure por Idioma

A fonte em que um livro é lido não é um detalhe sem importância. Ela define quanto tempo você consegue ler antes de cansar a vista e, em certos sistemas de escrita, determina se o texto será exibido de forma correta — como marcas de tom e vogais no tailandês, que precisam de posicionamento tipográfico impecável.

O Shiori permite importar arquivos `.ttf` ou `.otf` e atribuir **uma fonte diferente para cada sistema de escrita**. Este guia explica o processo completo: como filtrar no **Google Fonts**, baixar os arquivos no celular, extrair a fonte correta do ZIP e associá-la a cada idioma no aplicativo (uma para tailandês, outra para o alfabeto latino).

Também explicamos o problema mais frequente: **fazer tudo certo e a página continuar idêntica**, com imagens explicativas de comparação.

Todas as etapas foram realizadas em um dispositivo Android real com o Shiori 2.3.6.

## Duas coisas para saber antes de começar

1. **Uma fonte só cobre os caracteres para os quais foi desenhada:** Uma bela fonte serifada latina não possui caracteres tailandeses ou japoneses. Se você associá-la ao idioma errado, o sistema recorrerá à fonte padrão e nada mudará.
2. **O Google Fonts fornece um arquivo ZIP, não uma fonte avulsa:** O importador do Shiori aceita `.ttf` ou `.otf`, logo você precisa descompactar o arquivo antes de importar.

## O que você precisa

- Shiori instalado no Android (v2.3.6)
- Navegador de internet para acessar [fonts.google.com](https://fonts.google.com)
- Um gerenciador de arquivos capaz de descompactar arquivos ZIP
- Um livro com o texto no idioma desejado para testar o resultado

## Passo 1: Filtre o Google Fonts pelo sistema de escrita

No navegador do celular, acesse **fonts.google.com** e toque em **Filters**. Na seção **Language**, abra o menu **Writing system**, digite o sistema desejado (ex: Thai) e marque a caixa.

Ao fechar o painel, a contagem de fontes cai de **1.946 famílias para apenas 34**. Filtrar primeiro garante que você só avalie opções que realmente funcionam para aquele idioma.

![Painel de filtros do Google Fonts filtrando por Writing system Thai](01-google-fonts-filter-writing-system.jpg)
![Catálogo exibindo as 34 famílias compatíveis com tailandês](02-google-fonts-thai-families-count.jpg)

## Passo 2: Avalie a amostra (Specimen) da fonte

Toque na família desejada para ver a página de amostra. Neste guia, escolhemos a **Maitree**, criada pela Cadson Demak para texto corrido em tailandês.

Para leitura confortável de parágrafos longos, prefira sempre o peso **Regular**.

![Amostra da fonte Maitree no Google Fonts com o botão Get font](03-maitree-specimen-google-fonts.jpg)

## Passo 3: Baixe o pacote de fontes

Toque em **Get font**. É possível selecionar mais de uma família antes de baixar — escolha uma para tailandês e outra para o alfabeto latino e toque em **Download all**. O arquivo ZIP será salvo na pasta **Downloads** do celular.

![Painel de seleção de fontes com o botão Download all](04-three-families-selected-download-all.jpg)

## Passo 4: Veja o conteúdo do ZIP e extraia os arquivos

Abra o arquivo compactado no gerenciador de arquivos:

| Item | Descrição |
| --- | --- |
| `<Family>-VariableFont_*.ttf` | **Variable font** contendo todos os pesos em um único arquivo |
| Pasta `static/` | Arquivos separados por peso individual (Regular, Bold, etc.) |
| `OFL.txt` | Licença de uso livre Open Font License |

Se você baixou várias famílias juntas, o ZIP conterá **uma pasta para cada família**. Extraia em um local de fácil acesso.

![Conteúdo do arquivo ZIP demonstrando pasta static e fontes](05-inside-the-downloaded-font-zip.jpg)
![Pastas extraídas contendo uma pasta para cada família baixada](06-multi-family-zip-one-folder-each.jpg)

## Passo 5: Escolha o arquivo correto dentro da pasta

Algumas famílias reúnem seus pesos diretamente na pasta raiz (como Maitree). Outras (como Literata) trazem na pasta `static/` tamanhos ópticos (**Optical sizes**), como `18pt`, `24pt`, etc.

Duas regras infalíveis:
1. **Escolha sempre a Regular:** O Shiori utiliza esse arquivo no corpo do texto: `Maitree-Regular.ttf` ou `Literata_18pt-Regular.ttf` (nunca Bold ou Italic).
2. **Em tamanhos ópticos, escolha o menor (18pt):** É o tamanho projetado para leitura contínua em telas móveis.

![Arquivos da família Maitree listando de ExtraLight a Bold](07-maitree-weight-files.jpg)
![Pasta static da família Literata mostrando opções de 18pt](08-literata-static-optical-sizes.jpg)

## Passo 6: Abra o menu de fontes por idioma no Shiori

No Shiori, acesse **Settings &rarr; Reading &rarr; Reader font**. O menu lista 9 opções: **All languages**, além de **Thai**, **Latin**, **Japanese**, **Chinese**, **Korean**, **Arabic**, **Cyrillic** e **Devanagari**.

Toque no idioma que deseja configurar — aqui, **Thai**.

![Diálogo Reader font listando todos os idiomas disponíveis](09-shiori-reader-font-script-slots.jpg)
![Menu do slot de tailandês com o botão Import font](10-thai-slot-import-font-button.jpg)

## Passo 7: Importe o arquivo de fonte

Toque em **Import font** e selecione o arquivo extraído (`Maitree-Regular.ttf`). O Shiori importa, cadastra na lista e ativa a fonte automaticamente.

Toque em **OK** nas duas caixas de diálogo para salvar.

![Seletor de arquivos navegando na pasta da fonte extraída](11-file-picker-inside-font-folder.jpg)
![Slot de tailandês com Maitree-Regular.ttf selecionada](12-thai-slot-maitree-selected.jpg)

## Passo 8: Veja a transformação na leitura

Veja o documento antes com a fonte padrão do sistema (`System fonts`) e depois com a **Maitree** aplicada.

No comparativo direto, a Maitree oferece desenho mais largo, legível e proporções harmônicas para as vogais e acentos. Os textos em chinês e russo na mesma página continuam inalterados.

![Página de livro exibindo tailandês na fonte padrão do sistema](13-thai-before-system-font.jpg)
![Mesma página com o tailandês renderizado na fonte Maitree](14-thai-after-maitree.jpg)
![Recorte comparativo lado a lado entre fonte do sistema e Maitree](15-thai-row-system-vs-maitree.jpg)

## Passo 9: Adicione um segundo idioma (Latino)

Repita o procedimento para outro idioma. Para textos latinos (inglês/português), importamos a **Literata** (`Literata_18pt-Regular.ttf`) no slot **Latin**.

O menu exibirá ambos os idiomas com suas fontes personalizadas independentes.

![Slot Latin com Literata_18pt-Regular selecionada](16-latin-slot-literata-selected.jpg)
![Menu Reader font com fontes atribuídas individualmente para Thai e Latin](17-reader-font-two-scripts-assigned.jpg)

## Quando nada muda: as duas armadilhas mais comuns

1. **A fonte não possui os caracteres daquele idioma:** Colocar uma fonte latina no slot de tailandês não surtirá efeito, pois o sistema reverterá automaticamente para a fonte padrão.
2. **A nova fonte é idêntica à que o aparelho já usa:** O exemplo abaixo mostra o mesmo texto com a fonte do sistema, com a `NotoSerifThai-Regular.ttf` e com a `Maitree-Regular.ttf`. Como muitos celulares já utilizam a família Noto de fábrica, trocar por outra Noto não gerará diferença perceptível.

![Comparativo do mesmo parágrafo em três fontes diferentes](18-same-paragraph-three-thai-fonts.jpg)

## Perguntas frequentes (FAQ)

**A fonte não mudou depois de importar.**  
Verifique se a opção **Force reader fonts** está ativada em **Settings &rarr; Reading**, para sobrepor estilos CSS embutidos no próprio EPUB.

**O Shiori não abre o arquivo selecionado.**  
O aplicativo suporta apenas arquivos `.ttf` e `.otf`. Descompacte o arquivo ZIP antes de importar.

## Conclusão

Filtre no Google Fonts pelo sistema de escrita, confira a amostra, descompacte o arquivo, escolha a variante Regular e associe ao idioma no Shiori. Seus livros terão tipografia agradável e personalizada para cada língua que você lê.
