# Read Footnotes and In-Book Links Without Losing Your Place

Academic books, annotated classics and anything with endnotes share the same
small annoyance on a phone or tablet: the footnote marker is a live link, and
tapping it can throw you clear across the file. One second you're on page 40
reading about mixed principalities, the next you're staring at a wall of
back-matter with no idea how far you scrolled or how to get back. Multiply
that by every citation in a 300-page book and footnotes stop being useful —
you start avoiding them.

Shiori handles in-book links differently. Tapping a footnote or a
cross-chapter reference opens a small preview of what's on the other end
first, so you can read it without leaving the page you're on. Tapping a link
that points outside the book — to a website — is treated as a bigger
decision, and Shiori asks you to confirm before it hands you off to a
browser. This walkthrough shows both, using a real public-domain book with
real footnotes.

## Why this matters for academic and footnote-heavy reading

A footnote link and an external link look almost identical on the page: a
small superscript number or a chain icon. But they do very different things
if you tap them blind:

* An **in-book link** (a footnote, an endnote, a "see Chapter 7" reference)
  should be a quick detour — you check it and come straight back.
* An **external link** (a citation to a website, a publisher's page) takes
  you out of the reading app entirely, onto the internet, in a different
  app.

Treating both the same way is what causes the "where was I" problem. Shiori
separates them: in-book links show you the destination in place, external
links stop and ask first.

## What you need

* Shiori installed on Android (this was tested on v2.3.4c11)
* Any EPUB that uses footnote or endnote links — public-domain classics from
  sites like Project Gutenberg are a reliable source, since their footnotes
  are simple `<a>` links back and forth within the file. This walkthrough
  uses *The Prince* by Niccolò Machiavelli.

## Step 1: Spot a footnote reference while reading

Footnote references sit inline in the text as a small superscript number
next to a link icon — here, `Lodovico[1]` partway through Chapter III. It
reads like ordinary text until you notice the icon; nothing about it warns
you that tapping it will otherwise jump you to the bottom of the file.

![A page of Chapter III of The Prince, showing the inline footnote reference "Lodovico" marked with a superscript 1 and a small link icon in the body text](01-footnote-reference-marker-in-chapter-text.jpg)

## Step 2: Tap it — a preview shows up instead of jumping

Tap the reference, and Shiori doesn't move the page at all. A card slides up
from the bottom showing the current chapter heading and the footnote text
itself, with **Cancel** and **Navigate** buttons underneath. You get to read
the footnote right there, decide whether it's worth following up on, and
your place in the chapter hasn't moved an inch.

![A preview popup over the reading page, showing the chapter heading "CHAPTER III. CONCERNING MIXED PRINCIPALITIES" and the footnote text about Duke Lodovico, with Cancel and Navigate buttons](02-footnote-preview-popup.jpg)

If the footnote is short enough to answer your question on its own, tap
**Cancel** — the popup closes and you're back exactly where you were,
mid-sentence.

## Step 3: Navigate if you want to — you stay inside the book

If you do want the full footnote in context (some run longer than the
preview can show), tap **Navigate**. Shiori scrolls you to the footnote's
actual position in the file — still inside *The Prince*, still in Chapter
III, with the same reading progress bar at the bottom. Nothing opened
outside the app; you can swipe or tap back to return to where you were
reading.

![The reading screen after tapping Navigate on the footnote preview, now scrolled to the footnote text itself, still showing "The Prince" as the book title and Chapter 12 / 38 in the progress bar](03-footnote-navigate-stays-in-book.jpg)

## Step 4: External links get a different response

Not every link in a book points to another page in the same file. Front
matter, citations and publisher boilerplate often link out to real websites.
In *The Prince*'s Gutenberg header page, the text "at www.gutenberg.org"
carries exactly that kind of link.

![A page of front matter in The Prince mentioning "www.gutenberg.org" with a link icon next to it, marking it as an external link inside the body text](04-external-link-in-book-text.jpg)

## Step 5: Confirm before you leave the app

Tap that link, and Shiori doesn't open a browser immediately. It shows an
**External link** dialog with the full resolved address
(`https://www.gutenberg.org/`) and two options: **Cancel**, which keeps you
in the book, or **Navigate**, which hands off to your browser. Because the
destination is spelled out before anything happens, you can catch a
mistyped tap or a link you didn't mean to follow before it takes you out of
the app — and out of your reading position.

![An External link confirmation dialog showing the full URL "https://www.gutenberg.org/" with Cancel and Navigate buttons, overlaid on the reading page](05-external-link-confirmation-dialog.jpg)

## Troubleshooting

**Tapping a footnote just scrolls the page instead of showing a preview.**
Not every EPUB marks footnotes as proper links — some publishers bake the
note directly into the paragraph as plain text instead of a linked
reference. If there's no link icon next to the number, Shiori has nothing to
intercept; that's the source file, not the reader.

**The preview text looks cut off.** Long footnotes are truncated in the
preview card by design — it's meant for a quick check, not for reading a
full page of notes. Tap **Navigate** to read the complete note in place.

**A link opened a browser without asking.** Only links Shiori recognizes as
external (a full `http://` or `https://` address) get the confirmation
dialog. If a link is malformed in the source file — for example missing the
`https://` prefix — the reader may not be able to tell it apart from an
in-book reference. This is rare in well-formed EPUBs.

## Tips

* This same preview-before-jump behavior applies to cross-chapter references
  too, not just footnotes — a "see Chapter 7" link behaves identically to a
  footnote marker.
* If you're building your own footnote-heavy EPUB (or fixing one), keep
  internal references as `<a href="#anchor">` links within the same file or
  spine — that's what Shiori recognizes as an in-book link. A full URL is
  always treated as external, even if it happens to point back at your own
  site.
* Public-domain sources are a good way to practice this without risking a
  book you care about — see the related reading below for where to find
  them.

## Related reading

* [How to Highlight Text and Take Notes in an Android EPUB Reader](/blog/highlight-and-take-notes-epub-android/) — once you've previewed a footnote worth remembering, this is how you mark it.
* [5 Best Sites to Download Free EPUB Books](/blog/free-epub-sources/) — public-domain classics like *The Prince* are a reliable way to find books with real footnote and cross-reference links.

## Closing

Footnotes are supposed to add context, not cost you your place in the book.
By previewing in-book links before jumping and asking before you leave the
app entirely, Shiori keeps academic and reference-heavy reading from turning
into a scavenger hunt back to where you left off.
