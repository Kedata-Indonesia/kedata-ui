import type { ChatBubbleVariant } from "@kedataindo/slots";

export type ChatBubbleProps = {
  id?: string;
  withParts?: boolean;
  variant?: ChatBubbleVariant;
  time?: string;
  class?: string;
};
