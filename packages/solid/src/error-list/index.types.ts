import type {
  ColorPalette,
  ErrorListClassNames,
} from '@kedataindo/slots';
import type { ComponentProps } from 'solid-js';

export type WithErrorListProps = {
  errors?: (string | { message?: string } | Error | null | undefined)[];
};

export type ErrorListBaseProps = WithErrorListProps & {
  colorPalette?: ColorPalette;
  classNames?: ErrorListClassNames;
  withParts?: boolean;
};

export type ErrorListProps = ComponentProps<'div'> & ErrorListBaseProps;
