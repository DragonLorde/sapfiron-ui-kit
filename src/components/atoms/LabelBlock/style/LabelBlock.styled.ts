import styled from 'styled-components'
import { getSpacing } from '../../../../styles/styleMixins/offset'

const StyledLabelBlock = styled.div`
  background: rgba(255, 202, 85, 0.3);
  border-radius: ${(props) => props.theme.decoration.borderRadius.default};
  padding: ${getSpacing(1)} ${getSpacing(2)};
  font-size: 16px;
  width: fit-content;
  color: ${(props) => props.theme.colors.black};
`

export const Styled = {
  StyledLabelBlock,
}
