<script setup>
import { ref } from 'vue';
import { Menu, Button } from '@kedataindo/vue';

const isOpen = ref(false);
const selected = ref('');

const options = [
  { label: 'Edit', value: 'edit' },
  { label: 'Duplicate', value: 'duplicate' },
  { type: 'separator' },
  { label: 'Delete', value: 'delete', colorPalette: 'danger' },
];

function onSelect(value) {
  selected.value = value;
  isOpen.value = false;
}
</script>

# Menu

A dropdown menu with options and separators.

## Basic Usage

<ClientOnly>
  <div class="demo-box" style="min-height: 220px; align-items: flex-start; padding-top: 20px;">
    <div>
      <Menu v-model:isOpen="isOpen" :options="options" @select="onSelect">
        <template #trigger="triggerProps">
          <Button v-bind="triggerProps" @click="isOpen = !isOpen">Actions</Button>
        </template>
      </Menu>
      <p class="text-sm text-gray-500 mt-2">Selected: {{ selected }}</p>
    </div>
  </div>
</ClientOnly>

```vue
<script setup>
import { ref } from 'vue';
import { Menu, Button } from '@kedataindo/vue';

const isOpen = ref(false);
const options = [
  { label: 'Edit', value: 'edit' },
  { label: 'Duplicate', value: 'duplicate' },
  { type: 'separator' },
  { label: 'Delete', value: 'delete', colorPalette: 'danger' },
];
</script>

<Menu v-model:isOpen="isOpen" :options="options" @select="onSelect">
  <template #trigger="triggerProps">
    <Button v-bind="triggerProps" @click="isOpen = !isOpen">Actions</Button>
  </template>
</Menu>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `options` | `MenuOption[]` | `[]` | Menu items |
| `withParts` | `boolean` | `true` | Use default styling |
| `darkable` | `boolean` | - | Dark mode support |

## Models

| Model | Type | Description |
|-------|------|-------------|
| `isOpen` | `boolean` | Menu open state |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `select` | `string` | Emitted when an item is selected |

## Types

```ts
type MenuOption = MenuItemOption | MenuSeparatorOption;

type MenuItemOption = {
  type?: 'item';
  label: string;
  value: string;
  colorPalette?: ColorPalette;
};

type MenuSeparatorOption = {
  type: 'separator';
};
```
