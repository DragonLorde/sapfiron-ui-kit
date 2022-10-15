import { FC } from 'react'
import { SiderProps } from 'antd'
import { Styled } from './style/Sider.styled'

export const Sider: FC<SiderProps> = (
  {
    width = 'auto',
    ...props
  },
) => (
  // @ts-ignore
  <Styled.Sider {...props} width={width} />
)
