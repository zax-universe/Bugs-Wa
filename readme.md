<div align="center">

# 🤖 BUGS-WA BOT

[![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://www.whatsapp.com)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://www.javascript.com)
[![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![GitHub Stars](https://img.shields.io/github/stars/zax-universe/Bugs-Wa?style=for-the-badge&logo=github&color=gold)](https://github.com/zax-universe/Bugs-Wa)
[![GitHub Issues](https://img.shields.io/github/issues/zax-universe/Bugs-Wa?style=for-the-badge&logo=github)](https://github.com/zax-universe/Bugs-Wa/issues)

> Bot WhatsApp Otomatis dengan Fitur Lengkap, Command Manager, dan Sistem Akses Terintegrasi

[![Made with ❤️ by zax-universe](https://img.shields.io/badge/Made%20with%20%E2%9D%A4%EF%B8%8F%20by-zax--universe-red?style=flat-square)](https://github.com/zax-universe)

**[Demo](#-quick-start) • [Dokumentasi](#-dokumentasi) • [Instalasi](#-instalasi-cepat) • [Kontribusi](#-kontribusi) • [Support](#-support)**

---

</div>

## 📖 Daftar Isi

<details open>
<summary><strong>Klik untuk membuka/tutup</strong></summary>

- [✨ Fitur Utama](#-fitur-utama)
- [📁 Struktur Repository](#-struktur-repository)
- [🚀 Instalasi Cepat](#-instalasi-cepat)
- [⚙️ Konfigurasi](#%EF%B8%8F-konfigurasi)
- [💬 Penggunaan](#-penggunaan)
- [📚 Dokumentasi Lengkap](#-dokumentasi-lengkap)
- [🔗 API & Command](#-api--command)
- [🛠️ Teknologi](#%EF%B8%8F-teknologi)
- [🤝 Kontribusi](#-kontribusi)
- [📝 Lisensi](#-lisensi)
- [📧 Support](#-support)

</details>

---

## ✨ Fitur Utama

<table>
<tr>
<td>

### 🎯 Core Features
- ✅ Koneksi WhatsApp Otomatis
- ✅ Multi-Command Handler
- ✅ Prefix Customizable
- ✅ Auto-Reconnect
- ✅ Message Queue

</td>
<td>

### 🔐 Security
- ✅ Access Control System
- ✅ User Authentication
- ✅ Permission Management
- ✅ Admin Verification
- ✅ Rate Limiting

</td>
<td>

### ⚡ Performance
- ✅ Lightweight & Fast
- ✅ Memory Optimized
- ✅ Async/Await Support
- ✅ Error Handling
- ✅ Debug Mode

</td>
</tr>
</table>

---

## 📁 Struktur Repository

```
Bugs-Wa/
│
├── 📂 Access/
│   ├── auth.js                 # Sistem autentikasi user
│   ├── permission.js           # Manajemen permission
│   └── admin.js                # Kontrol admin access
│
├── 📂 System/
│   ├── core.js                 # Core system bot
│   ├── logger.js               # Logging system
│   ├── utils.js                # Utility functions
│   └── database.js             # Database handler
│
├── 📂 setting/
│   ├── config.example.js       # Template konfigurasi
│   ├── prefix.js               # Prefix configuration
│   └── database.json           # Data storage
│
├── 📄 command.js               # Command handler (26 KB)
├── 📄 connect.js               # WhatsApp connection (11 KB)
├── 📄 package.json             # Dependencies & Scripts
├── 📄 .env.example             # Environment template
├── 📄 .gitignore               # Git ignore rules
├── 📄 README.md                # Documentation (ini!)
└── 📄 LICENSE                  # MIT License

```

### 📊 Penjelasan Struktur

| Folder/File | Ukuran | Deskripsi |
|:---|:---:|---|
| **Access/** | — | 🔐 Manajemen akses, autentikasi, dan permission user |
| **System/** | — | ⚙️ Core system, utilities, logging, dan database handler |
| **setting/** | — | 🎛️ File konfigurasi, prefix, dan data penting |
| **command.js** | 26 KB | 💬 Command handler utama - tempat semua perintah didaftar |
| **connect.js** | 11 KB | 🔌 Connection manager - menghubungkan ke WhatsApp |
| **package.json** | — | 📦 Daftar dependency dan npm scripts |

---

## 🚀 Instalasi Cepat

### Prerequisites

```bash
✓ Node.js v20.0 or higher
✓ npm v11.0 or higher
✓ WhatsApp (aktif di device)
✓ Git
```

### Step-by-Step Installation

**1️⃣ Clone Repository**
```bash
git clone https://github.com/zax-universe/Bugs-Wa.git
cd Bugs-Wa
```

**2️⃣ Install Dependencies**
```bash
npm install
```

**3️⃣ Setup Konfigurasi**
```bash
cp setting/config.example.js setting/config.js
cp .env.example .env
```

**4️⃣ Edit Konfigurasi** 
```bash
# Edit .env dengan editor favorit
nano .env
# atau
code .env
```

**5️⃣ Jalankan Bot**
```bash
npm start

lalu masukan nomor yang akan di jadikan bot
dan akan muncul kode pairing ( AAAAAAAA )
```

**Masukan pairing Code**
- Buka WhatsApp di phone Anda
- Masukan kode pairing di preangkat tertaut
- Tunggu 2-5 menit samapi console terminal berubah 


---

## ⚙️ Konfigurasi
### File `setting/config.js`

```javascript
module.exports = {
  // Bot Identity
  botName: 'Bugs-Wa Bot',
  botVersion: '1.0.0',
  
  // Command Prefix
  prefix: '!',
  
  // Owner Info
  owner: {
    name: 'zax-universe',
    number: '62812345678'
  },
  
  // Features
  features: {
    autoRead: true,
    autoReply: true,
    autoTyping: true
  },
  
  // Access Control
  admin: ['62812345678', '62887654321'],
  whitelist: [],
  blacklist: []
};
```

---

## 💬 Penggunaan

### Menjalankan Bot

```bash
# Production Mode
npm start

# Development Mode (dengan auto-reload)
npm run dev

# Debug Mode
npm run debug
```

### Command Syntax

```
[PREFIX][COMMAND] [ARGUMENTS]

Contoh:
!.menu                  → Menampilkan semua command
```
---

## 📚 Dokumentasi Lengkap

### Membuat Command Baru

Edit `command.js` dan tambahkan di section commands:

```javascript
// Contoh: Command Hello
case 'hello':
  await message.reply('👋 Halo! Selamat datang di Bugs-Wa!');
  break;

// Contoh: Command dengan Argument
case 'say':
  const text = args.join(' ');
  if (!text) {
    return message.reply('❌ Gunakan: !say [text]');
  }
  await message.reply(text);
  break;

// Contoh: Command Admin Only
case 'ban':
  if (!isAdmin) {
    return message.reply('❌ Hanya admin yang bisa menggunakan command ini!');
  }
  // Ban logic here
  break;
```

### Menggunakan Connection Functions

```javascript
// send message
await client.sendMessage(chatId, 'Hello World');

// send with button
await client.sendMessage(chatId, {
  text: 'Choose one',
  buttons: [
    { body: 'Option 1' },
    { body: 'Option 2' }
  ]
});

// send media
await client.sendMessage(chatId, media, { caption: 'Image caption' });

// send group notification
await client.getGroupById(groupId).then(group => {
  group.sendMessage('Hello Group!');
});
```

### Contoh: Membuat Sistem Custom

```javascript
// In system/utils.js
const greetUser = (name) => {
  const hour = new Date().getHours();
  if (hour < 12) return `Selamat Pagi ${name}!`;
  if (hour < 18) return `Selamat Siang ${name}!`;
  return `Selamat Malam ${name}!`;
};

// Usage in command.js
case 'greeting':
  const greeting = greetUser(message.author.name);
  await message.reply(greeting);
  break;
```

---

## 🔗 API & Command

### Message Object

```javascript
{
  id: 'string',                    // Message ID
  body: 'string',                  // Message content
  type: 'string',                  // Type (text, image, video, etc)
  timestamp: 'number',             // Unix timestamp
  from: 'string',                  // Sender number
  to: 'string',                    // Recipient
  author: 'string',                // Author (for group)
  chatId: 'string',                // Chat ID
  isGroupMsg: 'boolean',           // Is group message
  isMedia: 'boolean',              // Contains media
  hasMedia: 'boolean'              // Has attachment
}
```

### Client Methods

```javascript
// Get chat info
const chat = await message.getChat();

// Get contact info
const contact = await message.getContact();

// Send message
await message.reply('text');

// Send media
await message.reply(media, { caption: 'text' });

// Forward message
await message.forward(chatId);

// Delete message
await message.delete(true);
```

---

## 🛠️ Teknologi

<div align="center">

| Technology | Badge |
|:---:|:---:|
| **Node.js** | ![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white) |
| **JavaScript ES6+** | ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black) |
| **WhatsApp Web.js** | ![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?logo=whatsapp&logoColor=white) |
| **Express.js** | ![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white) |
| **dotenv** | ![dotenv](https://img.shields.io/badge/dotenv-ECD53F?logo=.env&logoColor=black) |

</div>

### Package Dependencies

```json
{
  "whatsapp-web.js": "^1.19.0",
  "axios": "^1.4.0",
  "dotenv": "^16.0.3",
  "qrcode-terminal": "^0.12.0",
```
don't forget to start my repo

© azaxm - all rights reserved 
