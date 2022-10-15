import { CSSProperties, FC, PropsWithChildren } from 'react'
import { Styled } from './style/Header.styled'

export interface IHeaderProps {
  className?: string;
  style?: CSSProperties
}

export const Header: FC<PropsWithChildren<IHeaderProps>> = (props) => (
  <Styled.Header {...props} />
)
