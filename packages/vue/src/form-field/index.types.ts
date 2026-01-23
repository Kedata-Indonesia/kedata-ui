import type { FormFieldLabelPlacement } from "@kedataindo/slots";
import type { WithLabelProps } from "../label";

export type FormFieldProps = WithLabelProps & {
  for?: string;
  labelPlacement?: FormFieldLabelPlacement;
  withParts?: boolean;
  errorMessage?: string;
  invalid?: boolean;
};
