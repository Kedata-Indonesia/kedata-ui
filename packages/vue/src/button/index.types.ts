import type { ButtonSize, ButtonVariant, ColorPalette } from '@kedataindo/slots';

export type ButtonProps = {
  class?: string;
  disabled?: boolean;
  loading?: boolean;
  variant?: ButtonVariant;
  colorPalette?: ColorPalette;
  withParts?: boolean;
  size?: ButtonSize;
  /**
   * @default 'button'
   */
  type?: 'button' | 'submit' | 'reset';
};
