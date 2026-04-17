import { dataAttrBoolean } from "@kedata-software/toolkit-js";
import { dialogContentSlots, tw } from "@kedataindo/slots";
import clsx from "clsx";
import { computed, type HTMLAttributes } from "vue";
import type { DialogContentProps } from "./index.types";

const useDialogContent = (props: DialogContentProps) => {
  const slots = computed(() => {
    return dialogContentSlots({
      withParts: props.withParts,
      paddingless: props.paddingless,
      position: props.position,
    });
  });

  const getRootProps = () => {
    return {
      "data-position": props.position,
      "data-paddingless": dataAttrBoolean(props.paddingless),
      class: tw(clsx("light", slots.value.root(), props.class)),
    } as HTMLAttributes;
  };

  return {
    getRootProps,
  };
};

export default useDialogContent;
