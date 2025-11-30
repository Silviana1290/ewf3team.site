
# EWF Pro - Platform Berita Finansial

Platform berita finansial modern dengan update real-time dari sumber terpercaya seperti CNBC, Reuters, Investing.com, dan Trading Economics.

## 🚀 Fitur Utama

- **Real-time News Feed** - Berita terkini dari berbagai sumber finansial global
- **World Clocks** - Jam dunia untuk Jakarta, Tokyo, Hongkong, dan New York
- **Economic Calendar** - Kalender ekonomi dengan jadwal rilis data penting
- **Market Analysis** - Analisis teknikal dan fundamental dari para ahli
- **Economic Indicators** - Tabel lengkap indikator ekonomi dan dampaknya
- **Trading Tools** - Kalkulator dan konverter mata uang
- **Glossary** - Kamus istilah ekonomi dan finansial

## 📦 Teknologi

- **React 18** - Library UI modern
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animasi smooth dan interaktif
- **React Router** - Routing dan navigasi
- **Vite** - Build tool yang cepat

## 🛠️ Instalasi

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Struktur Proyek

```
ewf-pro-news/
├── components/          # Komponen reusable
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── NewsCard.tsx
│   ├── NewsTicker.tsx
│   ├── Sidebar.tsx
│   ├── WorldClocks.tsx
│   └── EconomicIndicators.tsx
├── pages/              # Halaman aplikasi
│   ├── HomePage.tsx
│   ├── MarketPage.tsx
│   ├── EconomyPage.tsx
│   ├── CommodityPage.tsx
│   ├── FiscalMonetaryPage.tsx
│   ├── CalendarPage.tsx
│   ├── GlobalPage.tsx
│   ├── MarketAnalysisPage.tsx
│   ├── UtilitiesPage.tsx
│   └── GlossaryPage.tsx
├── hooks/              # Custom React hooks
│   └── useRealTimeNews.ts
├── types/              # TypeScript types
│   └── news.ts
├── App.tsx             # Root component
├── index.tsx           # Entry point
└── index.css           # Global styles
```

## 🌐 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

### Manual Deployment

```bash
# Build production files
npm run build

# Upload 'dist' folder to your hosting
```

## 📝 Environment Variables

Buat file `.env` untuk konfigurasi:

```env
VITE_API_BASE_URL=https://api.example.com
VITE_NEWS_API_KEY=your_api_key_here
```

## 🎨 Customization

### Warna Tema

Edit `tailwind.config.js` untuk mengubah warna:

```js
colors: {
  primary: {
    DEFAULT: '#FF6B00',
    // ... other shades
  },
}
```

### Konten

Edit file di folder `pages/` untuk mengubah konten halaman.

## 📄 License

Copyright © 2024 EWF Pro. All rights reserved.

## 🤝 Support

Untuk bantuan dan pertanyaan, hubungi:
- Email: support@ewfpro.com
- Website: https://www.ewfpro.com
