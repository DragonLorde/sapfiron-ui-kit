import styled from 'styled-components'

const TypographyStyledContainer = styled.div`
  max-width: max-content;
  width: 100%;
  display: flex;
  align-items: center;
`

const TypographyStyled = styled.span<{fontSize: number, fontWeight: string | number, color?: string}>`
  font-size: ${(props) => props.fontSize}px;
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color ? props.color : '#000000'};
`

export const Styled = {
  TypographyStyled,
  TypographyStyledContainer,
}
