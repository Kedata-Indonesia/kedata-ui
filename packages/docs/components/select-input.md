<script setup>
import { ref } from 'vue';
import { SelectInput } from '@kedataindo/vue';

const value = ref('');
const multiValue = ref([]);

const options = [
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue' },
  { label: 'Angular', value: 'angular' },
  { label: 'Svelte', value: 'svelte' },
  { label: 'SolidJS', value: 'solid' },
];
</script>

# Select Input

A searchable dropdown select with single and multi-select modes.

## Single Select

<ClientOnly>
  <div class="demo-box flex-col items-start" style="min-height: 200px;">
    <SelectInput
      v-model:value="value"
      :options="options"
      mode="single"
      placeholder="Select a framework"
    />
    <span class="text-sm text-gray-500">Value: {{ value }}</span>
  </div>
</ClientOnly>

```vue
<script setup>
import { ref } from 'vue';
import { SelectInput } from '@kedataindo/vue';

const value = ref('');
const options = [
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue' },
  { label: 'Angular', value: 'angular' },
];
</script>

<SelectInput
  v-model:value="value"
  :options="options"
  mode="single"
  placeholder="Select a framework"
/>
```

## Multiple Select

<ClientOnly>
  <div class="demo-box flex-col items-start" style="min-height: 200px;">
    <SelectInput
      v-model:value="multiValue"
      :options="options"
      mode="multiple"
      placeholder="Select frameworks"
    />
    <span class="text-sm text-gray-500">Value: {{ multiValue }}</span>
  </div>
</ClientOnly>

```vue
<SelectInput
  v-model:value="multiValue"
  :options="options"
  mode="multiple"
  placeholder="Select frameworks"
/>
```

## With Search

<ClientOnly>
  <div class="demo-box" style="min-height: 200px;">
    <SelectInput
      :options="options"
      mode="single"
      placeholder="Search frameworks..."
      withSearch
    />
  </div>
</ClientOnly>

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `options` | `SelectOption[]` | `[]` | List of options |
| `mode` | `'single' \| 'multiple'` | `'single'` | Selection mode |
| `placeholder` | `string` | - | Placeholder text |
| `withSearch` | `boolean` | `false` | Enable search |
| `searchPlaceholder` | `string` | - | Search input placeholder |
| `closeOnSelect` | `boolean` | - | Close on selection |
| `disabled` | `boolean` | `false` | Disable the input |
| `invalid` | `boolean` | `false` | Error state |
| `colorPalette` | `ColorPalette` | - | Color theme |

## Models

| Model | Type | Description |
|-------|------|-------------|
| `value` | `string \| string[]` | Selected value(s) |
| `isOpen` | `boolean` | Dropdown open state |
| `searchTerm` | `string` | Search input value |
