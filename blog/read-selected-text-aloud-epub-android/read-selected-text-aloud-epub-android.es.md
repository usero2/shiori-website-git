# Comprueba la Pronunciación Frase a Frase: Lee en Voz Alta Solo el Texto Seleccionado en Android

A menudo, al leer un libro, te encuentras con una frase cuya pronunciación dudas: un término desconocido, un nombre en un idioma extranjero o una expresión con una entonación particular. Iniciar la lectura en voz alta continua de todo el libro (TTS) solo para escuchar esa línea implica tener que escuchar el resto del texto, pausar y volver a desplazarte buscando dónde estabas. Lo único que querías era escuchar *esa frase en concreto*, una sola vez.

Shiori incluye una función independiente diseñada específicamente para esto: selecciona cualquier palabra o frase en el lector y se leerá en voz alta una sola vez, sin iniciar la narración continua de la obra ni modificar tu posición de lectura.

## Por Qué la Lectura Puntual Es Tan Práctica

* **Comprobación de pronunciación al aprender idiomas:** Escucha la pronunciación correcta de un término o frase sin necesidad de reproducir toda la página.
* **Nombres y frases en otros idiomas intercalados:** En obras con expresiones extranjeras, selecciona solo ese fragmento y escúchalo en el idioma y acento correctos.
* **Confirmación auditiva antes de hablar:** Muy útil al preparar lecturas en voz alta, exposiciones o intercambios lingüísticos.

## Lo Que Necesitas

* Shiori instalado en tu dispositivo Android (probado en la versión v2.3.4)
* Cualquier libro abierto en el lector con el texto visible en pantalla

A continuación, la vista inicial de *El Príncipe* en el lector de Shiori antes de realizar ninguna selección:

![El Príncipe abierto en el lector de Shiori con la barra de herramientas visible y ningún texto seleccionado](01-book-open-reading-view.jpg)

## Paso 1 — Mantén pulsada una palabra para seleccionarla

Mantén pulsada cualquier palabra en el lector durante un segundo. La palabra quedará resaltada, aparecerán tiradores redondos de selección en ambos extremos y se abrirá un menú flotante con opciones como **Read**, **Bookmark**, **Highlight**, **Translate**, **Aloud** y **TTS preview**.

![Palabra seleccionada tras una pulsación larga, mostrando los tiradores de selección y el menú flotante](02-long-press-select-word-menu.jpg)

Si no aparece a la primera, mantén el dedo firme sin deslizarlo, ya que un deslizamiento prematuro se interpreta como un gesto de cambio de página.

## Paso 2 — Arrastra el tirador para abarcar la frase completa

Seleccionar una sola palabra es ideal para consultas rápidas, pero para comprobar la entonación y el ritmo suele ser preferible escuchar la frase entera. Arrastra el tirador redondo en cualquiera de los extremos para cubrir el texto que desees.

![Selección ampliada de una palabra a una frase completa mediante el tirador redondo de selección](03-drag-handle-extend-full-sentence.jpg)

El menú flotante sigue el recorrido de la selección para que puedas verificar con exactitud el fragmento antes de reproducirlo.

## Paso 3 — Pulsa Aloud para escuchar

Pulsa **Aloud** en el menú contextual. Shiori pronunciará el texto seleccionado una sola vez y se detendrá de inmediato: no continuará leyendo la frase siguiente ni abrirá la barra de controles de reproducción general.

![El lector vuelve a su estado normal tras pulsar Aloud, con la selección limpia y el progreso intacto](05-back-to-reading-unchanged-position.jpg)

La selección se desactiva y regresas exactamente al punto donde estabas: mismo capítulo, misma posición de desplazamiento y mismo progreso de lectura.

## Configura la Voz y el Idioma (Preview Voice)

La voz empleada en **Aloud** no tiene por qué ser la misma que lee el libro completo. Pulsa el icono de controles deslizantes junto a **Preview voice** en la parte inferior del menú contextual para abrir los ajustes.

![Ventana emergente de Preview voice en Shiori que permite configurar de forma independiente el motor TTS y el idioma](04-preview-voice-language-picker.jpg)

El cuadro de diálogo lo aclara: esta voz es «utilizada por los botones de muestra y la lectura puntual, no por la voz que lee el libro completo». Puedes elegir aquí un motor de **TTS Engine** distinto y definir el **Language** a un idioma concreto en lugar de Auto. Esto resulta fundamental cuando la frase seleccionada está en una lengua distinta al resto del libro, logrando una pronunciación auténtica y natural.

## Sin Mover Tu Posición de Lectura

La gran ventaja de esta herramienta es su agilidad: toma prestado el motor TTS para una sola frase y devuelve el control al instante. No hay minirreproductores que cerrar ni posiciones que restablecer. Si la lectura general estaba en pausa, seguirá en pausa.

## Solución de Problemas (Troubleshooting)

* **No suena nada al pulsar Aloud:** Asegúrate de tener instalado y activado un motor de texto a voz en los ajustes del sistema Android o cambia el **TTS Engine** en el cuadro de Preview voice.
* **El menú no aparece al mantener pulsado:** Presiona directamente sobre el texto del libro, no sobre las barras ni los márgenes, manteniendo el dedo quieto.
* **La página se desplaza al mover el tirador:** Tira con precisión desde el círculo del tirador y no sobre el texto resaltado.
* **Lee con el idioma o acento incorrecto:** Abre **Preview voice**, define el **Language** manualmente en lugar de Auto y asegúrate de que el paquete de voz correspondiente esté descargado en el dispositivo.

## Consejos Útiles (Tips)

* **Selecciona una sola palabra** cuando solo necesites conocer la pronunciación de un término concreto.
* **Configura voces por idioma** en TTS Listening para que Preview voice utilice los mismos ajustes — consulta [Multi-Language Text-to-Speech in Shiori](/blog/multi-language-text-to-speech-android-epub/).
* **Menú multifunción:** El mismo menú permite gestionar marcadores, subrayados de colores y traducción simultánea — consulta [Highlight and Take Notes in Shiori](/blog/highlight-and-take-notes-epub-android/) y [How to Translate to Multiple Languages](/blog/how-to-translate-to-multiple-language/).
* **Guía de botones del lector:** Descubre todas las funciones de la barra de herramientas en [Every Button on the Reader Screen](/blog/epub-reader-screen-guide-android/).

## Una Frase, Una Vez

No necesitas poner a hablar a todo el libro para comprobar cómo suena una sola línea. Selecciona el fragmento, pulsa **Aloud** y continúa leyendo con total fluidez.
