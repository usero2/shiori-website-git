# Cómo Usar Google Fonts en Shiori: Descarga Fuentes y Configúralas por Idioma

La tipografía con la que lees no es un detalle menor. Determina cuánto tiempo puedes leer antes de fatigar la vista y, en ciertos alfabetos complejos, define si el texto se mostrará correctamente estructurado o con errores de colocación de tildes y signos.

Shiori te permite importar archivos `.ttf` o `.otf` propios y asignar **una fuente diferente para cada alfabeto**. Esta guía cubre todo el proceso: cómo filtrar en **Google Fonts**, descargar las fuentes en tu móvil, extraer los archivos correctos del ZIP y asignarlos por idioma en la app (una para tailandés, otra para el alfabeto latino).

También explicamos la causa del problema más habitual: **hacer todo bien pero que la página se vea exactamente igual**, con imágenes de comparación directa.

Todos los pasos se realizaron en un dispositivo Android real con Shiori 2.3.6.

## Dos cosas que debes saber antes de empezar

1. **Una fuente solo cubre los alfabetos para los que fue diseñada:** Una hermosa fuente latina con remates carece de caracteres tailandeses, árabes o chinos. Si la asignas a un idioma no compatible, Android recurrirá a la fuente del sistema y parecerá que nada ha cambiado.
2. **Google Fonts se descarga como ZIP, no como fuente suelta:** El importador de Shiori requiere archivos `.ttf` u `.otf`, por lo que es necesario descomprimir el archivo antes de importar.

## Requisitos previos

