# Text Replacement in Shiori: Rewrite What You Read and What You Hear

Every ebook has something you would change. A translator's spelling you dislike, a name your text-to-speech voice mangles, footnote markers that interrupt the narration, three exclamation marks where one would do. Shiori's **Text Replacement** lets you fix all of it — permanently, across every book, without editing a single file.

There are two lists, and the difference between them is the whole idea.

---

## Visual vs TTS: The One Thing to Understand

| | **Visual** | **TTS** |
| --- | --- | --- |
| Changes the page you see | ✅ Yes | ❌ No |
| Changes what the voice reads | ✅ Yes | ✅ Yes |
| Typical use | fix spelling, delete clutter, rename | fix pronunciation, expand abbreviations |

In the app's own words: a **Visual** rule *"replaces text in reader view and before TTS reads,"* while a **TTS** rule *"replaces text only when sent to TTS — not shown in reader."*

So: if you want to see the change, use Visual. If you only want to hear it, use TTS. A pronunciation hack like `Rodya → Rod-ya` belongs on the TTS list, where it will never disfigure the page.

Neither list ever touches your EPUB file. Rules are applied on the fly, every time a chapter renders or a paragraph is spoken.

## Where to Find It

**Settings → Visual & TTS Replacement.** One screen, two tabs, swipeable.

---

## Anatomy of a Rule

- **Find (from)** — the text to look for. With *Use Regex* on, this field is relabelled **Pattern (regex)**.
- **Replace with (to)** — what to put in its place. Leave it **empty to delete** the match.
- **Use Regex** — plain text or pattern. The **?** beside it opens a built-in cheat sheet.
- **Order** — rules run in this order, each one working on the result of the last.
- **On/off switch** — on every row, so you can park a rule without deleting it.
- **▶ buttons** — hear either field spoken aloud, using the preview voice shown underneath.

---

## Step-by-Step Guide (12 Steps)

### Step 1: Open Settings → Visual & TTS Replacement
The entry sits in Settings, described as *"Rewrite text shown in the reader or spoken by TTS."*

### Step 2: Meet the List
Each tab opens with its master switch, an item count, and the rules themselves. Every row shows its order number, an on/off switch, the find → replace pair, an **Rx** tag if it is a regex, and edit/delete icons.

### Step 3: Add a Plain-Text Rule
Tap **+**. Type what to find and what to replace it with, then **Save**. Plain rules are literal and case-sensitive, and they replace *every* occurrence in the book.

### Step 4: Turn On Use Regex
Tick **Use Regex** and the first field becomes **Pattern (regex)**. Now `Mr\.` means "the letters M, r, and a real dot," and it will match every `Mr.` in the text.

### Step 5: Open the Cheat Sheet
The **?** next to the checkbox opens *How to use Regex* with six worked examples you can copy. It is the fastest way to remember what `{3,}` or `[0-9]+` does.

### Step 6: Let the Safety Check Catch Your Mistakes
Shiori analyses your pattern as you type. Write `$1` when your pattern has no groups and you get **"This rule can't work — $1 points at a group this pattern doesn't have, so the rule would be skipped every time,"** and **Save stays greyed out** until you fix it. Patterns that are merely slow get a warning instead.

### Step 7: See It in the Reader
Open any book and the visual rules are already applied. Ours turns every "Raskolnikov" into "Rodya" throughout *Crime and Punishment* — hundreds of occurrences, without touching the file.

### Step 8: Search Sees the Rewritten Text Too
Search inside the book and the results show the replaced wording — because search reads the same rewritten text you do.

### Step 9: Create a Rule Straight From the Page
Select a word in the reader and the selection menu offers **Replace**. The dialog opens with **Find** already filled in, and a **Visual / TTS** radio pair to decide which list it joins.

### Step 10: Give TTS Its Own Rule (and Its Own Language)
Choose **TTS** in that dialog and a **Voice language** row appears: **Global**, or one specific voice language. A language-scoped rule only fires on segments spoken in that voice — so a Thai pronunciation fix never interferes with the English narrator.

### Step 11: Preview What the Voice Will Say
Select text and tap **TTS preview**. Shiori shows the original above and the spoken version below — here `Rodya → Rod-ya` — with an **Aloud** button to hear it before you commit.

### Step 12: Manage the TTS List by Language
The TTS tab carries filter chips with live counts (Global, plus each enabled voice language) and groups the list under collapsible headers, each with its own switch. Tap a chip to include or exclude that group.

