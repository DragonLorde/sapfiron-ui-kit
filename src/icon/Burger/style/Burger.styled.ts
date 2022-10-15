import styled from 'styled-components'

const BurgerMenu = styled.div<{isOpen: boolean}>`
  width: 30px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  background: transparent;
  border: none;
  div {
    :nth-of-type(1) {
      transform: ${(props) => props.isOpen ? 'rotate(45deg)' : 'rotate(0)'};
    }
    :nth-of-type(2) {
      opacity: ${(props) => props.isOpen ? '0' : '1'};
      width: ${(props) => props.isOpen ? '0%' : '100%'};
    }
    :nth-of-type(3) {
      transform: ${(props) => props.isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

const BurgerLine = styled.div`
  position: relative;
  transform-origin: 1px;
  width: 100%;
  height: 4px;
  background-color: black;
  border-radius: 8px;
  transition: all 0.3s linear;
`

export const Styled = {
  BurgerMenu,
  BurgerLine,
}
