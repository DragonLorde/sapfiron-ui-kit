import React, { FC } from 'react'
import { Styled } from './style/ArrowDropDown.styled'
import { useBurgerOpen } from '../hooks'

const {
  ArrowContainer,
  Arrow,
} = Styled

export interface ArrowDropDownProps {
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  isOpen: boolean;
}

const ArrowDropDown:FC<ArrowDropDownProps> = ({ isOpen, onClick }) => {
  const onClickEvent = useBurgerOpen(onClick)

  return (
    <ArrowContainer isOpen={isOpen} onClick={onClickEvent} role="button">
      <Arrow />
      <Arrow />
    </ArrowContainer>
  )
}

export default ArrowDropDown
