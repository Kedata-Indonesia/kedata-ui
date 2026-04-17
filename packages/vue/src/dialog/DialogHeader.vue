<script setup lang="ts">
import { mergeProps, useAttrs } from "vue";
import useDialogHeader from "./useDialogHeader";
import { KiCloseSolid } from "@kedataindo/vue-icons";
import type { DialogHeaderProps } from "./index.types";

defineOptions({
  inheritAttrs: false,
});
const props = defineProps<DialogHeaderProps>();

const { showCloseIcon, title, ...api } = useDialogHeader(props);
const attrs = useAttrs();
</script>

<template>
  <header
    v-bind="
      mergeProps(attrs as Record<string, unknown>, api.getRootProps() as Record<string, unknown>)
    "
  >
    <span v-if="!!title" v-bind="api.getTitleProps()">
      {{ title }}
    </span>

    <KiCloseSolid v-if="showCloseIcon" v-bind="api.getCloseIconProps()" />
  </header>
</template>
