<script setup lang="ts">
import useTooltip from './useTooltip';
import FadeTransition from '../FadeTransition.vue';
import type { TooltipProps } from './index.types';

const props = defineProps<TooltipProps>();
const open = defineModel<boolean>('open', {
  default: false,
});

const api = useTooltip(props, { open });
</script>

<template>
  <slot name="trigger" v-bind="api.getTriggerProps()" />

  <FadeTransition>
    <div v-if="open" v-bind="api.getPositionerProps()">
      <div v-bind="api.getContentProps()">
        <div v-bind="api.getArrowProps()">
          <div v-bind="api.getArrowTipProps()" />
        </div>
        <slot name="content" :open="open" @close="open = false" />
      </div>
    </div>
  </FadeTransition>
</template>
