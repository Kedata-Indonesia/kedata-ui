import { tooltipSlots } from "@kedataindo/slots";
import type { TooltipModels, TooltipProps } from "./index.types";
import * as tooltip from "@zag-js/tooltip";
import { useMachine, normalizeProps } from "@zag-js/vue";
import { computed, useId, type HTMLAttributes } from "vue";

const useTooltip = (props: TooltipProps, models: TooltipModels) => {
  const id = useId();

  const service = useMachine(
    tooltip.machine,
    computed(() => {
      return {
        id,
        open: models.open.value,
        onOpenChange: (details) => {
          models.open.value = details.open;
        },
        openDelay: 0,
        positioning: {
          placement: props.placement ?? "top",
        },
      };
    })
  );

  const api = computed(() => tooltip.connect(service, normalizeProps));

  const slots = computed(() => {
    return tooltipSlots({
      withParts: props.withParts,
    });
  });

  const getTriggerProps = () => {
    return api.value.getTriggerProps() as HTMLAttributes;
  };

  const getPositionerProps = () => {
    const positionerApi = api.value.getPositionerProps();
    return {
      ...positionerApi,
      class: slots.value.positioner(),
      style: {
        ...(positionerApi.style as Record<string, string>),
        "--arrow-size": "8px",
        "--arrow-background": "#334155",
      },
    } as HTMLAttributes;
  };

  const getContentProps = () => {
    return {
      ...api.value.getContentProps(),
      class: slots.value.content(),
    } as HTMLAttributes;
  };

  const getArrowProps = () => {
    return {
      ...api.value.getArrowProps(),
      class: slots.value.arrow(),
    } as HTMLAttributes;
  };

  const getArrowTipProps = () => {
    return {
      ...api.value.getArrowTipProps(),
      class: slots.value.arrowTip(),
    } as HTMLAttributes;
  };

  return {
    slots,

    getTriggerProps,
    getPositionerProps,
    getContentProps,
    getArrowProps,
    getArrowTipProps,
  };
};

export default useTooltip;
