# One Book, Every Voice — Multi-Language Text-to-Speech, Explained

Most read-aloud features ask a question that real books cannot answer: *what language is this?* When you pick just one, the voice engine reads everything through that single lens, and the very first foreign word turns into awkward noise. A Thai novel says "smartphone" and the Thai voice spells it out letter by letter. A Japanese essay quotes *Hamlet* in English, and the Japanese engine recites the alphabet like serial numbers.

Shiori takes a fundamentally smarter approach: **enable every language you actually read**, and the app seamlessly switches voices mid-sentence wherever the script changes — with zero tagging, no book-by-book reconfiguring, and nothing for you to toggle manually.

> **In one sentence:** Shiori divides each paragraph into character runs by script, assigns each run to its corresponding native voice, and keeps the word-level highlight perfectly synchronized on the page.

---

## 1. Why One Language Is Never Enough

- **Loanwords and brand names:** Modern writing in Thai, Japanese, Korean, and Chinese is filled with Latin-script words — tech gadgets, brand names, and scientific acronyms.
- **Quotations:** Great literature frequently cites other works in their original tongue.
- **Language learning:** Bilingual editions and parallel texts place two languages side by side by design.
- **Technical literature:** Code snippets, terminal commands, and English terminology sit directly inside your native sentences.
- **Your reading life:** Switching between a Japanese light novel and an English non-fiction book on the same phone should never require changing global settings.

The point of multi-language TTS is not merely to support many languages — it is to survive the sentence that contains two of them.

## 2. How Shiori Decides Which Voice Speaks

| Text On The Page | Voice Engine Used |
| --- | --- |
| Thai script | Your Thai voice |
| Hangul (Korean) | Your Korean voice |
| Hiragana & Katakana | Your Japanese voice |
| Han characters (漢字) | Chinese or Japanese — shared, resolved by list priority |
| Latin alphabet | English, Spanish, German — resolved by list priority |
| Punctuation, digits, spaces | Current active script run (no disruptive switching at commas) |

A character run is the exact span belonging to a single script. Each run preserves its exact text offset, ensuring that word-by-word visual highlights stay locked onto the right words even as voices change hands mid-sentence. If only one language is enabled, Shiori streams the entire paragraph directly to that voice without extra overhead.

---

## Step-by-Step Guide (5 Steps)

### Step 1: Open TTS Listening Settings
Go to **Settings → TTS Listening**. Here you will see your device's **TTS Engine** and the **TTS Languages** option displaying your currently enabled voices.

### Step 2: Enable the Languages You Read
Shiori supports **44 languages**. Check the box for the languages you actually read. Active languages automatically float to the top of the list for easy management.

### Step 3: Set Priority for Shared Scripts
Use the **▲ ▼** arrows to order languages. When a script is shared (like 漢字 between Chinese and Japanese, or Latin between English and Spanish), **the language higher on the list takes priority**.

### Step 4: Customize Pitch and Speed per Language
Tap on any language to adjust its specific **voice pitch**, **reading speed**, and voice profile. Tap ▶ to test the speech instantly.

### Step 5: Choose Between Offline and Online Voices
The **Voice** dropdown lists available voice profiles from your TTS engine, labeled as *Offline* (data-free, works anywhere) or *Online* (higher fidelity).

---

## Automatic Language Prompts

When you start reading aloud, Shiori samples the chapter. If the dominant script's language is not yet enabled, Shiori gently asks whether you would like to enable it and places it at the top of your list.

## Three Recommended Configurations

| Reader Profile | Languages to Enable | Priority Advice |
| --- | --- | --- |
| **Single-language reader** | Just that one language | No conflicts possible; fastest performance |
| **Bilingual reader** | Native Language + English | Keep native language on top; English reads Latin script |
| **CJK multi-reader** | Japanese and/or Chinese + English | Place the language you read most on top to resolve 漢字 |

---

## Frequently Asked Questions

**Does Shiori detect language per book or per sentence?**  
Neither — it works at character-run granularity. Each paragraph is split into segments of matching scripts, allowing a single English loanword inside a Thai sentence to be read with an English voice before seamlessly returning to Thai.

**Why is my Chinese book read with a Japanese voice?**  
Han characters are shared between Chinese and Japanese. To fix this, open TTS Languages and move 中文 above 日本語 using the ▲ arrow so Chinese takes precedence.

**Do I need to install additional data for a new language?**  
Voices are provided by your Android device's text-to-speech engine. If a language is silent, download its voice data in your Android system TTS settings, then select it in Shiori.

**Can each language have its own speed and pitch?**  
Yes. Pitch, speed, and voice model are stored individually per language so faster English and measured Thai narration blend together harmoniously.

---

## Listen to Your Books the Natural Way

Download **Shiori EPUB Reader**, configure your favorite reading languages, and enjoy seamless, multi-voice narration.
