<script setup>
import { ref } from 'vue';
import { PasswordInput } from '@kedataindo/vue';

const value = ref('');
const isVisible = ref(false);
</script>

# Password Input

A text input designed for passwords with show/hide toggle.

## Basic Usage

<ClientOnly>
  <div class="demo-box flex-col items-start">
    <PasswordInput
      v-model:value="value"
      v-model:isVisible="isVisible"
      placeholder="Enter password..."
    />
  </div>
</ClientOnly>

```vue
<script setup>
import { ref } from 'vue';
import { PasswordInput } from '@kedataindo/vue';
const value = ref('');
const isVisible = ref(false);
</script>

<PasswordInput
  v-model:value="value"
  v-model:isVisible="isVisible"
  placeholder="Enter password..."
/>
```

## States

<ClientOnly>
  <div class="demo-box flex-col items-start">
    <PasswordInput placeholder="Normal" />
    <PasswordInput placeholder="Disabled" disabled />
    <PasswordInput placeholder="Invalid" invalid />
  </div>
</ClientOnly>

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `placeholder` | `string` | - | Placeholder text |
| `disabled` | `boolean` | `false` | Disable the input |
| `readOnly` | `boolean` | `false` | Make read-only |
| `invalid` | `boolean` | `false` | Error state |
| `required` | `boolean` | `false` | Required field |
| `colorPalette` | `ColorPalette` | - | Color theme |

## Models

| Model | Type | Description |
|-------|------|-------------|
| `value` | `string` | Input value |
| `isVisible` | `boolean` | Password visibility state |
