<script setup>
import { ref } from 'vue';
import { TextInput } from '@kedataindo/vue';

const value = ref('');
</script>

# Text Input

A text input component with label, helper text, and error states.

## Basic Usage

<ClientOnly>
  <div class="demo-box flex-col items-start">
    <TextInput v-model:value="value" placeholder="Enter text..." />
    <span class="text-sm text-gray-500">Value: {{ value }}</span>
  </div>
</ClientOnly>

```vue
<script setup>
import { ref } from 'vue';
import { TextInput } from '@kedataindo/vue';
const value = ref('');
</script>

<TextInput v-model:value="value" placeholder="Enter text..." />
```

## Types

<ClientOnly>
  <div class="demo-box flex-col items-start">
    <TextInput type="text" placeholder="Text input" />
    <TextInput type="email" placeholder="Email input" />
    <TextInput type="number" placeholder="Number input" />
    <TextInput type="tel" placeholder="Phone input" />
    <TextInput type="url" placeholder="URL input" />
  </div>
</ClientOnly>

## States

<ClientOnly>
  <div class="demo-box flex-col items-start">
    <TextInput placeholder="Normal" />
    <TextInput placeholder="Disabled" disabled />
    <TextInput placeholder="Read only" readOnly />
    <TextInput placeholder="Invalid" invalid />
  </div>
</ClientOnly>

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `placeholder` | `string` | - | Placeholder text |
| `type` | `'text' \| 'email' \| 'password' \| 'number' \| 'tel' \| 'url'` | `'text'` | Input type |
| `disabled` | `boolean` | `false` | Disable the input |
| `readOnly` | `boolean` | `false` | Make read-only |
| `invalid` | `boolean` | `false` | Error state |
| `required` | `boolean` | `false` | Required field |
| `colorPalette` | `ColorPalette` | - | Color theme |
| `class` | `string` | - | Additional CSS classes |

## Models

| Model | Type | Description |
|-------|------|-------------|
| `value` | `string` | Input value |
