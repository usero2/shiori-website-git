# Sigue Escuchando Mientras Usas Otras Apps: Controles Flotantes de TTS de Shiori

Estás escuchando la locución de un capítulo mediante síntesis de voz (TTS) y entra un mensaje importante. Cambias de aplicación para responder y la narración sigue sonando de fondo, pero fuera de tu alcance. Para pausar, retroceder una frase o comprobar qué línea se está leyendo, tienes que interrumpir lo que estás haciendo y volver a la app de lectura.

**Los Controles Flotantes (Floating Controls) solucionan esto por completo.** Al activar la función, Shiori dibuja una tarjeta flotante compacta encima de cualquier otra aplicación que utilices. La tarjeta muestra la frase leída con la palabra actual resaltada en estilo karaoke e integra botones completos de reproducción: pausar, saltar párrafos o volver directamente al libro está a un toque de distancia, sin abandonar la app actual.

Esta guía te muestra paso a paso cómo activar la función, conceder el permiso del sistema, ajustar tamaño, colores y opacidad, y sacarle partido en el día a día multitarea. Todas las capturas fueron tomadas en un dispositivo Android real con Shiori 2.3.6.

## Qué te ofrece realmente la tarjeta flotante

La tarjeta flotante no es un simple widget de reproducir y pausar. En su configuración por defecto incluye:

* **Línea de karaoke (Karaoke line):** Una línea deslizante que sigue el ritmo de la narración, destacando la palabra actual en otro color para leer al compás sin abrir el libro.
* **Ir a la posición (Go to position):** El botón situado a la izquierda abre el lector de Shiori exactamente en el punto que se está escuchando.
* **Añadir sustitución de texto (Add text replacement):** Abre el cuadro de diálogo para corregir al instante palabras mal pronunciadas.
* **Anterior / Reproducir-Pausar / Siguiente (Previous / Play-Pause / Next):** Botones de control con un tamaño idóneo para el pulgar.
* **Botón cerrar (×):** Oculta la tarjeta flotante y detiene la narración.

## Requisitos previos

* Shiori instalado en tu móvil o tablet Android (probado en v2.3.6)
* Cualquier libro en tu biblioteca (en este ejemplo usamos *El Retrato de Dorian Gray*)
* Motor de síntesis de voz (TTS) de Android en funcionamiento (el del sistema es perfecto)
* Permiso de superposición sobre otras aplicaciones, solicitado por Shiori al activar la opción

## Paso 1: Activa los Controles Flotantes

1. En la estantería de libros, pulsa el engranaje de ajustes (**Settings**) en la barra superior.
2. Abre la sección **TTS Listening**.
3. Localiza la fila **Floating Controls** — "Show playback controls over other apps" — y enciende el interruptor.

Esta fila cuenta con dos elementos clave: el interruptor deslizante de la derecha para encender o apagar la función, y un pequeño engranaje al lado que abre la página de ajustes de diseño y apariencia (lo usaremos en el Paso 3).

![Ajustes de TTS en Shiori con los Controles Flotantes activados y el icono de engranaje visible](01-floating-controls-switch-in-tts-settings.jpg)

## Paso 2: Concede el permiso para mostrarse sobre otras apps

En cuanto activas el interruptor, Shiori muestra el siguiente aviso:

> **Floating Controls** — Allow Shiori to show TTS controls over other apps while reading in background?

Pulsa **Allow** (Permitir). Este es el permiso de superposición de Android: sin él, el sistema operativo no permite a ninguna app dibujar por encima de otra y la tarjeta flotante simplemente no aparecería. Si el sistema te redirige a los ajustes de Android, concede el permiso y regresa a la app.

Si eliges **Not Now**, la reproducción de audio seguirá funcionando en segundo plano, pero no dispondrás de la tarjeta en pantalla.

![Cuadro de diálogo solicitando permiso para mostrarse sobre otras apps con opciones Not Now y Allow](02-allow-controls-over-other-apps.jpg)

