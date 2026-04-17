<script setup lang="ts">
import useMenu from './useMenu';
import type { MenuEmits, MenuProps } from './index.types';
import MenuTriggerItem from './MenuTriggerItem.vue';
import FadeTransition from '../FadeTransition.vue';

const props = defineProps<MenuProps>();
const emits = defineEmits<MenuEmits>();
const isOpen = defineModel<boolean>('isOpen', {
  default: false,
});

const { options, ...api } = useMenu({
  props,
  models: { isOpen },
  emits
});
</script>

<template>
  <slot name="trigger" v-bind="api.getTriggerProps()"> </slot>

  <FadeTransition>
    <div v-bind="api.getPositionerProps()" v-if="isOpen">
      <div v-bind="api.getContentProps()">
        <template v-for="option in options">
          <template v-if="option.type === 'separator'">
            <div v-bind="api.getSeparatorProps()"></div>
          </template>
          <template v-else>
            <template v-if="!option.options?.length">
              <div v-bind="api.getItemProps(option)">
                <template v-if="option.startIcon">
                  <component
                    :is="option.startIcon"
                    v-bind="api.getItemStartIconProps(option)"
                  />
                </template>

                <span v-bind="api.getItemLabelProps(option)">
                  {{ option.label }}
                </span>
              </div>
            </template>
            <template v-else>
              <MenuTriggerItem :option="option">
                <template #trigger="childApi">
                  <div v-bind="api.getTriggerItemProps(childApi)">
                    <template v-if="option.startIcon">
                      <component
                        :is="option.startIcon"
                        v-bind="childApi.getItemStartIconProps(option)"
                      />
                    </template>

                    <span v-bind="childApi.getItemLabelProps(option)">
                      {{ option.label }}
                    </span>
                  </div>

                  <FadeTransition>
                    <div
                      v-bind="childApi.getPositionerProps()"
                      v-if="childApi.open"
                    >
                      <div v-bind="childApi.getContentProps()">
                        <template v-for="item in option.options">
                          <template v-if="item.type === 'separator'">
                            <div
                              v-bind="childApi.getSeparatorProps()"
                            ></div>
                          </template>
                          <template v-else>
                            <div v-bind="childApi.getItemProps(item)">
                              <template v-if="item.startIcon">
                                <component
                                  :is="item.startIcon"
                                  v-bind="
                                    childApi.getItemStartIconProps(item)
                                  "
                                />
                              </template>

                              <span v-bind="childApi.getItemLabelProps(item)">
                                {{ item.label }}
                              </span>
                            </div>
                          </template>
                        </template>
                      </div>
                    </div>
                  </FadeTransition>
                </template>
              </MenuTriggerItem>
            </template>
          </template>
        </template>
      </div>
    </div>
  </FadeTransition>

  <!-- <template v-for="childApi in api.childApis.value">
    <div v-bind="api.getPositionerProps()">
      <div v-bind="childApi.getContentProps()"></div>
    </div>
  </template> -->
</template>