---

## A Regex Cookbook

The six examples built into the app:

| Pattern | Replace with | What it does |
| --- | --- | --- |
| `colou?r` | `color` | `?` makes the previous letter optional — matches *color* and *colour* |
| `(ha){3,}` | `haha` | `{3,}` repeats the group three or more times — shortens laughter of any length |
| `[0-9]+` | *(empty)* | any run of digits; an empty replacement deletes the match |
| `[!?]{2,}` | `!` | collapses `!!!` or `?!?` into a single `!` |
| `Mr\.` | `Mister` | `\` before `.` matches a real dot, not "any character" |
| `(\w+) (\w+)` | `$2 $1` | `( )` captures; `$1`, `$2` reuse the captures — this swaps two words |

Ten more worth stealing:

| Pattern | Replace with | What it does |
| --- | --- | --- |
| `\[[0-9]+\]` | *(empty)* | removes footnote markers like `[12]` |
| `\s{2,}` | *(one space)* | collapses runs of whitespace |
| `Dr\.` | `Doctor` | abbreviation the voice would otherwise spell out |
| `St\.` | `Saint` | same idea (careful: also matches *St.* for street) |
| `—` | `, ` | turns an em dash into a comma so TTS pauses naturally |
| `\.\.\.` | `…` | three dots become a proper ellipsis |
| `([a-z])([A-Z])` | `$1 $2` | splits runTogether words from bad OCR |
| `^\s+` | *(empty)* | trims leading whitespace |
| `(\d+)th` | `$1 th` | keeps a voice from reading "14th" as one blob |
| `\bch\.` | `chapter` | `\b` anchors to a word start so it won't hit *mulch.* |

**Two engines, one syntax to stay inside.** Visual rules are applied by the browser engine inside the page; TTS rules are applied by the app before the words reach the voice. Everything in the tables above works in both. Exotic extras — inline flags like `(?i)`, for instance — may work on one side only, so keep patterns to the common core, and use the TTS preview to check.

**Quotes are normalised.** Curly apostrophes (`'`), backticks and full-width quotes are all treated as a plain `'` before matching, so you can type an ordinary apostrophe and still match typographic text.

**Order matters.** Rules run top to bottom, each on the output of the previous one. If one rule feeds another, give the first a lower Order number.

---

## The Safety Net

Regex is powerful enough to hang an app, so Shiori guards it on four levels:

1. **While you type** — errors (invalid syntax, bad group references, a stray `$`) block Save; warnings (a pattern that matches empty text, or one that measured slow) let you save but stay visible.
2. **In the list** — a badge marks any rule with an issue, including ones that arrived by import or cloud sync.
3. **At runtime** — a rule judged unsafe is skipped rather than run, on both the page and the TTS side.
4. **After a crash** — if the app ever goes down inside a replacement, both master switches are turned off on the next launch and a banner explains why. Your rules are never deleted.

The master switch at the top of each tab is your own manual version of that: *"switch off to bypass every rule temporarily — each rule's own on/off state is kept."*

---

## Moving Rules Around

- **Export** writes the current tab's rules to a JSON file, enabled states and language groups included.
- **Import** reads that JSON back, and still accepts the old tab-separated format.
- **Cloud sync** brings rules between your own devices, with a review banner — *"From your other devices: 7 new, 0 deleted"* — so nothing is added behind your back.

---

## Frequently Asked Questions

**Does a replacement change my EPUB file?**
No. Rules are applied as the page renders or as text is sent to the voice. The file on disk is untouched, and deleting a rule restores the original wording instantly.

**Can a rule apply to only one book?**
Rules are global across your library. Use the row switch to park one you only need occasionally.

**Are rules case-sensitive?**
Yes, both plain and regex. Match the case you actually want, or use a character class like `[Tt]he`.

**Why is my regex not matching?**
Check three things: the *Use Regex* box is actually ticked, special characters like `.` `?` `+` `(` `[` are escaped with `\` when you mean them literally, and the rule is not being undone by another rule with a higher Order.

**How do I delete text instead of replacing it?**
Leave **Replace with** empty. The match is removed.

**What is the difference between the ▶ button and TTS preview?**
The ▶ buttons speak a single field so you can hear how a replacement sounds. **TTS preview** takes real text from the book and shows the finished result, every rule applied.

---

## Your Books, in Your Words

Download **Shiori EPUB Reader**, open Settings → Visual & TTS Replacement, and fix the one thing that has always bothered you.
