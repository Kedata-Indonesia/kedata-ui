<script setup>
import { ref } from 'vue';
import { Radio } from '@kedataindo/vue';

const selected = ref('');
</script>

# Radio

A radio button input for single selection within a group.

## Basic Usage

<ClientOnly>
  <div class="demo-box flex-col items-start">
    <Radio v-model:checked="selected" value="react" name="framework">React</Radio>
    <Radio v-model:checked="selected" value="vue" name="framework">Vue</Radio>
    <Radio v-model:checked="selected" value="solid" name="framework">SolidJS</Radio>
    <span class="text-sm text-gray-500">Selected: {{ selected }}</span>
  </div>
</ClientOnly>

```vue
<script setup>
import { ref } from 'vue';
import { Radio } from '@kedataindo/vue';
const selected = ref('');
</script>

<Radio v-model:checked="selected" value="react" name="framework">React</Radio>
<Radio v-model:checked="selected" value="vue" name="framework">Vue</Radio>
<Radio v-model:checked="selected" value="solid" name="framework">SolidJS</Radio>
```

## States

<ClientOnly>
  <div class="demo-box flex-col items-start">
    <Radio :checked="true" name="s1">Checked</Radio>
    <Radio :checked="false" disabled name="s2">Disabled</Radio>
    <Radio :checked="true" disabled name="s3">Disabled Checked</Radio>
    <Radio :checked="false" invalid name="s4">Invalid</Radio>
  </div>
</ClientOnly>

## Color Palettes

<ClientOnly>
  <div class="demo-box flex-col items-start">
    <Radio :checked="true" colorPalette="primary" name="cp1">Primary</Radio>
    <Radio :checked="true" colorPalette="success" name="cp2">Success</Radio>
    <Radio :checked="true" colorPalette="danger" name="cp3">Danger</Radio>
  </div>
</ClientOnly>

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | - | Input name (group) |
| `value` | `string` | - | Radio value |
| `disabled` | `boolean` | `false` | Disable the radio |
| `readOnly` | `boolean` | `false` | Make read-only |
| `invalid` | `boolean` | `false` | Error state |
| `colorPalette` | `ColorPalette` | - | Color theme |

## Models

| Model | Type | Description |
|-------|------|-------------|
| `checked` | `boolean \| string` | Selected state or value |
