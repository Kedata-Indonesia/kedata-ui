<script setup>
import { ref } from 'vue';
import { TextareaInput } from '@kedataindo/vue';

const value = ref('');
</script>

# Textarea Input

A multi-line text input with optional character counter.

## Basic Usage

<ClientOnly>
  <div class="demo-box flex-col items-start w-full">
    <TextareaInput v-model:value="value" placeholder="Enter your message..." class="w-full" />
  </div>
</ClientOnly>

```vue
<script setup>
import { ref } from 'vue';
import { TextareaInput } from '@kedataindo/vue';
const value = ref('');
</script>

<TextareaInput v-model:value="value" placeholder="Enter your message..." />
```

## With Character Counter

<ClientOnly>
  <div class="demo-box flex-col items-start w-full">
    <TextareaInput
      v-model:value="value"
      placeholder="Max 200 characters"
      :maxLength="200"
      showCounter
      class="w-full"
    />
  </div>
</ClientOnly>

```vue
<TextareaInput
  v-model:value="value"
  placeholder="Max 200 characters"
  :maxLength="200"
  showCounter
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `placeholder` | `string` | - | Placeholder text |
| `maxLength` | `number` | - | Maximum character count |
| `showCounter` | `boolean` | `false` | Show character counter |
| `rows` | `number` | - | Number of rows |
| `disabled` | `boolean` | `false` | Disable the input |
| `readOnly` | `boolean` | `false` | Make read-only |
| `invalid` | `boolean` | `false` | Error state |
| `colorPalette` | `ColorPalette` | - | Color theme |

## Models

| Model | Type | Description |
|-------|------|-------------|
| `value` | `string` | Input value |
