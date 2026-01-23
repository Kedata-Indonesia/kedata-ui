import type { ColorPalette } from "@kedataindo/slots";
import type { HTMLAttributes, VNode } from "vue";

export type SwalToastProps = {
  colorPalette?: ColorPalette;
  text?: () => VNode | string;
  icon?: (props: HTMLAttributes) => VNode;
  /**
   * @description Timeout in milliseconds
   * @default 3000
   */
  timeout?: number;
};
