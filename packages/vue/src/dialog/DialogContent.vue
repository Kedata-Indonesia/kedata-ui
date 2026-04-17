<script setup lang="ts">
import { inject, mergeProps, useAttrs } from "vue";
import { DialogContextKey } from "./DialogContext";
import useDialogContent from "./useDialogContent";
import type { DialogContentProps, DialogContextValue } from "./index.types";

defineOptions({
  inheritAttrs: false,
});

const props = defineProps<DialogContentProps>();
const ctx = inject<DialogContextValue>(DialogContextKey);

const api = useDialogContent({
  ...props,
  position: props.position ?? ctx?.position,
  paddingless: props.paddingless ?? ctx?.paddingless,
});
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
