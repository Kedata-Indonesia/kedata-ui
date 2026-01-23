import type { ColorPalette } from "@kedataindo/slots";

export type FeedbackPreset = "success" | "error" | "warning";

export type FeedbackProps = {
  withParts?: boolean;
  class?: string;
  colorPalette?: ColorPalette;
  preset?: FeedbackPreset;
};
