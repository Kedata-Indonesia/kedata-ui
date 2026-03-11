<script setup>
import { Tag } from '@kedataindo/vue';
</script>

# Tag

A small label for categories, filters, or removable items.

## Basic Usage

<ClientOnly>
  <div class="demo-box">
    <Tag>Default</Tag>
    <Tag variant="outline">Outline</Tag>
    <Tag variant="soft">Soft</Tag>
  </div>
</ClientOnly>

```vue
<Tag>Default</Tag>
<Tag variant="outline">Outline</Tag>
<Tag variant="soft">Soft</Tag>
```

## Color Palettes

<ClientOnly>
  <div class="demo-box">
    <Tag colorPalette="primary">Primary</Tag>
    <Tag colorPalette="success">Success</Tag>
    <Tag colorPalette="danger">Danger</Tag>
    <Tag colorPalette="warning">Warning</Tag>
    <Tag colorPalette="info">Info</Tag>
  </div>
</ClientOnly>

## Closeable

<ClientOnly>
  <div class="demo-box">
    <Tag closeable>Removable Tag</Tag>
    <Tag closeable colorPalette="primary">Primary</Tag>
  </div>
</ClientOnly>

```vue
<Tag closeable>Removable Tag</Tag>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `TagVariant` | - | Visual style |
| `colorPalette` | `ColorPalette` | - | Color theme |
| `closeable` | `boolean` | `false` | Show close button |
| `class` | `string` | - | Additional CSS classes |
| `withParts` | `boolean` | `true` | Use default styling |
