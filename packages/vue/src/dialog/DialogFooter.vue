<script setup lang="ts">
import { mergeProps, useAttrs } from "vue";
import useDialogFooter from "./useDialogFooter";
import type { DialogFooterProps } from "./index.types";

defineOptions({
  inheritAttrs: false,
});
const props = defineProps<DialogFooterProps>();

const api = useDialogFooter(props);
const attrs = useAttrs();
</script>

<template>
  <footer
    v-bind="
      mergeProps(attrs as Record<string, unknown>, api.getRootProps() as Record<string, unknown>)
    "
  >
    <slot />
  </footer>
</template>
