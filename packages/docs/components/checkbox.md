<script setup>
import { ref } from 'vue';
import { Checkbox } from '@kedataindo/vue';

const checked = ref(false);
const multiChecked = ref([]);
</script>

# Checkbox

A checkbox input component with indeterminate state support.

## Basic Usage

<ClientOnly>
  <div class="demo-box">
    <Checkbox v-model:checked="checked" name="demo">
      Check me
    </Checkbox>
    <span class="text-sm text-gray-500">Checked: {{ checked }}</span>
  </div>
</ClientOnly>

```vue
<script setup>
import { ref } from 'vue';
import { Checkbox } from '@kedataindo/vue';
const checked = ref(false);
</script>

<Checkbox v-model:checked="checked" name="demo">Check me</Checkbox>
```

## States

<ClientOnly>
  <div class="demo-box">
    <Checkbox :checked="true" name="c1">Checked</Checkbox>
    <Checkbox :checked="false" name="c2">Unchecked</Checkbox>
    <Checkbox :checked="false" disabled name="c3">Disabled</Checkbox>
    <Checkbox :checked="true" disabled name="c4">Disabled Checked</Checkbox>
    <Checkbox :indeterminate="true" name="c5">Indeterminate</Checkbox>
  </div>
</ClientOnly>

```vue
<Checkbox :checked="true" name="c1">Checked</Checkbox>
<Checkbox :checked="false" disabled name="c2">Disabled</Checkbox>
<Checkbox :indeterminate="true" name="c3">Indeterminate</Checkbox>
```

## Color Palettes

<ClientOnly>
  <div class="demo-box">
    <Checkbox :checked="true" colorPalette="primary" name="cp1">Primary</Checkbox>
    <Checkbox :checked="true" colorPalette="success" name="cp2">Success</Checkbox>
    <Checkbox :checked="true" colorPalette="danger" name="cp3">Danger</Checkbox>
  </div>
</ClientOnly>

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | - | Input name |
| `value` | `string` | - | Input value (for group) |
| `disabled` | `boolean` | `false` | Disable the checkbox |
| `readOnly` | `boolean` | `false` | Make read-only |
| `invalid` | `boolean` | `false` | Error state |
| `indeterminate` | `boolean` | `false` | Indeterminate state |
| `colorPalette` | `ColorPalette` | - | Color theme |

## Models

| Model | Type | Description |
|-------|------|-------------|
| `checked` | `boolean \| string[]` | Checked state or selected values |
