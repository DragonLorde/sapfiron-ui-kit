import {
  FC, MouseEvent, PropsWithChildren, useMemo,
} from 'react'
import { Spin } from 'antd'
import { Styled } from './style/Button.styled'
import { IButtonProps } from './model/button.model'
import { onClickEffect } from './utils'

const {
  ButtonWrapper, StyledButton, StyledSkeleton, TextWrap, StyledLoading,
} = Styled

const Button:FC<PropsWithChildren<IButtonProps>> = (props) => {
  const {
    children, isLoading, disabled, isClickEffect, isSkeleton, onClick, width, ...restProps
  } = props

  const onClickEvent = (e: MouseEvent) => {
    if (!isLoading) {
      isClickEffect && onClickEffect(e)
      onClick && onClick(e)
    }
  }

  const content = useMemo(
    () => (isLoading ? <Spin indicator={<StyledLoading spin />} /> : <TextWrap>{children}</TextWrap>),
    [children, isLoading],
  )

  return (
    <>
      {isSkeleton ? (
        <StyledSkeleton active />
      ) : (
        <ButtonWrapper width={width}>
          <StyledButton
            onClick={onClickEvent} disabled={disabled} isLoading={isLoading}
            {...restProps}
          >
            {content}
          </StyledButton>
        </ButtonWrapper>
      )}
    </>
  )
}

export default Button