- Shiori instalado en tu móvil o tablet Android (probado en v2.3.6)
- Navegador web para acceder a [fonts.google.com](https://fonts.google.com)
- Un explorador de archivos capaz de descomprimir archivos ZIP
- Un libro en el idioma deseado para comprobar los cambios visuales

## Paso 1: Filtra Google Fonts por sistema de escritura (Writing system)

Abre **fonts.google.com** en el navegador y pulsa en **Filters**. En el apartado **Language**, abre el menú **Writing system**, busca el alfabeto deseado (ej: Thai) y selecciónalo.

Al cerrar el panel, el catálogo se reducirá de **1.946 familias a solo 34**. Filtrar desde el inicio te garantiza elegir solo entre fuentes totalmente compatibles.

![Panel de filtros de Google Fonts con Writing system filtrado por Thai](01-google-fonts-filter-writing-system.jpg)
![Catálogo de Google Fonts mostrando 34 familias compatibles con tailandés](02-google-fonts-thai-families-count.jpg)

## Paso 2: Revisa la muestra (Specimen) antes de decidir

Toca en la familia deseada para ver su muestra completa. En este tutorial usamos **Maitree**, diseñada por Cadson Demak para lectura continua.

Para el cuerpo de texto de un libro, escoge siempre el peso **Regular**.

![Página de muestra de Maitree en Google Fonts con botón Get font](03-maitree-specimen-google-fonts.jpg)

## Paso 3: Descarga el archivo de fuentes

Pulsa **Get font**. Puedes añadir varias familias antes de descargar (por ejemplo, una fuente tailandesa y una latina) y pulsar **Download all** una sola vez. El archivo comprimido quedará guardado en la carpeta **Downloads** de tu móvil.

![Bandeja de selección de fuentes con el botón Download all](04-three-families-selected-download-all.jpg)

## Paso 4: Examina el contenido del ZIP y extráelo

Abre el archivo en tu gestor de archivos:

| Elemento | Descripción |
| --- | --- |
| `<Family>-VariableFont_*.ttf` | **Fuente variable** con todos los pesos en un solo archivo |
| Carpeta `static/` | Archivos separados por peso individual (Regular, Bold, etc.) |
| `OFL.txt` | Licencia de uso libre Open Font License |

Si descargaste varias familias, el ZIP contendrá **una carpeta para cada familia**. Extrae el contenido en una ubicación cómoda como Downloads.

![Contenido del archivo ZIP con carpeta static y archivos TTF](05-inside-the-downloaded-font-zip.jpg)
![Carpetas extraídas con un directorio para cada familia descargada](06-multi-family-zip-one-folder-each.jpg)

## Paso 5: Escoge el archivo adecuado dentro de la carpeta

Algunas fuentes incluyen sus archivos de peso directamente en la carpeta principal; otras (como Literata) cuentan con tamaños ópticos (**Optical sizes**) en su carpeta `static/` (`18pt`, `24pt`, etc.).

Dos reglas clave:
1. **Elige siempre la Regular:** Shiori usa este archivo como tipografía base: `Maitree-Regular.ttf` o `Literata_18pt-Regular.ttf` (nunca Bold ni Italic).
2. **Si hay tamaños ópticos, escoge el menor (18pt):** Es el formato diseñado para texto de lectura en pantallas de móvil.

![Archivos de la familia Maitree mostrando variantes de peso](07-maitree-weight-files.jpg)
![Carpeta static de Literata mostrando opciones de 18pt](08-literata-static-optical-sizes.jpg)

## Paso 6: Abre la configuración de fuentes por alfabeto en Shiori

En Shiori, dirígete a **Settings &rarr; Reading &rarr; Reader font**. El diálogo muestra 9 opciones: **All languages**, además de **Thai**, **Latin**, **Japanese**, **Chinese**, **Korean**, **Arabic**, **Cyrillic** y **Devanagari**.

Toca en el alfabeto que deseas configurar (en este caso, **Thai**).

![Diálogo Reader font mostrando todos los alfabetos configurables](09-shiori-reader-font-script-slots.jpg)
![Apartado de la fuente Thai con el botón Import font](10-thai-slot-import-font-button.jpg)

## Paso 7: Importa el archivo de fuente

Pulsa **Import font** y selecciona el archivo extraído (`Maitree-Regular.ttf`). Shiori lo importará y lo activará de forma automática.

Pulsa **OK** en ambos diálogos para guardar.

![Selector de archivos navegando en la carpeta de la fuente descomprimida](11-file-picker-inside-font-folder.jpg)
![Ranura de Thai con Maitree-Regular.ttf seleccionada correctamente](12-thai-slot-maitree-selected.jpg)

## Paso 8: Comprueba la transformación en el libro

Compara la lectura inicial con la fuente del sistema (`System fonts`) frente a la nueva visualización con **Maitree**.

En la comparativa directa, Maitree ofrece trazos más amplios, armoniosos y legibles para las vocales y tildes. El texto en chino y ruso en la misma pantalla no se ve alterado en absoluto.

![Página de lectura mostrando tailandés con la fuente del sistema](13-thai-before-system-font.jpg)
![Misma página tras aplicar la fuente Maitree al texto en tailandés](14-thai-after-maitree.jpg)
![Recorte comparativo lado a lado entre la fuente del sistema y Maitree](15-thai-row-system-vs-maitree.jpg)

## Paso 9: Configura un segundo idioma (Latino)

Repite el proceso para otro alfabeto. Para texto latino (inglés/español), importamos **Literata** (`Literata_18pt-Regular.ttf`) en la fila **Latin**.

El menú Reader font mostrará ambos alfabetos vinculados a sus respectivas fuentes personalizadas.

![Ranura Latin con Literata_18pt-Regular seleccionada](16-latin-slot-literata-selected.jpg)
![Menú Reader font con fuentes asignadas individualmente para Thai y Latin](17-reader-font-two-scripts-assigned.jpg)

## Cuando nada cambia: dos trampas comunes

1. **La fuente no contiene caracteres para ese alfabeto:** Vincular una fuente latina a la fila de tailandés provocará que el sistema vuelva a la fuente predeterminada automáticamente.
2. **La nueva fuente es gemela de la que ya usa tu móvil:** Si tu Android ya utiliza fuentes Noto por defecto, descargar e instalar Noto Serif no generará ningún cambio perceptible a simple vista.

![Comparativa del mismo texto con tres fuentes distintas](18-same-paragraph-three-thai-fonts.jpg)

## Preguntas frecuentes (FAQ)

**No se aprecian cambios tras la importación.**  
Asegúrate de que la opción **Force reader fonts** está activada en **Settings &rarr; Reading** para ignorar fuentes CSS incrustadas en el EPUB.

**Shiori no abre el archivo seleccionado.**  
La app solo admite archivos `.ttf` y `.otf`. Descomprime el archivo ZIP antes de seleccionarlo.

## Conclusión

Filtra en Google Fonts por alfabeto, revisa la muestra, descomprime, escoge el peso Regular y asígnalo en Shiori. Disfrutarás de una tipografía perfecta y personalizada para cada idioma que leas.
