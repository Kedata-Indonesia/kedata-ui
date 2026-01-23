import type { Component, ComponentProps, JSX } from 'solid-js';
import type { TestableProps } from '../types';
import type {
  ColorPalette,
  FeedbackClassNames,
  FeedbackIds,
} from '@kedataindo/slots';

export type FeedbackPreset = 'success' | 'error' | 'warning';

export type FeedbackBaseProps = TestableProps & {
  title?: JSX.Element;
  icon?: Component<Record<string, any>>;
  message?: JSX.Element;
  /**
   * @default 'danger'
   */
  colorPalette?: ColorPalette;
  preset?: FeedbackPreset;
  classNames?: FeedbackClassNames;
  ids?: FeedbackIds;
  idAsRoot?: boolean;
  withParts?: boolean;
};

export type FeedbackProps = ComponentProps<'div'> & FeedbackBaseProps;
