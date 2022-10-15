import styled from 'styled-components'

const StatusContainer = styled.div<{color: string}>`
  width: 270px;
  height: 50px;
  background: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  flex-direction: column;
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
  color: #FFFFFF;
`

export const Styled = {
  StatusContainer,
}
