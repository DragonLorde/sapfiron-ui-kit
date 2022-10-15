import styled from 'styled-components'
import styleMixins from '../../../styles/styleMixins'

const { getDefaultBeatifiedScrollbar } = styleMixins.other
const { getSpacing } = styleMixins.offset

const PanelWrap = styled.aside`
  transition: all 0.4s;
  overflow: hidden;
  height: fit-content;
  display: flex;
  position: relative;
  flex-direction: column;

  box-shadow: ${(p) => p.theme.decoration.boxShadow.panel};
  background-color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.decoration.borderRadius.large};
`

const PanelContentWrap = styled.div`
  flex: 1 1 auto;
  overflow-y: auto;
  overflow-x: hidden;
  padding: ${getSpacing(2)};
  ${getDefaultBeatifiedScrollbar};
`

export const Styled = {
  PanelWrap,
  PanelContentWrap,
}
