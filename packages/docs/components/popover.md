<script setup>
import { ref } from 'vue';
import { Popover, Button } from '@kedataindo/vue';

const open = ref(false);
</script>

# Popover

A floating content panel triggered by a button or element.

## Basic Usage

<ClientOnly>
  <div class="demo-box" style="min-height: 200px; align-items: flex-start; padding-top: 60px;">
    <Popover v-model:open="open">
      <template #trigger="triggerProps">
        <Button v-bind="triggerProps" @click="open = !open">Open Popover</Button>
      </template>
      <template #content>
        <div class="p-4 min-w-[200px]">
          <p class="font-semibold mb-2">Popover Title</p>
          <p class="text-sm text-gray-500">This is popover content. You can put anything here.</p>
          <Button size="small" class="mt-3" @click="open = false">Close</Button>
        </div>
      </template>
    </Popover>
  </div>
</ClientOnly>

```vue
<script setup>
import { ref } from 'vue';
import { Popover, Button } from '@kedataindo/vue';
const open = ref(false);
</script>

<Popover v-model:open="open">
  <template #trigger="triggerProps">
    <Button v-bind="triggerProps" @click="open = !open">Open Popover</Button>
  </template>
  <template #content>
    <div class="p-4">
      <p>Popover content goes here</p>
    </div>
  </template>
</Popover>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `class` | `string` | - | Additional CSS classes |
| `withParts` | `boolean` | `true` | Use default styling |

## Models

| Model | Type | Description |
|-------|------|-------------|
| `open` | `boolean` | Popover visibility |

## Slots

| Slot | Props | Description |
|------|-------|-------------|
| `trigger` | trigger props | The element that triggers the popover |
| `content` | - | Popover content |
