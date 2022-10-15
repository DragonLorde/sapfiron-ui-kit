import styled from 'styled-components'

const BlockContainer = styled.div`
  width: 320px;
  height: 150px;
  background: #373936;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
  & p {
    margin-bottom: 0;
  }
`

const BlockWrapper = styled.div`
  width: max-content;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`

const BlockLabel = styled.p<{ color: string }>`
  font-family: 'PT Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 31px;
  color: ${(props) => props.color};
`

const BlockText = styled.p`
  font-family: 'PT Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 31px;
  color: #FFFFFF;
`

export const Styled = {
  BlockContainer,
  BlockWrapper,
  BlockLabel,
  BlockText,
}
