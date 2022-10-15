import React, { FC, PropsWithChildren } from 'react'
import { Styled } from './styles/Typography.styled'
import { TypographyModel } from './model/Typography.model'
import { TypographyResolver } from './utils'

const {
  TypographyStyled,
  TypographyStyledContainer,
} = Styled

const Typography:FC<PropsWithChildren<TypographyModel>> = (props) => {
  const {
    color,
    type,
    children,
  } = props
  const { fontWeight, fontSize } = TypographyResolver(type)
  return (
    <TypographyStyledContainer>
      <TypographyStyled fontSize={fontSize} fontWeight={fontWeight} color={color}>
        {children}
      </TypographyStyled>
    </TypographyStyledContainer>
  )
}

export default Typography
