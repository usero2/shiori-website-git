# How to Connect Komga to Shiori on Android (with Covers and Progress Sync)

If you run **Komga** at home, your whole library already lives on your own server — but reading it on your phone usually means either a browser tab or an app that shows you a bare list of filenames with no covers.

Shiori connects to Komga directly. Done the right way, you get your covers, your authors, your series structure, and your reading position synced back to the server. This guide shows the exact steps, and — more importantly — which of Shiori's three Komga options you should actually pick.

## Komga, OPDS, or Komga API? Pick the right one first

When you add a server, Shiori offers several quick-fill options, and three of them mention Komga. They are not equivalent:

* **Komga** — connects over **OPDS v1**. Browsing and downloading only.
* **Komga v2** — connects over **OPDS v2**. Also browsing and downloading only.
* **Komga API** — connects over Komga's **native REST API**. This is the one that adds **covers, full book details, and reading-progress sync**.

OPDS is a generic catalog standard, so it works with almost any server — Calibre, Calibre-Web, Standard Ebooks, Project Gutenberg. That generality is also its limit: it carries just enough information to list and download a file.

Komga's own API knows about series, metadata and read progress, so Shiori can show you a real library instead of a file list, and tell Komga where you stopped reading.

**Use "Komga API" unless you have a specific reason not to.**

## What you need

* Komga running and reachable on your network
* Your Komga **username and password** (or an API key, if you prefer)
* Your server's **LAN address** — not `localhost`
* Shiori installed on your Android device

> **Why not `localhost`?** `localhost` means *this device*. Typed into your phone, it points at the phone, not at your server. You need the address your server has on your network — something like `192.168.1.33`.

## Step 1 — Open the Library Server list

In Shiori, tap **Collections** in the bottom navigation bar. Scroll to the **Library Server** section and tap the **+** button on its right.

![The Collections tab in Shiori, showing the Library Server section with its add button](01-collections-library-server.jpg)

This is the same place every online library lives — OPDS catalogs, Kavita, S3 buckets, WebDAV shares — so once Komga is added it sits alongside the rest of your sources.

## Step 2 — Meet the Add Library Server screen

The **Add Library Server** screen has a name field, a catalog URL, a row of quick-fill chips, and an optional sign-in.

![The Add Library Server screen showing the quick-fill chips and the supported servers help text](02-add-library-server-form.jpg)

Scroll down and Shiori documents each supported server type inline, including the exact URL shape it expects. It is worth reading once — it is the same information this article is built on.

## Step 3 — Enter your server address, then tap "Komga API"

The order matters here. The hint above the chips says *"type the host, then tap your server"*:

1. Type just your server's address into the **Catalog URL** field — for example `192.168.1.33`
2. Then tap the **Komga API** chip

Shiori wraps what you typed into the full URL Komga expects:

```
http://192.168.1.33:25600/api/v1
```

`25600` is Komga's default port. If you changed it, correct the port — the screenshot below shows `25601`, because the server used for this guide runs on a non-default port.

Now fill in **Sign-in**: your Komga username and password. (Alternatively, leave the username blank and paste a Komga API key into the second field instead — Shiori accepts either.)

![The completed form with the Komga API URL and sign-in filled in](03-komga-api-url-and-signin.jpg)

Give the server a name you will recognise at the top, and pick an icon if you like.

## Step 4 — Test the connection before saving

Tap **Test connection**. This is the step worth not skipping: it tells you whether the address, port and credentials are all correct *before* you commit them.

![Test connection reporting: Connected — Komga (REST API)](04-test-connection-connected.jpg)

You want to see:

```
Connected — Komga (REST API)
```

That message confirms two separate things — that Shiori reached the server, and that it detected the **native REST API** rather than falling back to a plain catalog. If it says something else, you are not getting covers and progress sync.

If the test fails, work through these in order:

* **Timed out / cannot reach** — wrong IP, or the phone is on a different network than the server. Check both are on the same Wi-Fi.
* **Unauthorized** — username or password is wrong. Komga usernames are usually the full email address.
* **Connected, but not as REST API** — the `/api/v1` part of the URL is missing or the port is wrong.

Then tap **Save** in the top-right corner.

## Step 5 — Your server appears in the list

Komga now sits in your **Library Server** list with a padlock, showing that credentials are stored for it.

![The saved Komga server in the Library Server list with its URL masked](05-komga-in-library-server-list.jpg)

Notice that Shiori masks the server address in this list. That is deliberate — it keeps your internal network layout off the screen when you hand someone your phone or share a screenshot.

## Step 6 — Browse your library

Tap the server to open it. You get your Komga libraries, a search box that queries the catalog itself, and a sort control.

![Browsing the Komga catalog, showing the library and the catalog search box](06-browse-komga-catalog.jpg)

Breadcrumbs across the top track where you are, so you can jump back several levels in one tap instead of pressing Back repeatedly.

## Step 7 — Covers, authors and one-tap reading

Open a library and you can see what the native API buys you:

![The book list showing cover art, titles, authors, format and size](07-books-with-covers-and-authors.jpg)

Every book arrives with its **cover art**, **title**, **author**, **format** and **file size** — pulled straight from Komga's metadata. Each row has two actions:

* **Read** (the book icon) — start reading
* **Download** (the cloud icon) — keep a copy on the device for offline reading

Because you connected through the REST API, your reading position travels back to Komga. Stop halfway through a chapter on your phone, and Komga knows — so the next device you pick up starts in the right place.

## Tips

* **Downloaded books are yours offline.** Tap the cloud icon before a flight or a commute through poor signal; the book lands in your normal bookshelf.
* **Search searches the server, not just what is on screen.** The search box queries Komga directly, which matters once your library outgrows a few screens of scrolling.
* **Reading away from home?** These steps use a LAN address, which only works on your own network. Reaching Komga from outside needs a VPN back to your network or a reverse proxy with HTTPS — both are worth setting up properly rather than exposing Komga directly to the internet.
* **Adding a second server is the same flow.** Kavita, Calibre-Web, OPDS catalogs, WebDAV and S3 all use this screen, and Shiori detects the type for you.

## Related reading

* [How to Sync Shiori with Kavita (OPDS & REST API)](/blog/how-to-setup-kavita-rest-api/) — the same idea for a Kavita server
* [How to Connect an OPDS Catalog to Your Android E-Reader](/blog/connect-opds-catalog-android-ereader/) — the generic catalog route
* [Read Your Cloud Bookshelf: Add an S3 Bucket as a Library Server](/blog/s3-bucket-library-server-android-epub/) — for object storage instead of a server

## Your server, your library, your phone

Komga keeps your books under your control on hardware you own. Connecting it to Shiori through the native API means you do not give that up on mobile — you get the covers, the metadata and the reading position, without handing your library to anyone else's cloud.

Download Shiori, point it at your Komga server, and pick up where you left off.
