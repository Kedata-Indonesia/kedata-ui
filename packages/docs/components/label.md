<script setup>
import { Label } from '@kedataindo/vue';
</script>

# Label

A form label component with optional required asterisk.

## Basic Usage

<ClientOnly>
  <div class="demo-box">
    <Label>Full Name</Label>
    <Label required>Email Address</Label>
    <Label required :showAsterisk="false">Phone (required, no asterisk)</Label>
  </div>
</ClientOnly>

```vue
<Label>Full Name</Label>
<Label required>Email Address</Label>
<Label required :showAsterisk="false">Phone</Label>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `required` | `boolean` | `false` | Mark as required field |
| `showAsterisk` | `boolean` | `true` | Show asterisk when required |
| `class` | `string` | - | Additional CSS classes |
| `withParts` | `boolean` | `true` | Use default styling |
