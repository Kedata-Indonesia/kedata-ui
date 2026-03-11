<script setup>
import { Badge } from '@kedataindo/vue';
</script>

# Badge

Small label for status, categories, or counts.

## Basic Usage

<ClientOnly>
  <div class="demo-box">
    <Badge>Default</Badge>
    <Badge variant="outline">Outline</Badge>
    <Badge variant="soft">Soft</Badge>
  </div>
</ClientOnly>

```vue
<Badge>Default</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="soft">Soft</Badge>
```

## Color Palettes

<ClientOnly>
  <div class="demo-box">
    <Badge colorPalette="primary">Primary</Badge>
    <Badge colorPalette="success">Success</Badge>
    <Badge colorPalette="danger">Danger</Badge>
    <Badge colorPalette="warning">Warning</Badge>
    <Badge colorPalette="info">Info</Badge>
  </div>
</ClientOnly>

```vue
<Badge colorPalette="primary">Primary</Badge>
<Badge colorPalette="success">Success</Badge>
<Badge colorPalette="danger">Danger</Badge>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'solid' \| 'outline' \| 'soft'` | `'solid'` | Visual style |
| `colorPalette` | `ColorPalette` | - | Color theme |
| `class` | `string` | - | Additional CSS classes |
| `withParts` | `boolean` | `true` | Use default styling |
