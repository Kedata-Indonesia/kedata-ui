<script setup>
import { ref } from 'vue';
import { Pagination } from '@kedataindo/vue';

const page = ref(1);
const pageSize = ref(10);
</script>

# Pagination

A pagination component for navigating through pages.

## Basic Usage

<ClientOnly>
  <div class="demo-box flex-col items-start">
    <Pagination
      v-model:page="page"
      v-model:pageSize="pageSize"
      :count="100"
    />
    <span class="text-sm text-gray-500">Page: {{ page }} / Page size: {{ pageSize }}</span>
  </div>
</ClientOnly>

```vue
<script setup>
import { ref } from 'vue';
import { Pagination } from '@kedataindo/vue';
const page = ref(1);
const pageSize = ref(10);
</script>

<Pagination
  v-model:page="page"
  v-model:pageSize="pageSize"
  :count="100"
/>
```

## Sizes

<ClientOnly>
  <div class="demo-box flex-col items-start">
    <Pagination :count="50" size="small" />
    <Pagination :count="50" size="medium" />
    <Pagination :count="50" size="large" />
  </div>
</ClientOnly>

## Variants

<ClientOnly>
  <div class="demo-box flex-col items-start">
    <Pagination :count="50" activeVariant="solid" inactiveVariant="outline" />
    <Pagination :count="50" activeVariant="solid" inactiveVariant="text" />
  </div>
</ClientOnly>

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `count` | `number` | - | Total item count |
| `initialPage` | `number` | `1` | Initial page |
| `size` | `ButtonSize` | - | Button size |
| `activeVariant` | `ButtonVariant` | - | Active page button variant |
| `inactiveVariant` | `ButtonVariant` | - | Inactive page button variant |
| `colorPalette` | `ColorPalette` | - | Color theme |

## Models

| Model | Type | Description |
|-------|------|-------------|
| `page` | `number` | Current page |
| `pageSize` | `number` | Items per page |
