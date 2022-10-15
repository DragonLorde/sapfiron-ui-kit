import React, { FC, PropsWithChildren } from 'react'
import { Styled } from './style/PanelFooter.styled'
import { IPanelFooterProps } from './model/PanelFooter.model'

const {
  PanelFooterWrap,
} = Styled

const PanelFooter: FC<PropsWithChildren<IPanelFooterProps>> = (
  {
    style,
    className,
    children,
  },
) => (
  <PanelFooterWrap
    style={style}
    className={className}
  >
    {children}
  </PanelFooterWrap>
)

export default PanelFooter
