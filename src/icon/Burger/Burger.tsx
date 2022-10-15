import React, { FC } from 'react'
import { Styled } from './style/Burger.styled'
import { useBurgerOpen } from '../hooks'

const {
  BurgerMenu,
  BurgerLine,
} = Styled

export interface BurgerProps {
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
    isOpen: boolean;
}

const Burger:FC<BurgerProps> = ({ isOpen, onClick }) => {
  const onClickEvent = useBurgerOpen(onClick)

  return (
    <BurgerMenu isOpen={isOpen} role="button" onClick={onClickEvent}>
      <BurgerLine />
      <BurgerLine />
      <BurgerLine />
    </BurgerMenu>
  )
}

export default Burger
