# Drop a Book Into a Browser and Watch It Land on Your Phone — Book Drop, Explained

Getting an EPUB from your computer onto your phone has been surprisingly tedious for over a decade: searching for cables, waiting for USB drivers, digging through file managers, or emailing files to yourself just to move a book three feet across a desk.

**Book Drop** replaces all of that friction with one simple idea: your phone hosts a private, lightweight web page on your own Wi-Fi. You open that address in any desktop browser, drag your books into the drop zone, and they land directly on your bookshelf. No cables, no cloud logins, and no software to install on your computer.

> **In one sentence:** Turn Book Drop on, open the local Wi-Fi address in your computer's browser, and drag book files onto the page — each title imports straight into your Shiori bookshelf.

---

## 1. What You Need

- **Same Wi-Fi Network:** Your phone and computer simply need to be connected to the same local Wi-Fi router.
- **Any Web Browser:** Works effortlessly on Windows, macOS, Linux, ChromeOS, or even another tablet or phone.
- **No Internet Required:** The file transfer happens directly across your local network without uploading a single byte to external servers.

---

## Step-by-Step Guide (6 Steps)

### Step 1: Open Book Drop in Experimental Settings
On your phone, open **Settings → Experimental** and locate **Book Drop**. It stays off by default for privacy and security.

### Step 2: Turn It On and Copy the Address
Toggle the switch on. A card appears displaying your phone's local network URL (such as `http://192.168.1.34:17872`). Long-press to copy the address.

### Step 3: Open That Address in Your Computer's Browser
Type the address into Chrome, Edge, Safari, Firefox, or Brave. A sleek, dark transfer page hosted directly on your phone loads instantly.

### Step 4: Drag and Drop Books Onto the Drop Zone
Drag one book or dozens of titles from your file explorer or Calibre directory. The drop zone glows upon hover, or you can simply click it to select files.

### Step 5: Monitor Real-Time Transfer Progress
Each file shows a live progress bar with format badges and byte counters while transferring directly across your local network.

### Step 6: Instant Confirmation & Parsed Metadata
Once imported, the second line switches from the raw filename to the actual book title parsed directly from the EPUB (e.g. `bram-stoker_dracula.epub` confirms as **Dracula**).

---

## The Four Status Indicators

| Status Chip | Meaning |
| --- | --- |
| **uploading…** | Transferring data or phone is actively parsing book chapters |
| **On the shelf ✓** | Successfully imported with cover artwork and metadata |
| **Already on the shelf** | Identical file (matched by filename and exact byte size) already exists — prevents duplicate clutter |
| **unsupported type** | File format is not supported (e.g. Word documents or raw images) |

---

## Supported File Formats (Up to 1 GB per File)

| Format | Details |
| --- | --- |
| **EPUB / KEPUB** | Standard EPUB 2/3 and Kobo KEPUB ebooks |
| **CBZ** | Comics & manga archives (first page appears instantly while background parser finishes) |
| **PDF** | Text-based PDFs with intelligent text reflow for smooth mobile reading |
| **FB2** | FictionBook `.fb2` and compressed `.fb2.zip` |
| **TXT** | Plain text structured automatically with chapter navigation |
| **MD / Markdown** | Rendered into styled, readable ebooks |

---

## Privacy & Security on Your Local Network

- **Only Active When Switched On:** The server closes the second you turn the toggle off or press Stop. It never stays running silently.
- **Permanent Status Notification:** Android displays an ongoing notification with the address, received count, and an instant **Stop** button.
- **Private LAN Address Only:** Accessible solely from your local Wi-Fi, completely unreachable from the public internet.
- **Receive-Only Architecture:** The web interface only accepts incoming uploads — it cannot browse, read, or export any existing books on your phone.

---

## Frequently Asked Questions

**Does Book Drop require an active internet connection?**  
No. The transfer occurs entirely within your local Wi-Fi network. Even if your internet connection is down, transfers will work smoothly.

**Can other people on my Wi-Fi access or download my library?**  
No. The web server is strictly receive-only. There is no API or interface to list, read, or download files stored on your phone.

**Do I need to install any program on my PC?**  
No. Any modern browser on Windows, Mac, Linux, or ChromeOS is all you need.

**What happens if I accidentally drop the same book twice?**  
Shiori recognizes matching filenames and byte sizes, marking the second file as "Already on the shelf" without duplicating your books.

---

## The Easiest Way to Transfer Books

Get **Shiori EPUB Reader** on Google Play, turn on Book Drop, and drag your next favorite book right onto your phone.
