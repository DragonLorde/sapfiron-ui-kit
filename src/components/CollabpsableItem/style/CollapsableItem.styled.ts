import styled from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { Property } from 'csstype'

const LocalMainWrapper = styled.section.attrs({ className: 'local_main_wrapper' })<{transitionDurationInMs: number}>`
  width: auto;
  min-width: fit-content;
  
  .ReactCollapse--collapse {
    transition: height ${(props) => (props.transitionDurationInMs ? `${props.transitionDurationInMs}ms` : '300ms')};
  }
`

const LocalTitleItem = styled.div.attrs({ className: 'local_title_item' })<{
  arrowIconOffset?: Property.MarginLeft;
  isOpened?: boolean;
  rotateDegree?: number;
}>`
  display: flex;
  font-weight: bold;
  transition: all 0.3s;
  font-size: 20px;
  &:nth-of-type(2) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: ${(props) => props.arrowIconOffset ?? '0'};
  }
`

const LocalTitleGroup = styled.div.attrs({ className: 'local_title_group' })`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: fit-content;

  color: ${(p) => p.theme.colors.black};
`

const Collapse = styled.div.attrs({ className: 'collapse_item' })<{isOpened: boolean, contentHeight: any, transitionDurationInMs: number}>`
  transition: ease-out ${(props) => props.transitionDurationInMs}ms;
  max-height: ${(props) => props.isOpened ? '100%' : 0}px;
  overflow: ${(props) => props.isOpened ? 'inherit' : 'hidden'};
`

const ChildrenContent = styled.div``

export const CollapsableStyled = {
  LocalMainWrapper,
  LocalTitleGroup,
  LocalTitleItem,
  Collapse,
  ChildrenContent,
}
