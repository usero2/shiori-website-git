# Your First 10 Minutes with Shiori: A Beginner's Walkthrough

You just installed Shiori and you are looking at an empty bookshelf, wondering what to try first. This guide covers the four things worth doing in your first ten minutes: importing a book, listening to it with read-aloud, translating a paragraph, and picking a reading theme. Each step below is a real action on a real device, in the order a new reader is likely to want them.

This is not a reference of every button on the reader screen — for that, see [Every Button on the Reader Screen](/blog/epub-reader-screen-guide-android/). This is a shorter path through the four features that matter most on day one.

## What You Need

- Shiori ePub Reader installed on an Android phone or tablet
- An EPUB, FB2, Kobo (KEPUB), PDF, or comic (CBZ) file on the device — any EPUB works for testing; public-domain classics from Standard Ebooks or Project Gutenberg are a reasonable place to get one if you don't already have a book handy

## Step 1: Import Your First Book

Open Shiori to the **Bookshelf** tab and tap the purple **+** button in the bottom-right corner.

![Shiori's bookshelf screen with existing books and the purple + Add book button in the bottom right corner](01-bookshelf-add-book-button.jpg)

Tapping it opens Android's own file picker rather than a custom import screen inside the app. Browse to wherever your book file is — the Downloads folder is the usual place if you transferred it from a computer or downloaded it in a browser — and tap the file.

![Android's file picker open on the Downloads folder, showing an EPUB file ready to be selected for import](02-file-picker-select-epub.jpg)

The book appears on your bookshelf immediately, with its cover, author, chapter count, and file size already filled in.

![Alice's Adventures in Wonderland listed at the top of the bookshelf immediately after being imported, showing its cover, chapter count, and file size](03-book-added-to-bookshelf.jpg)

**Why this matters:** using the system file picker means Shiori can pull a book from anywhere your device can already reach — local storage, a cloud-storage app, or a file shared from another app via "Open with Shiori." You are not limited to one folder. You can also import several books in one go by selecting multiple files in the picker; large books show up on the shelf right away and finish loading in the background.

## Step 2: Listen to It with Read-Aloud

Open the book you just imported and tap the **play** button on the bar at the bottom of the reader screen. Narration starts immediately, and the text highlights as it's spoken — first the current paragraph, then the specific word being read.

![The reader screen mid-narration, with the current paragraph highlighted in blue and the currently spoken word highlighted in purple](04-tts-karaoke-highlighting.jpg)

**Why this matters:** the two-level highlighting (paragraph, then word) makes it easy to follow along visually while listening, which is useful for language learners or anyone reading in a second language. Read-aloud keeps going across chapter breaks and the whole book, keeps playing even if you lock the screen or leave the app, and shows a notification with cover art, position, and a sleep timer so you can stop listening automatically. Voice, speed, and pitch are all adjustable per language from the speaking-head icon in the top bar, if the default doesn't suit you.

## Step 3: Translate a Paragraph

Long-press any word in the text to open the selection menu, then tap **Translate paragraph**.

![The floating selection menu that appears after long-pressing text, including Translate and Translate paragraph options](05-translate-paragraph-menu.jpg)

A translated version of that paragraph appears in a labeled block directly below the original — the label shows which engine produced it and which language it translated into.

![A translated paragraph inserted below the original text, labeled with the engine used (Gemma) and the output language (EN)](06-paragraph-translated-result.jpg)

**Why this matters:** you don't have to leave the page or lose your place to see a translation, and you can pick the target language and translation engine from the 文A icon in the top bar — an offline engine (ML Kit) for speed, or an on-device AI engine for a more natural result. The first translation with a given engine can take longer than the ones after it, because the on-device model has to warm up; if it looks stuck on "Translating…" for more than a few seconds, that's normal on the first use, not a failure. The same panel can translate a whole chapter or the whole book in the background if a single paragraph isn't enough.

## Step 4: Pick a Reading Theme

Tap the **тT** (display settings) icon in the top bar to open reading settings, then choose a theme from the **Theme** row: Light, Dark, Sepia, Gray, or E-Ink.

![The reading settings panel with the Theme row showing Light, Dark, Sepia, Gray, and E-Ink options](07-reading-settings-theme-picker.jpg)

Tap one — Sepia, for example — and the whole reader recolors instantly, with no confirmation step and no restart needed.

![The reader screen after switching to the Sepia theme, showing warm cream background and dark brown text](08-sepia-theme-applied.jpg)

**Why this matters:** the right theme depends on the light you're reading in and how your eyes feel after a while, not on any fixed rule, so Shiori makes switching a single tap and remembers your choice automatically — there's no "Save" button. Sepia's warm background is a common choice for long sessions in dim light. If you read on an e-paper device or just want the calmest possible screen, the E-Ink theme goes further and turns off animations app-wide; see [Using the E-Ink Theme](/blog/eink-theme-for-android-epub-reader/) for details.

## Troubleshooting

**Nothing happens when I tap +.** Confirm the file you're picking is a supported format (EPUB, KEPUB, FB2, PDF, or CBZ). Files in other formats won't show up as importable, or will import but fail to open correctly.

**Read-aloud is silent.** Check your device's media volume, not just the ringer volume. If it's still silent, open the speaking-head icon in the top bar and confirm a voice is set for the book's language — a language with no voice configured has nothing to read with.

**Translation is stuck on "Translating…".** On the first use of an on-device AI engine in a session, the model needs a few extra seconds (sometimes longer) to load before it starts producing output. If it's been stuck for a long time, try switching to the ML Kit engine in the translate panel, which runs offline and doesn't need to warm up.

**The theme reverted, or looks different than expected.** Themes apply per the whole app, not per book, so a book that looked different a moment ago was probably on a different theme — check the Theme row again to confirm which one is currently selected.

## Tips

- Shiori also has a Reader Only mode that lets you open a file and start reading immediately without adding it to your permanent library — it isn't synced to the cloud and deletes itself after 30 days, which is convenient for a book you're only trying out.
- Translation can target more than one language at once if you select several in the "Translate to" row, so you don't have to redo the panel for each language.
- You can switch themes mid-book at any time; it doesn't affect your reading position, highlights, or bookmarks.

## Related Reading

- [Every Button on the Reader Screen — A Touch-by-Touch Guide to Reading EPUBs](/blog/epub-reader-screen-guide-android/)
- [Using the E-Ink Theme for Paper-Like EPUB Reading on Android](/blog/eink-theme-for-android-epub-reader/)
- [One Book, Every Voice — Multi-Language Text-to-Speech, Explained](/blog/multi-language-text-to-speech-android-epub/)
- [How to Translate EPUB to Multiple Languages Simultaneously](/blog/how-to-translate-to-multiple-language/)
- [Read Along with Karaoke Highlighting in Shiori EPUB Reader](/blog/read-along-tts-karaoke-highlight-epub-android/)
- [Drop a Book Into a Browser and Watch It Land on Your Phone — Book Drop, Explained](/blog/book-drop-send-books-to-android-over-wifi/)

## Closing

Import, listen, translate, and choose a theme — that's the whole first ten minutes. Everything else in Shiori builds on these four actions, so once they feel familiar, the rest of the app is easier to explore on your own terms.
