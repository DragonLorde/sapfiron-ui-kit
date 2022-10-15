import React, { FC, useMemo } from 'react'
import { Styled } from '../../style/input.style'
import { IResolverInputProps } from './model/resolver.input'

const {
  StyledInputWrap,
  StyledInputEditablePlaceholder,
  StyledInputLabel,
  SkeletonStyled,
  StyledInputContainer,
} = Styled

export const ResolverInput:FC<IResolverInputProps> = (props) => {
  const {
    small,
    placeholder,
    label,
    width,
    skeleton = false,
    input,
    classNameWrap,
  } = props
  const content = useMemo(
    () => skeleton
      ? <SkeletonStyled width={width} />
      : (
        <>
          <StyledInputWrap
            className={classNameWrap}
            width={width}
          >
            {!small && <StyledInputEditablePlaceholder>{placeholder}</StyledInputEditablePlaceholder>}
            {input}
          </StyledInputWrap>
          {label && <StyledInputLabel>{label}</StyledInputLabel>}
        </>
      ),
    [classNameWrap, input, label, placeholder, skeleton, small, width],
  )
  return (
    <StyledInputContainer>
      {content}
    </StyledInputContainer>
  )
}