## Paso 3: Configura la forma de la tarjeta en la página Floating control

Pulsa el engranaje junto al interruptor de Floating Controls. Se abrirá la página **Floating control** con una vista previa en directo (**Preview**) en la parte superior: cualquier ajuste redibuja la tarjeta en tiempo real.

Las opciones principales de esta pantalla incluyen:

* **Karaoke ticker on floating controls:** Muestra una línea continua en lugar del párrafo completo. La palabra leída se ancla a la izquierda (o a la derecha en libros en árabe o hebreo). Déjalo activado para leer al compás o desactívalo si solo buscas los botones.
* **Keep the word in the middle:** Mantiene la palabra hablada fija en el centro de la línea, evitando que la vista salte continuamente.
* **Hide the control buttons:** Oculta todos los botones de transporte, reduciendo la tarjeta a una barra de texto con el botón de salto.
* **Full-width floating card:** Ensancha la tarjeta a lo ancho de toda la pantalla, permitiendo moverla únicamente en sentido vertical.
* **Snap the floating card to an edge:** Anclaje magnético a bordes. **Free** deja la tarjeta donde la sueltes; **Top** y **Bottom** hacen que se deslice al borde superior o inferior de la pantalla.

![Página de configuración Floating control con tarjeta de vista previa y conmutadores](03-floating-control-options-and-preview.jpg)

## Paso 4: Ajusta tamaño, espaciado y colores

Desplázate hacia abajo en la misma pantalla para ver los controles deslizantes de apariencia:

| Ajuste | Predeterminado | Qué modifica |
| --- | --- | --- |
| Floating control size | ×1.0 | Escala la tarjeta completa y sus botones |
| Margin | 8dp | Distancia entre la tarjeta y los bordes de la pantalla |
| Padding | 8dp | Margen interno alrededor del contenido |
| Font size | 13sp | Tamaño de letra de la línea de karaoke |
| Background opacity | 90% | Nivel de transparencia sobre la app inferior |

Bajo las barras hay tres paletas: **Text colour** para el texto general, **Aloud text colour** para la palabra en locución y **Background colour** para el fondo. El contraste aquí es vital: un texto claro sobre un fondo oscuro con alta opacidad garantiza una lectura impecable sobre cualquier interfaz.

Si deseas que la tarjeta no estorbe, reduce la **Background opacity** en lugar de empequeñecer el tamaño: una tarjeta semitransparente legible es infinitamente más cómoda que una diminuta e ilegible.

![Zona inferior de ajustes con controles de tamaño, margen, tipografía, opacidad y paletas de color](04-floating-card-size-and-colours.jpg)

## Paso 5: Inicia la lectura en el libro

La tarjeta flotante no aparece en pantalla hasta que haya reproducción de audio activa. Abre cualquier libro de tu biblioteca y pulsa el botón de reproducción (**Play**) en la barra inferior del lector.

Mientras Shiori esté en primer plano disfrutarás del lector completo: el párrafo activo resaltado, la palabra actual señalada y la barra inferior de avance de capítulo.

![El Retrato de Dorian Gray abierto en Shiori con locución activa y resaltado sincronizado](05-start-listening-in-the-reader.jpg)

## Paso 6: Cambia de app — la tarjeta te acompaña

Ahora cambia a otra app (como WhatsApp o tu navegador) o sal al escritorio. La tarjeta flotante aparecerá en primer plano, siguiendo la narración palabra por palabra.

Arrastra la tarjeta por su cuerpo hacia donde prefieras. Con el anclaje en **Free** se quedará fija; con **Top** o **Bottom** se desplazará al borde. Si pierdes de vista la tarjeta tras moverla, **pulsa dos veces seguidas sobre ella (Double-tap)** y volverá al centro de la pantalla al instante.

![Tarjeta flotante de Shiori situada sobre un navegador web, con frase actual y botones](06-floating-card-over-another-app.jpg)

