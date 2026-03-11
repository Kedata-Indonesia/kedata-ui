<script setup>
import { ref } from 'vue';
import { ColorPicker } from '@kedataindo/vue';

const color = ref('hsl(200, 100%, 50%)');
const swatches = ['#ef4444', '#f97316', '#eab308', '#22c55e', '#3b82f6', '#8b5cf6'];
</script>

# Color Picker

A full color picker with hue, saturation, lightness, and alpha controls.

## Basic Usage

<ClientOnly>
  <div class="demo-box flex-col items-start">
    <ColorPicker v-model:value="color" />
    <span class="text-sm text-gray-500 mt-2">Value: {{ color }}</span>
  </div>
</ClientOnly>

```vue
<script setup>
import { ref } from 'vue';
import { ColorPicker } from '@kedataindo/vue';
const color = ref('hsl(200, 100%, 50%)');
</script>

<ColorPicker v-model:value="color" />
```

## With Swatches

<ClientOnly>
  <div class="demo-box flex-col items-start">
    <ColorPicker v-model:value="color" :swatches="swatches" />
  </div>
</ClientOnly>

```vue
<ColorPicker
  v-model:value="color"
  :swatches="['#ef4444', '#f97316', '#22c55e', '#3b82f6']"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `swatches` | `string[]` | - | Preset color swatches |
| `class` | `string` | - | Additional CSS classes |
| `withParts` | `boolean` | `true` | Use default styling |

## Models

| Model | Type | Description |
|-------|------|-------------|
| `value` | `string` | Color value |
