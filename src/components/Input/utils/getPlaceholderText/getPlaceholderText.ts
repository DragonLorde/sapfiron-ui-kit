import { useMemo } from 'react'
import { IPlaceholderTextProps } from './model/placeholderText.model'

export const getPlaceholderText = (args: IPlaceholderTextProps) => {
  const {
    editableHelp,
    visiblePlaceholder,
    placeholder,
  } = args
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useMemo(
    () => (visiblePlaceholder ? editableHelp : placeholder),
    [editableHelp, placeholder, visiblePlaceholder],
  )
}
