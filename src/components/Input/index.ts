import { ComponentProps, FC } from 'react'

import TextInput from './components/TextInput'
import PasswordInput from './components/PasswordInput'
import NumberInput from './components/NumberInput'
import CustomMaskedInput from './components/CustomMaskedInput'

export interface CompoundedComponent extends FC<ComponentProps<typeof TextInput>> {
  TextInput: typeof TextInput,
  Password: typeof PasswordInput,
  Number: typeof NumberInput,
  Masked: typeof CustomMaskedInput
}

export const Input = TextInput as CompoundedComponent
Input.Password = PasswordInput
Input.Number = NumberInput
Input.Masked = CustomMaskedInput

export type { IInputProps } from './model/Input.model'
export { InputTypeEnum } from './model/Input.model'
