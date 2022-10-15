import React, { FC, PropsWithChildren } from 'react'
import { Styled } from './style/PanelHeader.styled'
import { IPanelHeaderProps } from './model/PanelHeader.model'

const {
  PanelHeaderWrap,
} = Styled

const PanelHeader: FC<PropsWithChildren<IPanelHeaderProps>> = (
  {
    style,
    className,
    children,
  },
) => (
  <PanelHeaderWrap
    className={className}
    style={style}
  >
    {children}
  </PanelHeaderWrap>
)

export default PanelHeader
