import React, { MouseEventHandler } from 'react'
import { Skeleton } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import styled, { css, keyframes } from 'styled-components'
import Button from 'antd/lib/button'
import { IButtonProps } from '../model/button.model'

const wave = keyframes`
  to {
    transform: scale(4);
    opacity: 0;
  }
`

const ButtonWrapper = styled('div')<{width?: number | string}>`
  width: ${(props) => {
  if (props.width) {
    return typeof props.width === 'number' ? `${props.width}px` : props.width
  }
  return 'auto'
}
}`

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const StyledButton = styled(({ isLoading, onClick, ...rest }: IButtonProps) => (
  <Button {...rest} onClick={onClick as unknown as MouseEventHandler<HTMLElement>} />
))`
  background: ${(props) => (props.isLoading ? props.theme.colors.gray_500 : props.theme.colors.blue_600)};
  border-radius: ${(props) => props.theme.decoration.borderRadius.larger};
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 140px;
  width: 100%;
  height: 50px;
  border: none;
  position: relative;
  cursor: pointer;
  transition: 0.3s all;
  &:hover {
    border: none;
    box-shadow: ${(props) => props.theme.decoration.boxShadow.dark_200};
  }
  &:focus, &:active, &:hover {
    background: ${(props) => props.theme.colors.blue_600};
  }
  &:disabled {
    background: ${(props) => props.theme.colors.gray_500};
    pointer-events: none;
  }
  pointer-events: ${(props) => (props.isLoading ? 'none' : 'auto')};

  & .wave {
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    animation: ${css`
      ${wave} .6s linear;
    `}
    background-color: ${(props) => props.theme.colors.white};
  }`

const StyledSkeleton = styled(Skeleton.Button)`
  width: 140px;
  height: 50px;
  .ant-skeleton-button {
    width: 100%;
    height: 100%;
    border-radius: ${(props) => props.theme.decoration.borderRadius.larger};
  }
`

const TextWrap = styled('div')((props) => ({
  fontWeight: props.theme.fontSettings.weight.bold,
  fontSize: props.theme.fontSettings.size.default,
  color: props.theme.colors.white,
}))

const StyledLoading = styled(LoadingOutlined)`
  font-size: 24px;
  color: ${(props) => props.theme.colors.white};
`

export const Styled = {
  ButtonWrapper,
  StyledButton,
  StyledSkeleton,
  TextWrap,
  StyledLoading,
}
