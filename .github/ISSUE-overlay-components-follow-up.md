# [Tech debt / Follow-up] Overlay & floating components — perbaikan Vue, slots, dan docs

> **Issue GitHub:** https://github.com/Kedata-Indonesia/kedata-ui/issues/9  
> **Cara pakai:** salin judul dan isi ke issue tracker (GitHub/GitLab). Sesuaikan label/milestone.

---

## Judul (saran)

`fix(vue): Popover, Menu, Dialog, Tooltip — animasi, dark mode, attrs, dan build pipeline`

---

## Ringkasan

Beberapa komponen overlay/floating (`Popover`, `Menu`, `Dialog`, `Tooltip`) dan dokumentasinya mengalami perilaku salah atau tampilan tidak konsisten (konten tidak tampil, hanya overlay, animasi aneh, kontras buruk di dark mode, class dari slot tidak terlihat). Perbaikan menyentuh **`@kedataindo/slots`**, **`@kedataindo/vue`**, pola **Zag.js**, dan **Tailwind** (termasuk variant `dark`).

---

## Masalah yang teridentifikasi

### Popover

- **Konten / transisi:** `getContentProps()` dari `@zag-js/popover` mengatur `hidden: !open`. Saat penutupan, `open` menjadi `false` sebelum `<Transition>` selesai, sehingga atribut `hidden` membuat panel hilang mendadak dan merusak animasi leave (sama seperti kasus yang sudah ditangani di Menu dengan `hidden: false`).
- **Tampilan panel:** Slot `content` di `popover.slots.ts` hampir kosong; panel perlu gaya surface (border, background, shadow, teks) dan dukungan **dark mode** selaras Menu.
- **Dark mode di host (mis. VitePress):** Diperlukan penanda **`light`** pada kontainer konten agar teks tidak mengikuti dark global secara salah (polisi sama seperti Menu).

### Menu

- **Kontras / dark mode:** Panel putih dengan teks mengikuti `dark:*` global → perlu **`light`** pada root konten dan penyesuaian slot/warna item.
- **Trigger + `Button`:** Kombinasi `v-bind="triggerProps"` dengan `@click` manual bisa **double-toggle** state controlled Zag — dokumentasi harus menghindari pola tersebut.

### Dialog

- **Hanya overlay / konten tidak terlihat:** Kombinasi API salah di docs, template runtime di markdown tidak andal, serta **positioning** slot `dialog-content` (`relative` vs `absolute`) mempengaruhi variant posisi.
- **Stacking / z-index:** Penyesuaian backdrop, positioner, dan konten agar konten benar-benar di atas overlay.
- **Class “hilang” di DialogBody/Header/Footer/Content:** `inheritAttrs: false` tanpa merge `useAttrs()` dengan `getRootProps()` — atribut/class dari pemakai tidak sampai ke root (bukan karena Zag “menimpa” sembarangan).
- **Dark mode / tipografi:** Header slot typo kelas (`dark:dark-50` → `dark:text-dark-50`), body perlu teks default yang konsisten dengan host docs.

### Tooltip

- Selaras dengan pola Popover/Menu untuk animasi dan stacking bila relevan.

### Animasi

- **`fadeUp` + Floating UI:** `transform` pada node yang sama dengan positioning (`translate3d`) bisa bentrok → untuk overlay popper dipilih animasi **opacity-only** (`fade`) di beberapa tempat.
- **Preset Vue:** Nama kelas transisi harus sesuai pola `<Transition>` Vue (bukan `enter-active` generik yang salah).

### Build / workflow

- Perubahan di **`packages/slots/src`** tidak otomatis terlihat di app yang mengimpor **`@kedataindo/slots` dari `dist`** — perlu **`pnpm -C packages/slots run build`** (dan sering **`pnpm -C packages/vue run build`** jika konsumsi lewat `packages/vue/dist`).

---

## Perbaikan yang sudah dilakukan (referensi)

| Area | Perbaikan utama |
|------|------------------|
| **Popover** | `hidden: false` di `usePopover`; styling `content` + variant `darkable`; `light` + merge `props.class`; prop `darkable`. |
| **Menu** | `light` pada konten, slot/warna item, dokumentasi trigger tanpa `@click` ganda. |
| **Dialog** | `withDialog`, render function di docs, slot `dialog-content` positioning, merge attrs di Body/Header/Footer/Content, header/body slots untuk dark & typography. |
| **Slots** | `dialog-body`, `dialog-content`, `menu`, `popover` — penyesuaian kelas dan variant. |
| **Animasi** | Preset `fade` untuk overlay; perbaikan `animate-state-preset` Vue. |

---

## Tindak lanjut / verifikasi

- [ ] QA visual di **docs** (light + dark): Popover, Menu, Dialog, Tooltip.
- [ ] Konfirmasi tidak ada regresi **Storybook** untuk overlay components.
- [ ] Dokumentasikan di CONTRIBUTING atau README: urutan build **`slots` → `vue`** setelah mengubah slot.
- [ ] Audit komponen lain dengan **`inheritAttrs: false`** tanpa merge attrs (jika masih ada).

---

## Lingkungan

- Monorepo `kedata-ui`, paket: `@kedataindo/slots`, `@kedataindo/vue`, `packages/docs` (VitePress).
- Zag: `@zag-js/dialog`, `@zag-js/popover`, `@zag-js/menu`, `@zag-js/tooltip` (versi terkunci di workspace).

---

## Label (saran)

`bug`, `enhancement`, `documentation`, `vue`, `a11y` (jika relevan)
