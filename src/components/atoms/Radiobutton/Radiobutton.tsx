import React, { FC, useCallback, useState } from 'react'
import { RadioChangeEvent } from 'antd'
import { RadiobuttonModel } from './model/Radiobutton.model'
import { Styled } from './styles/Radiobutton.styled'

const {
  RadiobuttonStyled,
} = Styled

const Radiobutton:FC<RadiobuttonModel> = (props) => {
  const {
    onChange,
    disabled,
    value,
    id,
    name,
    initChecked,
  } = props
  const [isChecked, setIsChecked] = useState<boolean>(initChecked || false)
  const onChangeEvent = useCallback(
    (e: RadioChangeEvent) => {
      const { checked } = e.target
      setIsChecked(checked)
      onChange && onChange(e)
    },
    [onChange],
  )
  return (
    <RadiobuttonStyled
      disabled={disabled}
      id={id}
      value={value}
      name={name}
      checked={isChecked}
      onChange={onChangeEvent}
    />
  )
}

export default Radiobutton
