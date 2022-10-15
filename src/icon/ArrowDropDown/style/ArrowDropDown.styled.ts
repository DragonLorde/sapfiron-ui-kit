import styled from 'styled-components'

const ArrowContainer = styled.div<{isOpen: boolean}>`
  width: 1.25rem;
  height: 1.25rem;
  display: inline-block;
  position: relative;
  margin: 0 1rem;
  cursor: pointer;
  span {
    :first-of-type {
      left: 0;
      transform: ${(props) => props.isOpen ? 'rotate(-45deg)' : 'rotate(45deg)'};
    }
    :last-of-type {
      right: 0;
      transform: ${(props) => props.isOpen ? 'rotate(45deg)' : 'rotate(-45deg)'};
    }
  }
`

const Arrow = styled.span`
  position: absolute;
  top: .5rem;
  width: .75rem;
  height: .1rem;
  background: #B7B7B7;
  display: inline-block;
  transition: all .2s ease;
`

export const Styled = {
  ArrowContainer,
  Arrow,
}
