import type { ColorPalette, TagVariant } from "@kedataindo/slots";

export type TagProps = {
  colorPalette?: ColorPalette;
  variant?: TagVariant;
  closeable?: boolean;
  withParts?: boolean;
  class?: string;
};
