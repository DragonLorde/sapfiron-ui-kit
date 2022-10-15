import styled from 'styled-components'
import { Layout } from 'antd'
import { layoutBlockStyle } from '../../style/Layout.styled'

const Content = styled(Layout.Content)`
  height: 100%;
  background: white;
  border-radius: ${(props) => props.theme.decoration.borderRadius.default};
  padding: 12px;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.2);
  ${layoutBlockStyle}
`

export const Styled = {
  Content,
}
