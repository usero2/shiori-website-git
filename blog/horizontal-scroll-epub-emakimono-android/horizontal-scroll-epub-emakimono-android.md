# Horizontal Scrolling EPUBs on Android: Read a Japanese Picture Scroll

Not every book is meant to move downward. A Japanese **emakimono** (絵巻物) — a painted handscroll — unrolls sideways, and so does a 縦書き novel, whose columns march from the right edge of the page toward the left. EPUB 3 can describe both, and Shiori's **Horizontal scroll** reading mode plays them back the way they were drawn.

The best way to see it is to try it. Below is a free sample you can download right now.

---

## Get the Sample: horizontally-scrollable-emakimono.epub

**➜ [Download horizontally-scrollable-emakimono.epub](https://github.com/IDPF/epub3-samples/releases/download/20230704/horizontally-scrollable-emakimono.epub)** (about 5 MB)

It comes from the **EPUB 3 samples project**, the official collection of test books for the EPUB standard. The book is *Shigisan Engi* (信貴山縁起), "The Legend of Mount Shigi" — a twelfth-century picture scroll attributed to Toba Sōjō Kakuyū, and one of the most famous narrative paintings in Japan. This volume is 山崎長者の巻, *the Flying Granary*: a monk sends his begging bowl across the sky, and it carries a rich man's entire storehouse away with it.

The sample's own colophon page notes that its text is available under a Creative Commons Attribution–ShareAlike licence.

## What Makes an EPUB Scroll Sideways?

Three declarations inside the book do the work, and it is worth knowing them if you ever build one yourself:

- `<meta property="rendition:flow">scrolled-doc</meta>` — the content is one continuous scroll, not a stack of pages.
- `<spine page-progression-direction="rtl">` — the reading direction runs right to left.
- `html { writing-mode: vertical-rl; }` — text stacks into vertical columns, and the whole document lays itself out horizontally.

In this sample those three lines turn twenty-five stitched photographs of the original scroll into one continuous painting several screens wide.

---

## Step-by-Step Guide (7 Steps)

### Step 1: Download and Import the Sample
Tap the download link above, then bring the file into Shiori with the **+** button on the bookshelf and **Pick an EPUB file**. It arrives as a normal book — cover, title (信貴山縁起), author, two chapters.

### Step 2: Open It
With **Reading mode** on **Auto** — the default — Shiori reads what the book declares and lays the scroll out sideways on its own. If it instead appears as a stack of separate panels running down the screen, this book has been set to another mode before, and the next two steps put it right.

### Step 3: Open the Reading Mode Panel
Tap the reading-mode icon in the reader's top bar. The icon always shows the mode the current book is in: **↕** for vertical scroll, **⇄** for horizontal, a sparkle for Auto.

### Step 4: Choose Horizontal Scroll
The panel offers four chips — **Auto**, **Vertical scroll**, **Horizontal scroll** and **Page turn** — and the hint above them says it plainly: *how this book moves. Auto follows what the book declares.* Pick **Horizontal scroll** and the page rebuilds itself instantly, the artwork now filling the screen's full height.

A **Direction** row appears underneath: **Auto**, **LTR** or **RTL**. RTL is the Japanese convention and what a handscroll or a manga wants; LTR suits a picture scroll drawn to be read left to right. Below that, **Stand other language font upright** decides whether Latin and Thai letters lie on their side inside a vertical column or stand up and stack.

### Step 5: Start at the Right-Hand End
A right-to-left scroll begins where a real handscroll does — at its right edge, with the title cartouche and the collector's seals. The progress readout shows 0.00%.

### Step 6: Swipe to Unroll It
Drag sideways and the painting travels past continuously. There are no page seams to interrupt a composition that was designed to be taken in as one sweep, and the percentage climbs as you go, so you always know how much scroll is left.

### Step 7: The Same Mode Carries Vertical Text
Keep going into the second chapter and the artwork gives way to Japanese prose — set in vertical columns that run right to left, panning exactly the same way. That is the whole point of the mode: 縦書き text and painted scrolls move alike, so one setting serves both.

> **💡 Pro Tip:** The reading mode is remembered **per book**. Set a tategaki novel to Horizontal scroll and it stays that way, while your English paperbacks keep scrolling down as usual. A book you have never touched starts from whichever mode you chose last, so setting up a second manga takes no work at all.

---

## Frequently Asked Questions

**What is an emakimono?**
A Japanese painted handscroll: a long horizontal roll of paper or silk on which a story unfolds continuously as you unroll it from right to left. *Shigisan Engi* is one of the classic examples, and the sample above is a faithful digital edition of it.

**Why does my scroll book look like a stack of separate images?**
It is being rendered in vertical-scroll mode. Open the reading-mode panel and pick **Horizontal scroll** (or **Auto**), and the panels join back into one continuous scroll.

**Does this work with vertical Japanese novels too?**
Yes. Horizontal scroll is the 縦書き mode: text stacks into vertical columns and the columns run sideways. Set **Direction** to **RTL** for Japanese.

**Can I read a left-to-right scroll?**
Yes — set **Direction** to **LTR** and the scroll runs the other way.

**Where can I find more EPUB 3 samples?**
The EPUB 3 samples project on GitHub publishes a whole set of test books — fixed-layout, vertical writing, media overlays and more — all free to download.

---

## See Your Books the Way They Were Drawn

Download **Shiori EPUB Reader**, grab the emakimono sample, and unroll a twelfth-century masterpiece with your thumb.
