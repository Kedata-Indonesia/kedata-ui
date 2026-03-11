import type { ModelRef } from "vue";
import type { Placement } from "@zag-js/tooltip";

export type TooltipProps = {
  withParts?: boolean;
  placement?: Placement;
};

export type TooltipModels = {
  open: ModelRef<boolean>;
};
