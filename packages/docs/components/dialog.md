<script setup>
import { defineComponent, h } from 'vue';
import { DialogContent, DialogHeader, DialogBody, DialogFooter, Button, useDialogStore, withDialog, useDialogContext } from '@kedataindo/vue';

const store = useDialogStore();
const store2 = useDialogStore();

const BasicDialog = withDialog(
  defineComponent({
    name: 'BasicDialog',
    setup() {
      const { close } = useDialogContext();
      return () =>
        h(DialogContent, { class: 'w-full max-w-lg' }, () => [
          h(DialogHeader, { title: 'Dialog Title', onClose: close }),
          h(DialogBody, () =>
            h('p', 'This is the dialog content. You can put any content here.'),
          ),
          h(DialogFooter, () => [
            h(Button, { variant: 'outline', onClick: () => close() }, () => 'Cancel'),
            h(Button, { onClick: () => close() }, () => 'Confirm'),
          ]),
        ]);
    },
  }),
);

const BottomSheetDialog = withDialog(
  defineComponent({
    name: 'BottomSheetDialog',
    setup() {
      const { close } = useDialogContext();
      return () =>
        h(DialogContent, () => [
          h(DialogHeader, { title: 'Bottom Sheet', onClose: close }),
          h(DialogBody, () => h('p', 'This dialog slides up from the bottom.')),
          h(DialogFooter, () =>
            h(Button, { onClick: () => close(), class: 'w-full' }, () => 'Close'),
          ),
        ]);
    },
  }),
);
</script>

# Dialog

A modal dialog with header, body, and footer sections.

## Basic Usage

<ClientOnly>
  <div class="demo-box">
    <Button @click="store.open()">Open Dialog</Button>
    <BasicDialog :store="store" />
  </div>
</ClientOnly>

```vue
<script setup>
import { ref } from 'vue';
import {
  DialogContent, DialogHeader, DialogBody, DialogFooter,
  Button, useDialogStore, withDialog, useDialogContext
} from '@kedataindo/vue';

const store = useDialogStore();

const MyDialog = withDialog(/* your dialog component */);
</script>

<Button @click="store.open()">Open Dialog</Button>
<MyDialog :store="store" />
```

## Positions

<ClientOnly>
  <div class="demo-box">
    <Button @click="store2.open()" variant="outline">Bottom Sheet</Button>
    <BottomSheetDialog :store="store2" position="bottom-center" paddingless responsiveBottom />
  </div>
</ClientOnly>

## Components

### `useDialogStore`

```ts
const store = useDialogStore();
store.open();   // Open the dialog
store.close();  // Close the dialog
store.isOpen;   // Reactive boolean
```

### `DialogContent` Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `store` | `CreateDialogStoreReturn` | Required | Dialog store |
| `position` | `DialogPosition` | `'top-center'` | Dialog position |
| `paddingless` | `boolean` | `false` | Remove padding |
| `responsiveBottom` | `boolean` | `true` | Mobile bottom sheet |

### `DialogHeader` Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | - | Dialog title |
| `showCloseIcon` | `boolean` | `true` | Show close button |
| `onClose` | `() => void` | - | Close handler |
