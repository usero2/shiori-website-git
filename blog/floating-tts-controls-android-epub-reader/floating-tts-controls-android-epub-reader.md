# Keep Listening While You Use Other Apps: Shiori's Floating Controls

You are halfway through a chapter with text-to-speech running, and a message arrives. You switch to your messaging app to answer it — and now the narration is somewhere behind you, out of reach. To pause it, skip back a sentence, or check which line is being read, you have to leave what you are doing and go back to the reader.

**Floating Controls** solve that. Once the feature is on, Shiori draws a small card on top of whatever app you are using. The card shows the sentence being spoken, with the current word highlighted, and carries the playback buttons — so pausing, skipping, or jumping back into the book is one tap away without leaving the app you are in.

This guide walks through turning the feature on, granting the permission it needs, tuning the card's size and colours, and using it while another app is in the foreground. Every screenshot here was taken on a real Android phone running Shiori 2.3.6.

## What the floating card actually gives you

The card is not just a play/pause widget. In its default form it contains:

* **A karaoke line** — one scrolling line of the text being read, with the current word picked out in a second colour, so you can follow along without opening the book.
* **Go to position** — the leftmost button jumps the reader straight to the spot being narrated.
* **Add text replacement** — opens the replacement dialog for the passage you are hearing, useful when the engine keeps mispronouncing a name.
* **Previous / Play-Pause / Next** — ordinary transport controls, sized for a thumb.
* **A close button** — the × dismisses the card and stops the narration.

## What you need

* Shiori installed on your Android device (tested here on v2.3.6)
* Any book in your library — this walkthrough uses *The Picture of Dorian Gray*
* A working Android text-to-speech engine (the system default is fine)
* Permission to draw over other apps, which Shiori asks for when you turn the feature on

## Step 1: Turn on Floating Controls

1. From the bookshelf, tap the **Settings** gear in the top toolbar.
2. Open **TTS Listening**.
3. Find the row labelled **Floating Controls** — "Show playback controls over other apps" — and switch it on.

The row has two parts worth noticing: the switch on the right turns the feature on and off, and the small gear beside it opens a whole page of appearance settings. You will use that gear in Step 3.

