import React, { FC, useMemo } from 'react'

import classNames from 'classnames'
import { IPanelProps } from './model/Panel.model'
import { Styled } from './style/Panel.styled'
import PanelHeader from './PanelHeader'
import PanelFooter from './PanelFooter'

const {
  PanelWrap,
  PanelContentWrap,
} = Styled

const Panel: FC<IPanelProps> = (
  {
    children,
    headerContent,
    headerStyle,
    headerClass,
    headerComponent,
    footerContent,
    footerStyle,
    footerClass,
    footerComponent,
    contentClass,
    contentStyle,
    ...props
  },
) => {
  const header = useMemo(() => {
    const className = classNames(headerClass, {
      panel__header: true,
    })

    if (headerComponent) {
      return headerComponent
    }
    if (headerContent) {
      return (
        <PanelHeader
          className={className}
          style={headerStyle}
        >
          {headerContent}
        </PanelHeader>
      )
    }

    return null
  }, [headerClass, headerComponent, headerContent, headerStyle])

  const footer = useMemo(() => {
    const className = classNames(footerClass, {
      panel__footer: true,
    })

    if (footerComponent) {
      return footerComponent
    }
    if (footerContent) {
      return (
        <PanelFooter
          className={className}
          style={footerStyle}
        >
          {footerContent}
        </PanelFooter>
      )
    }

    return null
  }, [footerClass, footerComponent, footerContent, footerStyle])

  const contentClassName = useMemo(() => classNames(contentClass, {
    panel__content: true,
  }), [contentClass])

  return (
    <PanelWrap {...props}>
      {header}
      <PanelContentWrap
        className={contentClassName}
        style={contentStyle}
      >
        {children}
      </PanelContentWrap>
      {footer}
    </PanelWrap>
  )
}

export default Panel
