<script setup>
import { ref } from 'vue';
import { ColorInput } from '@kedataindo/vue';

const color = ref('#3b82f6');
const isOpen = ref(false);
</script>

# Color Input

A text input with an integrated color picker dropdown.

## Basic Usage

<ClientOnly>
  <div class="demo-box flex-col items-start" style="min-height: 300px;">
    <ColorInput
      v-model:value="color"
      v-model:isOpen="isOpen"
      placeholder="Enter color..."
    />
    <div class="flex items-center gap-2 mt-2">
      <div class="w-6 h-6 rounded border border-gray-200" :style="{ background: color }"></div>
      <span class="text-sm text-gray-500">{{ color }}</span>
    </div>
  </div>
</ClientOnly>

```vue
<script setup>
import { ref } from 'vue';
import { ColorInput } from '@kedataindo/vue';

const color = ref('#3b82f6');
const isOpen = ref(false);
</script>

<ColorInput
  v-model:value="color"
  v-model:isOpen="isOpen"
  placeholder="Enter color..."
/>
```

## States

<ClientOnly>
  <div class="demo-box flex-col items-start">
    <ColorInput placeholder="Normal" />
    <ColorInput placeholder="Disabled" disabled />
    <ColorInput placeholder="Invalid" invalid />
  </div>
</ClientOnly>

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `placeholder` | `string` | - | Placeholder text |
| `disabled` | `boolean` | `false` | Disable the input |
| `readOnly` | `boolean` | `false` | Make read-only |
| `invalid` | `boolean` | `false` | Error state |
| `colorPalette` | `ColorPalette` | - | Color theme |
| `class` | `string` | - | Additional CSS classes |

## Models

| Model | Type | Description |
|-------|------|-------------|
| `value` | `string` | Color value (hex/rgb) |
| `isOpen` | `boolean` | Picker open state |
