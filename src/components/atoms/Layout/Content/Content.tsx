import { CSSProperties, FC, PropsWithChildren } from 'react'
import { Styled } from './style/Content.styled'

export interface IContentProps {
  className?: string;
  style?: CSSProperties
}

export const Content: FC<PropsWithChildren<IContentProps>> = (props) => (
  <Styled.Content {...props} />
)
