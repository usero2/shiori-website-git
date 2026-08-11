# Read Your Cloud Bookshelf: Add an S3 Bucket as a Library Server

If you love keeping your ebook collection safely stored in cloud object storage, Shiori gives you the freedom to browse and read it directly. Simply point the app at your bucket address, and your entire library appears as organized, browsable folders ready to stream or download — no complex web servers, no third-party sync apps, and no middlemen. It works natively with **Amazon S3** as well as any service that speaks the S3 standard: **MinIO, Cloudflare R2, Wasabi,** and **DigitalOcean Spaces**.

---

## 1. What Makes an S3 Library Server So Convenient?

S3 object storage has become the global standard for cloud storage because it is fast, durable, and reliable. Shiori communicates with it natively: signing authentication requests securely on your device, displaying your bucket contents in clean folders, and letting you download any EPUB, PDF, or CBZ with a single tap. Your books always remain under your full ownership in your own storage; Shiori simply serves as your personal reader.

## 2. What You Will Need to Get Started

Getting connected takes just a few details:
- A cloud bucket containing your books (EPUB, PDF, or CBZ files).
- The **Bucket Address URL** (for instance, `https://my-books.s3.ap-southeast-1.amazonaws.com/` or a custom MinIO path like `https://minio.example.com/my-books/ebooks/`).
- An **Access Key** and **Secret Key** for private buckets (or leave credentials empty if your bucket is public).

## 3. Complete Privacy — Your Books, Your Storage

Because Shiori establishes a direct, private connection between your phone and your cloud bucket, you maintain absolute control over your digital library. Whether you host a private MinIO server at home on a Raspberry Pi, take advantage of Cloudflare R2's generous free tier with zero egress fees, or store rare volumes in an AWS bucket — the setup process is delightfully identical.

---

## Step-by-Step Guide (4 Steps)

### Step 1: Open Collections → Library Server
Head to the **Collections** tab and scroll down to the **Library Server** section. Tap the **+** button to add a new server. (Any existing servers are safely listed here with sensitive details masked.)

### Step 2: Enter the Bucket URL and Credentials
Paste your **Bucket Address** into the Catalog URL field. Put your **Access Key** in the Username box and your **Secret Key** in the Password box. Shiori intelligently recognizes S3 URLs — the password label automatically switches to **“Secret access key.”** For public buckets, simply leave the login fields empty.

### Step 3: Works with S3, MinIO, R2 and More
The built-in help guide provides handy examples for popular providers: AWS S3, self-hosted MinIO, Cloudflare R2, Wasabi, and DigitalOcean Spaces. Tap **Test connection** to confirm everything works, then tap **Save**.

### Step 4: Browse Folders and Download Your Books
Open the server and your bucket appears as cleanly organized, browsable folders. Tap the **Download** icon on any title to save it to your bookshelf; books you already have will show **“Already on your bookshelf.”** You can also search your entire cloud catalog from the top search bar.

> **💡 Pro Tip:** Running MinIO or a home server on your local network? Use your computer's local LAN IP address (such as `192.168.1.x`) rather than `localhost`, since Shiori runs on your mobile device.

---

## Your Cloud Library, Always in Your Hands

Download **Shiori EPUB Reader**, connect your S3, MinIO, or Cloudflare R2 bucket, and enjoy your personal cloud collection anywhere.
