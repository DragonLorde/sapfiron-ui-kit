import styled from 'styled-components'

const IconContainer = styled.div <{ width: number, height: number }>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px; 
  svg {
    width: 100%;
    height: 100%;
  }
`

export const Styled = {
  IconContainer,
}
