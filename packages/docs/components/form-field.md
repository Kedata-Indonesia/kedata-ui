<script setup>
import { ref } from 'vue';
import { FormField, TextInput, Label } from '@kedataindo/vue';

const name = ref('');
const email = ref('');
</script>

# Form Field

A wrapper component that combines a label with an input, supporting error and helper text.

## Basic Usage

<ClientOnly>
  <div class="demo-box flex-col items-start w-full">
    <FormField for="name" class="w-full">
      <template #label>Full Name</template>
      <TextInput id="name" v-model:value="name" placeholder="Enter your name" />
    </FormField>
  </div>
</ClientOnly>

```vue
<FormField for="name">
  <template #label>Full Name</template>
  <TextInput id="name" v-model:value="name" placeholder="Enter your name" />
</FormField>
```

## With Error

<ClientOnly>
  <div class="demo-box flex-col items-start w-full">
    <FormField for="email" invalid errorMessage="Please enter a valid email address" class="w-full">
      <template #label>Email</template>
      <TextInput id="email" v-model:value="email" placeholder="Enter email" invalid />
    </FormField>
  </div>
</ClientOnly>

```vue
<FormField
  for="email"
  invalid
  errorMessage="Please enter a valid email address"
>
  <template #label>Email</template>
  <TextInput id="email" v-model:value="email" placeholder="Enter email" invalid />
</FormField>
```

## Required Field

<ClientOnly>
  <div class="demo-box flex-col items-start w-full">
    <FormField for="req" required class="w-full">
      <template #label>Required Field</template>
      <TextInput id="req" placeholder="This field is required" />
    </FormField>
  </div>
</ClientOnly>

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `for` | `string` | - | Label `for` attribute |
| `required` | `boolean` | `false` | Mark as required |
| `showAsterisk` | `boolean` | `true` | Show asterisk for required |
| `invalid` | `boolean` | `false` | Error state |
| `errorMessage` | `string` | - | Error message text |
| `labelPlacement` | `FormFieldLabelPlacement` | - | Label position |
| `withParts` | `boolean` | `true` | Use default styling |

## Slots

| Slot | Description |
|------|-------------|
| `label` | Label text |
| `default` | Input element |
