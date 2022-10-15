import { FC } from 'react'
import { iconBuilderModelProps } from './model/IconBuilder.model'
import { Styled } from './style/IconBuilder.styled'

const {
  IconContainer,
} = Styled

const IconBuilder:FC<iconBuilderModelProps> = ({
  SVG, width, height,
}) => {
  const widthContainer: number = width || 20
  const heightContainer: number = height || 20

  return (
    <IconContainer width={widthContainer} height={heightContainer}>
      {SVG}
    </IconContainer>
  )
}

export default IconBuilder
