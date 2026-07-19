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
      "blog-p5-desc": "Personalize your reading experience by importing your favorite font files and assigning custom typography settings for different languages."
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
      "blog-p5-desc": "ปรับแต่งหน้าตาการอ่านให้น่าอ่านยิ่งขึ้นด้วยการนำเข้าไฟล์ฟอนต์ที่คุณชอบ และเลือกฟอนต์เฉพาะสำหรับแต่ละภาษาได้อย่างอิสระ"
    },
    jp: {
      "nav-home": "ホーム",
      "nav-download": "ダウンロード",
      "nav-blog": "ブログ",
      "footer-desc": "プレミアムで柔軟な読書と読み上げ（TTS）機能を提供するAndroid用EPUBリーダー。",
      "footer-app": "アプリケーション",
      "footer-legal": "法的情報",
      "footer-privacy": "プライバシーポリシー",
      "footer-terms": "利用規約",
      "footer-blog": "ブログ",
      
      // Blog Post 5
      "blog-p5-date": "📅 2026年7月19日",
      "blog-p5-cat": "🏷️ ガイド",
      "blog-p5-title": "Shioriにカスタムフォントをインポートする方法",
      "blog-p5-desc": "お好みのフォントファイルをインポートし、表示言語ごとにカスタムフォントを割り当てることで、読書体験を自分好みにカスタマイズしましょう。"
    },
    cn: {
      "nav-home": "首页",
      "nav-download": "下载",
      "nav-blog": "博客",
      "footer-desc": "一款专为安卓打造的优质EPUB阅读器，提供灵活的阅读界面和出色的文本转语音（TTS）朗读体验。",
      "footer-app": "应用程序",
      "footer-legal": "法律信息",
      "footer-privacy": "隐私政策",
      "footer-terms": "服务条款",
      "footer-blog": "博客",
      
      // Blog Post 5
      "blog-p5-date": "📅 2026年7月19日",
      "blog-p5-cat": "🏷️ 指南",
      "blog-p5-title": "如何在 Shiori 中导入自定义字体",
      "blog-p5-desc": "通过导入您最喜欢的字体文件，并为不同的显示语言分配自定义字体，打造最符合您个人喜好的完美阅读体验。"
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
});
