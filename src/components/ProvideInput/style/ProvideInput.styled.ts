import styled from 'styled-components'
import styleMixins from '../../../styles/styleMixins'

const { getSpacing } = styleMixins.offset

const LocalPanelColumn = styled.div`
  min-width: 250px;
`

const InputContainer = styled.div`
  margin-top: ${getSpacing(3)};
  display: flex;
  flex-wrap: wrap;
  max-width: max-content;
  width: 100%;
  gap: ${getSpacing(3)};
  padding: ${getSpacing(1)}; 
`

export const Styled = {
  LocalPanelColumn,
  InputContainer,
}
