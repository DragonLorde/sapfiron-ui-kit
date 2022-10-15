import styled from 'styled-components'
import styleMixins from '../../../styles/styleMixins'

const { defaultTitleStyle } = styleMixins.text
const { getSpacing } = styleMixins.offset

const PanelHeaderWrap = styled.div`
  ${defaultTitleStyle(6)};
  padding: ${getSpacing(1)};
  box-shadow: ${(p) => p.theme.decoration.boxShadow.panel};
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  background: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.decoration.borderRadius.default};
`

export const Styled = {
  PanelHeaderWrap,
}
