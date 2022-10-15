import React, { FC, useCallback, useState } from 'react'
import { Styled } from './styles/Switch.styled'
import { SwitchModel } from './model/Switch.model'

const {
  SwitchStyled,
} = Styled

const Switch:FC<SwitchModel> = (props) => {
  const {
    initChecked,
    onChange,
    disabled,
    id,
    size,
  } = props
  const [isChecked, setIsChecked] = useState<boolean>(initChecked || false)
  const onChangeEvent = useCallback(
    (checked: boolean, e?: MouseEvent) => {
      setIsChecked(checked)
      onChange && onChange(checked, e)
    },
    [onChange],
  )
  return (
    <SwitchStyled
      onChange={onChangeEvent}
      disabled={disabled}
      checked={isChecked}
      id={id}
      size={size}
    />
  )
}

export default Switch
