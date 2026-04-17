<script setup lang="ts">
import * as menu from '@zag-js/menu';
import { normalizeProps, useMachine, type PropTypes } from '@zag-js/vue';
import { computed, inject, onMounted, useId, type ComputedRef } from 'vue';
import type { MenuEmits, MenuItemOption } from './index.types';
import MenuContextKey from './MenuContext';
import { tw, type MenuClassNames, type menuSlots } from '@kedataindo/slots';
import clsx from 'clsx';

// const props = defineProps<{ option: MenuItemOption }>();
const context = inject<{
  menuApi: ComputedRef<menu.Api<PropTypes>>;
  service: menu.Service;
  slots: ComputedRef<ReturnType<typeof menuSlots>>;
  mapValueSelect?: Record<string, (value: string) => void>;
  emits: MenuEmits;
  menuClassNames: ComputedRef<MenuClassNames | undefined>;
}>(MenuContextKey);
const id = useId();

const service = useMachine(menu.machine, {
  id: id,
  onSelect: (details) => {
    context!.mapValueSelect?.[details.value]?.(details.value);
    context!.emits('select', details.value);
  },
});
const menuApi = computed(() => menu.connect(service, normalizeProps));

onMounted(() => {
  setTimeout(() => {
    context!.menuApi.value.setChild(service);
    menuApi.value.setParent(context!.service);
  });
});

const slots = computed(() => {
  return context!.slots.value;
});

const getTriggerProps = () => {
  return {
    ...menuApi.value.getTriggerProps(),
  };
};

const getContentProps = () => {
  return {
    ...menuApi.value.getContentProps(),
    hidden: false,
    class: tw(
      clsx(
        'light',
        slots.value.content(),
        context!.menuClassNames.value?.content,
      ),
    ),
  };
};

const getPositionerProps = () => {
  return {
    ...menuApi.value.getPositionerProps(),
    class: tw(
      clsx(
        slots.value.positioner(),
        'z-10',
        context!.menuClassNames.value?.positioner,
      ),
    ),
  };
};

const getSeparatorProps = () => {
  return {
    ...menuApi.value.getSeparatorProps(),
    class: tw(
      clsx(slots.value.separator(), context!.menuClassNames.value?.separator),
    ),
  };
};

const getTriggerItemProps = (api: menu.Api<PropTypes>) => {
  return {
    ...menuApi.value.getTriggerItemProps(api),
    class: tw(
      clsx(slots.value.item(), context!.menuClassNames.value?.item),
    ),
  };
};

const getItemProps = (params: menu.ItemProps) => {
  const opt = params as MenuItemOption;
  return {
    ...menuApi.value.getItemProps(params),
    class: tw(
      clsx(
        slots.value.item(),
        context!.menuClassNames.value?.item,
        opt.classNames?.item,
      ),
    ),
  };
};

const getItemStartIconProps = (params: MenuItemOption) => {
  return {
    'data-color-palette': params.colorPalette,
    class: tw(
      clsx(
        slots.value.itemStartIcon(),
        context!.menuClassNames.value?.itemStartIcon,
        params.classNames?.itemStartIcon,
        params?.className,
      ),
    ),
  };
};

const getItemLabelProps = (option: MenuItemOption) => {
  return {
    class: tw(
      clsx(
        slots.value.itemLabel(),
        context!.menuClassNames.value?.itemLabel,
        option.classNames?.itemLabel,
      ),
    ),
  };
};
</script>

<template>
  <slot
    name="trigger"
    v-bind="{
      ...menuApi,
      getTriggerItemProps,
      getTriggerProps,
      getContentProps,
      getItemProps,
      getItemStartIconProps,
      getItemLabelProps,
      getSeparatorProps,
      getPositionerProps,
    }"
  ></slot>
</template>
