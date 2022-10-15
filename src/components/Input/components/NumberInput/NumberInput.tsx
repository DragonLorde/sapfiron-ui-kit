import React, {
  FC, useCallback, useEffect, useMemo, useState,
} from 'react'
import { InputNumber } from 'antd'
import {
  useInputEvent,
} from '../../hooks'
import { INumberInputProps } from './model/NumberInput.model'
import { ResolverInput, getPlaceholderText, customClassNameWrap } from '../../utils'

const NumberInput: FC<INumberInputProps> = (
  {
    value = 0,
    disabled,
    small,
    placeholder,
    editableHelp = 'Введите данные',
    label,
    icon,
    error,
    onChange,
    onBlur,
    onFocus,
    name,
    width,
    className,
    skeleton = false,
    min,
    max,
    step,
  },
) => {
  const [visiblePlaceholder, setVisiblePlaceholder] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string | number>(value)

  useEffect(() => setInputValue(value), [value])

  const placeholderText = getPlaceholderText({ editableHelp, visiblePlaceholder, placeholder })
  const onBlurInput = useInputEvent({ setValueFunction: setVisiblePlaceholder, value: false, onEventFunction: onBlur })
  const onFocusInput = useInputEvent({ setValueFunction: setVisiblePlaceholder, value: true, onEventFunction: onFocus })
  const classNameWrap = customClassNameWrap({
    className, disabled, error, icon, inputValue, small, visiblePlaceholder,
  })

  const onChangeInput = useCallback((numberInputValue: string | number) => {
    setInputValue(numberInputValue)
    if (onChange) onChange(numberInputValue)
  }, [onChange])

    const input = useMemo(() => (
    <InputNumber
      onFocus={onFocusInput}
      onBlur={onBlurInput}
      disabled={disabled}
      prefix={icon}
      value={inputValue}
      placeholder={placeholderText}
      /*  @ts-ignore */
      onChange={onChangeInput}
      name={name}
      min={min}
      max={max}
      step={step}
    />
  ), [min, max, step, disabled, icon, inputValue, name, onBlurInput, onChangeInput, onFocusInput, placeholderText])
  return (
    <ResolverInput
      input={input}
      classNameWrap={classNameWrap}
      placeholder={placeholder}
      label={label}
      width={width}
      skeleton={skeleton}
      small={small}
    />
  )
}

export default NumberInput
