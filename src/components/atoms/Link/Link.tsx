import classNames from 'classnames'
import {
  LinkCustomProps,
  LinkProps,
  LinkType,
  LinkTypeEnum,
} from './model/link.model'
import { Styled } from './style/Link.styled'

const { StyledLink, StyledNavLink } = Styled

const resolveLink = (props: LinkProps, type?: LinkType) => {
  switch (type) {
  case LinkTypeEnum.nav: {
    return (
      <StyledNavLink to={props.href} {...props} />
    )
  }
  default: {
    return <StyledLink {...props} />
  }
  }
}

const Link = (props: LinkCustomProps) => {
  const {
    type = LinkTypeEnum.nav,
    className,
    disabled,
    ...anyProps
  } = props

  const linkClassNames = classNames(className, {
    disabled,
  })

  const linkProps = { ...anyProps, className: linkClassNames }

  return <>{resolveLink(linkProps, type)}</>
}

export default Link
