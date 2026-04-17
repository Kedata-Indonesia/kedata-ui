<script setup lang="ts">
import type { ButtonProps } from './index.types';
import useButton from './useButton';

defineOptions({
  inheritAttrs: true,
});
const props = defineProps<ButtonProps>();

const api = useButton(props);
</script>

<template>
  <button v-bind="api.getRootProps()">
    <slot name="start-icon" v-bind="api.getStartIconProps()" />
    <slot />
    <slot name="end-icon" v-bind="api.getEndIconProps()" />
  </button>
</template>
