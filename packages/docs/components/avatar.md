<script setup>
import { Avatar } from '@kedataindo/vue';
</script>

# Avatar

Displays a user avatar with image, fallback text, or initials.

## Basic Usage

<ClientOnly>
  <div class="demo-box">
    <Avatar src="https://i.pravatar.cc/150?img=1" alt="User Avatar" />
    <Avatar fallback="JD" />
    <Avatar fallback="AB" colorPalette="primary" />
  </div>
</ClientOnly>

```vue
<Avatar src="https://i.pravatar.cc/150?img=1" alt="User Avatar" />
<Avatar fallback="JD" />
<Avatar fallback="AB" colorPalette="primary" />
```

## Color Palettes

<ClientOnly>
  <div class="demo-box">
    <Avatar fallback="PR" colorPalette="primary" />
    <Avatar fallback="SC" colorPalette="success" />
    <Avatar fallback="DG" colorPalette="danger" />
    <Avatar fallback="WN" colorPalette="warning" />
    <Avatar fallback="IN" colorPalette="info" />
  </div>
</ClientOnly>

```vue
<Avatar fallback="PR" colorPalette="primary" />
<Avatar fallback="SC" colorPalette="success" />
<Avatar fallback="DG" colorPalette="danger" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | - | Image URL |
| `alt` | `string` | - | Alt text for image |
| `fallback` | `string` | - | Text to display when image fails |
| `colorPalette` | `ColorPalette` | - | Background color theme |
| `withParts` | `boolean` | `true` | Use default styling |
