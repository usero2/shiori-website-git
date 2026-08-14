# Text Replacement in Shiori: Rewrite What You Read and What You Hear

Every ebook has something you would change. A translator's spelling you dislike, a name your text-to-speech voice mangles, footnote markers that interrupt the narration, or three exclamation marks where one would do. Shiori's **Text Replacement** fixes all of it — across every book, without editing a single file.

There are two lists, and the difference between them is the whole idea.

---

## 1. Visual vs TTS: The One Thing to Understand

| | **Visual** | **TTS** |
| --- | --- | --- |
| Changes the page you see | ✅ Yes | ❌ No |
| Changes what the voice reads | ✅ Yes | ✅ Yes |
| Typical use | spelling, clutter, renaming | pronunciation, abbreviations |

In the app's own words: a **Visual** rule *"replaces text in reader view and before TTS reads,"* while a **TTS** rule *"replaces text only when sent to TTS — not shown in reader."*

So: if you want to *see* the change, use Visual. If you only want to *hear* it, use TTS. A pronunciation hack like `Rodya → Rod-ya` belongs on the TTS list, where it will never disfigure the page.

Neither list ever touches your EPUB file. Rules are applied on the fly, every time a chapter renders or a paragraph is spoken — so deleting a rule restores the original wording instantly.

## 2. Where to Find It

**Settings → Visual & TTS Replacement.** One screen, two tabs, swipeable.

## 3. Anatomy of a Rule

- **Find (from)** — the text to look for. With *Use Regex* on, this field is relabelled **Pattern (regex)**.
- **Replace with (to)** — what to put in its place. Leave it **empty to delete** the match.
- **Use Regex** — plain text or pattern. The **?** beside it opens a built-in cheat sheet.
- **Order** — rules run in this order, each one working on the result of the last.
- **On/off switch** — on every row, so you can park a rule without deleting it.
- **▶ buttons** — hear either field spoken aloud, in the preview voice shown underneath.

---

## Step-by-Step Guide (12 Steps)

### Step 1: Open Settings → Visual & TTS Replacement
The entry sits in Settings, described as *"Rewrite text shown in the reader or spoken by TTS."* One screen holds both lists as swipeable tabs.

### Step 2: Meet the List
Each tab opens with its master switch, an item count, and the rules themselves. Every row shows its order number, an on/off switch, the find → replace pair, an **Rx** tag if it is a regex, and edit and delete icons.

### Step 3: Add a Plain-Text Rule
Tap **+**, type what to find and what to replace it with, then **Save**. Plain rules are literal and case-sensitive, and they replace *every* occurrence in every book.

### Step 4: Turn On Use Regex
Tick **Use Regex** and the first field becomes **Pattern (regex)**. Now `Mr\.` means "the letters M, r, and a real dot," matching every `Mr.` in the text.

### Step 5: Open the Cheat Sheet
The **?** next to the checkbox opens *How to use Regex* with six worked examples you can copy. It is the fastest way to remember what `{3,}` or `[0-9]+` does while you are mid-rule.

### Step 6: Let the Safety Check Catch Your Mistakes
Shiori analyses the pattern as you type. Write `$1` when your pattern has no groups and you get **"This rule can't work — $1 points at a group this pattern doesn't have, so the rule would be skipped every time,"** with **Save greyed out** until you fix it.

### Step 7: See It in the Reader
Open any book and the visual rules are already applied. Ours turns every "Raskolnikov" into "Rodya" throughout *Crime and Punishment* — hundreds of occurrences, without touching a byte of the file.

### Step 8: Search Sees the Rewritten Text Too
Search inside the book and the results come back in the replaced wording — because search processes the exact text you read.

### Step 9: Create a Rule Straight From the Page
Select a word in the reader and the selection menu offers **Replace**. The dialog opens with **Find** already filled in from your selection.

### Step 10: Configure Language-Scoped TTS Rules
Choose **TTS** in that dialog and a **Voice language** row appears: **Global**, or one specific voice language. A language-scoped rule only fires on passages spoken in that voice.

### Step 11: Preview What the Voice Will Say
Select text and tap **TTS preview**. Shiori shows the original above and the spoken version below — here `Rodya → Rod-ya` — with an **Aloud** button to test the pronunciation live.

### Step 12: Manage the TTS List by Language
The TTS tab organizes rules under collapsible language headers with dedicated group switches and live filter chips.

---

## A Regex Cookbook: 16 Ready-to-Use Recipes

The six examples built into the app:

| Pattern | Replace with | What it does |
| --- | --- | --- |
| `colou?r` | `color` | `?` makes the previous letter optional — matches *color* and *colour* |
| `(ha){3,}` | `haha` | `{3,}` repeats the group three or more times — shortens laughter of any length |
| `[0-9]+` | *(empty)* | any run of digits; an empty replacement deletes the match |
| `[!?]{2,}` | `!` | collapses `!!!` or `?!?` into a single `!` |
| `Mr\.` | `Mister` | `\` before `.` matches a real dot, not "any character" |
| `(\w+) (\w+)` | `$2 $1` | `( )` captures; `$1`, `$2` reuse the captures — this swaps two words |

Ten more practical recipes:

| Pattern | Replace with | What it does |
| --- | --- | --- |
| `\[[0-9]+\]` | *(empty)* | removes footnote markers like `[12]` |
| `\s{2,}` | *(one space)* | collapses runs of whitespace |
| `Dr\.` | `Doctor` | abbreviation the voice would otherwise spell out |
| `St\.` | `Saint` | same idea (matches *St.*) |
| `—` | `, ` | turns an em dash into a comma so TTS pauses naturally |
| `\.\.\.` | `…` | three dots become a proper ellipsis |
| `([a-z])([A-Z])` | `$1 $2` | splits runTogether words from bad OCR |
| `^\s+` | *(empty)* | trims leading whitespace |
| `(\d+)th` | `$1 th` | keeps a voice from reading "14th" as one blob |
| `\bch\.` | `chapter` | `\b` anchors to a word start so it won't hit *mulch.* |

---

## Frequently Asked Questions

**Does a replacement change my EPUB file?**  
No. Rules are applied as the page renders or as text is sent to the voice. The file on disk is untouched, and deleting a rule restores the original wording instantly.

**Can a rule apply to only one book?**  
Rules are global across your library. Use the row switch to park one you only need occasionally.

**Are rules case-sensitive?**  
Yes, both plain and regex. Match the case you actually want, or use a character class like `[Tt]he`.

**How do I delete text instead of replacing it?**  
Leave **Replace with** empty. The match is removed.

---

## Your Books, in Your Words

Download **Shiori EPUB Reader**, open Settings → Visual & TTS Replacement, and tailor every line to your personal reading taste.
