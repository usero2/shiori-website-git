# Check Your Pronunciation, One Sentence at a Time: Read Just the Selected Text Aloud

You hit one sentence you cannot parse — an unfamiliar word, a name in a foreign language, a phrase that reads differently than it sounds. Starting the book's read-aloud from there means listening through everything after it too, then pausing and scrolling back to where you actually were. All you wanted was to hear *that one sentence*, once.

Shiori has a separate control for exactly this: select any word or sentence in the reader, and it will be read aloud once, on its own, without starting the book's continuous narration or moving your reading position.

## Why a one-off read matters

* **Checking pronunciation while learning a language.** Hear a single unfamiliar word or sentence spoken correctly, without committing to listening through the rest of the page.
* **Foreign names and phrases embedded in an English text.** A book will often carry a word or line in another language — select just that part and hear it in the right voice, covered below.
* **Confirming how something sounds before you say it aloud yourself** — useful when reading for a class, a script, or a language exchange.

## What you need

* Shiori installed on your Android device (tested on v2.3.4)
* Any book open in the reader, with the text visible on screen

Here is *The Prince* open in the reader, nothing selected — the starting point for every step below:

![The Prince open in Shiori's reader with the toolbar visible and no text selected, showing the chapter progress bar at the bottom](01-book-open-reading-view.jpg)

## Step 1 — Press and hold a word to select it

Press and hold on any word in the reader — about a second is enough. A word is highlighted, round selection handles appear at each end, and a floating menu opens above it with options including **Read**, **Bookmark**, **Highlight**, **Translate**, **Aloud** and **TTS preview**.

![A single word selected in the reader after a long-press, showing the selection handles and a floating menu with Read, Bookmark, Highlight, Translate, Aloud, and TTS preview options](02-long-press-select-word-menu.jpg)

If nothing happens on the first try, hold a little longer and keep your finger still — a light drag before the menu appears is read as a page swipe instead.

## Step 2 — Drag a handle to cover the whole sentence

A single word is enough for a quick check, but for pronunciation you usually want the whole sentence, so the rhythm and stress land correctly. Drag the round handle at either end of the selection across the rest of the words you want included.

![The selection dragged from a single word to a full sentence using the round selection handle, with the same floating menu still open above it](03-drag-handle-extend-full-sentence.jpg)

The menu stays open and follows the selection as you extend it, so you can check exactly what is highlighted before you commit to reading it.

## Step 3 — Tap Aloud

Tap **Aloud** in the menu. Shiori speaks the selected text once and stops — it does not keep reading into the next sentence, and it does not open the book's normal playback controls.

![The reader back to normal after tapping Aloud, with the selection cleared and the chapter progress unchanged](05-back-to-reading-unchanged-position.jpg)

The selection clears and you are back exactly where you were — same chapter, same scroll position, same reading progress. Nothing about your place in the book changes because of a one-off read.

## Choose which voice reads it

The voice used for **Aloud** is not necessarily the voice that reads your whole book. Tap the sliders icon next to **Preview voice** at the bottom of the selection menu to open its settings.

![The Preview voice dialog in Shiori, showing that the one-off read-aloud voice is separate from the voice that reads the whole book, with TTS engine and language options](04-preview-voice-language-picker.jpg)

The dialog says it plainly: this voice is "used by the play buttons and one-off read-aloud, not by the voice that reads the book." You can pick a different **TTS Engine** here, and set the **Language** to a specific one instead of Auto — the same per-language voices you may already have configured under TTS Listening. That matters when the sentence you selected is in a different language from the rest of the book: set the language here to match it, and the pronunciation comes out right instead of being read with the book's default voice and accent.

## It never touches your place in the book

This is the detail that makes a one-off read useful rather than disruptive: it borrows the TTS engine for a single sentence and hands control straight back. There is no mini-player to dismiss, no chapter position to undo, and the book's own continuous read-aloud (started from the **Play/Pause** button in the bottom bar) is entirely unaffected — if it was paused before, it is still paused after.

## Troubleshooting

* **Nothing happens when I tap Aloud.** Your device needs a working text-to-speech engine. Check that one is installed and enabled under your phone's system settings, or switch the **TTS Engine** in the Preview voice dialog above.
* **The menu never appears on long-press.** Make sure you are pressing on the book's text itself, not the toolbar or the margin, and hold still rather than dragging.
* **The selection handle moves the wrong word.** Drag from the round handle itself rather than the highlighted text — dragging the text scrolls the page instead of resizing the selection.
* **It reads with the wrong accent or language.** Open **Preview voice** and set **Language** explicitly instead of Auto, and confirm you have a voice installed for that language.

## Tips

* **Select just one word** when that is all you need — you do not have to extend to a full sentence every time.
* **Set up per-language voices once** under TTS Listening, and Preview voice can draw on the same set — see [Multi-Language Text-to-Speech in Shiori](/blog/multi-language-text-to-speech-android-epub/).
* **The same menu handles bookmarks, highlights and translation** — if you are already in there to check a pronunciation, see [Highlight and Take Notes in Shiori](/blog/highlight-and-take-notes-epub-android/) and [How to Translate to Multiple Languages](/blog/how-to-translate-to-multiple-language/) for what the rest of those buttons do.
* **Not sure what the other reader icons do?** [Every Button on the Reader Screen](/blog/epub-reader-screen-guide-android/) covers the toolbar this menu sits inside.

## One sentence, once

You do not need to start the whole book talking just to hear one line spoken correctly. Select it, tap **Aloud**, and get back to reading exactly where you left off.
