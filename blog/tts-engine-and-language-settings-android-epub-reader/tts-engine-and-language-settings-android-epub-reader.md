# Set Up Read-Aloud Properly: TTS Engine, TTS Languages and Priority in Shiori

Read-aloud sounds wrong for one of two reasons. Either the engine behind it is not the one you meant to use, or the book is in a language the app has not been told you read. The first makes every book sound flat; the second makes one particular book sound like a machine reading a phone book.

Both live in the same place in Shiori: **Settings → TTS Listening**. That single screen holds the **TTS Engine** at the top, the **TTS Languages** list under it, and the per-language voice, pitch and speed inside that list. This guide walks the whole path in order, and spends most of its time on the part people get stuck on — the **priority order** of languages, which is what decides who speaks when a script is shared between two of them.

Every screenshot here comes from a real Android phone running Shiori 2.3.6.

## Why the order of the list matters

Shiori does not ask you what language a book is in. It looks at the characters on the page, splits each paragraph into runs of the same script, and hands each run to the voice for that script. That works perfectly while one script belongs to exactly one language — Thai text can only be Thai.

It stops being obvious the moment a script is shared:

| Script on the page | Languages that could claim it |
| --- | --- |
| Latin alphabet | English, Portuguese, Spanish, German, and more |
| Han characters | Chinese and Japanese both use them |
| Cyrillic | Russian and its neighbours |

When two enabled languages want the same script, Shiori needs a tie-breaker, and the tie-breaker is the order of the list: **the language higher up wins**. The app says so itself, in the paragraph at the top of the TTS Languages screen. That is why reordering is not a cosmetic feature — for a Chinese reader with Japanese also enabled, it is the difference between a Chinese book being read in Chinese and the same book being read by a Japanese voice.

## What you need

* Shiori installed on an Android device (this walkthrough uses v2.3.6)
* At least one text-to-speech engine on the device — the Android system default counts
* Voice data for the languages you read, downloaded through your engine
* A book to test with

## Step 1: Open TTS Listening

From the bookshelf, tap the **Settings** gear in the top toolbar, then open **TTS Listening** — the row with the headphone icon.

The subtitle under that row is worth a glance every time you pass it: it lists the languages currently enabled for read-aloud, in their priority order. If a book is being read by the wrong voice, this line usually tells you why before you have even opened the screen.

