import { ReactNode } from 'react'
// eslint-disable-next-line import/no-unresolved
import { Property } from 'csstype'

export interface INumberInputProps {
  disabled?: boolean;
  small?: boolean;
  placeholder?: string;
  editableHelp?: string;
  label?: string;
  icon?: ReactNode;
  error?: boolean;
  onChange?: (value: string | number) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  name?: string;
  width?: number | Property.Width;
  optional?: () => void;
  optionalIcon?: ReactNode;
  className?: string;
  skeleton?: boolean;
  value?: number,
  min?: number,
  max?: number,
  step?: number,
}
