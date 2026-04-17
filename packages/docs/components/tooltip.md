<script setup>
import { ref } from 'vue';
import { Tooltip, Button } from '@kedataindo/vue';

const open1 = ref(false);
const open2 = ref(false);
const open3 = ref(false);
const open4 = ref(false);
const open5 = ref(false);
</script>

# Tooltip

A floating tooltip shown on trigger hover or focus.

## Basic Usage

<ClientOnly>
  <div class="demo-box">
    <Tooltip v-model:open="open1">
      <template #trigger="triggerProps">
        <Button v-bind="triggerProps">Hover me</Button>
      </template>
      <template #content>
        <span>This is a tooltip</span>
      </template>
    </Tooltip>
  </div>
</ClientOnly>

```vue
<script setup>
import { ref } from 'vue';
import { Tooltip, Button } from '@kedataindo/vue';
const open = ref(false);
</script>

<Tooltip v-model:open="open">
  <template #trigger="triggerProps">
    <Button v-bind="triggerProps">Hover me</Button>
  </template>
  <template #content>
    <span>This is a tooltip</span>
  </template>
</Tooltip>
```

## Placements

<ClientOnly>
  <div class="demo-box justify-center" style="min-height: 150px; padding: 60px;">
    <Tooltip v-model:open="open5" placement="top">
      <template #trigger="triggerProps">
        <Button v-bind="triggerProps" size="small">Top</Button>
      </template>
      <template #content><span>Top tooltip</span></template>
    </Tooltip>
    <Tooltip v-model:open="open2" placement="bottom">
      <template #trigger="triggerProps">
        <Button v-bind="triggerProps" size="small">Bottom</Button>
      </template>
      <template #content><span>Bottom tooltip</span></template>
    </Tooltip>
    <Tooltip v-model:open="open3" placement="left">
      <template #trigger="triggerProps">
        <Button v-bind="triggerProps" size="small">Left</Button>
      </template>
      <template #content><span>Left tooltip</span></template>
    </Tooltip>
    <Tooltip v-model:open="open4" placement="right">
      <template #trigger="triggerProps">
        <Button v-bind="triggerProps" size="small">Right</Button>
      </template>
      <template #content><span>Right tooltip</span></template>
    </Tooltip>
  </div>
</ClientOnly>

```vue
<Tooltip v-model:open="open" placement="top">...</Tooltip>
<Tooltip v-model:open="open" placement="bottom">...</Tooltip>
<Tooltip v-model:open="open" placement="left">...</Tooltip>
<Tooltip v-model:open="open" placement="right">...</Tooltip>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `placement` | `Placement` | `'top'` | Tooltip position |
| `withParts` | `boolean` | `true` | Use default styling |

## Models

| Model | Type | Description |
|-------|------|-------------|
| `open` | `boolean` | Tooltip visibility |

## Slots

| Slot | Props | Description |
|------|-------|-------------|
| `trigger` | trigger props | The element that triggers the tooltip |
| `content` | `{ open }` | Tooltip content |
