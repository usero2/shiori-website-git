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
      "hero-tag": "EPUB Reader for Android",
      "hero-title": "Shiori <br><span class=\"text-gradient\">ePub Reader</span>",
      "hero-sub": "Experience next-level reading and listening. Designed for Thai readers with automatic multi-language Text-to-Speech and in-app translation.",
      "hero-get-play": "▶ Get it on Google Play",
      
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
      "hero-tag": "ตัวอ่านไฟล์ EPUB บนระบบ Android",
      "hero-title": "Shiori <br><span class=\"text-gradient\">ePub Reader</span>",
      "hero-sub": "สัมผัสประสบการณ์การอ่านและการฟังที่เหนือระดับ ออกแบบเป็นพิเศษสำหรับผู้อ่านชาวไทย พร้อมฟังก์ชัน Text-to-Speech สลับภาษาอัตโนมัติ และระบบแปลภาษาในแอป",
      "hero-get-play": "▶ Get it on Google Play",
      
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
      "blog-sub": "ติดตามบทความ ข้อมูลการใช้งาน เทคนิคการตั้งค่า และอัปเดตเวอร์ชันใหม่จากทีมพัฒนา",
      "blog-p1-date": "📅 29 มิถุนายน 2026",
      "blog-p1-cat": "🏷️ ประกาศข่าว",
      "blog-p1-title": "ขอแนะนำ Shiori EPUB Reader แอปพลิเคชันอ่านและฟังสำหรับคนไทย",
      "blog-p1-desc": "เจาะลึกที่มาของ Shiori (栞) แอปอ่านไฟล์ EPUB บน Android ที่ถูกออกแบบเพื่อเพิ่มประสิทธิภาพการอ่าน และฟังก์ชันการออกเสียงสองภาษาที่เน้นความไหลลื่น...",
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
      "blog-p3-desc": "กำลังหาหนังสืออ่านอยู่ใช่ไหม? นี่คือเว็บยอดนิยมที่คุณสามารถหาไฟล์ EPUB คุณภาพดี ฟรี และถูกกฎหมาย เพื่อนำมาเปิดอ่านใน Shiori",
      
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
      "hero-tag": "Android用EPUBリーダー",
      "hero-title": "Shiori <br><span class=\"text-gradient\">ePub Reader</span>",
      "hero-sub": "ワンランク上の読書と朗読体験を。自動多言語音声読み上げ（TTS）とアプリ内翻訳機能を搭載。",
      "hero-get-play": "▶ Google Play で入手",
      
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
      "hero-tag": "Android EPUB 阅读器",
      "hero-title": "Shiori <br><span class=\"text-gradient\">ePub 阅读器</span>",
      "hero-sub": "体验全新的阅读与听书方式。配备自动多语言文本转语音（TTS）与应用内翻译功能。",
      "hero-get-play": "▶ Google Play 下载",
      
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
    const userLanguage = navigator.language || navigator.userLanguage;
    currentLang = userLanguage.startsWith('th') ? 'th' : 'en';
  }

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.setAttribute('lang', lang);

    // Update language button text
    if (langToggleBtn) {
      langToggleBtn.innerHTML = `🌐 ${lang.toUpperCase()}`;
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
    const availableLangs = ['en', 'th', 'jp', 'cn'];
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
      else if (currentLang === 'cn') nextLang = 'en';
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
