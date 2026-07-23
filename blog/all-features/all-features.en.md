# Shiori — Full Feature List

> An Android EPUB reader that reads aloud, translates, and helps you remember what you read.

---

## 1. Open Many Kinds of Books
- Supports **EPUB**, **Kobo (KEPUB)**, **FB2**, **PDF**, and **comics (CBZ)**
- **Text-based PDFs** open in a reflowable mode — change the font and theme and read them aloud just like an EPUB (with correct Thai vowel/tone placement)
- **Scanned PDFs / comics** open as page images
- **Import several books at once**; large books appear on the shelf instantly and finish loading in the background
- Open files sent from other apps ("Open with Shiori")
- Automatically cleans up poorly formatted files so reading, highlighting, and read-aloud line up correctly
- **Reader Only mode** — open a file to read right away without adding it to your bookshelf; it isn't synced to the cloud and deletes itself after 30 days (great for temporary or private reading)

## 2. Reading Experience
- **4 themes**: Light / Sepia / Gray / Dark
- **Set a different font per language** (e.g. one font for Thai, another for Japanese) and import your own fonts
- Adjust **text size, line spacing, and page margins**
- Options for how EPUBs are displayed (ignore the file's styling, remove text colors, force the system font, etc.)
- **Seamless scrolling across chapters** through the whole book
- **Fullscreen mode** (hides the toolbars and system bars)
- **In-book links** (cross-chapter/footnotes) show a preview before jumping, and external links ask for confirmation first
- **Search the whole book** and jump to a result without stopping the read-aloud

## 3. Bookmarks, Highlights & Notes
- Bookmark by paragraph, with an in-book list (searchable, deletable)
- **Multi-color highlights** and text **notes**
- Add **#tags** to notes to group and find them later
- Highlight **images** too (keeps a copy even if the book is deleted)
- View all bookmarks/notes across every book

## 4. Read Aloud (Text-to-Speech)
- Reads aloud in many languages; choose the voice, speed, and pitch
- **Reads continuously across the whole book**, and keeps playing even after you close the reader or the screen
- **Highlights the text as it reads** (karaoke style) — by paragraph, sentence, and word, with adjustable colors
- **Playback notification** with the book cover, paragraph position, a sleep timer, and quick buttons
- **Floating controls** when you leave the app while listening
- **Sleep timer** to stop automatically
- **Screen lock** for pocket listening (unlock with a long-press or a double back-press)
- Peek at bookmarks/notes/search/other chapters while the voice keeps reading its place
- **Read just the selected text** once (separate from reading the whole book)

## 5. Automatic Word Replacement
- Two separate sets: one for **display**, one for **read-aloud**
- Rules can target a specific voice language and support advanced patterns (regex)
- Turn a whole set on/off temporarily without deleting the rules
- **Import/export** rule files and preview the result

## 6. Translation
- **Translate paragraph by paragraph** — tap to show the translation below the paragraph
- **Translate a whole chapter or whole book** in the background with a progress bar
- Works both offline (free) and with on-device AI
- Translate into several languages at once
- Translation blocks can be removed/edited/copied/re-translated/read aloud
- Tells you when a translation changed nothing (e.g. the target language matches the source)

## 7. Ask AI (Runs On Your Device)
- An AI assistant that runs entirely on your device (download the model once)
- Ask questions about what you're reading, and keep the conversation pinned at the chapter's end

## 8. Read Comics (CBZ)
- **Read text from images (OCR)** — copy, translate, or read aloud the text on a comic page (English/Japanese/Chinese/Korean)
- **Translate speech bubbles in place** into Thai on the same page; tap to pick a bubble
- **Auto-crop pages** for a fuller view

## 9. Opening & Reading PDFs (in detail)
On import, the app **automatically detects whether a PDF is text-based or scanned** and picks the best way to open it.

**Text-based PDFs (real text)** — open in reflowable mode, just like an EPUB:
- Change the **font / size / theme / line spacing / page margins**
- **Read aloud** with word highlighting, **translate**, **search**, and **bookmark/highlight/note** — like any book
- Correct **Thai vowel and tone ordering** (a common problem where Thai PDFs come out garbled)
- You can still tap to view the **actual PDF page image** from the reader (to compare with the original)

**Scanned / image PDFs (no text)** — open as page images and get the same tools as comics:
- **Read text from images (OCR)** — copy / translate / read aloud the text on a page
- **In-place translation overlay** into Thai
- **Auto-crop pages**

- Large PDFs appear on the shelf instantly and finish processing in the background

## 10. Reading Stats & Calendar (Insights)
Records both **time spent reading** and **time spent listening**, summarized on one page.

**Calendar**
- A monthly "heatmap" calendar showing which days you read and how much (darker = more)
- Move between previous/next/today, and see the month's totals
- **Tap a day** to open that day's timeline

**Daily Timeline**
- Brings everything from that day together in one time-ordered list:
  - **Highlights/notes** created that day
  - **Reading spans** (showing what % of the book you went from and to)
  - **Listening spans**, with buttons to jump to the start/end of that span
  - **AI conversations** from that day
- Tap any item to jump back to that spot in the book

**Streak & Goals**
- Shows your **current and longest streak** (consecutive days read)
- Set a **daily (minutes) or monthly (hours) goal** and track progress vs. the previous month

**Charts & summaries**
- A daily bar chart of time read/listened
- A donut chart of your reading split by collection
- A ranking of the books you've spent the most time on

## 11. Memory
- Gathers your bookmarks, notes, and highlights from every book, filterable by book or tag
- **"On this day"** resurfaces things you read or noted before
- Keeps your AI conversations, and tapping any item jumps back to its spot in the book

## 12. Collections
- Group books into collections with a color, pin them, and reorder them
- Still shows the cover/title even after you remove the file (keep-data delete)

## 13. Connect Online Libraries (Library Server)
Add multiple online book libraries, browse, search, and download to read — with your own icon and ordering. The app **detects the server type automatically** and supports:
- **OPDS** (the common library standard — covers **Calibre**, **Standard Ebooks**, **Project Gutenberg**, and more)
- **Komga** (comic/book server; put the key in the password field)
- **Kavita** (comic/book server; uses a key)
- **Everything (voidtools)** — a web file share (works through a proxy too)
- **WebDAV** — a WebDAV file share

## 14. Cloud Sync (Google Drive)
- Sign in with Google to sync your **settings, bookmarks, word-replacement rules, and book files** to a private space in Drive
- Merges your data automatically on sign-in (Reader Only books are never synced)

## 15. Player Tab
- A dedicated tab for controlling read-aloud and seeing what you recently listened to

## 16. Support the Developer
- **Donate** (coffee/pizza, and donate again) or **subscribe** (monthly/yearly)
- Supporters get **no ads**, a badge, and a running count of days supported
- Prices adjust by region

## 17. Settings
- Organized into sections: Reading / Read-aloud / Comics / AI / Cloud / Experimental / About & Support
- **Change the app language** in-app (45 languages / 64 regions)
- **Back up / restore** your settings and word-replacement rules
- **Experimental**: two-line toolbar, Reader Only mode
- **Tester tools** (for testers): turn on a diagnostic log and export it
- **Opt out of anonymous usage stats**
- **Rate the app** (4–5 stars go to the rating page, 1–3 stars send feedback by email)

## 18. Privacy
- Usage stats are **anonymous** and can be turned off — your book content, bookmarks, and notes are never collected
- Core features (translation / read-aloud / AI) run **on your device**, with no account or key required

## 19. Many Languages
- The app interface is fully translated into **45 languages (64 regions)**
