import type { ModelRef } from "vue";

export type PopoverProps = {
  class?: string;
  withParts?: boolean;
  /**
   * @default true
   */
  darkable?: boolean;
};

export type PopoverModels = {
  open: ModelRef<boolean>;
};
