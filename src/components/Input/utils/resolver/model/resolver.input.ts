import { ReactNode } from 'react'
import { IInputProps } from '../../../model/Input.model'

export interface IResolverInputProps extends IInputProps{
  input: ReactNode,
  classNameWrap: string,
}
