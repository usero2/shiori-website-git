document.addEventListener('DOMContentLoaded', () => {
  // --- Translation i18n Dictionary ---
  const translations = {
    en: {
      // Navbar
      "nav-home": "Home",
      "nav-download": "Download",
      "nav-blog": "Blog",
      
      // Footer
      "footer-desc": "An EPUB Reader for Android featuring premium, flexible reading and Text-to-Speech experiences.",
      "footer-app": "Application",
      "footer-legal": "Legal Info",
      "footer-privacy": "Privacy Policy",
      "footer-terms": "Terms of Service",
      "footer-blog": "Blog",
      
      // Home Hero
      "hero-vision-tag": "VISION",
      "hero-vision-quote": "\"From Reading to Learning.\"",
      "hero-tag": "EPUB Reader for Android",
      "hero-title": "Shiori <br><span class=\"text-gradient\">ePub Reader</span>",
      "hero-sub": "Experience next-level reading and listening. Designed for readers with automatic multi-language Text-to-Speech and in-app translation.",
      "hero-get-play": "▶ Get it on Google Play",
      
      // Vision Section
      "vision-sec-tag": "Our Vision",
      "vision-sec-title": "\"From Reading to Learning.\"",
      "vision-sec-desc": "Shiori bridges passive reading and active learning. With automatic multi-language Text-to-Speech, instant in-app translation, customizable word replacement rules, and smart AI tools, every book becomes a portal to deeper understanding.",
      "footer-vision": "— From Reading to Learning.",
      
      // Permanent Knowledge Section
      "know-tag": "PERMANENT KNOWLEDGE",
      "know-title": "Your Reading Knowledge <span>Stays With You</span>",
      "know-sub": "Books may come and go, but your knowledge shouldn't.",
      "know-hero-badge": "🔒 Saved Beyond Books",
      "know-intro": "Shiori preserves everything you create while reading, even if the original book is removed from your device, returned to a library, or no longer available.",
      "know-data-head": "Your personal reading data remains safely stored, including:",
      "know-item-1": "Bookmarks",
      "know-item-2": "Notes",
      "know-item-3": "Highlights",
      "know-item-4": "AI Summaries",
      "know-item-5": "AI Conversations",
      "know-item-6": "Reading Progress & History",
      "know-outro": "This means you can always revisit the ideas, insights, and knowledge you've collected without needing the original book.",
      "know-card1-title": "Perfect for Library Books",
      "know-card1-desc": "Borrowed books eventually expire or must be returned. Normally, that also means losing access to your reading context. With Shiori, your personal notes and AI-generated insights remain available even after the borrowed book is gone. You keep your learning, not just your reading progress.",
      "know-card2-title": "Your Data, Your Knowledge",
      "know-card2-desc": "Shiori stores your reading data, not the book itself. Even if you delete a book to save storage or remove it after finishing, your personal knowledge base remains intact—ready whenever you need to review an idea, remember an important quote, or revisit an AI summary.",
      "know-motto": "\"Because great books may leave your library, but the knowledge you gained from them shouldn't.\"",
      
      // Home Screenshots
      "ss-tag": "App Screenshots",
      "ss-title": "Explore <span>Shiori</span> Interface",
      "ss-sub": "Real screenshots of Shiori EPUB Reader on Android showing its clean, premium, and minimalist layout.",
      
      // Home Features
      "feat-tag": "Key Features",
      "feat-title": "Features Built for <span>Every Reader</span>",
      "feat-sub": "We carefully designed and built these features to maximize your reading productivity.",
      "feat-1-title": "Smart Library",
      "feat-1-desc": "Manage your EPUB collection with 3 view modes (Thumbnail, List, Detail). Tracks reading progress automatically.",
      "feat-2-title": "Smooth EPUB Reader",
      "feat-2-desc": "Infinite scroll navigation with a searchable chapter list. Resumes to the exact paragraph — even where TTS left off.",
      "feat-3-title": "Bookmarks, Highlights & Notes",
      "feat-3-desc": "Highlight text in multiple colors, attach notes, and bookmark paragraphs with faint visual outlines.",
      "feat-4-title": "Floating Controls",
      "feat-4-desc": "Floating TTS overlay works over any app. Pinch to resize, snap to edge, and listen on the go.",
      "feat-5-title": "Smart Text Replacement",
      "feat-5-desc": "Modify words before TTS playback. Supports 5,000+ entries and regular expressions to fix pronunciation.",
      "feat-6-title": "Select & Translate",
      "feat-6-desc": "Tap any word to translate (Google Translate popup), copy, start TTS from selection, or add to rules instantly.",
      
      // Home Pro Features
      "pro-tag": "Deep Dive Features",
      "pro-title": "Deep Dive into <span>Pro Features</span>",
      "pro-sub": "Features built to give you ultimate control over your reading experience.",
      "pro-tts-title": "Advanced TTS & Language Control",
      "pro-tts-sub": "Precise playback control with smart multi-language automatic voice switching.",
      "pro-tts-1": "🎯 <strong>Auto-detect Script:</strong> Auto-detects script of 6 languages (TH, EN, ZH, JA, KO, DE) and switches voices seamlessly per paragraph.",
      "pro-tts-2": "▲▼ <strong>Priority Ordering:</strong> Resolve shared script conflicts (Latin for EN/DE, Han for ZH/JA) by dragging script priorities.",
      "pro-tts-3": "⇅ <strong>Auto-Scroll & Highlight:</strong> Auto-scrolls reader view to keep up with the currently read paragraph.",
      "pro-rep-title": "Dual-Mode Text Replacement",
      "pro-rep-sub": "Fix pronunciation issues or visual layouts independently with advanced rule configuration.",
      "pro-rep-1": "🎨 <strong>Visual Replacement:</strong> Replace matching words visually in the reader and for TTS reading alike.",
      "pro-rep-2": "🔊 <strong>TTS Replacement:</strong> Replace words only when sent to TTS engine, leaving original text visible on the page.",
      "pro-rep-3": "⚡ <strong>Import/Export System:</strong> Fast rule searching, Regex support, and import/export via tab-separated text files.",
      "pro-float-title": "Smart Floating Panel",
      "pro-float-sub": "Keep listening in the background or when screen is off, with interactive floating controls.",
      "pro-float-1": "🤏 <strong>Pinch to Resize:</strong> Adjust the text box viewport without scaling the reading font size.",
      "pro-float-2": "🧲 <strong>Snap to Edge:</strong> Drags >50% off-screen snap to 15% visibility, keeping screen clear for other apps.",
      "pro-float-3": "🔄 <strong>Double-Tap to Center:</strong> Quickly double-tap the panel to animate it back to center of the screen.",
      "pro-vis-title": "Advanced Visual Customization",
      "pro-vis-sub": "Overcome rendering issues and custom styles embedded in book files.",
      "pro-vis-1": "🔤 <strong>Force System Font:</strong> Force standard device font (like Noto Thai) for stable Thai text reading.",
      "pro-vis-2": "🚫 <strong>Disable EPUB CSS:</strong> Discard publisher stylesheets and format the layout using the app's clean defaults.",
      "pro-vis-3": "🌈 <strong>Remove Font Color:</strong> Strips hardcoded colors to maintain eye comfort in Dark or Sepia themes.",
      
      // Home Advanced TTS Card
      "card-tts-title": "Advanced Multi-language Text-to-Speech",
      "card-tts-desc": "Auto-detects Thai, English, Chinese, Japanese, Korean, and German script within the same paragraph and switches voices seamlessly. Tune speed, pitch, and voice per language. Works offline with your device's native TTS engine.",
      
      // Home Google Drive Cloud Sync Card
      "card-sync-title": "Google Drive Cloud Sync",
      "card-sync-sub": "(Google Drive Cloud Sync)",
      "card-sync-desc": "Optional cloud sync. Save library books, reading progress, and text replacement lists directly to your private Google Drive. 100% secure: we have no database server and cannot access your data.",
      "card-sync-1": "✓ Direct secure connection between app and Google Drive",
      "card-sync-2": "✓ Sync across all your personal Android devices",
      "card-sync-3": "✓ Data stays inside your own storage control",
      
      // Home Blog Section
      "home-blog-tag": "Latest Articles",
      "home-blog-title": "Tips, Guides & <span>Insights</span>",
      "home-blog-sub": "Discover how to customize Shiori, setup library servers, and get the most out of your reading experience.",
      
      // Home CTA
      "cta-title": "Ready to Elevate Your Reading?",
      "cta-desc": "Download Shiori EPUB Reader for free on Google Play Store.",
      "cta-play": "▶ Get it on Google Play",
      
      // Video section
      "video-tag": "Video Guides",
      "video-title": "Learn How to Use <span>Shiori</span>",
      "video-sub": "Watch our step-by-step video tutorials to master Shiori's advanced features and speech options.",
      
      // Download page
      "dl-tag": "Get Shiori ePub Reader",
      "dl-title": "Download <span>Shiori EPUB Reader</span>",
      "dl-sub": "Choose your preferred installation method. Supports Android 8.0 (API 26) and above. 100% ad-free during reading.",
      "dl-card-play-title": "Google Play Store",
      "dl-card-play-desc": "Recommended. Installs and updates automatically. Safe and verified by Google Play Protect.",
      "dl-card-play-btn": "Get it on Play Store",
      
      // Blog list
      "blog-tag": "Official Blog",
      "blog-title": "Blog &amp; <span>Updates</span>",
      "blog-sub": "Read the latest announcements, tutorials, guides, and version releases.",
      "blog-p1-date": "📅 June 29, 2026",
      "blog-p1-cat": "🏷️ Announcements",
      "blog-p1-title": "Introducing Shiori EPUB Reader for Android",
      "blog-p1-desc": "Discover Shiori (栞), an offline-first EPUB reader designed to elevate your digital reading experience with advanced script-switching TTS and customizable text rules...",
      "blog-p1-btn": "Read Full Article",
      "blog-p2-date": "📅 Coming Soon",
      "blog-p2-cat": "🏷️ Tips &amp; Tricks",
      "blog-p2-title": "Setting Up TTS Engine for Natural Pronunciation",
      "blog-p2-desc": "A step-by-step guide to installing high-quality language voice files in Android system settings and optimizing reading speeds in Shiori...",
      "blog-p2-status": "Coming Soon",
      
      // Blog Post 3
      "blog-p3-date": "📅 July 17, 2026",
      "blog-p3-cat": "🏷️ E-Books",
      "blog-p3-title": "5 Best Sites to Download Free EPUB Books",
      "blog-p3-desc": "Looking for new books to read? Here are the top websites where you can find high-quality, free, and legal EPUB files.",
      
      // Blog Post 4
      "blog-p4-date": "📅 July 17, 2026",
      "blog-p4-cat": "🏷️ Guides",
      "blog-p4-title": "How to Sync Shiori with Kavita (OPDS & REST API)",
      "blog-p4-desc": "Stream your digital library and sync your reading progress seamlessly by connecting Shiori EPUB Reader to your self-hosted Kavita server.",
      
      // Blog Post 5
      "blog-p5-date": "📅 July 19, 2026",
      "blog-p5-cat": "🏷️ Guides",
      "blog-p5-title": "How to Import Custom Fonts into Shiori",
      "blog-p5-desc": "Personalize your reading experience by importing your favorite font files and assigning custom typography settings for different languages.",
      
      // Blog Post 6
      "blog-p6-date": "📅 July 22, 2026",
      "blog-p6-cat": "🏷️ Features",
      "blog-p6-title": "How to Translate EPUB to Multiple Languages Simultaneously",
      "blog-p6-desc": "Learn how to use Shiori's advanced multi-language translation panel to translate paragraphs into multiple target languages at once.",
      
      // Blog Post 7
      "blog-p7-date": "📅 July 23, 2026",
      "blog-p7-cat": "🏷️ Full Guide",
      "blog-p7-title": "Shiori Complete Feature Guide: All 19 Capabilities Explained",
      "blog-p7-desc": "Explore the complete breakdown of Shiori EPUB Reader's features, from multi-language TTS and AI translation to smart PDFs, CBZ OCR, and Google Drive cloud sync.",

      // Blog Post 8
      "blog-p8-date": "📅 August 2, 2026",
      "blog-p8-cat": "🏷️ Insights & Stats",
      "blog-p8-title": "Track Your Reading Journey with Book Timeline & Reading Progress",
      "blog-p8-desc": "Learn how Shiori's Book Timeline and Insights feature lets you track reading velocity, time spent, and visual progress curves for every book.",

      // Blog Post 9
      "blog-p9-date": "📅 August 2, 2026",
      "blog-p9-cat": "🏷️ Reading Experience",
      "blog-p9-title": "Read EPUB Books Without Turning Pages: The Power of Infinite Scroll",
      "blog-p9-desc": "Discover how Shiori EPUB Reader's Infinite Scroll feature transforms ebook reading into one smooth, continuous, distraction-free document experience.",

      // Blog Post 10
      "blog-p10-date": "📅 August 2, 2026",
      "blog-p10-cat": "🏷️ Calibre Integration",
      "blog-p10-title": "Wirelessly Send Books from Calibre to Your Android Device",
      "blog-p10-desc": "Learn how to wirelessly transfer EPUB ebooks from Calibre on your computer to Shiori EPUB Reader on Android over local Wi-Fi without USB cables.",

      // Blog Post 11
      "blog-p11-date": "📅 August 3, 2026",
      "blog-p11-cat": "🏷️ Reading Habits",
      "blog-p11-title": "Why Tracking Your Reading Statistics Can Help You Read More Books",
      "blog-p11-desc": "Discover how tracking reading velocity, total time spent, and sharing beautiful milestone cards in Shiori builds consistent reading habits.",

      // Blog Post 12
      "blog-p12-date": "📅 August 11, 2026",
      "blog-p12-cat": "🏷️ Reading Experience",
      "blog-p12-title": "How to Use the E-Ink Theme for EPUB Reading on Android",
      "blog-p12-desc": "Turn Shiori into a paper-like, high-contrast, distraction-free reader — pure black on white, animations off, applied app-wide. Perfect for Onyx Boox and e-paper devices.",

      // Blog Post 13
      "blog-p13-date": "📅 August 11, 2026",
      "blog-p13-cat": "🏷️ Reading Experience",
      "blog-p13-title": "How to Highlight Text and Take Notes in an Android EPUB Reader",
      "blog-p13-desc": "Highlight passages in eight colors, attach notes, and find every highlight and note in one place — the Memory tab in Shiori.",

      // Blog Post 14
      "blog-p14-date": "📅 August 11, 2026",
      "blog-p14-cat": "🏷️ Reading Experience",
      "blog-p14-title": "The Two-Line Reader Top Bar: Every Action, One Tap Away",
      "blog-p14-desc": "The experimental two-line top bar puts the full book title on top and every reading action in one scrollable row below — nothing hidden behind an overflow menu.",

      // Blog Post 15
      "blog-p15-date": "📅 August 11, 2026",
      "blog-p15-cat": "🏷️ Library Servers",
      "blog-p15-title": "Add an S3 Bucket as a Library Server (AWS S3, MinIO, R2)",
      "blog-p15-desc": "Connect any S3-compatible bucket — AWS S3, MinIO, Cloudflare R2, Wasabi or DigitalOcean Spaces — then browse folders and download EPUBs straight to your device.",

      // Blog Post 16
      "blog-p16-date": "📅 August 11, 2026",
      "blog-p16-cat": "🏷️ Library & Organization",
      "blog-p16-title": "Organize Your Ebooks with Collections",
      "blog-p16-desc": "Create, rename, recolor and reorder shelves, add or remove books, and filter your whole library by reading status — a complete guide to Collections.",

      // Blog Post 17
      "blog-p17-date": "📅 August 14, 2026",
      "blog-p17-cat": "🏷️ Library Servers",
      "blog-p17-title": "How to Connect an OPDS Catalog to Your Android E-Reader",
      "blog-p17-desc": "Find the OPDS URL for Calibre, Calibre-Web, Komga, Kavita or a public catalog, test the connection, then browse and download EPUBs straight to your bookshelf.",

      // Blog Post 18
      "blog-p18-date": "📅 August 15, 2026",
      "blog-p18-cat": "🏷️ Reading Experience",
      "blog-p18-title": "Horizontal Scrolling EPUBs: Read a Japanese Picture Scroll",
      "blog-p18-desc": "Download the free emakimono sample and unroll a twelfth-century handscroll sideways — plus how Horizontal scroll mode handles 縦書き vertical text.",

      // Blog Post 19
      "blog-p19-date": "📅 August 15, 2026",
      "blog-p19-cat": "🏷️ Reading Experience",
      "blog-p19-title": "Text Replacement &amp; Regex: Rewrite What You Read and Hear",
      "blog-p19-desc": "Every flow of visual and TTS replacement rules — plus a cookbook of 16 regex patterns, per-voice-language groups and the safety checks that stop a bad pattern.",

      // Blog Post 20
      "blog-p20-date": "📅 August 15, 2026",
      "blog-p20-cat": "🏷️ Sync & Backup",
      "blog-p20-title": "Cloud Sync with Google Drive: Your Library on Every Device",
      "blog-p20-desc": "From sign-in to a second device — what every auto-sync switch moves, why book files are different from settings, and which side wins when two devices disagree.",

      // Blog Post 21
      "blog-p21-date": "📅 August 15, 2026",
      "blog-p21-cat": "🏷️ Text-to-Speech",
      "blog-p21-title": "Multi-Language Text-to-Speech: One Book, Every Voice",
      "blog-p21-desc": "Why one voice is never enough for a real book — how Shiori switches voice mid-sentence by script, and how priority settles 漢字 and Latin between languages.",

      // Blog Post 22
      "blog-p22-date": "📅 August 15, 2026",
      "blog-p22-cat": "🏷️ Reading Experience",
      "blog-p22-title": "Every Button on the Reader Screen: A Touch-by-Touch Guide",
      "blog-p22-desc": "Nine numbered targets on the top bar, seven on the bottom, and the long-press menu most readers never find — with the screen each touch opens.",

      // Blog Post 23
      "blog-p23-date": "📅 August 15, 2026",
      "blog-p23-cat": "🏷️ Import & Transfer",
      "blog-p23-title": "Book Drop: Send Books to Your Phone Over Wi-Fi",
      "blog-p23-desc": "Drag EPUBs onto a page your phone serves on your own network — no cable, no cloud account, nothing to install on the computer.",

      // Blog Post 24
      "blog-p24-date": "📅 August 19, 2026",
      "blog-p24-cat": "🏷️ Library Servers",
      "blog-p24-title": "How to Connect Komga to Shiori on Android (Covers + Progress Sync)",
      "blog-p24-desc": "Connect your self-hosted Komga server to Shiori on Android using the native REST API to get cover art, full book metadata and reading-progress sync instead of a bare file list.",

      // Blog Post 25
      "blog-p25-date": "📅 August 22, 2026",
      "blog-p25-cat": "🏷️ Reading Experience",
      "blog-p25-title": "The EPUB Is Fine, the Styling Is Broken: Take Back Control on Android",
      "blog-p25-desc": "Unreadable dark text, wrong fonts, or stretched lines? Learn how Shiori's 4 style overrides easily overrule broken publisher stylesheets.",

      // Blog Post 26
      "blog-p26-date": "📅 August 23, 2026",
      "blog-p26-cat": "🏷️ Reading Experience",
      "blog-p26-title": "Read Footnotes & In-Book Links Without Losing Your Place",
      "blog-p26-desc": "Stop losing your reading position in academic and annotated EPUBs. Preview footnotes in a bottom pop-up card and verify external links safely.",

      // Blog Post 27
      "blog-p27-date": "📅 August 23, 2026",
      "blog-p27-cat": "🏷️ Text-to-Speech",
      "blog-p27-title": "Read Along with Karaoke Highlighting in Shiori EPUB Reader",
      "blog-p27-desc": "Boost reading focus and language learning with synchronized word and paragraph text-to-speech highlighting. Fully customizable colors and opacity.",

      // Blog Post 28
      "blog-p28-date": "📅 August 23, 2026",
      "blog-p28-cat": "🏷️ Text-to-Speech",
      "blog-p28-title": "Read Selected Text Aloud: Check Pronunciation One Sentence at a Time",
      "blog-p28-desc": "Check foreign words and tricky sentences instantly. Long-press to select text, tap Aloud, and hear it spoken once without losing your reading place or interrupting continuous playback.",

      // Feature Chips
      "chip-f1": "1. Formats",
      "chip-f2": "2. Reading",
      "chip-f3": "3. Bookmarks",
      "chip-f4": "4. TTS Voice",
      "chip-f5": "5. Word Rules",
      "chip-f6": "6. Translation",
      "chip-f7": "7. On-device AI",
      "chip-f8": "8. Comics (CBZ)",
      "chip-f9": "9. Reflow PDF",
      "chip-f10": "10. Insights",
      "chip-f11": "11. Memory",
      "chip-f13": "13. Library Server",
      "chip-f14": "14. Cloud Sync",
      "chip-f18": "18. Privacy"
    },
    th: {
      // Navbar
      "nav-home": "หน้าแรก",
      "nav-download": "ดาวน์โหลด",
      "nav-blog": "บล็อก",
      
      // Footer
      "footer-desc": "แอปพลิเคชันสำหรับอ่านไฟล์ EPUB บนระบบปฏิบัติการ Android ที่มีฟังก์ชันการฟังแบบพรีเมียมและยืดหยุ่นที่สุด",
      "footer-app": "แอปพลิเคชัน",
      "footer-legal": "ข้อมูลกฎหมาย",
      "footer-privacy": "นโยบายความเป็นส่วนตัว",
      "footer-terms": "ข้อกำหนดการใช้งาน",
      "footer-blog": "บล็อกบทความ",
      
      // Home Hero
      "hero-vision-tag": "วิสัยทัศน์",
      "hero-vision-quote": "\"จากการอ่าน สู่การเรียนรู้\"",
      "hero-tag": "ตัวอ่านไฟล์ EPUB บนระบบ Android",
      "hero-title": "Shiori <br><span class=\"text-gradient\">ePub Reader</span>",
      "hero-sub": "สัมผัสประสบการณ์การอ่านและการฟังที่เหนือระดับ ออกแบบเป็นพิเศษสำหรับผู้อ่านชาวไทย พร้อมฟังก์ชัน Text-to-Speech สลับภาษาอัตโนมัติ และระบบแปลภาษาในแอป",
      "hero-get-play": "▶ Get it on Google Play",
      
      // Vision Section
      "vision-sec-tag": "วิสัยทัศน์ของเรา",
      "vision-sec-title": "\"จากการอ่าน สู่การเรียนรู้\"",
      "vision-sec-desc": "Shiori เปลี่ยนการอ่านทั่วไปให้เป็นการเรียนรู้ที่ลึกซึ้ง ด้วยระบบอ่านออกเสียงหลายภาษาอัตโนมัติ การแปลภาษาฉับไว กฎการแทนที่คำอัจฉริยะ และระบบ AI ช่วยสรุปเนื้อหา เพื่อให้ทุกเล่มที่คุณอ่านกลายเป็นขุมทรัพย์แห่งความรู้",
      "footer-vision": "— จากการอ่าน สู่การเรียนรู้",
      
      // Permanent Knowledge Section
      "know-tag": "ขุมทรัพย์ความรู้ถาวร",
      "know-title": "ความรู้จากการอ่าน <span>จะอยู่กับคุณตลอดไป</span>",
      "know-sub": "หนังสืออาจผ่านเข้ามาและจากไป แต่ความรู้ของคุณต้องคงอยู่ตลอดไป",
      "know-hero-badge": "🔒 บันทึกถาวรแม้หนังสือถูกลบหรือคืน",
      "know-intro": "Shiori ช่วยปกป้องและบันทึกทุกสิ่งที่คุณสร้างขึ้นระหว่างการอ่าน ไม่ว่าหนังสือเล่มนั้นจะถูกลบออกจากเครื่อง คืนห้องสมุด หรือไม่มีอยู่อีกต่อไป",
      "know-data-head": "ข้อมูลการอ่านส่วนตัวของคุณจะถูกจัดเก็บไว้อย่างปลอดภัย ครอบคลุม:",
      "know-item-1": "บุ๊กมาร์ก (Bookmarks)",
      "know-item-2": "โน้ตบันทึก (Notes)",
      "know-item-3": "ข้อความไฮไลท์ (Highlights)",
      "know-item-4": "สรุปเนื้อหาด้วย AI (AI Summaries)",
      "know-item-5": "ประวัติสนทนากับ AI (AI Conversations)",
      "know-item-6": "ประวัติและสถิติการอ่าน (Reading Progress & History)",
      "know-outro": "นั่นหมายความว่า คุณสามารถย้อนกลับมาทบทวนความคิด ข้อคิด และความรู้ที่สะสมไว้ได้เสมอ โดยไม่จำเป็นต้องมีหนังสือเล่มเดิมอีกต่อไป",
      "know-card1-title": "ตอบโจทย์หนังสือยืมและห้องสมุด",
      "know-card1-desc": "หนังสือที่ยืมมาวันหนึ่งย่อมหมดเวลาหรือต้องส่งคืน ปกติแล้วนั่นหมายถึงการสูญเสียบันทึกการอ่านทั้งหมดไปด้วย แต่ด้วย Shiori โน้ตส่วนตัวและข้อสรุปจาก AI จะยังคงอยู่แม้หนังสือเล่มนั้นจะคืนไปแล้ว คุณได้เก็บเกี่ยวความรู้อย่างแท้จริง ไม่ใช่แค่สถิติว่าอ่านถึงไหน",
      "know-card2-title": "ข้อมูลของคุณ คือความรู้ของคุณ",
      "know-card2-desc": "Shiori จัดเก็บข้อมูลการเรียนรู้ของคุณ ไม่ใช่ตัวไฟล์หนังสือ แม้คุณจะลบหนังสือเพื่อประหยัดพื้นที่ คลังความรู้ส่วนตัวของคุณก็ยังอยู่ครบถ้วน—พร้อมให้คุณกลับมาทบทวนความคิด จำโควทสำคัญ หรือย้อนดูสรุป AI ได้ทุกเมื่อที่ต้องการ",
      "know-motto": "\"เพราะหนังสือชั้นยอดอาจออกจากชั้นหนังสือของคุณได้ แต่ความรู้ที่คุณได้รับมาจะไม่หายไปไหน\"",
      
      // Home Screenshots
      "ss-tag": "ภาพหน้าจอแอป",
      "ss-title": "ดูหน้าตาแอปพลิเคชัน <span>Shiori</span>",
      "ss-sub": "ภาพหน้าจอการทำงานจริงบนระบบ Android ที่เรียบง่าย สะอาดตา และเน้นความพรีเมียม",
      
      // Home Features
      "feat-tag": "ฟีเจอร์เด่น",
      "feat-title": "ฟีเจอร์เด่นที่ตอบโจทย์ <span>ทุกการอ่าน</span>",
      "feat-sub": "เราคิดค้นและพัฒนาฟีเจอร์ต่าง ๆ ขึ้นมาเพื่อเพิ่มประสิทธิภาพการอ่านของคุณให้ดีที่สุด",
      "feat-1-title": "ชั้นหนังสืออัจฉริยะ (Library)",
      "feat-1-desc": "จัดการคอลเลกชัน EPUB ของคุณด้วยโหมดการดู 3 รูปแบบ (Thumbnail, List, Detail) บันทึกและซิงค์ความคืบหน้าการอ่านโดยอัตโนมัติ",
      "feat-2-title": "ตัวอ่าน EPUB ที่ไหลลื่น",
      "feat-2-desc": "การนำทางแบบ Infinite Scroll พร้อมสารบัญที่ค้นหาบทได้ ย้อนกลับไปยังย่อหน้าล่าสุดอย่างแม่นยำ ปรับแต่งฟอนต์ ธีม และระยะบรรทัดได้ตามต้องการ",
      "feat-3-title": "บุ๊กมาร์ก ไฮไลท์ และโน้ต",
      "feat-3-desc": "ขีดเขียนไฮไลท์ด้วยสีสันหลากหลาย จดบันทึกข้อความสำคัญ และย้อนกลับไปอ่านได้ทุกเมื่อผ่านหน้าแสดงรายการบุ๊กมาร์กทั้งหมด",
      "feat-4-title": "การควบคุมแบบหน้าต่างลอย",
      "feat-4-desc": "หน้าต่างควบคุม TTS แบบลอยตัวที่ย่อขยายขนาดและตรึงไว้ขอบจอได้ ช่วยให้คุณฟังหนังสือเสียงขณะใช้งานแอปพลิเคชันอื่นได้อย่างไร้รอยต่อ",
      "feat-5-title": "การแทนที่คำอัจฉริยะ",
      "feat-5-desc": "แก้คำอ่านที่ผิดเพี้ยนก่อนส่งไปที่โปรแกรมอ่านออกเสียง (TTS) หรือในหน้าอ่านปกติ รองรับการตั้งค่าคำแทนที่มากกว่า 5,000 คำและระเบียบวิธี Regex",
      "feat-6-title": "แตะเลือกและแปลภาษา",
      "feat-6-desc": "เพียงแตะคำใด ๆ เพื่อคัดลอก แปลภาษา (ผ่าน Google Translate ภายในแอป) หรือเลือกเริ่มต้นฟังจุดนี้ รวมถึงนำคำนั้นไปแทนที่ได้ทันที",
      
      // Home Pro Features
      "pro-tag": "เจาะลึกฟีเจอร์เด่น",
      "pro-title": "เจาะลึกฟีเจอร์เด่นระดับ <span>Pro</span>",
      "pro-sub": "ฟังก์ชันที่ออกแบบมาเพื่อยกระดับการจัดการ และมอบอิสระในการอ่านขั้นสูงสุด",
      "pro-tts-title": "การควบคุมและสลับภาษา TTS ขั้นสูง",
      "pro-tts-sub": "ควบคุมการเล่นเสียงได้อย่างแม่นยำ พร้อมการสลับภาษาตามตัวหนังสือแต่ละประเทศอย่างชาญฉลาด",
      "pro-tts-1": "🎯 <strong>Auto-detect Script:</strong> สแกนและแยกชุดคำตามตัวอักษรของ 6 ภาษาหลัก สลับเสียงพูดได้ทันทีในย่อหน้าเดียวกัน",
      "pro-tts-2": "▲▼ <strong>Priority Ordering:</strong> จัดลำดับความสำคัญของภาษาที่ใช้ตัวเขียนร่วมกัน เช่น ภาษาลาติน (อังกฤษ/เยอรมัน) หรือตัวเขียนจีน (จีน/ญี่ปุ่น)",
      "pro-tts-3": "⇅ <strong>Auto-Scroll & Highlight:</strong> เลื่อนหน้าจอและไฮไลท์ย่อหน้าที่กำลังอ่านอัตโนมัติ ติดตามเรื่องราวไม่มีสะดุด",
      "pro-rep-title": "ระบบการแทนที่คำแบบคู่ (Dual Mode)",
      "pro-rep-sub": "แก้ปัญหาการออกเสียงเพี้ยน และสามารถปรับเปลี่ยนหน้าตาตัวหนังสือในการอ่านได้อิสระ",
      "pro-rep-1": "🎨 <strong>Visual Replacement:</strong> แทนที่ตัวหนังสือจริงในหน้าหนังสือและออกเสียงตามคำที่แทนที่ เพื่อแก้คำผิดหรือปรับความคุ้นเคย",
      "pro-rep-2": "🔊 <strong>TTS Replacement:</strong> แทนที่คำเฉพาะเวลากลางเสียงอ่าน (TTS) เท่านั้น แต่ในหน้ากระดาษยังแสดงผลตัวหนังสือดั้งเดิมเหมือนเดิม",
      "pro-rep-3": "⚡ <strong>Import/Export System:</strong> รองรับการค้นหาระดับด่วน, นิพจน์ทั่วไป (Regex), และส่งออกกฎการแทนที่ออกเป็นไฟล์ TSV เพื่อแบ่งปัน",
      "pro-float-title": "หน้าต่างลอยอัจฉริยะ (Floating Panel)",
      "pro-float-sub": "ฟังหนังสืออ่านต่อได้อย่างไร้รอยต่อในขณะปิดหน้าจอ หรือเปิดแอปพลิเคชันอื่นใช้งาน",
      "pro-float-1": "🤏 <strong>Pinch to Resize:</strong> หยิกถ่างหน้าต่างลอยเพื่อขยายขอบเขตการแสดงผลตัวหนังสือ โดยที่ขนาดฟอนต์ไม่เปลี่ยน",
      "pro-float-2": "🧲 <strong>Snap to Edge:</strong> ลากหน้าต่างลอยหลบข้างหน้าจอโดยซ่อนตัว 15% ทันทีที่เกินกึ่งกลาง เพื่อความสะดวกในการใช้งานแอปอื่น",
      "pro-float-3": "🔄 <strong>Double-Tap to Center:</strong> เคาะหน้าต่างลอยเบา ๆ สองครั้งเพื่อเรียกตัวกลับมาจุดกึ่งกลางจออย่างรวดเร็ว",
      "pro-vis-title": "การปรับแต่งดีไซน์ขั้นสูง",
      "pro-vis-sub": "เอาชนะปัญหาการแสดงผลฟอนต์ภาษาไทย และการจัดแต่งที่ไม่สวยงามจากผู้ผลิตหนังสือ",
      "pro-vis-1": "🔤 <strong>Force System Font:</strong> บังคับใช้ฟอนต์ตัวพิมพ์มาตรฐานของเครื่อง (เช่น Noto Thai) เพื่อการอ่านภาษาไทยที่เสถียรที่สุด",
      "pro-vis-2": "🚫 <strong>Disable EPUB CSS:</strong> ปิดรูปแบบดั้งเดิมที่แนบมากับไฟล์หนังสือ แล้วเรียกใช้การกำหนดหน้ากระดาษผ่านแอปแทน",
      "pro-vis-3": "🌈 <strong>Remove Font Color:</strong> ล้างสีฟอนต์ดั้งเดิมเพื่อให้สอดคล้องกับธีมมืด (Dark Mode) หรือธีมซีเปีย (Sepia) เพื่อถนอมสายตา",
      
      // Home Advanced TTS Card
      "card-tts-title": "ระบบการอ่านออกเสียงหลายภาษาขั้นสูง",
      "card-tts-desc": "ระบบตรวจจับภาษาอัตโนมัติ (ไทย, อังกฤษ, จีน, ญี่ปุ่น, เกาหลี, เยอรมัน) ภายในย่อหน้าเดียวกันและสลับเสียงอ่านได้อย่างเป็นธรรมชาติ ปรับความดัง ความเร็ว และโทนเสียงของแต่ละภาษาแยกกันได้ รองรับการฟังขณะปิดหน้าจอ ทำงานแบบออฟไลน์ได้สมบูรณ์ร่วมกับระบบเสียงบนเครื่องของคุณ",
      
      // Home Google Drive Cloud Sync Card
      "card-sync-title": "ระบบซิงค์ข้อมูลคลาวด์",
      "card-sync-sub": "(Google Drive Cloud Sync)",
      "card-sync-desc": "ฟังก์ชันเสริมที่คุณสามารถเลือกเปิดใช้งานเพื่อสำรองข้อมูลการตั้งค่า, บุ๊กมาร์ก, โน้ต และรายชื่อหนังสือไปยัง Google Drive ส่วนตัวของคุณ ปลอดภัย 100% เนื่องจากนักพัฒนาไม่มีเซิร์ฟเวอร์เก็บข้อมูล และเข้าถึงได้เฉพาะพื้นที่เก็บข้อมูล Shiori Library ของผู้ใช้เองเท่านั้น",
      "card-sync-1": "✓ เชื่อมต่อโดยตรงระหว่างแอปและ Google Drive",
      "card-sync-2": "✓ ซิงค์ข้อมูลข้ามอุปกรณ์ Android ทั้งหมดของคุณ",
      "card-sync-3": "✓ ข้อมูลปลอดภัย ไม่ผ่านตัวกลางหรือคลาวด์คนอื่น",
      
      // Home Blog Section
      "home-blog-tag": "บทความล่าสุด",
      "home-blog-title": "เคล็ดลับ คู่มือการใช้งาน และ <span>บทความน่าอ่าน</span>",
      "home-blog-sub": "เรียนรู้วิธีการตั้งค่า Shiori, การเชื่อมโยงห้องสมุดส่วนตัว และเทคนิคการอ่านที่จะช่วยเพิ่มประสิทธิภาพการอ่านของคุณ",
      
      // Home CTA
      "cta-title": "พร้อมรับประสบการณ์อ่านที่ดีขึ้นหรือยัง?",
      "cta-desc": "ดาวน์โหลด Shiori EPUB Reader ฟรีทันทีผ่าน Google Play Store.",
      "cta-play": "▶ Get it on Google Play",
      
      // Video section
      "video-tag": "คู่มือการใช้งานแบบวิดีโอ",
      "video-title": "เรียนรู้วิธีการใช้งาน <span>Shiori</span>",
      "video-sub": "รับชมวิดีโอแนะนำและขั้นตอนสอนการใช้งานฟังก์ชันสลับเสียงและระบบแทนที่คำอย่างละเอียด",
      
      // Download page
      "dl-tag": "รับแอปพลิเคชัน Shiori",
      "dl-title": "ดาวน์โหลด <span>Shiori EPUB Reader</span>",
      "dl-sub": "เลือกช่องทางการติดตั้งที่ท่านสะดวกในการใช้งาน รองรับระบบปฏิบัติการ Android 8.0 (API 26) ขึ้นไป ไม่มีโฆษณาบังหน้าจอขณะอ่าน.",
      "dl-card-play-title": "Google Play Store",
      "dl-card-play-desc": "ช่องทางที่แนะนำ ติดตั้งและอัปเดตเวอร์ชันใหม่โดยอัตโนมัติ ปลอดภัย ผ่านการตรวจสอบจาก Google Play Protect.",
      "dl-card-play-btn": "ติดตั้งจาก Play Store",
      
      // Blog list
      "blog-tag": "บล็อกอย่างเป็นทางการ",
      "blog-title": "บล็อกและ <span>ข่าวสารอัปเดต</span>",
      "blog-sub": "ติดตามบทความ คู่มือการใช้งาน เทคนิคการตั้งค่า และอัปเดตเวอร์ชันใหม่จากทีมพัฒนา",
      "blog-p1-date": "📅 29 มิถุนายน 2026",
      "blog-p1-cat": "🏷️ ประกาศข่าว",
      "blog-p1-title": "ขอแนะนำ Shiori EPUB Reader: ยกระดับประสบการณ์อ่านและฟังหนังสือบน Android",
      "blog-p1-desc": "ทำความรู้จัก Shiori (栞) แอปอ่าน EPUB แบบ Offline-First บน Android ที่ออกแบบมาเพื่อคนรักการอ่านอย่างแท้จริง พร้อมระบบสลับเสียงอ่านสองภาษาเนียนกริบและกฎปรับแต่งคำดั่งใจ...",
      "blog-p1-btn": "อ่านต่อเนื้อหาฉบับเต็ม",
      "blog-p2-date": "📅 เร็ว ๆ นี้",
      "blog-p2-cat": "🏷️ เคล็ดลับน่ารู้",
      "blog-p2-title": "วิธีการตั้งค่าเอนจินเสียงเพื่อให้อ่านออกเสียงภาษาไทยเป็นธรรมชาติที่สุด",
      "blog-p2-desc": "คู่มือการดาวน์โหลดแพ็คเกจเสียงคุณภาพสูงบน Android และการปรับแต่งสปีดโทนเสียงในแอป Shiori เพื่อประหยัดพลังงานขณะฟังเสียงอ่าน...",
      "blog-p2-status": "เร็ว ๆ นี้",
      
      // Blog Post 3
      "blog-p3-date": "📅 17 กรกฎาคม 2026",
      "blog-p3-cat": "🏷️ แหล่งหนังสือ",
      "blog-p3-title": "5 แหล่งดาวน์โหลดหนังสือ EPUB ฟรีที่ดีที่สุด",
      "blog-p3-desc": "กำลังมองหาหนังสือเล่มใหม่อยู่ใช่ไหม? รวบรวมเว็บไซต์แจกไฟล์ EPUB คุณภาพเยี่ยม ฟรี และถูกลิขสิทธิ์ ให้นำมาเปิดอ่านใน Shiori ได้จุใจ",
      
      // Blog Post 4
      "blog-p4-date": "📅 17 กรกฎาคม 2026",
      "blog-p4-cat": "🏷️ คู่มือการใช้งาน",
      "blog-p4-title": "วิธีเชื่อมต่อ Shiori เข้ากับเซิร์ฟเวอร์ Kavita (OPDS & REST API)",
      "blog-p4-desc": "เปิดอ่านหนังสือจากคลังส่วนตัวและซิงค์ความคืบหน้าการอ่าน (Reading Progress) ได้อย่างราบรื่นโดยเชื่อมต่อ Shiori เข้ากับเซิร์ฟเวอร์ Kavita ของคุณ",
      
      // Blog Post 5
      "blog-p5-date": "📅 19 กรกฎาคม 2026",
      "blog-p5-cat": "🏷️ คู่มือการใช้งาน",
      "blog-p5-title": "วิธีนำเข้าและใช้งานฟอนต์ภายนอก (Custom Fonts) บน Shiori",
      "blog-p5-desc": "ปรับแต่งหน้าตาการอ่านให้น่าอ่านยิ่งขึ้นด้วยการนำเข้าไฟล์ฟอนต์ที่คุณชอบ และเลือกฟอนต์เฉพาะสำหรับแต่ละภาษาได้อย่างอิสระ",
      
      // Blog Post 6
      "blog-p6-date": "📅 22 กรกฎาคม 2026",
      "blog-p6-cat": "🏷️ ฟังก์ชันการใช้งาน",
      "blog-p6-title": "วิธีแปลเนื้อหาในหนังสือเป็นหลายภาษาพร้อมกันในหน้าเดียว",
      "blog-p6-desc": "คู่มือการใช้งานระบบแปลภาษาอัจฉริยะใน Shiori เพื่อแปลประโยคหรือย่อหน้าออกเป็นหลายภาษาเป้าหมายได้พร้อมกันในคลิกเดียว",
      
      // Blog Post 7
      "blog-p7-date": "📅 23 กรกฎาคม 2026",
      "blog-p7-cat": "🏷️ คู่มือฉบับสมบูรณ์",
      "blog-p7-title": "Shiori — เจาะลึกรายการฟีเจอร์ทั้งหมด 19 หมวดแบบครบถ้วน",
      "blog-p7-desc": "สรุปฟังก์ชันการใช้งานทั้งหมดของ Shiori EPUB Reader ตั้งแต่ระบบอ่านออกเสียง TTS, การแปลภาษาอัจฉริยะ, AI บนเครื่อง, อ่านการ์ตูน CBZ, ซิงก์คลาวด์ ไปจนถึงสถิติการอ่าน",

      // Blog Post 8
      "blog-p8-date": "📅 2 สิงหาคม 2026",
      "blog-p8-cat": "🏷️ สถิติการอ่าน",
      "blog-p8-title": "บันทึกและติดตามเส้นทางการอ่านหนังสือของคุณด้วย Book Timeline & Insights",
      "blog-p8-desc": "เรียนรู้วิธีใช้ Book Timeline และ Insights ใน Shiori เพื่อติดตามสถิติการอ่าน เวลาที่ใช้ และกราฟความคืบหน้ารายเล่มอย่างสมบูรณ์แบบ",

      // Blog Post 9
      "blog-p9-date": "📅 2 สิงหาคม 2026",
      "blog-p9-cat": "🏷️ ประสบการณ์การอ่าน",
      "blog-p9-title": "อ่านหนังสือ EPUB โดยไม่ต้องพลิกหน้า — สัมผัสความลื่นไหลด้วยระบบ Infinite Scroll",
      "blog-p9-desc": "สัมผัสประสบการณ์การอ่านหนังสือแบบ Infinite Scroll อ่านต่อเนื่องยาวทั้งเล่ม ไร้ขอบหน้า ไร้สิ่งรบกวนด้วยนิ้วโป้งข้างเดียวใน Shiori",

      // Blog Post 10
      "blog-p10-date": "📅 2 สิงหาคม 2026",
      "blog-p10-cat": "🏷️ การเชื่อมต่อ Calibre",
      "blog-p10-title": "วิธีส่งหนังสือจาก Calibre เข้า Android ผ่าน Wi-Fi ไร้สาย ไม่ต้องเสียบสาย USB",
      "blog-p10-desc": "คู่มือขั้นตอนการส่งไฟล์หนังสือ EPUB จากโปรแกรม Calibre บนคอมพิวเตอร์ไปยังแอป Shiori บนมือถือ Android ผ่านสัญญาณ Wi-Fi โดยไม่ต้องง้อสาย USB",

      // Blog Post 11
      "blog-p11-date": "📅 3 สิงหาคม 2026",
      "blog-p11-cat": "🏷️ นิสัยการอ่าน",
      "blog-p11-title": "ทำไมการติดตามสถิติการอ่านถึงช่วยให้คุณอ่านหนังสือได้จบเล่มมากขึ้น",
      "blog-p11-desc": "เรียนรู้วิธีติดตามสถิติการอ่าน เวลาที่ใช้ พร้อมวิธีสร้างการ์ดความทรงจำสวยงามเพื่อแชร์ความสำเร็จของการอ่านบนโซเชียลมีเดียใน Shiori",

      // Blog Post 12
      "blog-p12-date": "📅 11 สิงหาคม 2026",
      "blog-p12-cat": "🏷️ ประสบการณ์การอ่าน",
      "blog-p12-title": "วิธีใช้ธีม E-Ink อ่าน EPUB สบายตาเหมือนกระดาษบน Android",
      "blog-p12-desc": "เปลี่ยน Shiori ให้เป็นแอปอ่านคมชัดเหมือนกระดาษ — ตัวอักษรดำบนพื้นขาว ปิดแอนิเมชัน ใช้ทั้งแอป เหมาะกับ Onyx Boox และอุปกรณ์ e-paper",

      // Blog Post 13
      "blog-p13-date": "📅 11 สิงหาคม 2026",
      "blog-p13-cat": "🏷️ ประสบการณ์การอ่าน",
      "blog-p13-title": "วิธีไฮไลต์ข้อความและจดบันทึกในแอปอ่าน EPUB บน Android",
      "blog-p13-desc": "ขีดเน้นข้อความประทับใจได้ 8 สี แนบโน้ตความรู้สึก และรวบรวมทุกความทรงจำไว้ในที่เดียว — แท็บ Memory ของ Shiori",

      // Blog Post 14
      "blog-p14-date": "📅 11 สิงหาคม 2026",
      "blog-p14-cat": "🏷️ ประสบการณ์การอ่าน",
      "blog-p14-title": "แถบเครื่องมือด้านบนแบบ 2 แถว: ครบทุกฟังก์ชันในแตะเดียว",
      "blog-p14-desc": "โหมดทดลองแถบด้านบนแบบ 2 แถว แสดงชื่อหนังสือเต็มบรรทัดบน พร้อมเรียงไอคอนเครื่องมือทั้งหมดไว้ในแถบล่าง เลื่อนใช้ง่าย ไม่ต้องกดเปิดเมนูซ่อน",

      // Blog Post 15
      "blog-p15-date": "📅 11 สิงหาคม 2026",
      "blog-p15-cat": "🏷️ เซิร์ฟเวอร์ห้องสมุด",
      "blog-p15-title": "วิธีเชื่อมต่อ S3 Bucket เป็นคลังหนังสือส่วนตัว (AWS S3, MinIO, R2)",
      "blog-p15-desc": "เปิดอ่านหนังสือจาก Object Storage ได้โดยตรง เชื่อมต่อทั้ง AWS S3, MinIO, Cloudflare R2, Wasabi หรือ DigitalOcean Spaces เปิดดูโฟลเดอร์และดาวน์โหลดไฟล์ EPUB เข้าเครื่องได้ทันที",

      // Blog Post 16
      "blog-p16-date": "📅 11 สิงหาคม 2026",
      "blog-p16-cat": "🏷️ จัดการคลังหนังสือ",
      "blog-p16-title": "จัดระเบียบชั้นหนังสือด้วย Collections: สร้างชั้น ย้อมสี และกรองสถานะ",
      "blog-p16-desc": "จัดหมวดหมู่หนังสือเล่มโปรดตามใจชอบ สร้างคอลเลกชัน แยกสีสัน จัดเรียงชั้น วางหนังสือได้หลายหมวด และกรองตามสถานะการอ่านได้ในแตะเดียว",

      // Blog Post 17
      "blog-p17-date": "📅 14 สิงหาคม 2026",
      "blog-p17-cat": "🏷️ เซิร์ฟเวอร์ห้องสมุด",
      "blog-p17-title": "วิธีเชื่อมต่อ OPDS Catalog เข้ากับแอปอ่านหนังสือบน Android",
      "blog-p17-desc": "รวมทุกคลังหนังสือไว้ในที่เดียว ทั้ง Calibre, Calibre-Web, Komga, Kavita หรือ Project Gutenberg เพียงใส่ลิงก์ OPDS ก็เปิดดูและดาวน์โหลดหนังสือเข้าชั้นได้ทันที",

      // Blog Post 18
      "blog-p18-date": "📅 15 สิงหาคม 2026",
      "blog-p18-cat": "🏷️ ประสบการณ์การอ่าน",
      "blog-p18-title": "อ่าน EPUB แบบเลื่อนแนวนอน ด้วยภาพม้วนญี่ปุ่น (Emakimono)",
      "blog-p18-desc": "ดาวน์โหลดไฟล์ตัวอย่างฟรี แล้วลองเลื่อนชมภาพม้วนอายุกว่า 900 ปีแบบต่อเนื่องไม่มีรอยต่อ พร้อมวิธีใช้โหมดเลื่อนแนวนอนกับหนังสือญี่ปุ่นแนวตั้ง (縦書き)",

      // Blog Post 19
      "blog-p19-date": "📅 15 สิงหาคม 2026",
      "blog-p19-cat": "🏷️ ประสบการณ์การอ่าน",
      "blog-p19-title": "Text Replacement + Regex: แก้คำที่เห็นและคำที่ฟังได้ดั่งใจ",
      "blog-p19-desc": "สอนครบทุกขั้นตอนของกฎแทนที่ข้อความทั้งแบบ Visual และ TTS พร้อมสูตร Regex 16 แบบ กลุ่มกฎแยกตามภาษาเสียง และระบบตรวจจับกฎที่ใช้ไม่ได้",

      // Blog Post 20
      "blog-p20-date": "📅 15 สิงหาคม 2026",
      "blog-p20-cat": "🏷️ ซิงก์และสำรองข้อมูล",
      "blog-p20-title": "Cloud Sync ผ่าน Google Drive: อ่านต่อเนื่องได้ทุกเครื่อง ทุกที่ทุกเวลา",
      "blog-p20-desc": "คู่มือการซิงก์ฉบับสมบูรณ์ ตั้งแต่การล็อกอิน, การซิงก์ตำแหน่งอ่าน โน้ต ไฮไลต์ คอลเลกชัน ไปจนถึงการเปิดอ่านต่อบนเครื่องที่สองอย่างราบรื่น ปลอดภัยบน Google Drive ของคุณเอง",

      // Blog Post 21
      "blog-p21-date": "📅 15 สิงหาคม 2026",
      "blog-p21-cat": "🏷️ เสียงอ่าน (TTS)",
      "blog-p21-title": "Multi-Language TTS: อ่านออกเสียงหลายภาษา สลับเสียงอัตโนมัติกลางประโยค",
      "blog-p21-desc": "ไขความลับระบบอ่านออกเสียงหลายภาษาของ Shiori ที่สามารถสลับเสียงอ่านตามชุดตัวอักษรได้เนียนกริบกลางประโยค พร้อมระบบจัดลำดับความสำคัญของตัวอักษร 漢字 และ Latin",

      // Blog Post 22
      "blog-p22-date": "📅 15 สิงหาคม 2026",
      "blog-p22-cat": "🏷️ ประสบการณ์การอ่าน",
      "blog-p22-title": "คู่มือหน้าอ่านหนังสือ EPUB: ทุกปุ่ม ทุกฟังก์ชัน แตะแล้วเจออะไรบ้าง",
      "blog-p22-desc": "พาเจาะลึก 9 ไอคอนบนแถบเครื่องมือด้านบน, 7 ปุ่มควบคุมการเล่นด้านล่าง และเมนูกดค้างบนข้อความ ที่จะช่วยให้คุณใช้งาน Shiori ได้อย่างคล่องมือที่สุด",

      // Blog Post 23
      "blog-p23-date": "📅 15 สิงหาคม 2026",
      "blog-p23-cat": "🏷️ นำเข้าและโอนไฟล์",
      "blog-p23-title": "Book Drop: ส่งหนังสือเข้ามือถือผ่าน Wi-Fi ไม่ต้องใช้สายและคลาวด์",
      "blog-p23-desc": "ลากไฟล์ EPUB วางบนหน้าเว็บที่มือถือของคุณเปิดให้เองในวง Wi-Fi เดียวกัน ไม่ต้องต่อสาย ไม่ต้องสมัครคลาวด์ และไม่ต้องติดตั้งอะไรบนคอมพิวเตอร์",

      // Blog Post 24
      "blog-p24-date": "📅 19 สิงหาคม 2026",
      "blog-p24-cat": "🏷️ เซิร์ฟเวอร์ห้องสมุด",
      "blog-p24-title": "วิธีเชื่อมต่อ Komga เข้ากับ Shiori บน Android (พร้อมภาพปกและการซิงค์ความคืบหน้า)",
      "blog-p24-desc": "เชื่อมต่อเซิร์ฟเวอร์ Komga เข้ากับ Shiori บน Android ด้วย REST API หลักโดยตรง รับภาพปกความละเอียดสูง รายละเอียดหนังสือครบถ้วน และซิงค์ตำแหน่งอ่านกลับเซิร์ฟเวอร์",

      // Blog Post 25
      "blog-p25-date": "📅 22 สิงหาคม 2026",
      "blog-p25-cat": "🏷️ ประสบการณ์การอ่าน",
      "blog-p25-title": "ไฟล์ EPUB ไม่ได้เสีย แต่สไตล์หนังสือพัง: วิธีคุมการแสดงผลบน Android",
      "blog-p25-desc": "ตัวหนังสือมืดกลืนพื้นหลัง ฟอนต์เพี้ยน หรือเว้นวรรคกว้างจนอ่านยาก? ปลดล็อกการแสดงผลด้วย 4 สวิตช์อัจฉริยะใน Shiori",

      // Blog Post 26
      "blog-p26-date": "📅 23 สิงหาคม 2026",
      "blog-p26-cat": "🏷️ ประสบการณ์การอ่าน",
      "blog-p26-title": "อ่านเชิงอรรถ (Footnotes) และลิงก์ในเล่ม โดยไม่หลงตำแหน่งอ่าน",
      "blog-p26-desc": "แก้ปัญหาแตะเชิงอรรถแล้วเด้งข้ามหน้าจนหลงตำแหน่ง ด้วยหน้าต่างพรีวิว Pop-up ลอยด้านล่าง และระบบยืนยันความปลอดภัยก่อนเปิดเว็บภายนอก",

      // Blog Post 27
      "blog-p27-date": "📅 23 สิงหาคม 2026",
      "blog-p27-cat": "🏷️ เสียงอ่าน (TTS)",
      "blog-p27-title": "อ่านไปพร้อมกับฟังด้วยไฮไลต์แบบคาราโอเกะใน Shiori",
      "blog-p27-desc": "เพิ่มสมาธิในการอ่านและฝึกภาษาด้วยระบบไฮไลต์ซิงค์ตามเสียงอ่านแบบเรียลไทม์ ทั้งระดับคำและย่อหน้า ปรับแต่งสีและความโปร่งใสได้อิสระ",

      // Blog Post 28
      "blog-p28-date": "📅 23 สิงหาคม 2026",
      "blog-p28-cat": "🏷️ เสียงอ่าน (TTS)",
      "blog-p28-title": "เช็กการออกเสียงทีละประโยค: อ่านออกเสียงเฉพาะข้อความที่เลือกใน Shiori",
      "blog-p28-desc": "ตรวจทานคำศัพท์และประโยคยากได้ทันใจ เพียงแตะค้างเลือกข้อความแล้วกด Aloud ฟังเสียงอ่านหนึ่งรอบโดยไม่เสียตำแหน่งการอ่านและไม่รบกวนการเล่นเสียงหลัก",

      // Feature Chips
      "chip-f1": "1. รูปแบบไฟล์",
      "chip-f2": "2. การอ่าน",
      "chip-f3": "3. ที่คั่นหน้า",
      "chip-f4": "4. เสียงอ่าน TTS",
      "chip-f5": "5. แทนที่คำ",
      "chip-f6": "6. แปลภาษา",
      "chip-f7": "7. AI บนเครื่อง",
      "chip-f8": "8. อ่านการ์ตูน",
      "chip-f9": "9. ปรับไหล PDF",
      "chip-f10": "10. สถิติการอ่าน",
      "chip-f11": "11. ความทรงจำ",
      "chip-f13": "13. เซิร์ฟเวอร์",
      "chip-f14": "14. คลาวด์ซิงก์",
      "chip-f18": "18. ความเป็นส่วนตัว"
    },
    jp: {
      // Navbar
      "nav-home": "ホーム",
      "nav-download": "ダウンロード",
      "nav-blog": "ブログ",
      
      // Footer
      "footer-desc": "プレミアムで柔軟な読書と読み上げ（TTS）機能を提供するAndroid用EPUBリーダー。",
      "footer-app": "アプリケーション",
      "footer-legal": "法的情報",
      "footer-privacy": "プライバシーポリシー",
      "footer-terms": "利用規約",
      "footer-blog": "ブログ",
      
      // Home Hero
      "hero-vision-tag": "ビジョン",
      "hero-vision-quote": "「読書から学びへ」",
      "hero-tag": "Android用EPUBリーダー",
      "hero-title": "Shiori <br><span class=\"text-gradient\">ePub Reader</span>",
      "hero-sub": "ワンランク上の読書と朗読体験を。自動多言語音声読み上げ（TTS）とアプリ内翻訳機能を搭載。",
      "hero-get-play": "▶ Google Play で入手",
      
      // Vision Section
      "vision-sec-tag": "私たちのビジョン",
      "vision-sec-title": "「読書から学びへ」",
      "vision-sec-desc": "Shioriは、単なる「読書」をアクティブな「学び」へと進化させます。自動多言語読み上げ（TTS）、即時アプリ内翻訳、単語置換ルール、端側AIのサポートにより、すべての本が知識の扉を開くキーとなります。",
      "footer-vision": "— 読書から学びへ",
      
      // Permanent Knowledge Section
      "know-tag": "永久保存される知識",
      "know-title": "読書の知識は、<span>あなたと共に残り続けます</span>",
      "know-sub": "本は手元を離れても、得た知識は消えません。",
      "know-hero-badge": "🔒 元の本が削除されても保護",
      "know-intro": "Shioriは、元の電子書籍ファイルが端末から削除されたり、図書館に返却されたり、利用できなくなったりしても、あなたが読書中に作成したすべてのデータを保護・保存します。",
      "know-data-head": "あなたの個人の読書データは安全に保存され続けます：",
      "know-item-1": "しおり (Bookmarks)",
      "know-item-2": "メモ (Notes)",
      "know-item-3": "ハイライト (Highlights)",
      "know-item-4": "AI要約 (AI Summaries)",
      "know-item-5": "AI対話履歴 (AI Conversations)",
      "know-item-6": "読書進捗・履歴 (Reading Progress & History)",
      "know-outro": "元の本がなくても、収集したアイデア、気づき、知識にいつでもアクセスして振り返ることができます。",
      "know-card1-title": "図書館の電子書籍（借りた本）に最適",
      "know-card1-desc": "借りた本には返却期限があり、返却すると読書コンテキストやメモが失われるのが一般的でした。Shioriなら、本を返却した後でも個人のメモやAI生成の要約が手元に残ります。進捗状況だけでなく「学び」そのものを保持できます。",
      "know-card2-title": "あなたのデータ、あなたの知識",
      "know-card2-desc": "Shioriが保存するのは「本そのもの」ではなく「あなたの読書データ」です。容量節約のためにファイルを削除しても、知識ベースは完全な状態で残ります。重要な引用の確認やAI要約の再確認がいつでも可能です。",
      "know-motto": "「素晴らしい本が本棚から消えても、そこから得た知識が消えることはありません。」",
      
      // Home Screenshots
      "ss-tag": "アプリのスクリーンショット",
      "ss-title": "<span>Shiori</span> の画面を見る",
      "ss-sub": "シンプルで洗練されたデザインを誇るAndroid版Shiori EPUBリーダーの実際のスクリーンショット。",
      
      // Home Features
      "feat-tag": "主な機能",
      "feat-title": "<span>すべての読者</span>のために作られた機能",
      "feat-sub": "読書効率と体験を最大化するために丁寧に設計された機能群。",
      "feat-1-title": "スマートライブラリ",
      "feat-1-desc": "3つの表示モード（サムネイル、リスト、詳細）でEPUBコレクションを管理。読書の進捗を自動記録。",
      "feat-2-title": "快適なEPUBリーダー",
      "feat-2-desc": "検索可能な目次と無制限スクロール機能。TTS（読み上げ）が停止した正確な段落から再開可能。",
      "feat-3-title": "ブックマーク、ハイライト＆メモ",
      "feat-3-desc": "多彩な色でハイライト、メモの追加、薄い輪郭線で段落をブックマーク。",
      "feat-4-title": "フローティングコントロール",
      "feat-4-desc": "他のアプリの上でも動くフローティングTTSオーバーレイ。ピンチでサイズ変更、画面端への吸着も可能。",
      "feat-5-title": "スマートテキスト置換",
      "feat-5-desc": "TTS読み上げ前に単語を修正。5,000件以上のルールと正規表現（Regex）に対応し、誤読を補正。",
      "feat-6-title": "選択＆翻訳",
      "feat-6-desc": "単語をタップして瞬時に翻訳（Google翻訳ポップアップ）、コピー、選択箇所からのTTS再生、置換ルール追加が可能。",
      
      // Home Pro Features
      "pro-tag": "詳細機能",
      "pro-title": "<span>Pro機能</span>の深掘り",
      "pro-sub": "読書体験を極限までコントロールするために設計された機能。",
      "pro-tts-title": "高度なTTS＆言語コントロール",
      "pro-tts-sub": "スマートな多言語自動音声切り替えによる精密な再生コントロール。",
      "pro-tts-1": "🎯 <strong>Auto-detect Script:</strong> 6言語（TH, EN, ZH, JA, KO, DE）の文字を自動判別し、段落ごとにスムーズに声を切り替え。",
      "pro-tts-2": "▲▼ <strong>Priority Ordering:</strong> 共通文字（ラテン文字：EN/DE、漢字：ZH/JA）の優先順位をドラッグで調整し競合を解決。",
      "pro-tts-3": "⇅ <strong>Auto-Scroll & Highlight:</strong> 読み上げ中の段落に合わせて画面を自動スクロールしハイライト表示。",
      "pro-rep-title": "デュアルモードテキスト置換",
      "pro-rep-sub": "発音の修正と画面表示の調整を独立して設定できる高度なルール機能。",
      "pro-rep-1": "🎨 <strong>Visual Replacement:</strong> 読書画面の文字とTTS読み上げの両方で指定単語を置換。",
      "pro-rep-2": "🔊 <strong>TTS Replacement:</strong> 画面の本文はそのままに、TTS音声エンジンへ送信する際のみ単語を置換。",
      "pro-rep-3": "⚡ <strong>Import/Export System:</strong> 高速検索、正規表現（Regex）対応、TSVファイルによるルールの入出力。",
      "pro-float-title": "スマートフローティングパネル",
      "pro-float-sub": "バックグラウンドや画面オフ時でもインタラクティブな操作で聴き続けられる機能。",
      "pro-float-1": "🤏 <strong>Pinch to Resize:</strong> 読書用のフォントサイズを変えずにテキスト表示枠の大きさを調整。",
      "pro-float-2": "🧲 <strong>Snap to Edge:</strong> 画面外に半分以上ドラッグすると15%だけ表示して隠れ、他アプリの邪魔をしない。",
      "pro-float-3": "🔄 <strong>Double-Tap to Center:</strong> パネルをダブルタップするだけで素早く画面中央へ復帰。",
      "pro-vis-title": "高度な表示カスタマイズ",
      "pro-vis-sub": "電子書籍ファイルに埋め込まれた表示の崩れや独自スタイルを解消。",
      "pro-vis-1": "🔤 <strong>Force System Font:</strong> 安定した表示のために端末の標準フォントを強制適用。",
      "pro-vis-2": "🚫 <strong>Disable EPUB CSS:</strong> 出版社のスタイルシートを無効化し、アプリのクリーンなデフォルト表示に統合。",
      "pro-vis-3": "🌈 <strong>Remove Font Color:</strong> 固定の文字色をクリアし、ダークモードやセピアテーマでの見やすさを維持。",
      
      // Home Advanced TTS Card
      "card-tts-title": "高度な多言語テキスト読み上げ",
      "card-tts-desc": "同じ段落内にあるタイ語、英語、中国語、日本語、韓国語、ドイツ語の文字を自動判別し、自然に音声を切り替え。言語ごとに速度、ピッチ、音声を個別調整可能。端末のTTSエンジンを使用してオフラインで動作します。",
      
      // Home Google Drive Cloud Sync Card
      "card-sync-title": "Google ドライブ クラウド同期",
      "card-sync-sub": "(Google Drive Cloud Sync)",
      "card-sync-desc": "オプションのクラウド同期機能。本棚の書籍、読書の進捗、テキスト置換ルールを個人のGoogleドライブに直接保存。サーバーを持たないため、開発者がデータにアクセスすることは一切ありません。100%安全。",
      "card-sync-1": "✓ アプリとGoogleドライブ間の直接かつ安全な接続",
      "card-sync-2": "✓ お持ちのすべてのAndroid端末間での同期",
      "card-sync-3": "✓ データは自分自身のストレージで安全に管理",
      
      // Home Blog Section
      "home-blog-tag": "ブログ最新記事",
      "home-blog-title": "ヒント、ガイド ＆ <span>最新ニュース</span>",
      "home-blog-sub": "Shioriのカスタマイズ方法、自作サーバーとの同期、そして読書を最大限楽しむための各種ガイドをお届けします。",
      
      // Home CTA
      "cta-title": "読書体験を次のレベルへ引き上げませんか？",
      "cta-desc": "Google Play ストアで Shiori EPUB リーダーを無料でダウンロード。",
      "cta-play": "▶ Google Play で入手",
      
      // Video section
      "video-tag": "ビデオガイド",
      "video-title": "<span>Shiori</span> の使い方を学ぶ",
      "video-sub": "Shioriの高度な機能と読み上げ設定をマスターするためのステップバイステップ動画チュートリアル。",
      
      // Download page
      "dl-tag": "Shiori ePub リーダーを入手",
      "dl-title": "<span>Shiori EPUB リーダー</span> をダウンロード",
      "dl-sub": "お好みのインストール方法を選択してください。Android 8.0 (API 26) 以上に対応。読書中は100%広告なし。",
      "dl-card-play-title": "Google Play ストア",
      "dl-card-play-desc": "推奨。自動的にインストールおよび更新されます。Google Play プロテクトによる安全検証済み。",
      "dl-card-play-btn": "Play ストアで入手",
      
      // Blog list
      "blog-tag": "公式ブログ",
      "blog-title": "ブログ ＆ <span>アップデート</span>",
      "blog-sub": "最新のお知らせ、チュートリアル、ガイド、バージョンリリースをご覧ください。",
      "blog-p1-date": "📅 2026年6月29日",
      "blog-p1-cat": "🏷️ お知らせ",
      "blog-p1-title": "Android向けShiori EPUBリーダーのご紹介",
      "blog-p1-desc": "先進的な文字検知切り替えTTSとカスタムテキスト置換ルールを備えた、オフラインファーストなEPUBリーダー Shiori（栞）をご覧ください...",
      "blog-p1-btn": "記事全文を読む",
      "blog-p2-date": "📅 近日公開",
      "blog-p2-cat": "🏷️ ヒント ＆ テクニック",
      "blog-p2-title": "自然な発音のためのTTSエンジンのセットアップ",
      "blog-p2-desc": "Androidシステム設定で高品質な言語音声ファイルをインストールし、Shioriでの読み上げ速度を最適化するためのステップバイステップガイド...",
      "blog-p2-status": "近日公開",
      
      // Blog Post 3
      "blog-p3-date": "📅 2026年7月17日",
      "blog-p3-cat": "🏷️ 電子書籍",
      "blog-p3-title": "無料のEPUB本をダウンロードできるベストサイト5選",
      "blog-p3-desc": "新しい本をお探しですか？高品質で無料、かつ合法的なEPUBファイルが見つかるトップウェブサイトをご紹介します。",
      
      // Blog Post 4
      "blog-p4-date": "📅 2026年7月17日",
      "blog-p4-cat": "🏷️ ガイド",
      "blog-p4-title": "ShioriをKavitaと同期する方法 (OPDS & REST API)",
      "blog-p4-desc": "Shiori EPUBリーダーをセルフホストのKavitaサーバーに接続することで、デジタルライブラリをストリーミングし読書の進捗をスムーズに同期できます。",
      
      // Blog Post 5
      "blog-p5-date": "📅 2026年7月19日",
      "blog-p5-cat": "🏷️ ガイド",
      "blog-p5-title": "Shioriにカスタムフォントをインポートする方法",
      "blog-p5-desc": "お好みのフォントファイルをインポートし、表示言語ごとにカスタムフォントを割り当てることで、読書体験を自分好みにカスタマイズしましょう。",
      
      // Blog Post 6
      "blog-p6-date": "📅 2026年7月22日",
      "blog-p6-cat": "🏷️ 機能紹介",
      "blog-p6-title": "EPUB小説を複数の言語に同時に翻訳する方法",
      "blog-p6-desc": "Shioriの高度な多言語翻訳パネルを使用して、1つの段落を複数の対象言語に同時に翻訳し、読み比べる方法を解説します。",
      
      // Blog Post 7
      "blog-p7-date": "📅 2026年7月23日",
      "blog-p7-cat": "🏷️ 全機能ガイド",
      "blog-p7-title": "Shiori 全機能ガイド：全19の主要機能を徹底解説",
      "blog-p7-desc": "Shiori EPUBリーダーの全機能を網羅解説。多言語自動TTS、AI翻訳、PDFリフロー、CBZ漫画OCR、Googleドライブ同期まで、すべての魅力を紹介します。",

      // Blog Post 8
      "blog-p8-date": "📅 2026年8月2日",
      "blog-p8-cat": "🏷️ 読書統計",
      "blog-p8-title": "読書タイムラインと進捗グラフで読書体験を記録・振り返り",
      "blog-p8-desc": "Shioriの読書タイムラインとインサイト機能を使って、本ごとの読書速度、所要時間、進捗グラフを記録・分析する方法を解説します。",

      // Blog Post 9
      "blog-p9-date": "📅 2026年8月2日",
      "blog-p9-cat": "🏷️ 読書体験",
      "blog-p9-title": "ページめくりのいらないEPUB読書 — インフィニット・スクロールの魅力",
      "blog-p9-desc": "Shioriのインフィニット・スクロール（連続スクロール）機能を使って、ページめくりのストレスなく一冊の本をなめらかに読み進める方法を解説します。",

      // Blog Post 10
      "blog-p10-date": "📅 2026年8月2日",
      "blog-p10-cat": "🏷️ Calibre連携",
      "blog-p10-title": "USBケーブル不要！CalibreからAndroidへワイヤレスで本を送信する方法",
      "blog-p10-desc": "パソコンのCalibreライブラリからAndroid端末のShiori EPUBリーダーへ、Wi-Fi経由で直接本をワイヤレス転送する方法を解説します。",

      // Blog Post 11
      "blog-p11-date": "📅 2026年8月3日",
      "blog-p11-cat": "🏷️ 読書習慣",
      "blog-p11-title": "読書統計を記録すると本がもっと読めるようになる理由",
      "blog-p11-desc": "Shioriの読書統計や所要時間グラフを記録し、美しいマイルストーンカードをSNSで共有して読書習慣を定着させる方法を解説します。",

      // Blog Post 12
      "blog-p12-date": "📅 2026年8月11日",
      "blog-p12-cat": "🏷️ 読書体験",
      "blog-p12-title": "E-Inkテーマの使い方：Androidで紙のようなEPUB読書体験を",
      "blog-p12-desc": "Shioriを紙のように目に優しく高コントラストな読書環境へ。白黒反転なしの純白背景、アニメーション完全停止、アプリ全体に適用。Onyx Boox等の電子ペーパー端末に最適。",

      // Blog Post 13
      "blog-p13-date": "📅 2026年8月11日",
      "blog-p13-cat": "🏷️ 読書体験",
      "blog-p13-title": "AndroidでEPUBのハイライトとメモを活用する方法",
      "blog-p13-desc": "心に響く文章を8色でハイライトし、思い浮かんだメモを書き添えて「Memory」タブに美しく集約。自分だけの読書ノートを構築できます。",

      // Blog Post 14
      "blog-p14-date": "📅 2026年8月11日",
      "blog-p14-cat": "🏷️ 読書体験",
      "blog-p14-title": "2行表示のリーダートップバー：すべての操作をワンタップで",
      "blog-p14-desc": "実験機能の2行トップバーなら、上の行に書籍タイトルを全文表示し、下の行にすべての読書ツールを横スクロールで配置。隠れたメニューを開く手間を省きます。",

      // Blog Post 15
      "blog-p15-date": "📅 2026年8月11日",
      "blog-p15-cat": "🏷️ ライブラリサーバー",
      "blog-p15-title": "S3バケットを本棚サーバーとして追加する方法（AWS S3、MinIO、R2）",
      "blog-p15-desc": "AWS S3、MinIO、Cloudflare R2、Wasabi、DigitalOcean SpacesなどのS3互換ストレージを直接接続。フォルダ階層の閲覧からEPUBの直接ダウンロードまでスムーズに行えます。",

      // Blog Post 16
      "blog-p16-date": "📅 2026年8月11日",
      "blog-p16-cat": "🏷️ 本棚・整理",
      "blog-p16-title": "コレクション機能で電子書籍を美しく整理する方法",
      "blog-p16-desc": "自由にカラーを設定できるコレクション作成、複数棚への登録、並べ替え、そして読書ステータスによる絞り込みまで。本棚を思い通りに整える完全ガイド。",

      // Blog Post 17
      "blog-p17-date": "📅 2026年8月14日",
      "blog-p17-cat": "🏷️ ライブラリサーバー",
      "blog-p17-title": "AndroidでOPDSカタログを接続して本棚を連携する方法",
      "blog-p17-desc": "Calibre、Calibre-Web、Komga、Kavita、Project GutenbergなどのOPDSフィードを登録し、お気に入りの本棚から直接EPUBを閲覧・ダウンロードできます。",

      // Blog Post 18
      "blog-p18-date": "📅 2026年8月15日",
      "blog-p18-cat": "🏷️ 読書体験",
      "blog-p18-title": "横スクロールEPUB：絵巻物を指でひらく",
      "blog-p18-desc": "無料サンプル『信貴山縁起』をダウンロードして、横スクロールモードで絵巻をそのまま鑑賞。縦書きテキストにも同じ設定がそのまま使えます。",

      // Blog Post 19
      "blog-p19-date": "📅 2026年8月15日",
      "blog-p19-cat": "🏷️ 読書体験",
      "blog-p19-title": "テキスト置換と正規表現：見える文字と読み上げを思い通りに",
      "blog-p19-desc": "表示用とTTS専用の置換ルールを全手順で解説。すぐ使える正規表現16パターン、音声言語ごとのグループ分け、危険なパターンを止める安全機能まで。",

      // Blog Post 20
      "blog-p20-date": "📅 2026年8月15日",
      "blog-p20-cat": "🏷️ 同期・バックアップ",
      "blog-p20-title": "Google Drive クラウド同期：どの端末でも続きから快適読書",
      "blog-p20-desc": "初期設定から2台目端末の連携まで徹底解説。読書位置、ハイライト、メモ、本棚設定を自身のGoogle Driveで安全に自動同期する方法。",

      // Blog Post 21
      "blog-p21-date": "📅 2026年8月15日",
      "blog-p21-cat": "🏷️ 音声読み上げ（TTS）",
      "blog-p21-title": "多言語TTS：1冊の本でも言語ごとに音声を自動切り替え",
      "blog-p21-desc": "本文中の文字体系を検知し、文の途中でも自然に音声をスイッチ。漢字やアルファベットの優先順位設定から言語別の速度調整まで徹底解説。",

      // Blog Post 22
      "blog-p22-date": "📅 2026年8月15日",
      "blog-p22-cat": "🏷️ 読書体験",
      "blog-p22-title": "リーダー画面の全ボタン解説：タップで使える機能ガイド",
      "blog-p22-desc": "上部バーの9つのアイコン、下部バーの7つの操作ボタン、長押しで現れる12の便利メニューを画面写真付きで分かりやすく解説。",

      // Blog Post 23
      "blog-p23-date": "📅 2026年8月15日",
      "blog-p23-cat": "🏷️ 取り込みと転送",
      "blog-p23-title": "Book Drop：Wi-Fi経由でパソコンからスマホへ本を送る",
      "blog-p23-desc": "スマホ自身が配信するページにEPUBをドラッグするだけ。ケーブルもクラウドアカウントも、パソコン側のインストールも不要です。",

      // Blog Post 24
      "blog-p24-date": "📅 2026年8月19日",
      "blog-p24-cat": "🏷️ サーバー接続",
      "blog-p24-title": "AndroidでKomgaをShioriに接続する方法（表紙・読書進捗の同期対応）",
      "blog-p24-desc": "ネイティブ REST API を使って自作のKomgaサーバーをShioriに接続。表紙画像、詳細な作品情報、読書進捗の双方向同期を完全サポート。",

      // Blog Post 25
      "blog-p25-date": "📅 2026年8月22日",
      "blog-p25-cat": "🏷️ 読書体験",
      "blog-p25-title": "EPUBは壊れていない、崩れているのはスタイルだ：レイアウトを取り戻す方法",
      "blog-p25-desc": "ダークテーマで文字が読めない、フォントが変わらない問題を解決。Shioriの4つのオーバーライド機能で快適な読書環境を取り戻しましょう。",

      // Blog Post 26
      "blog-p26-date": "📅 2026年8月23日",
      "blog-p26-cat": "🏷️ 読書体験",
      "blog-p26-title": "読書位置を見失わずに脚注や内部リンクを読む方法",
      "blog-p26-desc": "学術書や注釈本の脚注タップによるページジャンプを防止。ポップアップカードでその場でプレビューし、外部リンクは安全に確認。",

      // Blog Post 27
      "blog-p27-date": "📅 2026年8月23日",
      "blog-p27-cat": "🏷️ 音声読み上げ（TTS）",
      "blog-p27-title": "カラオケ風ハイライトで聴きながら読む：Shiori EPUBリーダー",
      "blog-p27-desc": "音声と同期する単語・段落のカラオケハイライトで読書集中力と語学学習を強化。10色のカラーと透明度を自在にカスタマイズ。",

      // Blog Post 28
      "blog-p28-date": "📅 2026年8月23日",
      "blog-p28-cat": "🏷️ 音声読み上げ（TTS）",
      "blog-p28-title": "1文ずつ発音を確認：選択したテキストだけを読み上げる機能",
      "blog-p28-desc": "気になる単語や外国語のフレーズを素早く確認。長押しでテキストを選択し「Aloud」をタップするだけで、読書位置を変えずにその部分だけを1度再生。",

      // Feature Chips
      "chip-f1": "1. フォーマット",
      "chip-f2": "2. 読書設定",
      "chip-f3": "3. しおり・メモ",
      "chip-f4": "4. 音声読み上げ",
      "chip-f5": "5. 単語置換",
      "chip-f6": "6. 多言語翻訳",
      "chip-f7": "7. ローカルAI",
      "chip-f8": "8. マンガ・OCR",
      "chip-f9": "9. PDFリフロー",
      "chip-f10": "10. 読書統計",
      "chip-f11": "11. メモリー",
      "chip-f13": "13. サーバー接続",
      "chip-f14": "14. クラウド同期",
      "chip-f18": "18. プライバシー"
    },
    cn: {
      // Navbar
      "nav-home": "首页",
      "nav-download": "下载",
      "nav-blog": "博客",
      
      // Footer
      "footer-desc": "一款专为安卓打造的优质EPUB阅读器，提供灵活的阅读界面和出色的文本转语音（TTS）朗读体验。",
      "footer-app": "应用程序",
      "footer-legal": "法律信息",
      "footer-privacy": "隐私政策",
      "footer-terms": "服务条款",
      "footer-blog": "博客",
      
      // Home Hero
      "hero-vision-tag": "愿景",
      "hero-vision-quote": "“从阅读到学习”",
      "hero-tag": "Android EPUB 阅读器",
      "hero-title": "Shiori <br><span class=\"text-gradient\">ePub 阅读器</span>",
      "hero-sub": "体验全新的阅读与听书方式。配备自动多语言文本转语音（TTS）与应用内翻译功能。",
      "hero-get-play": "▶ Google Play 下载",
      
      // Vision Section
      "vision-sec-tag": "我们的愿景",
      "vision-sec-title": "“从阅读到学习”",
      "vision-sec-desc": "Shiori 旨在将“被动阅读”转化为“主动学习”。通过自动多语言 TTS 朗读、即时划词翻译、自定义词汇替换规则及端侧 AI 助手，让每一本书都成为您汲取知识的桥梁。",
      "footer-vision": "— 从阅读到学习",
      
      // Permanent Knowledge Section
      "know-tag": "永久知识宝库",
      "know-title": "您的阅读知识 <span>将永远与您同在</span>",
      "know-sub": "书籍或许会离去，但知识应当永存。",
      "know-hero-badge": "🔒 图书离去 知识保留",
      "know-intro": "即使原始图书从您的设备中删除、归还至图书馆或不再可用，Shiori 也会完整保留您在阅读过程中创造的一切内容。",
      "know-data-head": "您的个人阅读数据将被安全妥善保存，包括：",
      "know-item-1": "书签 (Bookmarks)",
      "know-item-2": "笔记 (Notes)",
      "know-item-3": "高亮划线 (Highlights)",
      "know-item-4": "AI 摘要总结 (AI Summaries)",
      "know-item-5": "AI 问答对话 (AI Conversations)",
      "know-item-6": "阅读进度与历史 (Reading Progress & History)",
      "know-outro": "这意味着，即使没有原始图书，您也随时可以重温自己积累的思想、洞察与知识。",
      "know-card1-title": "借阅图书与图书馆书籍的绝佳伴侣",
      "know-card1-desc": "借阅的书籍总会到期或归还。通常情况下，这意味着您将失去所有阅读记录与笔记。借助 Shiori，即使借阅的书籍已归还，您的个人笔记和 AI 生成的洞察依然完好无存。您保留下来的是真正的“学习成果”，而不仅仅是阅读进度。",
      "know-card2-title": "您的数据，您的知识",
      "know-card2-desc": "Shiori 保存的是您的阅读数据，而非图书文件本身。即使您为了节省存储空间而删除了图书，您的个人知识库依然完好无损——无论何时需要回顾某个观点、重温名言金句，或是查阅 AI 总结，均可随时随地调取。",
      "know-motto": "“因为好书可能会离开您的书架，但您从中汲取的知识永远不会离去。”",
      
      // Home Screenshots
      "ss-tag": "应用截图",
      "ss-title": "探索 <span>Shiori</span> 界面",
      "ss-sub": "Android版 Shiori EPUB 阅读器的真实界面截图，展现简洁而高级的设计风格。",
      
      // Home Features
      "feat-tag": "核心功能",
      "feat-title": "为<span>每一位读者</span>打造的特色功能",
      "feat-sub": "我们精心设计了这些功能，以提升您的阅读效率与体验。",
      "feat-1-title": "智能书架",
      "feat-1-desc": "通过3种视图模式（缩略图、列表、详情）管理EPUB藏书，自动记录阅读进度。",
      "feat-2-title": "流畅的EPUB阅读器",
      "feat-2-desc": "支持无限滚动与可搜索的章节目录。无论读到哪里或TTS停在哪段，都能准确无缝续读。",
      "feat-3-title": "书签、划线高亮与笔记",
      "feat-3-desc": "支持多色文本高亮、添加笔记，以及段落书签标注。",
      "feat-4-title": "悬浮控制面板",
      "feat-4-desc": "悬浮TTS朗读窗口支持在任何应用上层运行。支持双指缩放、靠边吸着，随时随地边走边听。",
      "feat-5-title": "智能文本替换",
      "feat-5-desc": "在TTS朗读前纠正发音。支持5,000+条规则及正则表达式，精准修正发音。",
      "feat-6-title": "划词与翻译",
      "feat-6-desc": "轻触任意词语即可翻译（Google翻译弹窗）、复制、从所选处播放TTS或快速添加到替换规则。",
      
      // Home Pro Features
      "pro-tag": "深度进阶功能",
      "pro-title": "深入了解 <span>Pro 专业功能</span>",
      "pro-sub": "旨在让您全面掌控阅读体验的高级功能。",
      "pro-tts-title": "高级TTS与语言控制",
      "pro-tts-sub": "智能多语言自动语音切换，带来精准的播放控制。",
      "pro-tts-1": "🎯 <strong>Auto-detect Script:</strong> 自动识别6种语言（TH, EN, ZH, JA, KO, DE）的文本，并按段落无缝切换对应发音。",
      "pro-tts-2": "▲▼ <strong>Priority Ordering:</strong> 通过拖拽调整语言优先级，轻松解决共享文字（如英/德的拉丁字母，中/日的汉字）的冲突。",
      "pro-tts-3": "⇅ <strong>Auto-Scroll & Highlight:</strong> 自动随当前朗读段落同步滚动与高亮，阅读不脱节。",
      "pro-rep-title": "双模式文本替换",
      "pro-rep-sub": "通过高级规则配置，分别独立修复发音问题与文本显示样式。",
      "pro-rep-1": "🎨 <strong>Visual Replacement:</strong> 在阅读界面与TTS朗读中同时替换指定的词汇。",
      "pro-rep-2": "🔊 <strong>TTS Replacement:</strong> 仅在发送至TTS语音引擎时替换词汇，页面上仍保留原始文本。",
      "pro-rep-3": "⚡ <strong>Import/Export System:</strong> 支持快速搜索、正则表达式，并可通过TSV制表符分隔文件导入/导出规则。",
      "pro-float-title": "智能悬浮面板",
      "pro-float-sub": "后台运行或锁屏时仍可流畅听书，配备交互式悬浮控制按钮。",
      "pro-float-1": "🤏 <strong>Pinch to Resize:</strong> 调整文本视口大小，同时保持阅读字体大小不变。",
      "pro-float-2": "🧲 <strong>Snap to Edge:</strong> 拖出屏幕50%以上时自动隐藏至仅保留15%显示，避免遮挡其他应用。",
      "pro-float-3": "🔄 <strong>Double-Tap to Center:</strong> 双击悬浮面板即可快速平滑返回屏幕中央。",
      "pro-vis-title": "高级视觉自定义",
      "pro-vis-sub": "解决电子书中嵌入的格式混乱与自定义样式问题。",
      "pro-vis-1": "🔤 <strong>Force System Font:</strong> 强制使用设备标准系统字体，确保多语言文本稳定清晰显示。",
      "pro-vis-2": "🚫 <strong>Disable EPUB CSS:</strong> 忽略出版商自带的样式表，使用应用内置的简洁排版。",
      "pro-vis-3": "🌈 <strong>Remove Font Color:</strong> 清除写死的字体颜色，确保在深色（Dark）或怀旧（Sepia）主题下视觉体验舒适。",
      
      // Home Advanced TTS Card
      "card-tts-title": "高级多语言文本转语音（TTS）",
      "card-tts-desc": "在同一段落内自动检测泰语、英语、中文、日语、韩语和德语文本并无缝切换对应语音。支持按语言单独调节语速、音调和发音人。完全基于设备本地TTS引擎，支持离线运行。",
      
      // Home Google Drive Cloud Sync Card
      "card-sync-title": "Google Drive 云端同步",
      "card-sync-sub": "(Google Drive Cloud Sync)",
      "card-sync-desc": "可选的云端同步功能。将书架图书、阅读进度及文本替换规则直接保存至您的个人 Google Drive。100% 安全：我们没有数据库服务器，无法访问您的任何数据。",
      "card-sync-1": "✓ 应用与 Google Drive 之间的直接安全连接",
      "card-sync-2": "✓ 在您的所有 Android 设备之间顺畅同步",
      "card-sync-3": "✓ 数据完全保留在您自己的存储空间中",
      
      // Home Blog Section
      "home-blog-tag": "官方博客最新文章",
      "home-blog-title": "使用技巧、指南与<span>深度文章</span>",
      "home-blog-sub": "探索如何自定义 Shiori、配置个人藏书服务器，以及获取最佳电子书阅读体验的全面指南。",
      
      // Home CTA
      "cta-title": "准备好提升您的阅读体验了吗？",
      "cta-desc": "在 Google Play 商店免费下载 Shiori EPUB 阅读器。",
      "cta-play": "▶ Google Play 下载",
      
      // Video section
      "video-tag": "视频指南",
      "video-title": "学习如何使用 <span>Shiori</span>",
      "video-sub": "观看我们的逐步视频教程，掌握 Shiori 的高级功能与语音设置。",
      
      // Download page
      "dl-tag": "获取 Shiori ePub 阅读器",
      "dl-title": "下载 <span>Shiori EPUB 阅读器</span>",
      "dl-sub": "选择您首选的安装方式。支持 Android 8.0 (API 26) 及以上版本。阅读全程 100% 无广告。",
      "dl-card-play-title": "Google Play 商店",
      "dl-card-play-desc": "推荐方式。自动安装与更新。经 Google Play Protect 安全验证。",
      "dl-card-play-btn": "前往 Play 商店下载",
      
      // Blog list
      "blog-tag": "官方博客",
      "blog-title": "博客 与 <span>更新</span>",
      "blog-sub": "阅读最新的官方公告、教程、指南以及版本发布信息。",
      "blog-p1-date": "📅 2026年6月29日",
      "blog-p1-cat": "🏷️ 官方公告",
      "blog-p1-title": "Android 版 Shiori EPUB 阅读器正式发布",
      "blog-p1-desc": "探索 Shiori（栞）——一款离线优先的 EPUB 阅读器，配备先进的多语言自动切换 TTS 与可自定义文本规则...",
      "blog-p1-btn": "阅读全文",
      "blog-p2-date": "📅 即将推出",
      "blog-p2-cat": "🏷️ 技巧与心得",
      "blog-p2-title": "设置 TTS 引擎以获得更自然的发音",
      "blog-p2-desc": "逐步指引：如何在 Android 系统设置中安装高质量语言语音包，并在 Shiori 中优化朗读速度...",
      "blog-p2-status": "即将推出",
      
      // Blog Post 3
      "blog-p3-date": "📅 2026年7月17日",
      "blog-p3-cat": "🏷️ 电子书",
      "blog-p3-title": "5 个免费下载 EPUB 电子书的最佳网站",
      "blog-p3-desc": "寻找新书阅读？这里为您精选提供高质量、免费且合法的 EPUB 图书下载网站。",
      
      // Blog Post 4
      "blog-p4-date": "📅 2026年7月17日",
      "blog-p4-cat": "🏷️ 指南",
      "blog-p4-title": "如何将 Shiori 与 Kavita 同步 (OPDS & REST API)",
      "blog-p4-desc": "将 Shiori EPUB 阅读器连接到您自建的 Kavita 服务器，顺畅串流数字藏书并同步阅读进度。",
      
      // Blog Post 5
      "blog-p5-date": "📅 2026年7月19日",
      "blog-p5-cat": "🏷️ 指南",
      "blog-p5-title": "如何在 Shiori 中导入自定义字体",
      "blog-p5-desc": "通过导入您最喜欢的字体文件，并为不同的显示语言分配自定义字体，打造最符合您个人喜好的完美阅读体验。",
      
      // Blog Post 6
      "blog-p6-date": "📅 2026年7月22日",
      "blog-p6-cat": "🏷️ 功能介绍",
      "blog-p6-title": "如何在阅读中同时将文本翻译成多种语言",
      "blog-p6-desc": "了解如何使用 Shiori 的高级多语言翻译面板，一次性将选中的段落翻译成多种目标语言，方便对照阅读。",
      
      // Blog Post 7
      "blog-p7-date": "📅 2026年7月23日",
      "blog-p7-cat": "🏷️ 全功能指南",
      "blog-p7-title": "Shiori 全功能全景指南：19 大核心特色深度解析",
      "blog-p7-desc": "全面了解 Shiori EPUB 阅读器的所有功能：从多语言 TTS 朗读、AI 端侧翻译到 PDF 重排、漫画 OCR 识别及 Google Drive 云端同步。",

      // Blog Post 8
      "blog-p8-date": "📅 2026年8月2日",
      "blog-p8-cat": "🏷️ 阅读统计",
      "blog-p8-title": "通过图书时间线与阅读进度追溯您的专属阅读之旅",
      "blog-p8-desc": "了解如何使用 Shiori 的图书时间线与 Insights 功能，追踪每本书的阅读速度、所用时长及可视化进度曲线。",

      // Blog Post 9
      "blog-p9-date": "📅 2026年8月2日",
      "blog-p9-cat": "🏷️ 阅读体验",
      "blog-p9-title": "无需翻页的 EPUB 阅读体验 — 体验 Infinite Scroll 无缝滚动的魅力",
      "blog-p9-desc": "了解 Shiori EPUB 阅读器的 Infinite Scroll 无缝无界滚动功能，感受从头至尾一气呵成的沉浸式阅读。",

      // Blog Post 10
      "blog-p10-date": "📅 2026年8月2日",
      "blog-p10-cat": "🏷️ Calibre 联动",
      "blog-p10-title": "无需 USB 数据线！如何将 Calibre 图书无线发送至 Android 设备",
      "blog-p10-desc": "指引步骤：如何在局域网 Wi-Fi 下将电脑端 Calibre 藏书一键无线发送至 Android 端的 Shiori EPUB 阅读器。",

      // Blog Post 11
      "blog-p11-date": "📅 2026年8月3日",
      "blog-p11-cat": "🏷️ 阅读习惯",
      "blog-p11-title": "为什么记录阅读统计数据能帮助您读更多书",
      "blog-p11-desc": "了解如何利用 Shiori 的阅读速度统计与时长追溯，一键生成精美里程碑成就卡片并分享至社交平台，建立持续阅读习惯。",

      // Blog Post 12
      "blog-p12-date": "📅 2026年8月11日",
      "blog-p12-cat": "🏷️ 阅读体验",
      "blog-p12-title": "如何使用 E-Ink 墨水屏主题在 Android 上获得如纸般的 EPUB 阅读体验",
      "blog-p12-desc": "将 Shiori 变为高对比度、无干扰的纸感阅读器——纯黑白对比、全停动画、全局适配。专为 Onyx Boox 等墨水屏设备打造。",

      // Blog Post 13
      "blog-p13-date": "📅 2026年8月11日",
      "blog-p13-cat": "🏷️ 阅读体验",
      "blog-p13-title": "如何在 Android EPUB 阅读器中高亮划线与记录笔记",
      "blog-p13-desc": "8 种雅致色彩随心点缀金句，随手附上思考笔记，所有心动瞬间汇聚于 Memory 记忆画廊，让阅读沉淀为持久的智慧。",

      // Blog Post 14
      "blog-p14-date": "📅 2026年8月11日",
      "blog-p14-cat": "🏷️ 阅读体验",
      "blog-p14-title": "双行阅读顶部栏：所有常用功能，触手可及",
      "blog-p14-desc": "实验性的双行顶部栏让书名在上行完整展示，所有阅读工具在下行横向滑动排列——无需再点开折叠菜单，一切操作一触即发。",

      // Blog Post 15
      "blog-p15-date": "📅 2026年8月11日",
      "blog-p15-cat": "🏷️ 书库服务器",
      "blog-p15-title": "如何将 S3 存储桶添加为书库服务器（AWS S3、MinIO、R2）",
      "blog-p15-desc": "直接连接任意兼容 S3 协议的云存储——AWS S3、MinIO、Cloudflare R2、Wasabi 或 DigitalOcean Spaces，随时浏览目录并一键下载 EPUB 电子书。",

      // Blog Post 16
      "blog-p16-date": "📅 2026年8月11日",
      "blog-p16-cat": "🏷️ 书架整理",
      "blog-p16-title": "使用“收藏集”整理电子书：创建、色彩标记与状态筛选",
      "blog-p16-desc": "随心创建个性化书架并指定专属色彩，一书多归类、自由调整排序，更有一键按阅读状态筛选书库的便捷体验。",

      // Blog Post 17
      "blog-p17-date": "📅 2026年8月14日",
      "blog-p17-cat": "🏷️ 书库服务器",
      "blog-p17-title": "如何将 OPDS 书库目录连接至 Android 阅读器",
      "blog-p17-desc": "无缝对接 Calibre、Calibre-Web、Komga、Kavita 及各大公共书库的 OPDS 订阅源，轻松浏览目录并直接下载图书至本地书架。",

      // Blog Post 18
      "blog-p18-date": "📅 2026年8月15日",
      "blog-p18-cat": "🏷️ 阅读体验",
      "blog-p18-title": "横向滚动 EPUB：用手指展开日本绘卷",
      "blog-p18-desc": "下载免费的绘卷样书，以连续横向滚动的方式欣赏十二世纪画卷；同一模式也完美适用于日文竖排文字。",

      // Blog Post 19
      "blog-p19-date": "📅 2026年8月15日",
      "blog-p19-cat": "🏷️ 阅读体验",
      "blog-p19-title": "文本替换与正则：让所见与所听都如你所愿",
      "blog-p19-desc": "完整讲解视觉替换与朗读替换的每一步操作，附赠 16 条实用正则表达式、按语音语言分组，以及拦截错误正则的安全机制。",

      // Blog Post 20
      "blog-p20-date": "📅 2026年8月15日",
      "blog-p20-cat": "🏷️ 同步与备份",
      "blog-p20-title": "Google Drive 云端同步：跨设备无缝畅读个人书库",
      "blog-p20-desc": "从账号登录到多设备协同——详解各项自动同步开关、阅读进度与高亮笔记同步机制，数据安全存放于您自有的 Google 云端硬盘中。",

      // Blog Post 21
      "blog-p21-date": "📅 2026年8月15日",
      "blog-p21-cat": "🏷️ 语音朗读（TTS）",
      "blog-p21-title": "多语言 TTS：一本书，多重原声音色自如切换",
      "blog-p21-desc": "告别单发音引擎的生硬别扭——Shiori 依据文字脚本在句中智能切换发音人，并支持汉字与拉丁字母语言优先级及独立语速微调。",

      // Blog Post 22
      "blog-p22-date": "📅 2026年8月15日",
      "blog-p22-cat": "🏷️ 阅读体验",
      "blog-p22-title": "阅读界面全按键指南：指尖触控功能全图解",
      "blog-p22-desc": "顶部栏 9 个核心触控点、底部栏 7 个朗读与导航按钮，以及长按文字唤出的 12 项快捷菜单，带您轻松探索每一项贴心功能。",

      // Blog Post 23
      "blog-p23-date": "📅 2026年8月15日",
      "blog-p23-cat": "🏷️ 导入与传输",
      "blog-p23-title": "Book Drop：通过 Wi-Fi 把书直接拖进手机",
      "blog-p23-desc": "把 EPUB 拖到手机自己提供的网页上即可完成传输——无需数据线、无需云账号，电脑端也不用安装任何东西。",

      // Blog Post 24
      "blog-p24-date": "📅 2026年8月19日",
      "blog-p24-cat": "🏷️ 书库服务器",
      "blog-p24-title": "如何在 Android 上将 Komga 连接至 Shiori（支持封面与进度同步）",
      "blog-p24-desc": "使用原生 REST API 将自建 Komga 漫画与图书服务器连接至 Android 端 Shiori，享受高清封面、完整元数据与双向阅读进度同步。",

      // Blog Post 25
      "blog-p25-date": "📅 2026年8月22日",
      "blog-p25-cat": "🏷️ 阅读体验",
      "blog-p25-title": "EPUB 没坏，坏的是排版样式：在 Android 上夺回排版控制权",
      "blog-p25-desc": "深色模式下文字隐形、字号锁死或字距过宽？使用 Shiori 的 4 个样式覆盖开关，轻松重获纯净舒适的阅读体验。",

      // Blog Post 26
      "blog-p26-date": "📅 2026年8月23日",
      "blog-p26-cat": "🏷️ 阅读体验",
      "blog-p26-title": "无需跳转页面即可直接阅读脚注与内链：防迷路阅读指南",
      "blog-p26-desc": "解决阅读注释版名著与学术电子书时跳页迷路的痛点。底部悬浮卡片即时预览脚注内容，外链跳转双重确认。",

      // Blog Post 27
      "blog-p27-date": "📅 2026年8月23日",
      "blog-p27-cat": "🏷️ 语音朗读（TTS）",
      "blog-p27-title": "伴随朗读同步卡拉OK式高亮：Shiori EPUB 阅读器",
      "blog-p27-desc": "音字毫秒级同步，支持逐词光标与段落框架多层级高亮，提升外语学习与深度阅读专注力。10 种配色与透明度随心定制。",

      // Blog Post 28
      "blog-p28-date": "📅 2026年8月23日",
      "blog-p28-cat": "🏷️ 语音朗读（TTS）",
      "blog-p28-title": "逐句校准发音：仅朗读选中的文字与单句",
      "blog-p28-desc": "快速确认生词与外语插句发音。长按选中文本点击 Aloud，即可单次朗读目标语句，零干扰保留原阅读位置与全书听书状态。",

      // Feature Chips
      "chip-f1": "1. 图书格式",
      "chip-f2": "2. 阅读设置",
      "chip-f3": "3. 书签笔记",
      "chip-f4": "4. TTS 朗读",
      "chip-f5": "5. 文本替换",
      "chip-f6": "6. 语言翻译",
      "chip-f7": "7. 端侧 AI",
      "chip-f8": "8. 漫画 OCR",
      "chip-f9": "9. PDF 重排",
      "chip-f10": "10. 阅读统计",
      "chip-f11": "11. 记忆画廊",
      "chip-f13": "13. 书库服务器",
      "chip-f14": "14. 云端同步",
      "chip-f18": "18. 隐私安全"
    },
    pt: {
      // Navbar
      "nav-home": "Início",
      "nav-download": "Download",
      "nav-blog": "Blog",
      
      // Footer
      "footer-desc": "Um leitor de EPUB para Android com experiência de leitura e Conversão de Texto em Voz (TTS) flexível e premium.",
      "footer-app": "Aplicativo",
      "footer-legal": "Informações Legais",
      "footer-privacy": "Política de Privacidade",
      "footer-terms": "Termos de Serviço",
      "footer-blog": "Blog",
      
      // Home Hero
      "hero-vision-tag": "VISÃO",
      "hero-vision-quote": "\"Da Leitura ao Aprendizado.\"",
      "hero-tag": "Leitor EPUB para Android",
      "hero-title": "Shiori <br><span class=\"text-gradient\">ePub Reader</span>",
      "hero-sub": "Experimente a leitura e audição de nível avançado. Projetado para leitores com Conversão de Texto em Voz multilíngue automática e tradução integrada.",
      "hero-get-play": "▶ Baixe no Google Play",
      
      // Vision Section
      "vision-sec-tag": "Nossa Visão",
      "vision-sec-title": "\"Da Leitura ao Aprendizado.\"",
      "vision-sec-desc": "O Shiori conecta a leitura passiva ao aprendizado ativo. Com Conversão de Texto em Voz multilíngue automática, tradução instantânea no aplicativo, regras personalizáveis de substituição de palavras e ferramentas inteligentes de IA, cada livro se torna um portal para um conhecimento mais profundo.",
      "footer-vision": "— Da Leitura ao Aprendizado.",
      
      // Permanent Knowledge Section
      "know-tag": "CONHECIMENTO PERMANENTE",
      "know-title": "Seu Conhecimento de Leitura <span>Permanece com Você</span>",
      "know-sub": "Os livros podem ir e vir, mas o seu conhecimento não deve ir embora.",
      "know-hero-badge": "🔒 Salvo Além dos Livros",
      "know-intro": "O Shiori preserva tudo o que você cria enquanto lê, mesmo que o livro original seja removido do seu dispositivo, devolvido a uma biblioteca ou não esteja mais disponível.",
      "know-data-head": "Seus dados pessoais de leitura permanecem armazenados com segurança, incluindo:",
      "know-item-1": "Marcadores",
      "know-item-2": "Anotações",
      "know-item-3": "Destaques",
      "know-item-4": "Resumos de IA",
      "know-item-5": "Conversas com IA",
      "know-item-6": "Progresso e Histórico de Leitura",
      "know-outro": "Isso significa que você pode sempre revisitar ideias, insights e conhecimentos coletados sem precisar do livro original.",
      "know-card1-title": "Perfeito para Livros de Biblioteca",
      "know-card1-desc": "Livros emprestados eventualmente expiram ou devem ser devolvidos. Normalmente, isso significaria perder o acesso ao seu contexto de leitura. Com o Shiori, suas anotações pessoais e insights gerados por IA permanecem disponíveis mesmo após o livro ser devolvido.",
      "know-card2-title": "Seus Dados, Seu Conhecimento",
      "know-card2-desc": "O Shiori armazena seus dados de leitura, não o livro em si. Mesmo se você excluir um livro para economizar espaço de armazenamento, sua base pessoal de conhecimento permanece intacta — pronta para quando você precisar revisar uma ideia ou citação importante.",
      "know-motto": "\"Porque grandes livros podem sair da sua biblioteca, mas o conhecimento que você adquiriu com eles deve permanecer.\"",
      
      // Home Screenshots
      "ss-tag": "Capturas de Tela",
      "ss-title": "Explore a Interface do <span>Shiori</span>",
      "ss-sub": "Capturas de tela reais do Shiori EPUB Reader no Android mostrando seu design limpo, premium e minimalista.",
      
      // Home Features
      "feat-tag": "Recursos Principais",
      "feat-title": "Recursos Criados para <span>Todos os Leitores</span>",
      "feat-sub": "Projetamos cuidadosamente esses recursos para maximizar sua produtividade de leitura.",
      "feat-1-title": "Biblioteca Inteligente",
      "feat-1-desc": "Gerencie sua coleção EPUB com 3 modos de visualização (Miniatura, Lista, Detalhes). Acompanha o progresso de leitura automaticamente.",
      "feat-2-title": "Leitor EPUB Fluido",
      "feat-2-desc": "Navegação por rolagem contínua (Infinite Scroll) com lista de capítulos pesquisável. Retoma no parágrafo exato — mesmo de onde o TTS parou.",
      "feat-3-title": "Marcadores, Destaques e Notas",
      "feat-3-desc": "Destaque textos em várias cores, anexe notas e marque parágrafos com contornos visuais sutis.",
      "feat-4-title": "Controles Flutuantes",
      "feat-4-desc": "Painel flutuante de TTS funciona sobre qualquer app. Ajuste o tamanho, fixe na borda e ouça em movimento.",
      "feat-5-title": "Substituição Inteligente de Texto",
      "feat-5-desc": "Modifique palavras antes da reprodução TTS. Suporta mais de 5.000 entradas e expressões regulares para corrigir a pronúncia.",
      "feat-6-title": "Selecionar e Traduzir",
      "feat-6-desc": "Toque em qualquer palavra para traduzir, copiar, iniciar o TTS a partir da seleção ou adicionar às regras instantaneamente.",
      
      // Home Pro Features
      "pro-tag": "Recursos Avançados",
      "pro-title": "Aprofunde-se nos <span>Recursos Pro</span>",
      "pro-sub": "Recursos criados para oferecer controle total sobre sua experiência de leitura.",
      "pro-tts-title": "TTS Avançado e Controle de Idioma",
      "pro-tts-sub": "Controle preciso de reprodução com troca automática e inteligente de voz multilíngue.",
      "pro-tts-1": "🎯 <strong>Detecção Automática:</strong> Detecta automaticamente o idioma de 6 scripts (TH, EN, ZH, JA, KO, DE) e altera as vozes sem interrupções por parágrafo.",
      "pro-tts-2": "▲▼ <strong>Ordem de Prioridade:</strong> Resolva conflitos de idiomas compartilhados organizando a prioridade dos scripts.",
      "pro-tts-3": "⇅ <strong>Rolar e Destacar:</strong> Rola automaticamente a visualização do leitor para acompanhar o parágrafo lido no momento.",
      "pro-rep-title": "Substituição de Texto em Modo Duplo",
      "pro-rep-sub": "Corrija problemas de pronúncia ou layouts visuais de forma independente com configurações avançadas de regras.",
      "pro-rep-1": "🎨 <strong>Substituição Visual:</strong> Substitua palavras correspondentes visualmente no leitor e na leitura TTS.",
      "pro-rep-2": "🔊 <strong>Substituição TTS:</strong> Substitua palavras apenas ao enviar para o mecanismo TTS, mantendo o texto original visível na página.",
      "pro-rep-3": "⚡ <strong>Sistema de Importação/Exportação:</strong> Pesquisa rápida de regras, suporte a Regex e importação/exportação via arquivos de texto.",
      "pro-float-title": "Painel Flutuante Inteligente",
      "pro-float-sub": "Continue ouvindo em segundo plano ou com a tela desligada através de controles flutuantes interativos.",
      "pro-float-1": "🤏 <strong>Ajuste de Tamanho:</strong> Ajuste a área de exibição da caixa de texto sem alterar o tamanho da fonte de leitura.",
      "pro-float-2": "🧲 <strong>Fixar na Borda:</strong> Arrastar mais de 50% para fora da tela fixa o painel em 15% de visibilidade, mantendo a tela livre.",
      "pro-float-3": "🔄 <strong>Toque Duplo para Centralizar:</strong> Dê um duplo toque rápido no painel para trazê-lo de volta ao centro da tela.",
      "pro-vis-title": "Personalização Visual Avançada",
      "pro-vis-sub": "Supere problemas de renderização e estilos personalizados incorporados nos arquivos de livros.",
      "pro-vis-1": "🔤 <strong>Forçar Fonte do Sistema:</strong> Force a fonte padrão do dispositivo para uma leitura estável.",
      "pro-vis-2": "🚫 <strong>Desativar CSS do EPUB:</strong> Descarte as folhas de estilo da editora e formate o layout usando os padrões limpos do app.",
      "pro-vis-3": "🌈 <strong>Remover Cor de Fonte:</strong> Remove cores pré-definidas para manter o conforto visual nos temas Escuro ou Sépia.",
      
      // Home Advanced TTS Card
      "card-tts-title": "Conversão de Texto em Voz (TTS) Multilíngue Avançada",
      "card-tts-desc": "Detecta automaticamente textos em vários idiomas no mesmo parágrafo e alterna as vozes perfeitamente. Ajuste velocidade, tom e voz por idioma. Funciona offline com o mecanismo TTS nativo do seu dispositivo.",
      
      // Home Google Drive Cloud Sync Card
      "card-sync-title": "Sincronização em Nuvem do Google Drive",
      "card-sync-sub": "(Google Drive Cloud Sync)",
      "card-sync-desc": "Sincronização em nuvem opcional. Salve livros, progresso de leitura e regras de substituição diretamente no seu Google Drive privado. 100% seguro: não temos servidor de banco de dados e não podemos acessar seus dados.",
      "card-sync-1": "✓ Conexão direta e segura entre o aplicativo e o Google Drive",
      "card-sync-2": "✓ Sincronize em todos os seus dispositivos Android pessoais",
      "card-sync-3": "✓ Os dados permanecem sob o controle do seu próprio armazenamento",
      
      // Home Blog Section
      "home-blog-tag": "Últimos Artigos",
      "home-blog-title": "Dicas, Guias e <span>Insights</span>",
      "home-blog-sub": "Descubra como personalizar o Shiori, configurar servidores de biblioteca e aproveitar ao máximo sua leitura.",
      
      // Home CTA
      "cta-title": "Pronto para Elevar Sua Leitura?",
      "cta-desc": "Baixe o Shiori EPUB Reader gratuitamente na Google Play Store.",
      "cta-play": "▶ Baixe no Google Play",
      
      // Video section
      "video-tag": "Guias em Vídeo",
      "video-title": "Aprenda a Usar o <span>Shiori</span>",
      "video-sub": "Assista aos nossos tutoriais em vídeo passo a passo para dominar os recursos avançados do Shiori.",
      
      // Download page
      "dl-tag": "Obtenha o Shiori ePub Reader",
      "dl-title": "Baixe o <span>Shiori EPUB Reader</span>",
      "dl-sub": "Escolha seu método de instalação preferido. Suporta Android 8.0 (API 26) ou superior. 100% livre de anúncios durante a leitura.",
      "dl-card-play-title": "Google Play Store",
      "dl-card-play-desc": "Recomendado. Instala e atualiza automaticamente. Seguro e verificado pelo Google Play Protect.",
      "dl-card-play-btn": "Baixe na Play Store",
      
      // Blog list
      "blog-tag": "Blog Oficial",
      "blog-title": "Blog &amp; <span>Atualizações</span>",
      "blog-sub": "Leia os últimos anúncios, tutoriais, guias e lançamentos de versões.",
      "blog-p1-date": "📅 29 de junho de 2026",
      "blog-p1-cat": "🏷️ Anúncios",
      "blog-p1-title": "Apresentando o Shiori EPUB Reader para Android",
      "blog-p1-desc": "Descubra o Shiori (栞), um leitor de EPUB offline projetado para elevar sua experiência de leitura digital com TTS multilíngue avançado...",
      "blog-p1-btn": "Ler Artigo Completo",
      "blog-p2-date": "📅 Em breve",
      "blog-p2-cat": "🏷️ Dicas e Truques",
      "blog-p2-title": "Configurando o Mecanismo TTS para Pronúncia Natural",
      "blog-p2-desc": "Guia passo a passo para instalar arquivos de voz de alta qualidade nas configurações do Android e otimizar a leitura no Shiori...",
      "blog-p2-status": "Em breve",
      
      // Blog Post 3
      "blog-p3-date": "📅 17 de julho de 2026",
      "blog-p3-cat": "🏷️ E-Books",
      "blog-p3-title": "Os 5 Melhores Sites para Baixar Livros EPUB Gratuitos",
      "blog-p3-desc": "Procurando novos livros? Aqui estão os melhores sites para encontrar arquivos EPUB legais, gratuitos e de alta qualidade.",
      
      // Blog Post 4
      "blog-p4-date": "📅 17 de julho de 2026",
      "blog-p4-cat": "🏷️ Guias",
      "blog-p4-title": "Como Sincronizar o Shiori com o Kavita (OPDS e API REST)",
      "blog-p4-desc": "Transmita sua biblioteca digital e sincronize seu progresso de leitura conectando o Shiori EPUB Reader ao seu servidor Kavita.",
      
      // Blog Post 5
      "blog-p5-date": "📅 19 de julho de 2026",
      "blog-p5-cat": "🏷️ Guias",
      "blog-p5-title": "Como Importar Fontes Personalizadas no Shiori",
      "blog-p5-desc": "Personalize sua leitura importando seus arquivos de fonte favoritos e atribuindo diferentes tipografias para cada idioma.",
      
      // Blog Post 6
      "blog-p6-date": "📅 22 de julho de 2026",
      "blog-p6-cat": "🏷️ Recursos",
      "blog-p6-title": "Como Traduzir EPUB para Vários Idiomas Simultaneamente",
      "blog-p6-desc": "Aprenda a usar o painel de tradução multilíngue do Shiori para traduzir parágrafos em vários idiomas de destino ao mesmo tempo.",
      
      // Blog Post 7
      "blog-p7-date": "📅 23 de julho de 2026",
      "blog-p7-cat": "🏷️ Guia Completo",
      "blog-p7-title": "Guia Completo de Recursos do Shiori: 19 Recursos Explicados",
      "blog-p7-desc": "Explore todos os recursos do Shiori EPUB Reader, desde TTS multilíngue e tradução com IA até PDFs inteligentes, OCR de quadrinhos CBZ e sincronização no Google Drive.",

      // Blog Post 8
      "blog-p8-date": "📅 2 de agosto de 2026",
      "blog-p8-cat": "🏷️ Insights e Estatísticas",
      "blog-p8-title": "Acompanhe Sua Jornada de Leitura com a Linha do Tempo e Progresso do Livro",
      "blog-p8-desc": "Aprenda como o recurso de Linha do Tempo e Insights do Shiori permite acompanhar a velocidade de leitura, tempo gasto e gráficos de progresso.",

      // Blog Post 9
      "blog-p9-date": "📅 2 de agosto de 2026",
      "blog-p9-cat": "🏷️ Experiência de Leitura",
      "blog-p9-title": "Leia Livros EPUB sem Virar Páginas: O Poder do Infinite Scroll",
      "blog-p9-desc": "Descubra como o recurso de Rolagem Contínua (Infinite Scroll) do Shiori transforma a leitura de e-books em uma experiência fluida e sem distrações.",

      // Blog Post 10
      "blog-p10-date": "📅 2 de agosto de 2026",
      "blog-p10-cat": "🏷️ Integração Calibre",
      "blog-p10-title": "Envie Livros do Calibre sem Fio para Seu Dispositivo Android",
      "blog-p10-desc": "Aprenda como transferir e-books EPUB do Calibre no seu computador para o Shiori EPUB Reader no Android via Wi-Fi sem cabos USB.",

      // Blog Post 11
      "blog-p11-date": "📅 3 de agosto de 2026",
      "blog-p11-cat": "🏷️ Hábitos de Leitura",
      "blog-p11-title": "Por Que Acompanhar Suas Estatísticas de Leitura Ajuda a Ler Mais Livros",
      "blog-p11-desc": "Descubra como acompanhar a velocidade de leitura e compartilhar belos cartões de conquistas no Shiori constrói hábitos de leitura consistentes.",

      // Blog Post 12
      "blog-p12-date": "📅 11 de agosto de 2026",
      "blog-p12-cat": "🏷️ Experiência de Leitura",
      "blog-p12-title": "Como Usar o Tema E-Ink para Leitura EPUB Semelhante ao Papel no Android",
      "blog-p12-desc": "Transforme o Shiori em um leitor de alto contraste e sem distrações — preto puro no branco, sem animações, aplicado em todo o app. Perfeito para Onyx Boox e telas e-paper.",

      // Blog Post 13
      "blog-p13-date": "📅 11 de agosto de 2026",
      "blog-p13-cat": "🏷️ Experiência de Leitura",
      "blog-p13-title": "Como Destacar Textos e Fazer Anotações em um Leitor EPUB no Android",
      "blog-p13-desc": "Destaque trechos marcantes em 8 cores suaves, anexe reflexões pessoais e encontre todas as suas anotações reunidas na aba Memory do Shiori.",

      // Blog Post 14
      "blog-p14-date": "📅 11 de agosto de 2026",
      "blog-p14-cat": "🏷️ Experiência de Leitura",
      "blog-p14-title": "Barra Superior em Duas Linhas: Todas as Ferramentas a Um Toque",
      "blog-p14-desc": "A barra superior experimental em duas linhas exibe o título completo em cima e todas as ações de leitura em uma linha rolável abaixo — nada escondido em menus.",

      // Blog Post 15
      "blog-p15-date": "📅 11 de agosto de 2026",
      "blog-p15-cat": "🏷️ Servidores de Biblioteca",
      "blog-p15-title": "Como Adicionar um Bucket S3 como Servidor de Biblioteca (AWS S3, MinIO, R2)",
      "blog-p15-desc": "Conecte qualquer bucket compatível com S3 — AWS S3, MinIO, Cloudflare R2, Wasabi ou DigitalOcean Spaces — navegue por pastas e baixe livros EPUB diretamente no seu Android.",

      // Blog Post 16
      "blog-p16-date": "📅 11 de agosto de 2026",
      "blog-p16-cat": "🏷️ Organização da Biblioteca",
      "blog-p16-title": "Organize Seus E-books com Coleções: Crie, Filtre e Gerencie",
      "blog-p16-desc": "Crie prateleiras personalizadas com cores exclusivas, adicione livros a múltiplas coleções, reordene estantes e filtre por status de leitura com total facilidade.",

      // Blog Post 17
      "blog-p17-date": "📅 14 de agosto de 2026",
      "blog-p17-cat": "🏷️ Servidores de Biblioteca",
      "blog-p17-title": "Como Conectar um Catálogo OPDS ao Seu Leitor Android",
      "blog-p17-desc": "Conecte feeds OPDS do Calibre, Calibre-Web, Komga, Kavita ou Project Gutenberg para navegar e baixar livros EPUB diretamente na sua estante.",

      // Blog Post 18
      "blog-p18-date": "📅 15 de agosto de 2026",
      "blog-p18-cat": "🏷️ Experiência de Leitura",
      "blog-p18-title": "EPUBs com Rolagem Horizontal: Leia um Rolo Ilustrado Japonês",
      "blog-p18-desc": "Baixe o exemplo gratuito de emakimono e desenrole na horizontal um rolo do século XII — e veja como o modo lida com o texto vertical japonês.",

      // Blog Post 19
      "blog-p19-date": "📅 15 de agosto de 2026",
      "blog-p19-cat": "🏷️ Experiência de Leitura",
      "blog-p19-title": "Substituição de Texto e Regex: Reescreva o que Você Lê e Ouve",
      "blog-p19-desc": "Todos os fluxos das regras visuais e de TTS, além de um livro de receitas com 16 padrões regex, grupos por idioma de voz e as verificações que bloqueiam um padrão ruim.",

      // Blog Post 20
      "blog-p20-date": "📅 15 de agosto de 2026",
      "blog-p20-cat": "🏷️ Sincronização e Backup",
      "blog-p20-title": "Sincronização em Nuvem com Google Drive: Sua Biblioteca em Qualquer Dispositivo",
      "blog-p20-desc": "Do login ao segundo aparelho — entenda como sincronizar progresso, destaques, notas e coleções com segurança no seu próprio Google Drive.",

      // Blog Post 21
      "blog-p21-date": "📅 15 de agosto de 2026",
      "blog-p21-cat": "🏷️ Leitura em Voz Alta (TTS)",
      "blog-p21-title": "TTS Multilíngue: Um Livro, Todas as Vozes",
      "blog-p21-desc": "Como o Shiori alterna a voz no meio da frase de acordo com o alfabeto e define prioridades para caracteres compartilhados e velocidades por idioma.",

      // Blog Post 22
      "blog-p22-date": "📅 15 de agosto de 2026",
      "blog-p22-cat": "🏷️ Experiência de Leitura",
      "blog-p22-title": "Todos os Botões da Tela de Leitura: Guia Toque a Toque",
      "blog-p22-desc": "Nove ícones na barra superior, sete na barra inferior e o menu de toque longo com 12 ações — tudo explicado com imagens detalhadas.",

      // Blog Post 23
      "blog-p23-date": "📅 15 de agosto de 2026",
      "blog-p23-cat": "🏷️ Importação e Transferência",
      "blog-p23-title": "Book Drop: Envie Livros para o Celular por Wi-Fi",
      "blog-p23-desc": "Arraste EPUBs para uma página que o próprio celular hospeda na sua rede — sem cabo, sem conta na nuvem e sem instalar nada no computador.",

      // Blog Post 24
      "blog-p24-date": "📅 19 de agosto de 2026",
      "blog-p24-cat": "🏷️ Servidor de Biblioteca",
      "blog-p24-title": "Como Conectar o Komga ao Shiori no Android (Capas + Sincronização)",
      "blog-p24-desc": "Conecte seu servidor Komga ao Shiori no Android usando a REST API nativa para obter capas, metadados completos e sincronização de leitura.",

      // Blog Post 25
      "blog-p25-date": "📅 22 de agosto de 2026",
      "blog-p25-cat": "🏷️ Experiência de Leitura",
      "blog-p25-title": "O EPUB Está Bom, o Estilo É que Quebrou: Retome o Controle no Android",
      "blog-p25-desc": "Texto invisível no tema escuro ou fontes travadas? Veja como 4 seletores no Shiori anulam estilos ruins da editora.",

      // Blog Post 26
      "blog-p26-date": "📅 23 de agosto de 2026",
      "blog-p26-cat": "🏷️ Experiência de Leitura",
      "blog-p26-title": "Leia Notas de Rodapé e Links sem Perder a Sua Posição",
      "blog-p26-desc": "Nunca mais perca o fio da leitura ao tocar em notas de rodapé. Visualize notas em um card pop-up inferior e confirme links externos com segurança.",

      // Blog Post 27
      "blog-p27-date": "📅 23 de agosto de 2026",
      "blog-p27-cat": "🏷️ Leitura em Voz Alta (TTS)",
      "blog-p27-title": "Acompanhe a Leitura com Destaque em Estilo Karaoke no Shiori",
      "blog-p27-desc": "Aumente o foco e o aprendizado de idiomas com destaque sincronizado por palavra e parágrafo. Cores e opacidade totalmente personalizáveis.",

      // Blog Post 28
      "blog-p28-date": "📅 23 de agosto de 2026",
      "blog-p28-cat": "🏷️ Leitura em Voz Alta (TTS)",
      "blog-p28-title": "Leia Apenas o Texto Selecionado: Verifique a Pronúncia Frase por Frase",
      "blog-p28-desc": "Confira termos e frases estrangeiras sem perder o ritmo. Pressione o texto, toque em Aloud e ouça a pronúncia uma única vez sem alterar sua posição no livro.",

      // Feature Chips
      "chip-f1": "1. Formatos",
      "chip-f2": "2. Leitura",
      "chip-f3": "3. Marcadores",
      "chip-f4": "4. Voz TTS",
      "chip-f5": "5. Regras de Palavras",
      "chip-f6": "6. Tradução",
      "chip-f7": "7. IA no Dispositivo",
      "chip-f8": "8. Quadrinhos (CBZ)",
      "chip-f9": "9. PDF Reflow",
      "chip-f10": "10. Insights",
      "chip-f11": "11. Memória",
      "chip-f13": "13. Servidor de Biblioteca",
      "chip-f14": "14. Sincronização em Nuvem",
      "chip-f18": "18. Privacidade"
    },
    es: {
      // Navbar
      "nav-home": "Inicio",
      "nav-download": "Descargar",
      "nav-blog": "Blog",
      
      // Footer
      "footer-desc": "Un lector de EPUB para Android con una experiencia de lectura y Conversión de Texto a Voz (TTS) flexible y premium.",
      "footer-app": "Aplicación",
      "footer-legal": "Información Legal",
      "footer-privacy": "Política de Privacidad",
      "footer-terms": "Términos de Servicio",
      "footer-blog": "Blog",
      
      // Home Hero
      "hero-vision-tag": "VISIÓN",
      "hero-vision-quote": "\"De la Lectura al Aprendizaje.\"",
      "hero-tag": "Lector EPUB para Android",
      "hero-title": "Shiori <br><span class=\"text-gradient\">ePub Reader</span>",
      "hero-sub": "Experimente la lectura y escucha de siguiente nivel. Diseñado para lectores con Conversión de Texto a Voz multilingüe automática y traducción integrada.",
      "hero-get-play": "▶ Consíguelo en Google Play",
      
      // Vision Section
      "vision-sec-tag": "Nuestra Visión",
      "vision-sec-title": "\"De la Lectura al Aprendizaje.\"",
      "vision-sec-desc": "Shiori conecta la lectura pasiva con el aprendizaje activo. Con Conversión de Texto a Voz multilingüe automática, traducción en tiempo real dentro de la aplicación, reglas personalizables de sustitución de palabras y herramientas inteligentes de IA, cada libro se convierte en un portal hacia un conocimiento más profundo.",
      "footer-vision": "— De la Lectura al Aprendizaje.",
      
      // Permanent Knowledge Section
      "know-tag": "CONOCIMIENTO PERMANENTE",
      "know-title": "Tu Conocimiento de Lectura <span>Permanece Contigo</span>",
      "know-sub": "Los libros pueden ir y venir, pero tu conocimiento no debería desaparecer.",
      "know-hero-badge": "🔒 Guardado Más Allá de los Libros",
      "know-intro": "Shiori conserva todo lo que creas mientras lees, incluso si el libro original se elimina de tu dispositivo, se devuelve a la biblioteca o ya no está disponible.",
      "know-data-head": "Tus datos personales de lectura permanecen almacenados de forma segura, incluyendo:",
      "know-item-1": "Marcadores",
      "know-item-2": "Notas",
      "know-item-3": "Resaltados",
      "know-item-4": "Resúmenes de IA",
      "know-item-5": "Conversaciones con IA",
      "know-item-6": "Progreso e Historial de Lectura",
      "know-outro": "Esto significa que siempre puedes volver a consultar las ideas, conceptos y conocimientos recopilados sin necesidad de tener el libro original.",
      "know-card1-title": "Perfecto para Libros de Biblioteca",
      "know-card1-desc": "Los libros prestados eventualmente vencen o deben devolverse. Normally, esto significaría perder el acceso a tu contexto de lectura. Con Shiori, tus notas personales y los análisis generados por IA permanecen disponibles incluso después de devolver el libro.",
      "know-card2-title": "Tus Datos, Tu Conocimiento",
      "know-card2-desc": "Shiori almacena tus datos de lectura, no el libro en sí. Incluso si eliminas un libro para ahorrar espacio, tu base personal de conocimiento se mantiene intacta, lista para cuando necesites repasar una idea o cita importante.",
      "know-motto": "\"Porque los grandes libros pueden salir de tu biblioteca, pero el conocimiento que obtuviste de ellos no debería desaparecer.\"",
      
      // Home Screenshots
      "ss-tag": "Capturas de Pantalla",
      "ss-title": "Explora la Interfaz de <span>Shiori</span>",
      "ss-sub": "Capturas de pantalla reales de Shiori EPUB Reader en Android mostrando su diseño limpio, premium y minimalista.",
      
      // Home Features
      "feat-tag": "Características Clave",
      "feat-title": "Funciones Diseñadas para <span>Todos los Lectores</span>",
      "feat-sub": "Diseñamos cuidadosamente estas características para maximizar tu productividad de lectura.",
      "feat-1-title": "Biblioteca Inteligente",
      "feat-1-desc": "Gestiona tu colección EPUB con 3 modos de vista (Miniatura, Lista, Detalle). Registra el progreso de lectura automáticamente.",
      "feat-2-title": "Lector EPUB Fluido",
      "feat-2-desc": "Navegación de desplazamiento continuo (Infinite Scroll) con lista de capítulos con buscador. Reanuda en el párrafo exacto, incluso donde se detuvo el TTS.",
      "feat-3-title": "Marcadores, Resaltados y Notas",
      "feat-3-desc": "Resalta texto en múltiples colores, adjunta notas y marca párrafos con sutiles contornos visuales.",
      "feat-4-title": "Controles Flotantes",
      "feat-4-desc": "El panel flotante de TTS funciona sobre cualquier app. Ajusta el tamaño, fíjalo al borde y escucha mientras te desplazas.",
      "feat-5-title": "Sustitución Inteligente de Texto",
      "feat-5-desc": "Modifica palabras antes de la reproducción TTS. Soporta más de 5,000 entradas y expresiones regulares para corregir la pronunciación.",
      "feat-6-title": "Seleccionar y Traducir",
      "feat-6-desc": "Toca cualquier palabra para traducir, copiar, iniciar TTS desde la selección o agregar a las reglas al instante.",
      
      // Home Pro Features
      "pro-tag": "Funciones Avanzadas",
      "pro-title": "Explora las <span>Funciones Pro</span>",
      "pro-sub": "Herramientas diseñadas para brindarte control total sobre tu experiencia de lectura.",
      "pro-tts-title": "TTS Avanzado y Control de Idioma",
      "pro-tts-sub": "Control preciso de reproducción con cambio automático e inteligente de voz multilingüe.",
      "pro-tts-1": "🎯 <strong>Detección Automática:</strong> Detecta automáticamente el idioma de 6 alfabetos (TH, EN, ZH, JA, KO, DE) y cambia de voz sin interrupciones por párrafo.",
      "pro-tts-2": "▲▼ <strong>Orden de Prioridad:</strong> Resuelve conflictos de alfabetos compartidos ajustando la prioridad de los idiomas.",
      "pro-tts-3": "⇅ <strong>Desplazamiento y Resaltado:</strong> Desplaza automáticamente la vista del lector para acompañar el párrafo que se lee en tiempo real.",
      "pro-rep-title": "Sustitución de Texto en Modo Doble",
      "pro-rep-sub": "Corrige problemas de pronunciación o diseños visuales de forma independiente con configuraciones de reglas avanzadas.",
      "pro-rep-1": "🎨 <strong>Sustitución Visual:</strong> Sustituye palabras coincidentes visualmente en el lector y en la lectura TTS.",
      "pro-rep-2": "🔊 <strong>Sustitución TTS:</strong> Sustituye palabras solo al enviarlas al motor TTS, manteniendo el texto original visible en la página.",
      "pro-rep-3": "⚡ <strong>Sistema de Importación/Exportación:</strong> Búsqueda rápida de reglas, soporte para Regex e importación/exportación mediante archivos de texto.",
      "pro-float-title": "Panel Flotante Inteligente",
      "pro-float-sub": "Continúa escuchando en segundo plano o con la pantalla apagada mediante controles flotantes interactivos.",
      "pro-float-1": "🤏 <strong>Ajuste de Tamaño:</strong> Ajusta el área de visualización del cuadro de texto sin cambiar el tamaño de fuente del lector.",
      "pro-float-2": "🧲 <strong>Fijar al Borde:</strong> Arrastar más del 50% fuera de la pantalla fija el panel al 15% de visibilidad para mantener la pantalla despejada.",
      "pro-float-3": "🔄 <strong>Doble Toque para Centrar:</strong> Toca rápidamente dos veces el panel para volver a centrarlo en la pantalla.",
      "pro-vis-title": "Personalización Visual Avanzada",
      "pro-vis-sub": "Supera problemas de renderizado y estilos personalizados incrustados en los archivos de libros.",
      "pro-vis-1": "🔤 <strong>Forzar Fuente del Sistema:</strong> Fuerza la fuente estándar del dispositivo para una lectura estable.",
      "pro-vis-2": "🚫 <strong>Desactivar CSS del EPUB:</strong> Descarta las hojas de estilo de la editorial y da formato al diseño usando los ajustes limpios de la app.",
      "pro-vis-3": "🌈 <strong>Eliminar Color de Fuente:</strong> Elimina colores predeterminados para mantener el confort visual en temas Oscuro o Sepia.",
      
      // Home Advanced TTS Card
      "card-tts-title": "Conversión de Texto a Voz (TTS) Multilingüe Avanzada",
      "card-tts-desc": "Detecta automáticamente textos en varios idiomas dentro del mismo párrafo y cambia de voz fluidamente. Ajusta velocidad, tono y voz por idioma. Funciona sin conexión con el motor TTS nativo de tu dispositivo.",
      
      // Home Google Drive Cloud Sync Card
      "card-sync-title": "Sincronización en la Nube con Google Drive",
      "card-sync-sub": "(Google Drive Cloud Sync)",
      "card-sync-desc": "Sincronización opcional en la nube. Guarda libros, progreso de lectura y reglas de texto directamente en tu Google Drive privado. 100% seguro: no tenemos servidores de bases de datos y no podemos acceder a tus datos.",
      "card-sync-1": "✓ Conexión directa y segura entre la aplicación y Google Drive",
      "card-sync-2": "✓ Sincroniza en todos tus dispositivos Android personales",
      "card-sync-3": "✓ Los datos permanecen bajo el control de tu propio almacenamiento",
      
      // Home Blog Section
      "home-blog-tag": "Últimos Artículos",
      "home-blog-title": "Consejos, Guías y <span>Insights</span>",
      "home-blog-sub": "Descubre cómo personalizar Shiori, configurar servidores de biblioteca y sacar el máximo provecho de tu lectura.",
      
      // Home CTA
      "cta-title": "¿Listo para Elevar tu Experiencia de Lectura?",
      "cta-desc": "Descarga Shiori EPUB Reader gratis en Google Play Store.",
      "cta-play": "▶ Consíguelo en Google Play",
      
      // Video section
      "video-tag": "Guías en Video",
      "video-title": "Aprende a Usar <span>Shiori</span>",
      "video-sub": "Mira nuestros tutoriales en video paso a paso para dominar las funciones avanzadas de Shiori.",
      
      // Download page
      "dl-tag": "Obtén Shiori ePub Reader",
      "dl-title": "Descarga <span>Shiori EPUB Reader</span>",
      "dl-sub": "Elige tu método de instalación preferido. Compatible con Android 8.0 (API 26) o superior. 100% libre de anuncios durante la lectura.",
      "dl-card-play-title": "Google Play Store",
      "dl-card-play-desc": "Recomendado. Se instala y actualiza automáticamente. Seguro y verificado por Google Play Protect.",
      "dl-card-play-btn": "Consíguelo en Play Store",
      
      // Blog list
      "blog-tag": "Blog Oficial",
      "blog-title": "Blog y <span>Actualizaciones</span>",
      "blog-sub": "Lee los últimos anuncios, tutoriales, guias y publicaciones de nuevas versiones.",
      "blog-p1-date": "📅 29 de junio de 2026",
      "blog-p1-cat": "🏷️ Anuncios",
      "blog-p1-title": "Presentamos Shiori EPUB Reader para Android",
      "blog-p1-desc": "Descubre Shiori (栞), un lector de EPUB sin conexión diseñado para mejorar tu experiencia de lectura digital con TTS multilingüe avanzado...",
      "blog-p1-btn": "Leer Artículo Completo",
      "blog-p2-date": "📅 Próximamente",
      "blog-p2-cat": "🏷️ Consejos y Trucos",
      "blog-p2-title": "Configuración del Motor TTS para una Pronunciación Natural",
      "blog-p2-desc": "Guía paso a paso para instalar archivos de voz de alta calidad en los ajustes del sistema Android y optimizar la lectura en Shiori...",
      "blog-p2-status": "Próximamente",
      
      // Blog Post 3
      "blog-p3-date": "📅 17 de julio de 2026",
      "blog-p3-cat": "🏷️ E-Books",
      "blog-p3-title": "Los 5 Mejores Sitios para Descargar Libros EPUB Gratis",
      "blog-p3-desc": "¿Buscas nuevos libros para leer? Aquí tienes los mejores sitios web para encontrar archivos EPUB legales, gratuitos y de alta calidad.",
      
      // Blog Post 4
      "blog-p4-date": "📅 17 de julio de 2026",
      "blog-p4-cat": "🏷️ Guías",
      "blog-p4-title": "Cómo Sincronizar Shiori con Kavita (OPDS y REST API)",
      "blog-p4-desc": "Transmite tu biblioteca digital y sincroniza tu progreso de lectura conectando Shiori EPUB Reader a tu servidor Kavita.",
      
      // Blog Post 5
      "blog-p5-date": "📅 19 de julio de 2026",
      "blog-p5-cat": "🏷️ Guías",
      "blog-p5-title": "Cómo Importar Fuentes Personalizadas en Shiori",
      "blog-p5-desc": "Personaliza tu lectura importando tus archivos de fuente favoritos y asignando tipografías personalizadas para diferentes idiomas.",
      
      // Blog Post 6
      "blog-p6-date": "📅 22 de julio de 2026",
      "blog-p6-cat": "🏷️ Funciones",
      "blog-p6-title": "Cómo Traducir EPUB a Múltiples Idiomas Simultáneamente",
      "blog-p6-desc": "Aprende a usar el panel de traducción multilingüe de Shiori para traducir párrafos a varios idiomas de destino al mismo tiempo.",
      
      // Blog Post 7
      "blog-p7-date": "📅 23 de julio de 2026",
      "blog-p7-cat": "🏷️ Guía Completa",
      "blog-p7-title": "Guía Completa de Funciones de Shiori: Las 19 Capacidades Explicadas",
      "blog-p7-desc": "Explora el desglose completo de funciones de Shiori EPUB Reader, desde TTS multilingüe y traducción con IA hasta PDF inteligentes, OCR de cómics CBZ y sincronización con Google Drive.",

      // Blog Post 8
      "blog-p8-date": "📅 2 de agosto de 2026",
      "blog-p8-cat": "🏷️ Insights y Estadísticas",
      "blog-p8-title": "Sigue tu Viaje de Lectura con la Línea de Tiempo y Progreso del Libro",
      "blog-p8-desc": "Aprende cómo la función de Línea de Tiempo e Insights de Shiori te permite rastrear la velocidad de lectura, el tiempo dedicado y los gráficos de progreso.",

      // Blog Post 9
      "blog-p9-date": "📅 2 de agosto de 2026",
      "blog-p9-cat": "🏷️ Experiencia de Lectura",
      "blog-p9-title": "Lee Libros EPUB sin Pasar Páginas: El Poder del Infinite Scroll",
      "blog-p9-desc": "Descubre cómo la función de Desplazamiento Continuo (Infinite Scroll) de Shiori transforma la lectura de libros electrónicos en una experiencia fluida y sin distracciones.",

      // Blog Post 10
      "blog-p10-date": "📅 2 de agosto de 2026",
      "blog-p10-cat": "🏷️ Integración con Calibre",
      "blog-p10-title": "Envía Libros de Calibre Inalámbricamente a tu Dispositivo Android",
      "blog-p10-desc": "Aprende a transferir e-books EPUB desde Calibre en tu computadora a Shiori EPUB Reader en Android mediante Wi-Fi local sin cables USB.",

      // Blog Post 11
      "blog-p11-date": "📅 3 de agosto de 2026",
      "blog-p11-cat": "🏷️ Hábitos de Lectura",
      "blog-p11-title": "Por Qué Registrar tus Estadísticas de Lectura Te Ayuda a Leer Más Libros",
      "blog-p11-desc": "Descubre cómo registrar la velocidad de lectura, el tiempo total y compartir hermosas tarjetas de logros en Shiori ayuda a mantener el hábito de lectura.",

      // Blog Post 12
      "blog-p12-date": "📅 11 de agosto de 2026",
      "blog-p12-cat": "🏷️ Experiencia de Lectura",
      "blog-p12-title": "Cómo Usar el Tema E-Ink para una Lectura EPUB Similar al Papel en Android",
      "blog-p12-desc": "Convierte Shiori en un lector de alto contraste y sin distracciones: blanco y negro puro, sin animaciones y aplicado en toda la app. Ideal para Onyx Boox y dispositivos e-paper.",

      // Blog Post 13
      "blog-p13-date": "📅 11 de agosto de 2026",
      "blog-p13-cat": "🏷️ Experiencia de Lectura",
      "blog-p13-title": "Cómo Resaltar Texto y Tomar Notas en un Lector EPUB para Android",
      "blog-p13-desc": "Resalta pasajes memorables en 8 colores armoniosos, añade tus propias notas y redescubre cada aprendizaje en la pestaña Memory de Shiori.",

      // Blog Post 14
      "blog-p14-date": "📅 11 de agosto de 2026",
      "blog-p14-cat": "🏷️ Experiencia de Lectura",
      "blog-p14-title": "Barra Superior en Dos Líneas: Todas las Herramientas a un Solo Toque",
      "blog-p14-desc": "La barra superior experimental de dos líneas muestra el título completo arriba y todas las acciones de lectura en una fila deslizable abajo, sin menús ocultos.",

      // Blog Post 15
      "blog-p15-date": "📅 11 de agosto de 2026",
      "blog-p15-cat": "🏷️ Servidores de Biblioteca",
      "blog-p15-title": "Cómo Añadir un Bucket S3 como Servidor de Biblioteca (AWS S3, MinIO, R2)",
      "blog-p15-desc": "Conecta cualquier bucket compatible con S3 (AWS S3, MinIO, Cloudflare R2, Wasabi o DigitalOcean Spaces), explora carpetas y descarga libros EPUB directamente en tu dispositivo.",

      // Blog Post 16
      "blog-p16-date": "📅 11 de agosto de 2026",
      "blog-p16-cat": "🏷️ Organización de la Biblioteca",
      "blog-p16-title": "Organiza tus Libros Electrónicos con Colecciones (Crear, Filtrar y Gestionar)",
      "blog-p16-desc": "Crea estanterías personalizadas con colores, añade libros a varias colecciones, reordena y filtra toda tu biblioteca por estado de lectura en un solo toque.",

      // Blog Post 17
      "blog-p17-date": "📅 14 de agosto de 2026",
      "blog-p17-cat": "🏷️ Servidores de Biblioteca",
      "blog-p17-title": "Cómo Conectar un Catálogo OPDS a tu Lector Android",
      "blog-p17-desc": "Añade fuentes OPDS de Calibre, Calibre-Web, Komga, Kavita o Project Gutenberg para explorar y descargar libros EPUB directamente en tu estantería.",

      // Blog Post 18
      "blog-p18-date": "📅 15 de agosto de 2026",
      "blog-p18-cat": "🏷️ Experiencia de Lectura",
      "blog-p18-title": "EPUB con Desplazamiento Horizontal: Lee un Rollo Ilustrado Japonés",
      "blog-p18-desc": "Descarga el ejemplo gratuito de emakimono y despliega en horizontal un rollo del siglo XII, además de cómo el modo gestiona el texto vertical japonés.",

      // Blog Post 19
      "blog-p19-date": "📅 15 de agosto de 2026",
      "blog-p19-cat": "🏷️ Experiencia de Lectura",
      "blog-p19-title": "Reemplazo de Texto y Regex: Reescribe lo que Lees y Escuchas",
      "blog-p19-desc": "Todos los flujos de las reglas visuales y de TTS, más un recetario de 16 patrones regex, grupos por idioma de voz y las comprobaciones que detienen un patrón defectuoso.",

      // Blog Post 20
      "blog-p20-date": "📅 15 de agosto de 2026",
      "blog-p20-cat": "🏷️ Sincronización y Respaldo",
      "blog-p20-title": "Sincronización en la Nube con Google Drive: Tu Biblioteca en Cualquier Dispositivo",
      "blog-p20-desc": "Del inicio de sesión a un segundo dispositivo: cómo sincronizar tu progreso de lectura, destacados, notas y estanterías en tu propio Google Drive.",

      // Blog Post 21
      "blog-p21-date": "📅 15 de agosto de 2026",
      "blog-p21-cat": "🏷️ Lectura en Voz Alta (TTS)",
      "blog-p21-title": "TTS Multilingüe: Un Solo Libro, Todas las Voces",
      "blog-p21-desc": "Cómo Shiori cambia de voz a mitad de frase según el tipo de escritura y gestiona prioridades para caracteres compartidos y velocidades por idioma.",

      // Blog Post 22
      "blog-p22-date": "📅 15 de agosto de 2026",
      "blog-p22-cat": "🏷️ Experiencia de Lectura",
      "blog-p22-title": "Todos los Botones de la Pantalla de Lectura: Guía Toque a Toque",
      "blog-p22-desc": "Nueve iconos en la barra superior, siete en la inferior y el menú de pulsación prolongada con 12 funciones explicadas al detalle.",

      // Blog Post 23
      "blog-p23-date": "📅 15 de agosto de 2026",
      "blog-p23-cat": "🏷️ Importación y Transferencia",
      "blog-p23-title": "Book Drop: Envía Libros a tu Teléfono por Wi-Fi",
      "blog-p23-desc": "Arrastra EPUBs a una página que tu propio teléfono sirve en tu red — sin cable, sin cuenta en la nube y sin instalar nada en el ordenador.",

      // Blog Post 24
      "blog-p24-date": "📅 19 de agosto de 2026",
      "blog-p24-cat": "🏷️ Servidores de Biblioteca",
      "blog-p24-title": "Cómo Conectar Komga a Shiori en Android (Portadas + Progreso)",
      "blog-p24-desc": "Conecta tu servidor Komga a Shiori en Android mediante la REST API nativa para disfrutar de portadas, metadatos completos y sincronización de lectura.",

      // Blog Post 25
      "blog-p25-date": "📅 22 de agosto de 2026",
      "blog-p25-cat": "🏷️ Experiencia de Lectura",
      "blog-p25-title": "El EPUB Está Bien, lo que Falla Es el Estilo: Toma el Control en Android",
      "blog-p25-desc": "¿Texto ilegible en modo oscuro o fuentes bloqueadas? Aprende a anular hojas de estilo defectuosas con 4 ajustes en Shiori.",

      // Blog Post 26
      "blog-p26-date": "📅 23 de agosto de 2026",
      "blog-p26-cat": "🏷️ Experiencia de Lectura",
      "blog-p26-title": "Lee Notas al Pie y Enlaces sin Perder tu Posición de Lectura",
      "blog-p26-desc": "Evita perder tu línea de lectura en libros académicos y anotados. Previsualiza notas en una tarjeta emergente y confirma enlaces web externos.",

      // Blog Post 27
      "blog-p27-date": "📅 23 de agosto de 2026",
      "blog-p27-cat": "🏷️ Lectura en Voz Alta (TTS)",
      "blog-p27-title": "Lee y Escucha con Resaltado Estilo Karaoke en Shiori",
      "blog-p27-desc": "Mejora tu concentración y aprendizaje de idiomas con resaltado sincronizado por palabra y párrafo. Colores y opacidad totalmente ajustables.",

      // Blog Post 28
      "blog-p28-date": "📅 23 de agosto de 2026",
      "blog-p28-cat": "🏷️ Lectura en Voz Alta (TTS)",
      "blog-p28-title": "Lee Solo el Texto Seleccionado: Comprueba la Pronunciación Frase a Frase",
      "blog-p28-desc": "Comprueba palabras dudosas y frases en otros idiomas al instante. Mantén pulsado, toca Aloud y escucha la pronunciación sin mover tu posición ni pausar la lectura continua.",

      // Feature Chips
      "chip-f1": "1. Formatos",
      "chip-f2": "2. Lectura",
      "chip-f3": "3. Marcadores",
      "chip-f4": "4. Voz TTS",
      "chip-f5": "5. Reglas de Texto",
      "chip-f6": "6. Traducción",
      "chip-f7": "7. IA en Dispositivo",
      "chip-f8": "8. Cómics (CBZ)",
      "chip-f9": "9. PDF Reflow",
      "chip-f10": "10. Insights",
      "chip-f11": "11. Memoria",
      "chip-f13": "13. Servidor de Biblioteca",
      "chip-f14": "14. Nube",
      "chip-f18": "18. Privacidad"
    }
  };

  // --- Theme Toggle Setup ---
  const themeToggleBtn = document.getElementById('theme-toggle');
  const body = document.body;

  // Check saved theme or system preference
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

  if (savedTheme === 'light' || (!savedTheme && systemPrefersLight)) {
    body.classList.add('light-theme');
    updateThemeIcon(true);
  } else {
    body.classList.remove('light-theme');
    updateThemeIcon(false);
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      body.classList.toggle('light-theme');
      const isLight = body.classList.contains('light-theme');
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
      updateThemeIcon(isLight);
    });
  }

  function updateThemeIcon(isLight) {
    if (!themeToggleBtn) return;
    if (isLight) {
      themeToggleBtn.innerHTML = '🌙';
      themeToggleBtn.setAttribute('aria-label', 'Switch to Dark Mode');
    } else {
      themeToggleBtn.innerHTML = '☀️';
      themeToggleBtn.setAttribute('aria-label', 'Switch to Light Mode');
    }
  }

  // --- Translation i18n Engine ---
  const langToggleBtn = document.getElementById('lang-toggle');

  // Check saved lang or system preference
  let currentLang = localStorage.getItem('lang');
  if (!currentLang) {
    const userLanguage = (navigator.language || navigator.userLanguage || '').toLowerCase();
    if (userLanguage.startsWith('th')) currentLang = 'th';
    else if (userLanguage.startsWith('ja')) currentLang = 'jp';
    else if (userLanguage.startsWith('zh')) currentLang = 'cn';
    else if (userLanguage.startsWith('pt')) currentLang = 'pt';
    else if (userLanguage.startsWith('es')) currentLang = 'es';
    else currentLang = 'en';
  }

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.setAttribute('lang', lang);

    // Update language button text
    if (langToggleBtn) {
      const labels = { en: '🌐 EN', th: '🌐 TH', jp: '🌐 JP', cn: '🌐 CN', pt: '🌐 PT', es: '🌐 ES' };
      langToggleBtn.innerHTML = labels[lang] || `🌐 ${lang.toUpperCase()}`;
      langToggleBtn.setAttribute('aria-label', `Toggle Language. Current: ${lang.toUpperCase()}`);
    }

    // Apply translations to elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        const text = translations[lang][key];
        if (text.includes('<') || text.includes('&') || text.includes('strong') || text.includes('span')) {
          el.innerHTML = text;
        } else {
          el.textContent = text;
        }
      }
    });

    // Handle inputs placeholders translation
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (translations[lang] && translations[lang][key]) {
        el.setAttribute('placeholder', translations[lang][key]);
      }
    });

    // Toggle block-level languages (for static articles/sections)
    const availableLangs = ['en', 'th', 'jp', 'cn', 'pt', 'es'];
    availableLangs.forEach(l => {
      document.querySelectorAll(`.lang-${l}`).forEach(el => {
        el.style.display = (l === lang) ? 'block' : 'none';
      });
    });

    // Update HTML lang attribute
    document.documentElement.setAttribute('lang', lang);
  }

  // Initialize Language
  setLanguage(currentLang);

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      let nextLang = 'en';
      if (currentLang === 'en') nextLang = 'th';
      else if (currentLang === 'th') nextLang = 'jp';
      else if (currentLang === 'jp') nextLang = 'cn';
      else if (currentLang === 'cn') nextLang = 'pt';
      else if (currentLang === 'pt') nextLang = 'es';
      else if (currentLang === 'es') nextLang = 'en';
      setLanguage(nextLang);
    });
  }

  // --- Mobile Navigation Menu ---
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const expanded = navLinks.classList.contains('active');
      mobileMenuBtn.setAttribute('aria-expanded', expanded);
      mobileMenuBtn.innerHTML = expanded ? '✕' : '☰';
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuBtn.innerHTML = '☰';
      });
    });
  }

  // --- Smooth Reveal Animation on Scroll ---
  const animateElements = document.querySelectorAll('.animate-fade-in');
  
  if ('IntersectionObserver' in window && animateElements.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          const delay = entry.target.dataset.delay;
          if (delay) {
            entry.target.style.animationDelay = delay;
          }
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    animateElements.forEach(el => observer.observe(el));
  }

  // --- Homepage Mockup Slideshow ---
  const mockupSlides = document.querySelectorAll('.mockup-slide');
  const mockupDots = document.querySelectorAll('.mockup-dot');
  const mockupPrev = document.getElementById('mockup-prev');
  const mockupNext = document.getElementById('mockup-next');

  if (mockupSlides.length > 0) {
    let activeIndex = 0;
    let autoPlayTimer = null;

    const showSlide = (index) => {
      activeIndex = index;
      mockupSlides.forEach((slide, idx) => {
        slide.classList.toggle('active', idx === activeIndex);
      });
      mockupDots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === activeIndex);
      });
    };

    const nextSlide = () => {
      let nextIdx = activeIndex + 1;
      if (nextIdx >= mockupSlides.length) nextIdx = 0;
      showSlide(nextIdx);
    };

    const prevSlide = () => {
      let prevIdx = activeIndex - 1;
      if (prevIdx < 0) prevIdx = mockupSlides.length - 1;
      showSlide(prevIdx);
    };

    // Auto play every 4 seconds
    const startAutoPlay = () => {
      autoPlayTimer = setInterval(nextSlide, 4000);
    };

    const stopAutoPlay = () => {
      if (autoPlayTimer) clearInterval(autoPlayTimer);
    };

    if (mockupNext) {
      mockupNext.addEventListener('click', () => {
        stopAutoPlay();
        nextSlide();
        startAutoPlay();
      });
    }

    if (mockupPrev) {
      mockupPrev.addEventListener('click', () => {
        stopAutoPlay();
        prevSlide();
        startAutoPlay();
      });
    }

    mockupDots.forEach((dot, idx) => {
      dot.addEventListener('click', () => {
        stopAutoPlay();
        showSlide(idx);
        startAutoPlay();
      });
    });

    // Start auto slideshow
    startAutoPlay();
  }
});
