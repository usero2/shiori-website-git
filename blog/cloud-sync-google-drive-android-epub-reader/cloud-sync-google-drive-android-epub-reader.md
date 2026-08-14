# Your Library, on Every Device — Cloud Sync with Google Drive, End to End

You highlight a memorable quote on the train, rate a book before bed, and read halfway through chapter nine on your tablet. Then a phone is replaced or upgraded, and every one of those precious reading moments vanishes. **Cloud Sync** in Shiori is designed to prevent that heartbreak: your books, your reading progress, your highlights, notes, ratings, and stats are kept safe inside *your own* Google Drive.

Not on our servers — Shiori operates completely serverless. This guide walks you through every part of it: signing in, what each toggle synchronizes, how book files differ from settings, and how multi-device synchronization keeps everything in perfect harmony.

> **The quick summary:** Sign in with Google, keep Auto Sync enabled, and tap *Sync to Cloud* on any book you want backed up.

---

## 1. Where Your Data Actually Goes

Shiori requests only two scoped permissions: `drive.file` and `drive.appdata`. Neither can access your personal files outside what Shiori creates. Your data is stored cleanly across two locations:

| Location | What Lives There | Visible in Google Drive? |
| --- | --- | --- |
| **Shiori Library** | Your book files (EPUB, KEPUB, CBZ, PDF, FB2) | ✅ Yes — an ordinary folder you can browse and manage |
| **Hidden app folder** | Settings, bookmarks, highlights, notes, ratings, reading stats, AI chats, covers | ❌ No — Drive's private per-app storage, kept secure |

Both count against your Google account's storage quota, and book files are the only part large enough to notice.

> **Worth knowing:** only books *uploaded from the app* appear in Shiori's cloud list. If you drop an EPUB into the "Shiori Library" folder by hand from a PC, the app will not see it — `drive.file` deliberately limits access to files created through the app.

## 2. What You Will Need

- **A Google account** — use the same account across all your reading devices.
- **Free Google Drive space** — enough storage for the books you choose to upload (settings & notes take minimal space).
- **An internet connection** — Wi-Fi is recommended when uploading large libraries for the first time.

---

## Step-by-Step Guide (7 Steps)

### Step 1: Sign In With Google
Open **Settings → Cloud Sync (Google Drive)**. Tap **Sign in with Google** and choose your account. There is no Shiori account to register and no extra password to remember.

### Step 2: Explore the Cloud Sync Hub
Once connected, the screen displays four organized sections: your **Google Account**, **Synced devices**, the **Everything** card (for manual backup/restore and Drive repair tools), and **Auto Sync**.

### Step 3: Back Up Everything in One Tap
Tap **Backup setting**. Before anything uploads, Shiori shows an explicit inventory of what will be saved: reader settings, voice narration options, Memory items (highlights, notes, bookmarks, AI chats), text tools, custom covers, fonts, and library servers.

### Step 4: Enable Auto Sync and Enjoy Seamless Reading
Keep the **Auto Sync** toggles enabled for bookmarks, highlights, reading positions, collections, and library servers. Whenever you leave the reader, your progress and thoughts are automatically updated in the cloud.

### Step 5: Upload Book Files to Cloud on Demand
To save mobile data, book files are uploaded only when you choose. Long-press any book on your bookshelf and tap **Sync to Cloud**. Synced books receive a cloud badge on their cover.

### Step 6: Browse and Download from the Cloud List
Tap the **Cloud Sync** row on your bookshelf to browse all uploaded titles. You can download books directly to your current device with all highlights, notes, and reading positions restored instantly.

### Step 7: Add a Second Device & Keep Reading
Sign in with the same Google account on your tablet or secondary phone. Open **Synced devices** to view all connected models and sync timestamps. Reader settings remain individual per device so phones and tablets retain their optimal font sizes.

---

## Conflict Resolution: How Multi-Device Sync Works

| Data Type | Upload | Download | Conflict Resolution |
| --- | --- | --- | --- |
| **Reading position & finished mark** | Auto | Auto | Most recently read device wins |
| **Bookmarks, highlights, notes** | Auto | Auto | Merged; all unique notes are preserved |
| **Reading & audio statistics** | Auto | Auto | Merged; no reading session is ever dropped |
| **Book ratings** | Auto | Auto | Newest rating wins (prompts if ambiguous) |
| **Collections & Want to Read** | Auto | Auto | Matched by shelf name seamlessly |
| **Reader & TTS settings** | Auto | Manual | Kept per device (use *Restore here* to copy) |
| **Incognito books** | Never | Never | Completely private, never uploaded |

---

## Frequently Asked Questions

**Does Shiori upload all my books automatically?**  
No. Book files are uploaded individually only when you long-press a book and choose **Sync to Cloud**. Smaller metadata — reading progress, notes, bookmarks, highlights, and stats — sync automatically by default.

**Can Shiori access or read other files in my Google Drive?**  
No. Shiori requests strictly restricted permissions (`drive.file` and `drive.appdata`), ensuring it can only view and manage files that Shiori itself created.

**Are books read in Incognito mode synced to the cloud?**  
Never. Incognito mode is fully isolated: books, reading positions, bookmarks, notes, and session history remain strictly local on your device.

**What happens to my Drive data if I sign out in Shiori?**  
Signing out merely disconnects the current device. All your files and backups remain safely stored in your Google Drive, ready to reconnect whenever you sign in again.

---

## Your Library, Anywhere You Go

Download **Shiori EPUB Reader**, enable Google Drive Cloud Sync, and enjoy seamless reading across all your Android devices.
