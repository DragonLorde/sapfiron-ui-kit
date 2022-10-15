import styled from 'styled-components'
import styleMixins from '../../../styles/styleMixins'

const { defaultTitleStyle } = styleMixins.text
const { getSpacing } = styleMixins.offset

const PanelFooterWrap = styled.div`
  display: flex;
  flex-direction: column;
  
  ${defaultTitleStyle(6)};
  padding: ${getSpacing(2)};
  box-shadow: ${(p) => p.theme.decoration.boxShadow.panel};
  color: ${(props) => props.theme.colors.gray_500};
`

export const Styled = {
  PanelFooterWrap,
}
