import styled from 'styled-components'
import { memo } from 'react'

const StyledPersonMenu = styled('div')`
  display: flex;
  align-items: center;
  position: relative;
  width: 280px;
`

const Avatar = styled('div')((props) => ({
  width: 45,
  height: 45,
  background: props.theme.colors.white,
  borderRadius: 5,
  boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: props.theme.fontSettings.size.small,
  fontWeight: props.theme.fontSettings.weight.bold,
}))

const StyledPersonInfo = styled('div')`
  line-height: 1;
  margin-left: 10px;
  margin-right: auto;
`

const PersonName = styled('div')((props) => ({
  fontSize: props.theme.fontSettings.size.small,
  fontWeight: props.theme.fontSettings.weight.bold,
}))

const PersonEmail = styled('div')((props) => ({
  marginTop: 8,
  fontSize: props.theme.fontSettings.size.small,
  fontWeight: props.theme.fontSettings.weight.bold,
  color: props.theme.colors.gray_500,
}))

const StyledArrow = styled('div')`
  margin-right: 12px;
  margin-bottom: 4px;
  & div {
    margin: 0;
  }
`

const DropDownMenu = styled('ul')((props) => ({
  position: 'absolute',
  zIndex: 100,
  top: 'calc(50% + 4px)',
  right: 0,
  left: 35,
  background: props.theme.colors.white,
  border: `1px solid ${props.theme.colors.gray_500}`,
  boxShadow: props.theme.decoration.boxShadow.dark_200,
  borderRadius: props.theme.decoration.borderRadius.default,
  listStyleType: 'none',
  padding: '9px 6px',
  display: 'block',
}))

const MenuItem = styled('li')((props) => ({
  '& a': {
    color: props.theme.colors.black,
    padding: '7px 15px',
    display: 'block',
    borderRadius: 5,
    '&:hover, &:active, &:focus, &.active': {
      color: props.theme.colors.black,
      background: props.theme.colors.blue_200,
    },
  },
}))

export const Styled = {
  StyledPersonMenu,
  Avatar: memo(Avatar),
  StyledPersonInfo,
  PersonName,
  PersonEmail,
  DropDownMenu,
  MenuItem,
  StyledArrow,
}
