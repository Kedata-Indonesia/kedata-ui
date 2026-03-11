<script setup>
import { ref } from 'vue';
import { Button } from '@kedataindo/vue';
</script>

# Button

A flexible button component with multiple variants, sizes, and color palettes.

## Basic Usage

<ClientOnly>
  <div class="demo-box">
    <Button>Default</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="text">Text</Button>
  </div>
</ClientOnly>

```vue
<Button>Default</Button>
<Button variant="outline">Outline</Button>
<Button variant="text">Text</Button>
```

## Sizes

<ClientOnly>
  <div class="demo-box">
    <Button size="small">Small</Button>
    <Button size="medium">Medium</Button>
    <Button size="large">Large</Button>
  </div>
</ClientOnly>

```vue
<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>
```

## Color Palettes

<ClientOnly>
  <div class="demo-box">
    <Button colorPalette="primary">Primary</Button>
    <Button colorPalette="success">Success</Button>
    <Button colorPalette="danger">Danger</Button>
    <Button colorPalette="warning">Warning</Button>
    <Button colorPalette="info">Info</Button>
  </div>
</ClientOnly>

```vue
<Button colorPalette="primary">Primary</Button>
<Button colorPalette="success">Success</Button>
<Button colorPalette="danger">Danger</Button>
<Button colorPalette="warning">Warning</Button>
<Button colorPalette="info">Info</Button>
```

## States

<ClientOnly>
  <div class="demo-box">
    <Button disabled>Disabled</Button>
    <Button loading>Loading</Button>
  </div>
</ClientOnly>

```vue
<Button disabled>Disabled</Button>
<Button loading>Loading</Button>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'solid' \| 'outline' \| 'text'` | `'solid'` | Visual style |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Button size |
| `colorPalette` | `ColorPalette` | - | Color theme |
| `disabled` | `boolean` | `false` | Disable the button |
| `loading` | `boolean` | `false` | Show loading state |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | HTML button type |
| `class` | `string` | - | Additional CSS classes |
