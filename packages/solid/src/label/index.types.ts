import type { LabelClassNames, LabelIds } from '@kedataindo/slots';
import type { ComponentProps } from 'solid-js';

export type WithLabelProps = {
  required?: boolean;
  showAsterisk?: boolean;
};

export type LabelBaseProps = WithLabelProps & {
  ids?: LabelIds;
  idAsRoot?: boolean;
  classNames?: LabelClassNames;
  withParts?: boolean;
};

export type LabelProps = ComponentProps<'label'> & LabelBaseProps;
