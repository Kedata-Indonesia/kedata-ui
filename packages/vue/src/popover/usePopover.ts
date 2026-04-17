import { popoverSlots, tw } from '@kedataindo/slots';
import * as popover from '@zag-js/popover';
import { normalizeProps, useMachine } from '@zag-js/vue';
import clsx from 'clsx';
import type { PopoverModels, PopoverProps } from './index.types';
import { computed, useId, type HTMLAttributes } from 'vue';

const usePopover = (props: PopoverProps, models: PopoverModels) => {
  const id = useId();

  const service = useMachine(
    popover.machine,
    computed(() => {
      return {
        id,
        open: models.open.value,
        onOpenChange: (details) => {
          models.open.value = details.open;
        },
      };
    }),
  );

  const api = computed(() => popover.connect(service, normalizeProps));

  const slots = computed(() => {
    return popoverSlots({
      withParts: props.withParts,
      darkable: props.darkable ?? true,
    });
  });

  const getTriggerProps = () => {
    return {
      ...api.value.getTriggerProps(),
      class: tw(slots.value.trigger()),
    } as HTMLAttributes;
  };

  const getPositionerProps = () => {
    return {
      ...api.value.getPositionerProps(),
      class: tw(slots.value.positioner()),
    } as HTMLAttributes;
  };

  const getContentProps = () => {
    return {
      ...api.value.getContentProps(),
      // v-if + Transition keep the node mounted during leave; Zag's hidden:!open
      // would hide it immediately and break the exit animation (same as Menu).
      hidden: false,
      class: tw(clsx('light', slots.value.content(), props.class)),
    } as HTMLAttributes;
  };

  return {
    slots,

    getTriggerProps,
    getPositionerProps,
    getContentProps,
  };
};

export default usePopover;
