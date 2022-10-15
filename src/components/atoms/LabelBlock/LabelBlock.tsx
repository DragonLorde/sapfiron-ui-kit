import { ReactNode } from 'react'
import { Styled } from './style/LabelBlock.styled'

const { StyledLabelBlock } = Styled

export interface LabelBlockProps {
  children: ReactNode
}

const LabelBlock = ({ children }: LabelBlockProps) => <StyledLabelBlock>{children}</StyledLabelBlock>

export default LabelBlock
