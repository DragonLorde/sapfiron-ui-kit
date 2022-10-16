import styled from 'styled-components'
import { Layout } from 'antd'
import { layoutBlockStyle } from '../../style/Layout.styled'

const Header = styled(Layout.Header)`
  height: 45px;
  padding: 0;
  background-color: transparent;
  line-height: normal;
  color: inherit;
  ${layoutBlockStyle}
`

export const Styled = {
  Header,
}
