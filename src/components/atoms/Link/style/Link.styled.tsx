import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

export const StylesLink = css((props) => ({
  color: props.theme.colors.blue_600,
  fontSize: props.theme.fontSettings.size.default,
  lineHeight: props.theme.decoration.lineHeight.default,
  textDecoration: 'underline',
  '&:hover, &:active, &:focus': {
    color: props.theme.colors.red_500,
    textDecoration: 'underline',
  },
  '&.disabled': {
    pointerEvents: 'none',
    cursor: 'default',
    color: props.theme.colors.gray_500,
  },
}))

const StyledLink = styled('a')`
  ${StylesLink}
`

const StyledNavLink = styled(Link)`
  ${StylesLink}
`

export const Styled = {
  StyledLink,
  StyledNavLink,
}
