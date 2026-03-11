<script setup>
import { ref } from 'vue';
import { PinInput } from '@kedataindo/vue';

const value = ref([]);
</script>

# Pin Input

A PIN/OTP input with multiple individual cells.

## Basic Usage

<ClientOnly>
  <div class="demo-box flex-col items-start">
    <PinInput v-model:value="value" :count="6" />
    <span class="text-sm text-gray-500">Value: {{ value.join('') }}</span>
  </div>
</ClientOnly>

```vue
<script setup>
import { ref } from 'vue';
import { PinInput } from '@kedataindo/vue';
const value = ref([]);
</script>

<PinInput v-model:value="value" :count="6" />
```

## Masked Input

<ClientOnly>
  <div class="demo-box">
    <PinInput :count="4" mask />
  </div>
</ClientOnly>

```vue
<PinInput :count="4" mask />
```

## States

<ClientOnly>
  <div class="demo-box flex-col items-start">
    <PinInput :count="4" />
    <PinInput :count="4" disabled />
    <PinInput :count="4" invalid />
  </div>
</ClientOnly>

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `count` | `number` | `6` | Number of pin cells |
| `mask` | `boolean` | `false` | Hide input (password mode) |
| `disabled` | `boolean` | `false` | Disable all cells |
| `invalid` | `boolean` | `false` | Error state |
| `readOnly` | `boolean` | `false` | Make read-only |
| `blurOnComplete` | `boolean` | `true` | Blur when all cells filled |
| `inputmode` | `'numeric' \| 'text'` | `'numeric'` | Keyboard type |
| `colorPalette` | `ColorPalette` | - | Color theme |

## Models

| Model | Type | Description |
|-------|------|-------------|
| `value` | `string[]` | Array of cell values |