## Paso 7: Diseño minimalista de pantalla completa

Si la tarjeta tradicional te parece demasiado llamativa, activa a la vez **Hide the control buttons** y **Full-width floating card**. La tarjeta pasará a ser una fina franja horizontal: solo el botón de salto, un pequeño botón de pausa, la línea de karaoke y la cruz de cierre.

Este formato solo se desplaza verticalmente. Puedes anclarlo justo bajo la barra de notificaciones o sobre los gestos inferiores, dejando tu pantalla principal completamente despejada.

![Controles flotantes en modo minimalista de ancho completo sobre una ventana de navegador](07-minimal-full-width-card.jpg)

## Paso 8: Corrige palabras mal pronunciadas sin volver al lector

El segundo icono de la tarjeta flotante abre directamente la ventana **Add Text Replacement** sin importar qué app estés usando.

Escribe el término original en **Find (from)**, escribe la pronunciación fonética correcta en **Replace with (to)**, marca la casilla **TTS** (para que afecte a la voz sin tocar el texto visual del libro) y guarda los cambios. La narración continuará de forma impecable sin interrupciones.

![Cuadro de diálogo Add Text Replacement abierto directamente desde la tarjeta flotante](08-add-text-replacement-from-the-card.jpg)

## Preguntas frecuentes y solución de problemas (FAQ)

**La tarjeta flotante nunca aparece en pantalla.**  
Es probable que el permiso de superposición no se concediera. Apaga y enciende el interruptor **Floating Controls** para ver el aviso de nuevo o entra en los ajustes de Android y concede el permiso "Mostrar sobre otras aplicaciones" a Shiori.

**Aparece la tarjeta pero sin texto.**  
La opción **Karaoke ticker on floating controls** está apagada, dejando la tarjeta en modo exclusivo de botones. Vuelve a encenderla en ajustes.

**Cuesta leer el texto sobre aplicaciones muy luminosas.**  
Sube la **Background opacity** al 90%–100% y elige un color de fondo oscuro con texto claro o amarillo para lograr el máximo contraste.

**La tarjeta ha quedado en una esquina incómoda.**  
Pulsa **dos veces seguidas sobre la tarjeta** para devolverla al centro de la pantalla de inmediato.

**La locución se paró al cerrar la tarjeta con la cruz (×).**  
Es el funcionamiento previsto: la cruz cierra el widget y finaliza la sesión de lectura. Si deseas quitar la tarjeta pero seguir escuchando con la pantalla encendida o apagada, apaga el interruptor **Floating Controls** en los ajustes.

## Consejos prácticos

* **Adaptación automática a lectura RTL:** En libros en árabe o hebreo, la línea de texto alinea las palabras habladas de derecha a izquierda.
* **Marcador de posición al instante:** Mientras haces otras tareas, un toque en el botón izquierdo abre Shiori justo en la frase leída por la voz.
* **Ajusta antes de salir:** Usa la vista previa superior de la pantalla de configuración para dar con la escala y fuente ideales antes de salir a otras apps.

## Lecturas recomendadas

* [Lectura Bimodal con Resaltado Tipo Karaoke en Shiori EPUB Reader](/blog/read-along-tts-karaoke-highlight-epub-android/)
* [Síntesis de Voz Multilingüe en Shiori: Cambio Automático Natural](/blog/multi-language-text-to-speech-android-epub/)
* [Leer Texto Seleccionado en Voz Alta en Android con Shiori](/blog/read-selected-text-aloud-epub-android/)
* [Sustitución de Texto y Expresiones Regulares (Regex) en Shiori](/blog/text-replacement-regex-epub-android/)

## Conclusión

Los Controles Flotantes de Shiori extraen lo más esencial de la lectura con voz —la frase en curso y los mandos principales de control— y los mantienen flotando sobre cualquier aplicación. Actívalos una vez, concédeles permiso y continúa disfrutando de tus libros favoritos sin dejar de hacer nada en tu dispositivo.
