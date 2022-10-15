import { ReactNode } from 'react'
// eslint-disable-next-line import/no-unresolved
import { Property } from 'csstype'

export interface ICollapsableItem {
  titleContent?: ReactNode
  onClick?: () => void;
  arrowIcon?: ReactNode;
  transitionDurationInMs?: number;
  arrowIconOffset?: Property.MarginLeft;
  defaultOpened?: boolean;
  rotateDegree?: number;
}
