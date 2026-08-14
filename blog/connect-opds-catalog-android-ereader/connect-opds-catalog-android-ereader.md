# How to Connect an OPDS Catalog to Your Android E-Reader

Your personal ebook collection probably already speaks OPDS — it just needs an app that listens. Whether you manage your library with **Calibre**, run **Calibre-Web** on a home server, organize digital comics in **Komga**, curate light novels in **Kavita**, or browse classic literature on **Project Gutenberg**, all of them can share their books through a simple **OPDS feed**. With Shiori, you can paste that single address and watch it turn into a clean, beautifully organized bookshelf right on your Android device — no cloud accounts, no sync subscriptions, and no uploading your private collection to third-party servers.

---

## 1. What Is OPDS, Exactly?

**OPDS** stands for *Open Publication Distribution System*. Think of it as RSS for ebooks: instead of publishing news articles, a server publishes a catalog of books — titles, authors, covers, descriptions, categories and download links — in a standard format that any reading app can understand.

That open standard is what makes it so powerful. The server does not need custom plugins for Shiori, and Shiori works seamlessly with any server that publishes OPDS. Shiori natively supports both **OPDS 1.x** (the Atom-based XML format) and **OPDS 2.0** (the modern JSON-based format), giving you instant access to virtually any catalog.

## 2. What You Will Need

- **The catalog URL** — the address of the OPDS feed itself, rather than your server's home page (see the table below).
- **A username and password** — only if your catalog is private. Public catalogs require no login credentials at all.
- **Network access** — ensure your phone and server are on the same Wi-Fi network for home servers, or use a public domain/IP if connecting remotely.

## 3. Where to Find Your OPDS URL

| Server | Typical OPDS address |
| --- | --- |
| **Calibre** (content server) | `http://192.168.1.10:8080/opds` |
| **Calibre-Web** | `http://192.168.1.10:8083/opds` |
| **Komga** | `http://192.168.1.10:25600/opds/v1.2/catalog` |
| **Komga (OPDS 2.0)** | `http://192.168.1.10:25600/opds/v2/catalog` |
| **Kavita** | `http://192.168.1.10:5000/api/opds/YOUR_API_KEY` |
| **Project Gutenberg** (public) | `https://www.gutenberg.org/ebooks.opds/` |

Shiori includes built-in **Quick fill** buttons for these exact services. Simply enter your host or IP address, tap *Calibre*, *Calibre-Web*, *Komga*, *Komga v2*, or *Kavita*, and Shiori fills in the standard port and path automatically.

> **Kavita Note:** Its API key is embedded directly inside the URL. In Kavita, navigate to **Account → OPDS URL**, paste your personal API key right after `/api/opds/`, and leave the username and password fields blank in Shiori.

---

## Step-by-Step Guide (7 Steps)

### Step 1: Open Collections → Library Server
Go to the **Collections** tab and scroll down to the **Library Server** section. Tap **+** to add a new catalog. Servers you have already added are listed here with their addresses masked, so a screenshot never leaks your private URL.

### Step 2: Name It and Paste the Catalog URL
Type a friendly name, then paste your OPDS address into the **Catalog URL** field. Not sure of the exact path? Type just the host or IP and tap a **Quick fill** chip — *Calibre*, *Calibre-Web*, *Komga*, *Komga v2*, or *Kavita* — and Shiori completes the rest.

If your catalog is private, fill in **Sign-in (optional)** with your username and password. For a public catalog, leave both fields empty.

### Step 3: Tap Test Connection, Then Save
Shiori fetches the feed and reports what it found. For a working catalog, you will see **“Connected — OPDS catalog.”** That confirms the address is reachable, your credentials are valid, and the response is an authentic catalog. Now tap **Save**.

### Step 4: Need Help with Addresses? Check “Supported servers”
The same screen carries a built-in reference for every server type Shiori supports: OPDS 1.x / 2.0, Komga, Kavita, WebDAV, FTP/FTPS, S3 buckets, DSpace repositories, and the Everything HTTP server — each with ready-to-copy URL examples.

### Step 5: Open the Server and Browse Your Catalog
Tap your saved server and the catalog opens exactly as its owner organized it — by popularity, series, bookshelves, or languages. Breadcrumbs across the top show where you are, and a single tap takes you back to any level.

A sorting menu beside the search bar lets you reorder any feed by title, date, or file size.

### Step 6: Tap a Book for Details, Then Download
Every book displays its cover, format badge, and file size. Expand any entry to read full descriptions and subject tags provided by the catalog.

Two action buttons sit on the right: **Read now** (the book icon) streams the file and opens it instantly, while **Download** quietly saves it to your bookshelf. Titles you already possess are marked **“Already on your bookshelf”** so you never download duplicates. Supports EPUB, PDF, FB2, and CBZ/CBR comics.

### Step 7: Enjoy Your Book Offline Anytime
The downloaded book arrives safely on your personal bookshelf as a local file — fully equipped for offline reading, text-to-speech voice narration, highlights, and notes. Its card includes a subtle badge showing its source server, and the card menu's **“Where from”** action takes you directly back to that catalog whenever you're ready for the next volume.

> **💡 Pro Tip:** Self-hosting at home? Always use your computer's local LAN IP (e.g. `192.168.1.10`) rather than `localhost`, since Shiori runs on your mobile device. And ensure you include the `/opds` endpoint path.

---

## Frequently Asked Questions

**Does OPDS cost anything to use?**  
No. OPDS is an open, royalty-free standard, and Shiori's library-server features are completely free. Numerous excellent catalogs — including Project Gutenberg — are public and free to browse.

**Do I have to upload my books to any third-party cloud?**  
No. Shiori communicates directly with your own server over your local network or internet connection. None of your books or metadata pass through external sync servers.

**Which file formats can I download from an OPDS catalog?**  
You can download EPUB, PDF, FB2, and CBZ/CBR comic files — whichever supported formats your catalog provides for a given title.

**Can I add more than one catalog at the same time?**  
Yes! You can add as many catalogs as you like. They all appear neatly in your Library Server list, and you can reorder them to keep your favorite servers right at the top.

**What if my library server does not use OPDS?**  
Shiori also connects to Komga and Kavita through their native REST APIs, as well as WebDAV cloud drives, FTP/FTPS servers, S3-compatible object storage (AWS, MinIO, R2), DSpace repositories, and Everything HTTP server.

---

## Every Catalog You Own, in One App

Download **Shiori EPUB Reader**, paste your OPDS URL, and read your whole library — self-hosted or public — from anywhere.
