import type { BadgeVariant, ColorPalette } from "@kedataindo/slots";

export type BadgeProps = {
  class?: string;
  withParts?: boolean;
  variant?: BadgeVariant;
  colorPalette?: ColorPalette;
};
