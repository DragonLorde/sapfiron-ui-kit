import React, {
  FC, useCallback, useMemo, useState,
} from 'react'

import { Styled } from './styles/Sider.styled'
import { Logo } from '../../../icon/Logo'
import { SiderModel } from './model/Sider.model'

const {
  SiderContainer,
  SiderLogo,
  SiderContent,
  SiderIconContainer,
  SiderIconTextContainer,
  SiderIconContainerBox,
} = Styled

const Sider:FC<SiderModel> = ({ items, isOpenMenu }) => {
  const [isOpen, setIsOpen] = useState<boolean>(isOpenMenu || false)
  const onOpen = useCallback(
    () => {
      setIsOpen(!isOpen)
    },
    [isOpen],
  )

  const content = useMemo(
    () => {
      if (items) {
        return items.map((item) => (
          <SiderIconContainer $isOpen={isOpen} to={item.link}>
            <SiderIconTextContainer isOpen={isOpen}>
              {item.title}
            </SiderIconTextContainer>
            <SiderIconContainerBox>
              {item.icon}
            </SiderIconContainerBox>
          </SiderIconContainer>
        ))
      }
      return null
    },
    [isOpen, items],
  )

  return (
    <SiderContainer isOpen={isOpen}>
      <SiderLogo onClick={onOpen} role="button">
        <Logo width={50} height={50} />
      </SiderLogo>
      <SiderContent>
        {content}
      </SiderContent>
    </SiderContainer>
  )
}

export default Sider
