<script setup>
import { ref } from 'vue';
import { DialogContent, DialogHeader, DialogBody, DialogFooter, Button, useDialogStore } from '@kedataindo/vue';

const store = useDialogStore();
const store2 = useDialogStore();
</script>

# Dialog

A modal dialog with header, body, and footer sections.

## Basic Usage

<ClientOnly>
  <div class="demo-box">
    <Button @click="store.open()">Open Dialog</Button>

    <DialogContent :store="store">
      <DialogHeader title="Dialog Title" :onClose="store.close" />
      <DialogBody>
        <p>This is the dialog content. You can put any content here.</p>
      </DialogBody>
      <DialogFooter>
        <Button variant="outline" @click="store.close()">Cancel</Button>
        <Button @click="store.close()">Confirm</Button>
      </DialogFooter>
    </DialogContent>
  </div>
</ClientOnly>

```vue
<script setup>
import { ref } from 'vue';
import {
  DialogContent, DialogHeader, DialogBody, DialogFooter,
  Button, useDialogStore
} from '@kedataindo/vue';

const store = useDialogStore();
</script>

<Button @click="store.open()">Open Dialog</Button>

<DialogContent :store="store">
  <DialogHeader title="Dialog Title" :onClose="store.close" />
  <DialogBody>
    <p>Dialog content goes here.</p>
  </DialogBody>
  <DialogFooter>
    <Button variant="outline" @click="store.close()">Cancel</Button>
    <Button @click="store.close()">Confirm</Button>
  </DialogFooter>
</DialogContent>
```

## Positions

<ClientOnly>
  <div class="demo-box">
    <Button @click="store2.open()" variant="outline">Bottom Sheet</Button>

    <DialogContent :store="store2" position="bottom-center" paddingless responsiveBottom>
      <DialogHeader title="Bottom Sheet" :onClose="store2.close" />
      <DialogBody>
        <p>This dialog slides up from the bottom.</p>
      </DialogBody>
      <DialogFooter>
        <Button @click="store2.close()" class="w-full">Close</Button>
      </DialogFooter>
    </DialogContent>
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
