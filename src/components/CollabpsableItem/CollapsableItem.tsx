import {
  FC, PropsWithChildren, useEffect, useRef, useState,
} from 'react'
import { ICollapsableItem } from './model/CollapsableItem.model'
import { CollapsableStyled } from './style/CollapsableItem.styled'

const {
  LocalMainWrapper,
  LocalTitleItem,
  LocalTitleGroup,
  Collapse,
  ChildrenContent,
} = CollapsableStyled

export const CollapsableItem: FC<PropsWithChildren<ICollapsableItem>> = (
  {
    titleContent,
    onClick,
    arrowIcon,
    transitionDurationInMs = 300,
    arrowIconOffset = '0.5rem',
    defaultOpened = true,
    rotateDegree = 180,
    children,
  },
) => {
  const [isOpened, setIsOpened] = useState(defaultOpened)
  const [contentHeight, setContentHeight] = useState(0)
  const contentRef = useRef<HTMLDivElement>(null)
  const icon = arrowIcon || <div />

  useEffect(() => {
    setContentHeight(contentRef.current?.clientHeight ?? 0)
  }, [])

  return (
    <LocalMainWrapper transitionDurationInMs={transitionDurationInMs}>
      <LocalTitleGroup
        onClick={() => {
          onClick && onClick()
          setIsOpened((prev) => !prev)
        }}
      >
        <LocalTitleItem>{titleContent}</LocalTitleItem>
        <LocalTitleItem
          rotateDegree={rotateDegree}
          arrowIconOffset={arrowIconOffset}
          isOpened={isOpened}
        >
          {icon}
        </LocalTitleItem>
      </LocalTitleGroup>
      <Collapse contentHeight={contentHeight} isOpened={isOpened} transitionDurationInMs={transitionDurationInMs}>
        <ChildrenContent ref={contentRef}>{children}</ChildrenContent>
      </Collapse>
    </LocalMainWrapper>
  )
}
