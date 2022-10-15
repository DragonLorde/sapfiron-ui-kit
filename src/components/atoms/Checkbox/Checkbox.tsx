import React, {
  FC, useCallback, useMemo, useState,
} from 'react'
import { CheckboxChangeEvent } from 'antd/es/checkbox'
import { CheckboxModel } from './model/Checkbox.model'
import { Styled } from './styles/Checkbox.styled'

const {
  CheckboxStyled,
  CheckboxWrapper,
} = Styled

const Checkbox:FC<CheckboxModel> = (props) => {
  const {
    value,
    initChecked,
    onChange,
    disabled,
    text,
  } = props
  const [isChecked, setIsChecked] = useState<boolean>(initChecked || false)
  const onChangeEvent = useCallback(
    (e: CheckboxChangeEvent) => {
      const { checked } = e.target
      setIsChecked(checked)
      onChange && onChange(e)
    },
    [onChange],
  )

  const Content = useMemo(() => {
    if (text) {
      return (
        <CheckboxStyled
          onChange={onChangeEvent}
          value={value}
          checked={isChecked}
          disabled={disabled}
        >
          {text}
        </CheckboxStyled>
      )
    }
    return (
      <CheckboxStyled
        onChange={onChangeEvent}
        value={value}
        checked={isChecked}
        disabled={disabled}
      />
    )
  }, [disabled, isChecked, onChangeEvent, text, value])
  return (
    <CheckboxWrapper>
      {Content}
    </CheckboxWrapper>
  )
}

export default Checkbox
