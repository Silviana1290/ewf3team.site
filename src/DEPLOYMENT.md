
# 🚀 Panduan Deployment EWF Pro

## Persiapan Sebelum Deploy

### 1. Install Dependencies
```bash
npm install
```

### 2. Test Build Lokal
```bash
npm run build
npm run preview
```

Pastikan tidak ada error dan website berjalan dengan baik di `http://localhost:4173`

---

## Opsi Deployment

### 🔷 Option 1: Vercel (Paling Mudah & Gratis)

**Langkah-langkah:**

1. **Buat akun di Vercel**
   - Kunjungi https://vercel.com
   - Sign up dengan GitHub/GitLab/Bitbucket

2. **Push ke Git Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

3. **Import Project di Vercel**
   - Klik "New Project"
   - Import repository Anda
   - Vercel akan auto-detect Vite
   - Klik "Deploy"

4. **Domain Custom (Opsional)**
   - Settings → Domains
   - Tambahkan domain Anda
   - Update DNS records sesuai instruksi

**Atau via CLI:**
```bash
npm i -g vercel
vercel login
vercel
```

---

### 🔶 Option 2: Netlify (Mudah & Gratis)

**Langkah-langkah:**

1. **Buat akun di Netlify**
   - Kunjungi https://netlify.com
   - Sign up dengan GitHub/GitLab/Bitbucket

2. **Deploy via Git**
   - Push code ke Git repository
   - Klik "New site from Git"
   - Pilih repository
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Klik "Deploy site"

**Atau via CLI:**
```bash
npm i -g netlify-cli
netlify login
npm run build
netlify deploy --prod --dir=dist
```

---

### 🔷 Option 3: GitHub Pages

**Langkah-langkah:**

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   ```json
   {
     "homepage": "https://USERNAME.github.io/REPO_NAME",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update vite.config.ts**
   ```typescript
   export default defineConfig({
     base: '/REPO_NAME/',
     // ... rest of config
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

---

### 🔶 Option 4: Hosting Manual (cPanel, VPS, dll)

**Langkah-langkah:**

1. **Build Production**
   ```bash
   npm run build
   ```

2. **Upload folder `dist`**
   - Upload semua file di folder `dist` ke public_html atau www
   - Pastikan file `index.html` ada di root

3. **Setup .htaccess (untuk Apache)**
   Buat file `.htaccess` di root:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

4. **Setup nginx.conf (untuk Nginx)**
   ```nginx
   server {
     listen 80;
     server_name yourdomain.com;
     root /path/to/dist;
     index index.html;

     location / {
       try_files $uri $uri/ /index.html;
     }
   }
   ```

---

## Environment Variables (Jika Diperlukan)

Untuk API keys dan konfigurasi:

**Vercel:**
- Settings → Environment Variables
- Tambahkan variabel dengan prefix `VITE_`

**Netlify:**
- Site settings → Environment variables
- Tambahkan variabel dengan prefix `VITE_`

**Manual:**
- Buat file `.env.production`
- Jangan commit file ini ke Git!

---

## Checklist Sebelum Deploy

- [ ] Test build lokal berhasil
- [ ] Tidak ada error di console
- [ ] Semua halaman bisa diakses
- [ ] Responsive di mobile & desktop
- [ ] Meta tags SEO sudah benar
- [ ] Favicon sudah ada
- [ ] Analytics sudah disetup (jika ada)

---

## Monitoring & Maintenance

### Analytics
Tambahkan Google Analytics atau Plausible:

```html
<!-- Di index.html sebelum </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Performance Monitoring
- Gunakan Lighthouse untuk audit
- Monitor Core Web Vitals
- Setup error tracking (Sentry, LogRocket)

---

## Troubleshooting

**404 Error saat refresh:**
- Pastikan routing config sudah benar (vercel.json, netlify.toml, .htaccess)

**Build Error:**
- Hapus `node_modules` dan `package-lock.json`
- Run `npm install` lagi
- Cek versi Node.js (minimal v16)

**Slow Loading:**
- Enable compression (gzip/brotli)
- Optimize images
- Enable CDN

---

## Support

Jika ada masalah deployment:
1. Cek dokumentasi platform (Vercel/Netlify/dll)
2. Lihat build logs untuk error details
3. Hubungi support platform hosting

**Selamat Deploy! 🎉**
