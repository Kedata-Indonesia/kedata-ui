<script setup lang="ts">
import { fadeTransitionProps } from './animate-state-preset';
import { Transition } from 'vue';
</script>

<template>
  <Transition v-bind="fadeTransitionProps">
    <slot />
  </Transition>
</template>
