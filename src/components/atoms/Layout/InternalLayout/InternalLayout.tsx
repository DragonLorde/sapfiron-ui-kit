import React, { FC, CSSProperties, PropsWithChildren } from 'react'
import { Layout } from 'antd'
import styled from 'styled-components'

// Баг антд, нельзя экспортировать styled(Layout)
const StyledLayout = styled(Layout)`
  background-color: transparent;
  width: 100%;
  height: 100%;
`

export interface ILayoutProps {
  className?: string;
  style?: CSSProperties
}

export const InternalLayout: FC<PropsWithChildren<ILayoutProps>> = (props) => (
  <StyledLayout {...props} />
)
