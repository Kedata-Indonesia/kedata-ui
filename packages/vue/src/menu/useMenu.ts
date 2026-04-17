import { useMachine, normalizeProps } from '@zag-js/vue';
import * as menu from '@zag-js/menu';
import type { MenuItemOption, UseMenuParams } from './index.types';
import { computed, onMounted, provide, useId, type HTMLAttributes } from 'vue';
import { menuSlots, tw } from '@kedataindo/slots';
import clsx from 'clsx';
import MenuContextKey from './MenuContext';

const useMenu = (params: UseMenuParams) => {
  const { props, models, emits } = params;
  const id = useId();

  const service = useMachine(
    menu.machine,
    computed(() => {
      return {
        id: id,
        open: models.isOpen.value,
        onOpenChange: (value) => {
          models.isOpen.value = value.open;
        },
        onSelect: (details) => {
          models.isOpen.value = false;
          props.mapValueSelect?.[details.value]?.(details.value);
          emits('select', details.value);
        },
        positioning: {
          placement: 'bottom-start' as const,
        },
      };
    }),
  );

  const options = computed(() => {
    return props.options ?? [];
  });

  const menuApi = computed(() => menu.connect(service, normalizeProps));

  const childServices = computed(() => {
    return options.value
      .map((option) => {
        if (option.type === 'separator' || !option.options) {
          return undefined;
        }

        return useMachine(menu.machine, {
          id: option.value,
          onSelect: (details) => {
            models.isOpen.value = false;
            props.mapValueSelect?.[details.value]?.(details.value);
          },
        });
      })
      .filter((item) => !!item);
  });

  const childApis = computed(() => {
    return childServices.value.map((service) => {
      return menu.connect(service, normalizeProps);
    });
  });

  onMounted(() => {
    childServices.value.forEach((service) => {
      menuApi.value.setChild(service);
    });
    childApis.value.forEach((api) => {
      api.setParent(service);
    });
  });

  const slots = computed(() => {
    return menuSlots({
      withParts: props.withParts,
      darkable: props.darkable,
    });
  });

  provide(MenuContextKey, {
    menuApi,
    service,
    slots,
    mapValueSelect: props.mapValueSelect,
    emits,
    menuClassNames: computed(() => props.classNames),
  });

  const getTriggerProps = () => {
    return {
      ...menuApi.value.getTriggerProps(),
      'data-expanded': models.isOpen.value,
    } as HTMLAttributes;
  };

  const getContentProps = () => {
    return {
      ...menuApi.value.getContentProps(),
      hidden: false,
      class: tw(
        clsx('light', slots.value.content(), props.classNames?.content),
      ),
    } as HTMLAttributes;
  };

  const getPositionerProps = () => {
    return {
      ...menuApi.value.getPositionerProps(),
      class: tw(clsx(slots.value.positioner(), props.classNames?.positioner)),
    } as HTMLAttributes;
  };

  const getSeparatorProps = () => {
    return {
      ...menuApi.value.getSeparatorProps(),
      class: tw(clsx(slots.value.separator(), props.classNames?.separator)),
    } as HTMLAttributes;
  };

  const getTriggerItemProps = (api: any) => {
    return {
      ...menuApi.value.getTriggerItemProps(api),
      class: tw(clsx(slots.value.item(), props.classNames?.item)),
    } as HTMLAttributes;
  };

  const getItemProps = (params: menu.ItemProps) => {
    const opt = params as MenuItemOption;
    return {
      ...menuApi.value.getItemProps(params),
      class: tw(
        clsx(
          slots.value.item(),
          props.classNames?.item,
          opt.classNames?.item,
        ),
      ),
    } as HTMLAttributes;
  };

  const getItemStartIconProps = (params: MenuItemOption) => {
    return {
      'data-color-palette': params.colorPalette,
      class: tw(
        clsx(
          slots.value.itemStartIcon(),
          props.classNames?.itemStartIcon,
          params.classNames?.itemStartIcon,
          params?.className,
        ),
      ),
    } as HTMLAttributes;
  };

  const getItemLabelProps = (option: MenuItemOption) => {
    return {
      class: tw(
        clsx(
          slots.value.itemLabel(),
          props.classNames?.itemLabel,
          option.classNames?.itemLabel,
        ),
      ),
    } as HTMLAttributes;
  };

  return {
    options,
    childApis,
    getTriggerProps,
    getContentProps,
    getItemProps,
    getItemStartIconProps,
    getSeparatorProps,
    getPositionerProps,

    getTriggerItemProps,
    getItemLabelProps,
  };
};

export default useMenu;
