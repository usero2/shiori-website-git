# Lee Notas al Pie y Enlaces sin Perder tu Posición en Android

Los libros académicos, las ediciones comentadas y los textos con notas al pie suelen ser frustrantes en el móvil: al pulsar un número de nota, el lector salta al final del libro y pierdes tu línea de lectura.

Shiori soluciona este problema con elegancia. Al pulsar una nota al pie o referencia interna, se abre una **tarjeta emergente de vista previa** en la parte inferior para leerla al instante sin moverte de página. Y si el enlace apunta a un sitio web externo, Shiori te pide confirmación antes de abrir el navegador.

## Por Qué Es Crucial para la Lectura de Estudio

* **Enlaces internos (notas al pie):** Deben ser una consulta rápida sin perder el hilo de la lectura.
* **Enlaces externos (páginas web):** Te sacan del lector, por lo que una confirmación previa evita salidas accidentales.

## Qué Necesitas

* Shiori instalado en Android (comprobado en v2.3.4c11)
* Cualquier EPUB con enlaces a notas (como *El Príncipe* de Maquiavelo en Project Gutenberg)

## Paso 1: Localiza la Marca de Nota al Pie en el Texto

Las notas al pie se muestran como números volados junto a un pequeño icono de enlace (ejemplo: `Lodovico[1]` en el Capítulo III de *El Príncipe*).

![Capítulo III de El Príncipe con marca de nota al pie interactiva](01-footnote-reference-marker-in-chapter-text.jpg)

## Paso 2: Pulsa y se Abrirá la Vista Previa Emergente

Al tocar la nota, la página no se mueve: se despliega una tarjeta inferior con el título del capítulo y el texto de la anotación, con botones **Cancel** y **Navigate**.

![Tarjeta emergente de vista previa con botones Cancel y Navigate](02-footnote-preview-popup.jpg)

Léela cómodamente en el acto y pulsa **Cancel** para cerrarla y seguir leyendo sin perder el hilo.

## Paso 3: Pulsa «Navigate» para Ver Todo el Contexto

Si la nota es muy extensa y deseas leerla en su contexto completo, pulsa el botón **Navigate**. Shiori se desplazará a la sección de notas dentro del propio libro sin salir de la app.

![Posición de la nota al pie dentro del libro manteniendo la barra de progreso](03-footnote-navigate-stays-in-book.jpg)

## Paso 4: Los Enlaces Externos Reciben un Trato Especial

En las páginas de créditos o bibliografías abundan enlaces a páginas web reales (como `www.gutenberg.org`). Shiori detecta automáticamente estos enlaces externos para evitar abrir el navegador por accidente.

![Texto con enlace externo a www.gutenberg.org](04-external-link-in-book-text.jpg)

## Paso 5: Confirmación de Seguridad Antes de Salir de la App

Al pulsar un enlace externo, se abre un cuadro de diálogo con la URL completa (`https://www.gutenberg.org/`). Pulsa **Cancel** para permanecer en el libro o **Navigate** para abrir la web.

![Cuadro de diálogo de confirmación de enlace externo](05-external-link-confirmation-dialog.jpg)

## Solución de Problemas

**Al pulsar una nota la página salta en lugar de abrir la vista previa**  
Algunos EPUBs antiguos no incluyen etiquetas de enlace HTML adecuadas (`<a>`).

**El texto de la nota al pie se corta en la vista previa**  
La vista previa está pensada para consultas rápidas. Pulsa **Navigate** para ir al texto completo.

## Lecturas Relacionadas

* [How to Highlight Text and Take Notes in an Android EPUB Reader](/blog/highlight-and-take-notes-epub-android/)
* [5 Best Sites to Download Free EPUB Books](/blog/free-epub-sources/)