![Shiori's Settings screen on Android with the TTS Listening row highlighted, its subtitle listing the enabled read-aloud languages English, Thai and Japanese](01-settings-tts-listening-entry.jpg)

The screen opens with the two settings this guide is about at the very top — **TTS Engine**, then **TTS Languages** — followed by **Preview voice**, the Floating Controls switch, the read-aloud highlight colours, and a **Per-language improvements** section at the bottom.

![The TTS Listening settings screen in Shiori showing the TTS Engine dropdown set to System Default, the TTS Languages row, Preview voice, Floating Controls and the read-aloud highlight colour rows](02-tts-listening-screen.jpg)

## Step 2: Choose the TTS engine

Tap the **TTS Engine** dropdown. It lists every text-to-speech engine installed on the device, plus **System Default**.

On the test phone there are two entries: *System Default* and *Speech Recognition and Synthesis from Google*. Your list depends on what is installed — many devices also ship a manufacturer engine, and you can install others from the Play Store.

![The TTS Engine dropdown open in Shiori, showing System Default selected with a tick and Speech Recognition and Synthesis from Google below it](03-tts-engine-picker.jpg)

**Which one should you pick?**

* **System Default** is the safe answer. It follows whatever engine you chose in Android's own settings, so you configure the engine once, in one place.
* **Naming an engine explicitly** is what you want when a specific engine has better voices for your language, or when you have changed the Android default for some other app and do not want read-aloud to follow it.

This choice matters more than any other setting on the screen, because the engine is what supplies the voices. Every language you enable in the next step can only offer the voices the engine has. If a language sounds robotic, changing the engine — or downloading better voice data for it in Android's settings — fixes more than any slider will.

## Step 3: Understand what "Preview voice" is not

Tap **Preview voice** and read the first line of the dialog carefully:

> Used by the play buttons and one-off read-aloud, not by the voice that reads the book.

This dialog controls the little ▶ preview buttons in the settings and the "read this selection aloud" action — **not** the narration of a book. It has its own engine choice, and a **Language** row where **Auto** means "work it out from the text".

![The Preview voice dialog in Shiori with its own TTS Engine radio buttons and a Language row offering Auto, English and Thai chips](04-preview-voice-dialog.jpg)

It is worth knowing about because it is a common source of confusion: people change the engine here, hear the preview improve, and wonder why the book still sounds the same. If you want to change how a *book* is read, change the engine in Step 2 and the per-language voice in Step 6.

## Step 4: Enable the languages you read

Back on the TTS Listening screen, tap **TTS Languages**.

The list shows every language the app supports. Enabled languages sit at the top with their checkboxes ticked; the rest are greyed out below. Each row has, from left to right, the **▲ ▼** priority arrows, the checkbox, the language name in its own script, and a chevron that expands the row's voice settings.

![The TTS Languages screen in Shiori with English, Thai and Japanese enabled and ticked at the top of the list and the remaining languages greyed out below](05-tts-languages-list.jpg)

Tick every language you actually read — and only those. The screen's own advice is that the fewest languages give the most accurate voice, and it is right: every extra enabled language is one more candidate for a shared script.

**Finding a language in a long list.** Use the **Search language…** box. One thing to know before you start typing: the list shows each language in its own script, so the *English* name is not always what the box is matching. Searching for `chi` on the test device returned "No languages match" — but the language code `zh` found Chinese immediately. When a name does not come up, try the two-letter code.

![The TTS Languages search box in Shiori containing the code zh, with Chinese as the single matching result](06-search-language-by-code.jpg)

Notice where a newly ticked language lands: at the **bottom** of the enabled group, not the top. Enabling Chinese here put it under Japanese — which, for a Chinese book, is precisely the wrong way round. That is Step 5.

## Step 5: Put the languages in the right order

This is the step that fixes "my Chinese book is being read by a Japanese voice".

The two languages share Han characters, so whichever sits higher in the list claims them. In the first screenshot below, Japanese is above Chinese: a Han-character run goes to the Japanese voice.

![The Shiori TTS Languages list with four enabled languages in order English, Thai, Japanese, Chinese, so Japanese takes priority for shared Han characters](07-priority-japanese-above-chinese.jpg)

Tap the **▲** arrow on the Chinese row once. It swaps with Japanese, and now Han characters go to the Chinese voice instead.

![The same Shiori list after tapping the up arrow, now ordered English, Thai, Chinese, Japanese so Chinese takes priority for shared Han characters](08-priority-chinese-above-japanese.jpg)

Three details that save time:

* **The arrows only move a language within the enabled group.** The last enabled row's ▼ is greyed out — there is nothing below it worth ordering, because disabled languages have no priority at all.
* **The order is global, not per book.** It is a statement about you, not about the book on screen: "when a script is ambiguous, assume I mean this language."
* **Only ambiguity is affected.** Moving Chinese above Japanese changes nothing about how Thai or Latin text is read. Those scripts were never in dispute.

The same logic applies to the Latin alphabet. If you read English and Portuguese, put the one you read more often on top — the other one still gets read, it simply loses the coin toss on plain Latin text.

## Step 6: Tune pitch, speed and voice for each language

Tap the chevron at the right of any enabled row to expand it. Every language keeps its own settings:

* **Pitch (Tone)** and **Speed**, both as a multiplier of the engine's normal value
* A **▶ preview** with a sample sentence in that language, so you can judge a change instantly
* A **Voice** dropdown listing the voices the engine offers for that language

![An expanded English row in Shiori's TTS Languages list showing the Pitch and Speed sliders, a play preview with a sample English sentence, and the Voice dropdown set to Default](09-language-pitch-speed-voice.jpg)

Per-language storage is the point here. Most people want a faster English and a more measured pace for a language they are still learning, and Shiori keeps those apart — so a book that mixes both does not force a compromise. Set the speed with the preview button, not by guessing.

## Step 7: Pick a voice — offline or online, and which accent

Open the **Voice** dropdown on an expanded language. Beneath **Default** the engine's voices are listed, each labelled with a region and its availability.

![The Voice dropdown open for English in Shiori, listing Default plus numbered voices marked Offline or Online](10-voice-picker-offline-online.jpg)

Two things are encoded in those labels:

* **Offline / Online.** An *Offline* voice is on the device: it works on a plane, in a basement, with mobile data off, and costs nothing to run. An *Online* voice is synthesised by the engine's servers — often noticeably better, but it needs a connection, and a long listening session over mobile data is a real consideration.
* **The region prefix.** The voices are grouped by region, so a single language can offer several accents. On the test device the English list runs through the Australian voices and then continues into the Indian ones.

**Default** is a reasonable choice and it defers to the engine. Pick a specific voice when you want a particular accent, or when you want to guarantee an offline one for a commute.

## Step 8: Check the per-language improvements

At the bottom of the TTS Listening screen is a **Per-language improvements** section, holding fixes that only make sense for one language at a time. With Thai enabled, two rows appear:

* **Thai word segmentation** — "Mark Thai word boundaries before speaking, so the voice segments words correctly. Recommended on." Thai is written without spaces between words, so an engine that guesses the boundaries wrongly produces the wrong syllables. Leave this on.
* **Thai word dictionary** — teaches the voice names and terms it gets wrong, which is the right tool for proper nouns a general engine has never seen.

![The Per-language improvements section of Shiori's TTS Listening screen showing the Thai word segmentation switch turned on and the Thai word dictionary row](11-per-language-improvements-thai.jpg)

## Step 9: Change all of this without leaving the book

You do not have to go back to Settings to fix a voice mid-chapter. In the reader, the toolbar's read-aloud icon opens a panel that carries the same list: the enabled languages, with the same checkboxes and **▲ ▼** arrows, plus pitch and speed for each.

The panel also answers the question "which voice is reading this right now?", because the language in use is the one at the top of that list.

![Shiori's in-reader text-to-speech panel over a Portuguese book, showing the paragraph counter, the reading status, and English at the top of the language list with its pitch and speed sliders](12-reader-tts-panel-active-language.jpg)

The screenshot above is the failure mode this guide exists to prevent. The book is Portuguese; Portuguese is not enabled; English is. Both use the Latin alphabet, so English — the highest-priority Latin language — takes the text and reads it. Nothing warns you, because from the app's point of view nothing is wrong: a Latin run went to a Latin voice. Ticking Portuguese and moving it above English in this very panel is the fix, and it takes two taps without pausing playback.

## Step 10: Let Shiori notice for you

When a book's script has *no* enabled language at all, Shiori does not stay quiet. Opening an Arabic book with Arabic disabled and pressing play produced this:

> **Enable Arabic voice?** — This book appears to be in Arabic, which isn't enabled for read-aloud yet. Enable it so the correct voice is used?

![Shiori's prompt asking whether to enable the Arabic voice for a book detected as Arabic, with a do-not-ask-again checkbox and Cancel and Enable buttons](13-enable-detected-language-prompt.jpg)

Tap **Enable** and the language is turned on and placed at the **top** of the list, so it immediately wins any script it shares — which is what you want for the book you are holding. Playback then continues in the correct voice.

![Shiori's in-reader text-to-speech panel after enabling Arabic, showing Arabic at the top of the language list while the Arabic book is being read with the current word highlighted](14-enabled-language-on-top-reading.jpg)

There is also a **Don't ask again for this language** checkbox. Use it for a language you genuinely never want spoken; leave it alone otherwise, because this prompt is the cheapest way to keep the list correct.

Note the asymmetry with Step 9: no prompt appeared for the Portuguese book. Its script was already covered by an enabled language, so nothing looked missing. **Shiori can tell you when a script has no voice at all; it cannot tell you that you picked the wrong one among several.** That part is the order of your list, and it is on you.

## Recommended setups

| You read | Enable | Order |
| --- | --- | --- |
| One language only | Just that one | Nothing to order — the most accurate setup there is |
| Your language plus English loanwords | Your language and English | Your language on top; English still catches Latin runs |
| Chinese and Japanese | Both, plus English if you need it | Whichever you read more on top — that decides Han characters |
| Several European languages | Only the ones you actually read | Most-read on top; the rest still work when the script is unambiguous |

## Troubleshooting

**A book is read in the wrong language.** Two enabled languages share its script. Open the TTS Languages list — or the reader's read-aloud panel — and move the right one above the other.

**A language is silent, or falls back to another voice.** The engine has no voice data for it. Install it through your Android text-to-speech settings, then reopen the Voice dropdown for that language in Shiori.

**Everything sounds robotic.** That is the engine, not Shiori. Try a different engine in Step 2, or pick an *Online* voice for the language in Step 7.

**A voice stops working away from Wi-Fi.** It is an *Online* voice. Pick an *Offline* one for that language before travelling.

**The preview sounds right but the book still sounds wrong.** You changed the **Preview voice** dialog, which does not affect book narration. Change the TTS Engine and the per-language Voice instead.

**Thai comes out as the wrong syllables.** Check that **Thai word segmentation** is on under Per-language improvements.

**I cannot find a language in the list.** Search by its language code rather than its English name.

## Tips

* **Fewer languages, better voice.** Enable only what you read. Every extra language is another claimant for a shared script.
* **Read the subtitle.** The line under **TTS Listening** in Settings shows the enabled languages in priority order — a two-second check before you go hunting.
* **Set speed per language, not globally.** A comfortable speed in a language you know well is too fast in one you are learning.
* **Prefer offline voices for long sessions.** They are free of the network and free of data.
* **Fix the order from the reader.** The in-book panel has the same arrows, so a wrong voice can be corrected without losing your place.

## Related reading

* [One Book, Every Voice — Multi-Language Text-to-Speech, Explained](/blog/multi-language-text-to-speech-android-epub/)
* [Read Along with Karaoke Highlighting in Shiori EPUB Reader](/blog/read-along-tts-karaoke-highlight-epub-android/)
* [Read Selected Text Aloud on Android](/blog/read-selected-text-aloud-epub-android/)
* [Text Replacement and Regex for EPUB on Android](/blog/text-replacement-regex-epub-android/)

## Closing

The engine decides how the voices sound; the language list decides which of them speaks. Set the engine once, tick only the languages you read, and put them in the order you would resolve an ambiguity yourself. After that the setting you will actually use is the one arrow in the reader panel — and most days you will not need even that.
