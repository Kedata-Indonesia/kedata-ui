<script setup lang="ts">
import usePopover from "./usePopover";
import type { PopoverProps } from "./index.types";
import FadeTransition from "../FadeTransition.vue";

const open = defineModel<boolean>("open", {
  default: false,
});
const props = defineProps<PopoverProps>();

const api = usePopover(props, { open });
</script>

<template>
  <slot name="trigger" v-bind="api.getTriggerProps()" />

  <FadeTransition>
    <div v-if="open" v-bind="api.getPositionerProps()">
      <div v-bind="api.getContentProps()">
        <slot name="content" :open="open" @close="open = false" />
      </div>
    </div>
  </FadeTransition>
</template>
