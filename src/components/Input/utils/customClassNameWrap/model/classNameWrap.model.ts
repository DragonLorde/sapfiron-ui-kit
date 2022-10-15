import { ReactNode } from 'react'

export interface ICalssNameWrapModelProps {
  className?: string,
  disabled?: boolean,
  error?: boolean,
  icon?: ReactNode,
  inputValue?: string | number,
  optional?: () => void,
  small?: boolean,
  visiblePlaceholder?: boolean
}