![Shiori's TTS Listening settings screen with the Floating Controls row switched on, showing its Show playback controls over other apps subtitle and the gear that opens the appearance page](01-floating-controls-switch-in-tts-settings.jpg)

## Step 2: Allow Shiori to draw over other apps

The moment you flip the switch, Shiori asks:

> **Floating Controls** — Allow Shiori to show TTS controls over other apps while reading in background?

Tap **Allow**. This is Android's overlay permission: without it, the operating system will not let any app paint on top of another, so the card simply never appears. If Android takes you to a system permission screen, grant it there and come back.

Choosing **Not Now** leaves the rest of TTS untouched — playback still works normally, you just lose the on-top card.

![The Floating Controls permission dialog asking to allow Shiori to show TTS controls over other apps while reading in background, with Not Now and Allow buttons](02-allow-controls-over-other-apps.jpg)

## Step 3: Shape the card on the Floating control page

Tap the gear next to the Floating Controls switch. The **Floating control** page opens with a live **Preview** at the top: every change you make redraws the card immediately, so you can judge it before you are out in another app.

The switches on this page decide what the card is:

* **Karaoke ticker on floating controls** — one scrolling line instead of the whole paragraph. The word being read stays pinned to the left, or to the right in a right-to-left book. Leave this on if you want to follow the text; turn it off if you only want the buttons.
* **Keep the word in the middle** — puts the spoken word at the centre of the line, with what you have already heard on one side and what is coming on the other. This is the more comfortable setting for reading along, because the word you care about is always in the same place.
* **Hide the control buttons** — strips the card down to text only, keeping just the go-to-position button at the far left.
* **Full-width floating card** — the card spans the whole screen width and can then only be moved up and down.
* **Snap the floating card to an edge** — **Free** leaves the card wherever you drop it; **Top** and **Bottom** make it settle against that edge of the screen after every drag.

![The Floating control settings page in Shiori showing the live preview card and the switches for karaoke ticker, keep the word in the middle, hide the control buttons, full-width card, and the Free Top Bottom snap options](03-floating-control-options-and-preview.jpg)

## Step 4: Set the size, spacing and colours

Scroll down the same page for the appearance sliders. The defaults on a 1200-pixel-wide phone are a sensible starting point:

| Setting | Default | What it changes |
| --- | --- | --- |
| Floating control size | ×1.0 | Scales the whole card, buttons included |
| Margin | 8dp | Gap between the card and the screen edges |
| Padding | 8dp | Breathing room inside the card |
| Font size | 13sp | Size of the karaoke line |
| Background opacity | 90% | How much of the app underneath shows through |

Below the sliders are three palettes: **Text colour** for the line as a whole, **Aloud text colour** for the word currently being spoken, and **Background colour** for the card itself. Because the card sits on top of other apps, contrast matters more here than it does inside the reader — a light text colour on a dark card at high opacity stays readable over almost anything.

If you want the card to be genuinely unobtrusive, lower **Background opacity** rather than shrinking the card: a semi-transparent card that you can still read beats a tiny one you have to squint at.

![The lower half of the Floating control page showing the size, margin, padding and font size sliders, the text, aloud text and background colour palettes, and the background opacity slider](04-floating-card-size-and-colours.jpg)

## Step 5: Start listening

Nothing floats until something is playing. Open a book and start narration with the play button on the reader's bottom control bar.

While Shiori is in the foreground you get the full reader experience: the paragraph being read is highlighted, the current word is picked out inside it, and the bottom bar shows your position in the chapter.

![The Picture of Dorian Gray open in Shiori with text-to-speech playing, the active paragraph highlighted and the current word marked, and the playback bar at the bottom of the screen](05-start-listening-in-the-reader.jpg)

## Step 6: Leave the app — the card follows you

Now switch to another app, or go back to the home screen. The floating card appears on top of it, still tracking the narration word by word.

Drag the card anywhere you like by its body. With snapping set to **Free** it stays exactly where you drop it; with **Top** or **Bottom** it slides to that edge as soon as you let go. If you lose track of it after a few drags, **double-tap the card** and it jumps back to the middle of the screen.

![The Shiori floating control card sitting on top of a web browser, showing the current sentence with one word highlighted and the go-to-position, replacement, previous, play-pause and next buttons](06-floating-card-over-another-app.jpg)

## Step 7: The minimal, full-width layout

If the card in its default form feels like too much furniture, turn on **Hide the control buttons** and **Full-width floating card** together. The result is a slim bar across the screen: the go-to-position button, a small pause button, the karaoke line, and the close button — and nothing else.

This layout only moves vertically, which is usually what you want from a bar. Park it just below the status bar or just above the navigation gesture area and it stops competing with the app you are actually using.

![The floating controls in minimal full-width mode, a slim bar spanning the browser window with only the go-to-position button, a pause button, the scrolling karaoke line and a close button](07-minimal-full-width-card.jpg)

## Step 8: Fix a mispronounced word without going back

The second button on the card opens **Add Text Replacement** directly from wherever you are. Type what the book says under **Find (from)**, type what the engine should say under **Replace with (to)**, choose **TTS** so the change affects speech rather than the text on the page, and save.

This is the practical reason the button is on the card at all: mispronunciations turn up while you are listening, usually while you are doing something else. Fixing one takes a few seconds and the narration keeps going.

![The Add Text Replacement dialog opened from the floating card, with Visual and TTS modes, Find from and Replace with to fields, a Use Regex checkbox and an order value](08-add-text-replacement-from-the-card.jpg)

## Troubleshooting

**The card never appears.** The overlay permission was probably declined. Turn the **Floating Controls** switch off and on again to bring back the permission dialog, or grant "display over other apps" for Shiori in Android's own settings.

**The card is there but shows no text.** **Karaoke ticker on floating controls** is off, so the card is in buttons-only mode. Turn it back on.

**The card is hard to read over bright apps.** Raise **Background opacity** and pick a darker **Background colour** — that combination is what makes the card legible over unpredictable content.

**The card keeps ending up somewhere awkward.** Set **Snap the floating card to an edge** to **Top** or **Bottom** so it always lands in the same place, or double-tap it to bring it back to the centre.

**Playback stopped when I dismissed the card.** That is expected — the × closes the card and stops the narration. To hide the card but keep listening, turn the **Floating Controls** switch off instead.

## Tips

* **Match the card to the book.** For a right-to-left book the karaoke line pins the current word to the right instead of the left, so the ticker reads in the same direction as the text.
* **Use the go-to-position button as a bookmark.** After listening while doing something else, one tap on the leftmost button puts the reader exactly where the voice got to.
* **Preview before you commit.** The card at the top of the Floating control page is live. Push the sliders around there rather than discovering a 20sp font is too big when you are three apps deep.

## Related reading

* [Read Along with Karaoke Highlighting in Shiori EPUB Reader](/blog/read-along-tts-karaoke-highlight-epub-android/)
* [Multi-Language Text-to-Speech in Shiori](/blog/multi-language-text-to-speech-android-epub/)
* [Read Selected Text Aloud on Android](/blog/read-selected-text-aloud-epub-android/)
* [Text Replacement and Regex for EPUB on Android](/blog/text-replacement-regex-epub-android/)

## Closing

Floating Controls take the part of the reader you need while listening — the current line and the transport buttons — and lift it out of the app so it survives you switching away. Turn the switch on, grant the overlay permission once, spend two minutes on the appearance page, and the book stops being something you have to go back to.
