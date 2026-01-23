import type { ColorPalette } from "@kedataindo/slots";

export type AvatarProps = {
  withParts?: boolean;
  alt?: string;
  src?: string;
  fallback?: string;
  colorPalette?: ColorPalette;
};
