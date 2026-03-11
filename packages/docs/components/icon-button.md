<script setup>
import { IconButton } from '@kedataindo/vue';
</script>

# Icon Button

A square button designed to hold a single icon.

## Basic Usage

<ClientOnly>
  <div class="demo-box">
    <IconButton aria-label="Edit">
      ✏️
    </IconButton>
    <IconButton aria-label="Delete" colorPalette="danger">
      🗑️
    </IconButton>
    <IconButton aria-label="Settings" variant="outline">
      ⚙️
    </IconButton>
  </div>
</ClientOnly>

```vue
<IconButton aria-label="Edit">✏️</IconButton>
<IconButton aria-label="Delete" colorPalette="danger">🗑️</IconButton>
<IconButton aria-label="Settings" variant="outline">⚙️</IconButton>
```

## Sizes

<ClientOnly>
  <div class="demo-box">
    <IconButton aria-label="Small" size="small">✏️</IconButton>
    <IconButton aria-label="Medium" size="medium">✏️</IconButton>
    <IconButton aria-label="Large" size="large">✏️</IconButton>
  </div>
</ClientOnly>

## States

<ClientOnly>
  <div class="demo-box">
    <IconButton aria-label="Normal">✏️</IconButton>
    <IconButton aria-label="Disabled" disabled>✏️</IconButton>
    <IconButton aria-label="Loading" loading>✏️</IconButton>
  </div>
</ClientOnly>

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `aria-label` | `string` | Required | Accessible label |
| `variant` | `ButtonVariant` | `'solid'` | Visual style |
| `size` | `ButtonSize` | `'medium'` | Button size |
| `colorPalette` | `ColorPalette` | - | Color theme |
| `disabled` | `boolean` | `false` | Disable the button |
| `loading` | `boolean` | `false` | Show loading state |
| `type` | `ButtonHTMLAttributes['type']` | - | HTML button type |
