<script setup>
import { Feedback } from '@kedataindo/vue';
</script>

# Feedback

An alert/feedback component for displaying status messages.

## Presets

<ClientOnly>
  <div class="demo-box flex-col items-stretch w-full">
    <Feedback preset="success">Operation completed successfully!</Feedback>
    <Feedback preset="error">An error occurred. Please try again.</Feedback>
    <Feedback preset="warning">Please review before proceeding.</Feedback>
  </div>
</ClientOnly>

```vue
<Feedback preset="success">Operation completed successfully!</Feedback>
<Feedback preset="error">An error occurred. Please try again.</Feedback>
<Feedback preset="warning">Please review before proceeding.</Feedback>
```

## Color Palettes

<ClientOnly>
  <div class="demo-box flex-col items-stretch w-full">
    <Feedback colorPalette="primary">Primary feedback message</Feedback>
    <Feedback colorPalette="info">Informational message</Feedback>
    <Feedback colorPalette="neutral">Neutral message</Feedback>
  </div>
</ClientOnly>

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `preset` | `'success' \| 'error' \| 'warning'` | - | Preset style |
| `colorPalette` | `ColorPalette` | - | Color theme |
| `class` | `string` | - | Additional CSS classes |
| `withParts` | `boolean` | `true` | Use default styling |
