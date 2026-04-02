<script setup>
import { ref, computed } from 'vue'
import * as Icons from '@kedataindo/vue-icons'

const search = ref('')
const activeVariant = ref('all')

const allIcons = Object.keys(Icons).map((name) => ({
  name,
  component: Icons[name],
  variant: name.endsWith('Solid')
    ? 'solid'
    : name.endsWith('Outline')
    ? 'outline'
    : 'loader',
  label: name
    .replace(/^Ki/, '')
    .replace(/Outline$/, '')
    .replace(/Solid$/, '')
    .replace(/Variant\d+$/, '')
    .replace(/Default$/, '')
    .replace(/([A-Z])/g, ' $1')
    .trim(),
}))

const variants = [
  { key: 'all', label: 'All' },
  { key: 'outline', label: 'Outline' },
  { key: 'solid', label: 'Solid' },
  { key: 'loader', label: 'Loader' },
]

const filtered = computed(() => {
  return allIcons.filter((icon) => {
    const matchVariant =
      activeVariant.value === 'all' || icon.variant === activeVariant.value
    const matchSearch =
      !search.value ||
      icon.name.toLowerCase().includes(search.value.toLowerCase())
    return matchVariant && matchSearch
  })
})

const copied = ref('')

function copyName(name) {
  navigator.clipboard.writeText(name)
  copied.value = name
  setTimeout(() => (copied.value = ''), 1500)
}
</script>

# Icon Collections

Koleksi icon dari [Heroicons](https://heroicons.com/) yang dikemas sebagai Vue components dalam package `@kedataindo/vue-icons`. Tersedia dalam dua gaya: **Outline** dan **Solid**, serta beberapa varian **Loader** animasi.

## Installation

```bash
pnpm add @kedataindo/vue-icons
```

## Usage

```vue
<script setup>
import { KiBellOutline, KiBellSolid } from '@kedataindo/vue-icons'
</script>

<template>
  <KiBellOutline class="w-6 h-6" />
  <KiBellSolid class="w-6 h-6 text-primary-500" />
</template>
```

## Browse Icons

<ClientOnly>
  <div class="icon-browser">
    <div class="icon-browser-toolbar">
      <div class="icon-variant-tabs">
        <button
          v-for="v in variants"
          :key="v.key"
          class="icon-variant-tab"
          :class="{ active: activeVariant === v.key }"
          @click="activeVariant = v.key"
        >
          {{ v.label }}
        </button>
      </div>
      <input
        v-model="search"
        class="icon-search"
        placeholder="Search icons..."
      />
    </div>

    <p class="icon-count">{{ filtered.length }} icons</p>

    <div class="icon-grid">
      <div
        v-for="icon in filtered"
        :key="icon.name"
        class="icon-card"
        :title="icon.name"
        @click="copyName(icon.name)"
      >
        <component :is="icon.component" class="icon-preview" />
        <span class="icon-card-name">{{ icon.label }}</span>
        <span v-if="copied === icon.name" class="icon-copied">Copied!</span>
      </div>
    </div>
  </div>
</ClientOnly>
