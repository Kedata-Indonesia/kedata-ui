<script setup>
const colorPalettes = [
  {
    name: 'Neutral',
    shades: [
      { shade: 50, hex: '#FAFAFA' },
      { shade: 100, hex: '#F5F5F5' },
      { shade: 200, hex: '#E4E4E7' },
      { shade: 300, hex: '#D4D4D8' },
      { shade: 400, hex: '#A1A1AA' },
      { shade: 500, hex: '#71717A' },
      { shade: 600, hex: '#52525B' },
      { shade: 700, hex: '#3F3F46' },
      { shade: 800, hex: '#27272A' },
      { shade: 900, hex: '#18181B' },
    ],
  },
  {
    name: 'Slate',
    shades: [
      { shade: 50, hex: '#F8FAFC' },
      { shade: 100, hex: '#F1F5F9' },
      { shade: 200, hex: '#E2E8F0' },
      { shade: 300, hex: '#CBD5E1' },
      { shade: 400, hex: '#94A3B8' },
      { shade: 500, hex: '#64748B' },
      { shade: 600, hex: '#475569' },
      { shade: 700, hex: '#334155' },
      { shade: 800, hex: '#1E293B' },
      { shade: 900, hex: '#0F172A' },
    ],
  },
  {
    name: 'Primary',
    shades: [
      { shade: 50, hex: '#EFF6FF' },
      { shade: 100, hex: '#DBEAFE' },
      { shade: 200, hex: '#BFDBFE' },
      { shade: 300, hex: '#93C5FD' },
      { shade: 400, hex: '#60A5FA' },
      { shade: 500, hex: '#3B82F6' },
      { shade: 600, hex: '#2563EB' },
      { shade: 700, hex: '#1D4ED8' },
      { shade: 800, hex: '#1E40AF' },
      { shade: 900, hex: '#1E3A8A' },
    ],
  },
  {
    name: 'Info',
    shades: [
      { shade: 50, hex: '#F0F9FF' },
      { shade: 100, hex: '#E0F2FE' },
      { shade: 200, hex: '#BAE6FD' },
      { shade: 300, hex: '#7DD3FC' },
      { shade: 400, hex: '#38BDF8' },
      { shade: 500, hex: '#0EA5E9' },
      { shade: 600, hex: '#0284C7' },
      { shade: 700, hex: '#0369A1' },
      { shade: 800, hex: '#075985' },
      { shade: 900, hex: '#0C4A6E' },
    ],
  },
  {
    name: 'Success',
    shades: [
      { shade: 50, hex: '#F0FDF4' },
      { shade: 100, hex: '#DCFCE7' },
      { shade: 200, hex: '#BBF7D0' },
      { shade: 300, hex: '#86EFAC' },
      { shade: 400, hex: '#4ADE80' },
      { shade: 500, hex: '#22C55E' },
      { shade: 600, hex: '#16A34A' },
      { shade: 700, hex: '#15803D' },
      { shade: 800, hex: '#166534' },
      { shade: 900, hex: '#14532D' },
    ],
  },
  {
    name: 'Danger',
    shades: [
      { shade: 50, hex: '#FEF2F2' },
      { shade: 100, hex: '#FEE2E2' },
      { shade: 200, hex: '#FECACA' },
      { shade: 300, hex: '#FCA5A5' },
      { shade: 400, hex: '#F87171' },
      { shade: 500, hex: '#EF4444' },
      { shade: 600, hex: '#DC2626' },
      { shade: 700, hex: '#B91C1C' },
      { shade: 800, hex: '#991B1B' },
      { shade: 900, hex: '#7F1D1D' },
    ],
  },
  {
    name: 'Warning',
    shades: [
      { shade: 50, hex: '#FEFCE8' },
      { shade: 100, hex: '#FEF9C3' },
      { shade: 200, hex: '#FEF08A' },
      { shade: 300, hex: '#FDE047' },
      { shade: 400, hex: '#FACC15' },
      { shade: 500, hex: '#EAB308' },
      { shade: 600, hex: '#CA8A04' },
      { shade: 700, hex: '#A16207' },
      { shade: 800, hex: '#854D0E' },
      { shade: 900, hex: '#713F12' },
    ],
  },
]

function isDark(hex) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return (r * 299 + g * 587 + b * 114) / 1000 < 128
}
</script>

# Colors

Color palette yang digunakan dalam design system Kedata UI, mencakup tujuh kelompok warna dengan sepuluh tingkatan shade untuk setiap kelompok.

<ClientOnly>
  <div class="color-grid">
    <div v-for="palette in colorPalettes" :key="palette.name" class="color-column">
      <div class="color-column-header">{{ palette.name }}</div>
      <div
        v-for="item in palette.shades"
        :key="item.shade"
        class="color-swatch"
        :style="{ backgroundColor: item.hex }"
      >
        <span class="color-swatch-label" :style="{ color: isDark(item.hex) ? '#fff' : '#1a1a1a' }">
          <span class="color-swatch-name">{{ palette.name }} - {{ item.shade }}</span>
          <span class="color-swatch-hex">{{ item.hex }}</span>
        </span>
      </div>
    </div>
  </div>
</ClientOnly>

## Usage

Warna-warna ini tersedia sebagai Tailwind CSS classes melalui plugin `@kedataindo/tailwind`:

```html
<!-- Background -->
<div class="bg-primary-500">Primary</div>
<div class="bg-success-100">Success Light</div>
<div class="bg-danger-600">Danger Dark</div>

<!-- Text -->
<p class="text-neutral-700">Neutral text</p>
<p class="text-warning-500">Warning text</p>

<!-- Border -->
<div class="border border-info-300">Info border</div>
```

## Color Tokens

| Token | Shade | Hex |
|-------|-------|-----|
| `primary` | 500 | `#3B82F6` |
| `info` | 500 | `#0EA5E9` |
| `success` | 500 | `#22C55E` |
| `danger` | 500 | `#EF4444` |
| `warning` | 500 | `#EAB308` |
| `neutral` | 500 | `#71717A` |
| `slate` | 500 | `#64748B` |
