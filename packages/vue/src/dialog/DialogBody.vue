<script setup lang="ts">
import { mergeProps, useAttrs } from "vue";
import useDialogBody from "./useDialogBody";
import type { DialogBodyProps } from "./index.types";

defineOptions({
  inheritAttrs: false,
});
const props = defineProps<DialogBodyProps>();

const api = useDialogBody(props);
const attrs = useAttrs();
</script>

<template>
  <div
    v-bind="
      mergeProps(attrs as Record<string, unknown>, api.getRootProps() as Record<string, unknown>)
    "
  >
    <slot />
  </div>
</template>
