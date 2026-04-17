<script lang="ts" setup>
import { ColorPicker } from '../color-picker';
import FadeTransition from '../FadeTransition.vue';
import type { ColorInputProps } from './index.types';
import useColorInput from './useColorInput';

const props = defineProps<ColorInputProps>();
const value = defineModel<string>('value', {
  default: '#000000',
});
const isOpen = defineModel<boolean>('isOpen', {
  default: false,
});

const api = useColorInput(props, {
  value,
  isOpen,
});
</script>
<template>
  <button v-bind="api.getRootProps()">
    <div v-bind="api.getInputWrapperProps()">
      <div v-bind="api.getIndicatorProps()" />
      <div v-bind="api.getValueProps()">
        {{ value }}
      </div>
      <input v-bind="api.getHiddenInputProps()" />
    </div>
  </button>
  <Teleport to="body">
    <FadeTransition>
      <div v-bind="api.getPositionerProps()" v-if="isOpen">
        <div v-bind="api.getContentProps()">
          <ColorPicker v-bind="api.getColorPickerProps()" />
        </div>
      </div>
    </FadeTransition>
  </Teleport>
</template>
