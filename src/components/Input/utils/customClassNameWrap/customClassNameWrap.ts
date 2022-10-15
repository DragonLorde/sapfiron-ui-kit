import { useMemo } from 'react'
import classNames from 'classnames'
import { ICalssNameWrapModelProps } from './model/classNameWrap.model'

export const customClassNameWrap = (args: ICalssNameWrapModelProps): string => {
  const {
    className,
    disabled,
    error,
    icon,
    inputValue,
    optional,
    small,
    visiblePlaceholder,
  } = args
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useMemo(() => classNames(className, {
    small,
    icon,
    error,
    disabled,
    optional: !!optional,
    focus: visiblePlaceholder,
    'placeholder--top': visiblePlaceholder || !!inputValue,
  }), [className, disabled, error, icon, inputValue, optional, small, visiblePlaceholder])
}
