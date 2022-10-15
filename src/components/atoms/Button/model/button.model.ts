import { ButtonProps } from 'antd'
import { MouseEvent, ReactNode } from 'react'

export interface IButtonProps extends Omit<ButtonProps, 'onClick'> {
  children: ReactNode
  width?: string | number
  isLoading?: boolean
  disabled?: boolean
  isClickEffect?: boolean
  isSkeleton?: boolean
  onClick: (e: MouseEvent) => void
}
