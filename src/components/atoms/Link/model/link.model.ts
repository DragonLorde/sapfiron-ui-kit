import { ReactNode } from 'react'

export enum LinkTypeEnum {
  link = 'link',
  nav = 'nav',
}

export type LinkType = keyof typeof LinkTypeEnum

export interface LinkProps {
  children: ReactNode
  href: string
  title?: string
  target?: string
  className?: string
  disabled?: boolean
  onClick?: (e: MouseEvent | React.MouseEvent<HTMLAnchorElement>) => void
}

export interface LinkCustomProps extends LinkProps {
  type?: LinkType
}
