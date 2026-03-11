<script setup>
import { ref } from 'vue';
import { Switch } from '@kedataindo/vue';

const checked = ref(false);
</script>

# Switch

A toggle switch component.

## Basic Usage

<ClientOnly>
  <div class="demo-box">
    <Switch v-model:checked="checked" name="demo">
      Enable notifications
    </Switch>
    <span class="text-sm text-gray-500">{{ checked ? 'On' : 'Off' }}</span>
  </div>
</ClientOnly>

```vue
<script setup>
import { ref } from 'vue';
import { Switch } from '@kedataindo/vue';
const checked = ref(false);
</script>

<Switch v-model:checked="checked" name="demo">Enable notifications</Switch>
```

## States

<ClientOnly>
  <div class="demo-box">
    <Switch :checked="true" name="s1">Enabled</Switch>
    <Switch :checked="false" disabled name="s2">Disabled Off</Switch>
    <Switch :checked="true" disabled name="s3">Disabled On</Switch>
  </div>
</ClientOnly>

## Color Palettes

<ClientOnly>
  <div class="demo-box">
    <Switch :checked="true" colorPalette="primary" name="sp1">Primary</Switch>
    <Switch :checked="true" colorPalette="success" name="sp2">Success</Switch>
    <Switch :checked="true" colorPalette="danger" name="sp3">Danger</Switch>
  </div>
</ClientOnly>

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | - | Input name |
| `value` | `string` | - | Input value |
| `disabled` | `boolean` | `false` | Disable the switch |
| `readOnly` | `boolean` | `false` | Make read-only |
| `invalid` | `boolean` | `false` | Error state |
| `colorPalette` | `ColorPalette` | - | Color theme |

## Models

| Model | Type | Description |
|-------|------|-------------|
| `checked` | `boolean` | Toggle state |
