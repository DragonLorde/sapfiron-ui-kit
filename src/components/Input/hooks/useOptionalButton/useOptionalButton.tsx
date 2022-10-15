import React, { ReactNode, useMemo } from 'react'
import { Styled } from '../../style/input.style'

const {
  OptionalInput,
} = Styled

export const useOptionalButton = (optional?: () => void, optionalIcon?: ReactNode) => useMemo(() => {
  const iconOptional = optionalIcon || <div />

  if (!optional) return null

  return (
    <OptionalInput onClick={optional}>
      {iconOptional}
    </OptionalInput>
  )
}, [optional, optionalIcon])
