import styled from 'styled-components'
import { Link } from 'react-router-dom'

const SiderContainer = styled.div<{isOpen: boolean}>`
  height: calc( 100vh - 60px );
  width: ${(props) => props.isOpen ? '160px' : '80px'};
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.colors.white};
  border-radius: 10px;
`

const SiderLogo = styled.div`
  width: 50px;
  height: 50px;
  background: transparent;
  margin-top: 40px;
  cursor: pointer;
`

const SiderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;
  height: 100%;
  width: 40px;
  gap: 4px;
`

const SiderIconContainer = styled(Link)<{$isOpen: boolean}>`
  width: ${(props) => props.$isOpen ? '130px' : '40px'};
  padding: 4px;
  height: 40px;
  background: transparent;
  border-radius: 8px;
  &:hover {
    background: #F9AA24;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`

const SiderIconContainerBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const SiderIconTextContainer = styled.div<{isOpen: boolean}>`
  display: ${(props) => props.isOpen ? 'flex' : 'none'};
  overflow: hidden;
  width:  ${(props) => props.isOpen ? '100%' : '0px'};
  font-family: 'PT Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #000000;
`

export const Styled = {
  SiderContainer,
  SiderLogo,
  SiderContent,
  SiderIconContainer,
  SiderIconTextContainer,
  SiderIconContainerBox,
}
