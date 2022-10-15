import React, {
  FC, useCallback, useEffect, useMemo, useState, ChangeEvent,
} from 'react'
import { Input as InputAntd } from 'antd'
import {
  useInputEvent,
} from '../../hooks'
import { IPasswordInputProps } from './model/PasswordInput.model'
import { ResolverInput, getPlaceholderText, customClassNameWrap } from '../../utils'

const PasswordInput: FC<IPasswordInputProps> = (
  {
    value = '',
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
    optional,
    className,
    skeleton = false,
  },
) => {
  const [visiblePlaceholder, setVisiblePlaceholder] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>(value)

  useEffect(() => setInputValue(value), [value])

  const placeholderText = getPlaceholderText({ editableHelp, visiblePlaceholder, placeholder })
  const onBlurInput = useInputEvent({ setValueFunction: setVisiblePlaceholder, value: false, onEventFunction: onBlur })
  const onFocusInput = useInputEvent({ setValueFunction: setVisiblePlaceholder, value: true, onEventFunction: onFocus })
  const classNameWrap = customClassNameWrap({
    className, disabled, error, icon, inputValue, optional, small, visiblePlaceholder,
  })
  const onChangeInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value)
    if (onChange) onChange(e.currentTarget.value, e)
  }, [onChange])

  const input = useMemo(() => (
    <InputAntd.Password
      onFocus={onFocusInput}
      onBlur={onBlurInput}
      disabled={disabled}
      value={inputValue}
      placeholder={placeholderText}
      onChange={onChangeInput}
      name={name}
      prefix={icon}
    />
  ), [disabled, icon, inputValue, name, onBlurInput, onChangeInput, onFocusInput, placeholderText])
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

export default PasswordInput
