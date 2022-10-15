import { ReactNode, ChangeEvent } from 'react'
// eslint-disable-next-line import/no-unresolved
import { Property } from 'csstype'

export enum InputTypeEnum {
  password = 'password',
  text = 'text',
  number = 'number',
}

export interface IInputProps {
  value?: string,
  disabled?: boolean;
  small?: boolean;
  placeholder?: string;
  editableHelp?: string;
  label?: string;
  icon?: ReactNode;
  error?: boolean;
  onChange?: (value: string | number, e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  name?: string;
  width?: number | Property.Width;
  optional?: () => void;
  optionalIcon?: ReactNode;
  className?: string;
  skeleton?: boolean;
}
