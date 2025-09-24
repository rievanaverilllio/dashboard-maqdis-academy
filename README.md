## Deployment

Environment produksi dapat diakses di:

https://dashboard-maqdis.vercel.app

Hosted di Vercel dengan konfigurasi build default Next.js (output standalone). Jika Anda melakukan fork dan ingin deploy ulang, cukup sambungkan repository ke Vercel dan pastikan versi Node diatur (auto-detect) serta install command `npm install` dan build command `npm run build`.

## Tech Stack

- Next.js 15 (App Router)
- React 19
- Tailwind CSS v4 (+ PostCSS plugin)
- ESLint 9 (eslint-config-next)

## Prasyarat

- Node.js >= 18.18 (disarankan 20 LTS)
- npm >= 9 (atau gunakan pnpm/yarn sesuai preferensi Anda)

## Cara Menjalankan (Local)

1. Clone & masuk folder
	```powershell
	git clone <repo-url> maqdis-app
	cd maqdis-app
	```
2. Instal dependensi
	```powershell
	npm install
	```
4. Jalankan di mode pengembangan
	```powershell
	npm run dev
	```
	Aplikasi tersedia di http://localhost:3000
5. Build untuk produksi lalu start
	```powershell
	npm run build
	npm run start
	```
6. Linting
	```powershell
	npm run lint
	```

## Skrip NPM

- `dev`: Menjalankan Next.js di mode pengembangan
- `build`: Build aplikasi untuk produksi
- `start`: Menjalankan server produksi
- `lint`: Menjalankan ESLint

## Konfigurasi & Berkas Penting

- `next.config.ts` – konfigurasi Next.js
- `tsconfig.json` – konfigurasi TypeScript
- `eslint.config.mjs` – aturan linting
- `postcss.config.mjs` – integrasi Tailwind v4

## Troubleshooting

- Port 3000 sudah dipakai: hentikan proses lain atau jalankan `set PORT=3001; npm run dev` (PowerShell)
- Cache bermasalah setelah upgrade: hapus `.next` dan `node_modules`, lalu `npm install` ulang

---

Dikembangkan dengan Next.js App Router dan Tailwind v4. Kontribusi dan perbaikan sangat diapresiasi.
