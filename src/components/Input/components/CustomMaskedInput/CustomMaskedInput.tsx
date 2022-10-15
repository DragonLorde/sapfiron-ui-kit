import React, {
  FC, useCallback, useEffect, useMemo, useState, ChangeEvent,
} from 'react'
import { MaskedInput } from 'antd-mask-input'
import {
  useInputEvent,
  useOptionalButton,
} from '../../hooks'
import { ResolverInput, getPlaceholderText, customClassNameWrap } from '../../utils'
import { ICustomMaskedInputProps } from './model/CustomMaskedInput.model'

const CustomMaskedInput: FC<ICustomMaskedInputProps> = (
  {
    mask = '0000',
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
    optionalIcon,
    className,
    skeleton = false,
  },
) => {
  const [visiblePlaceholder, setVisiblePlaceholder] = useState(false)
  const [inputValue, setInputValue] = useState<string>(value)
  useEffect(() => setInputValue(value), [value])

  const placeholderText = getPlaceholderText({ editableHelp, visiblePlaceholder, placeholder })

  const onBlurInput = useInputEvent({ setValueFunction: setVisiblePlaceholder, value: false, onEventFunction: onBlur })
  const onFocusInput = useInputEvent({ setValueFunction: setVisiblePlaceholder, value: true, onEventFunction: onFocus })

  const classNameWrap = customClassNameWrap({
    className, disabled, error, icon, inputValue, optional, small, visiblePlaceholder,
  })
  const optionalButton = useOptionalButton(optional, optionalIcon)
  const onChangeInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value)
    if (onChange) onChange(e.currentTarget.value, e)
  }, [onChange])

  const input = useMemo(() => (
    <>
      <MaskedInput
        maskOptions={{
          lazy: true,
        }}
        onFocus={onFocusInput}
        onBlur={onBlurInput}
        disabled={disabled}
        value={inputValue}
        placeholder={placeholderText}
        onChange={onChangeInput}
        name={name}
        mask={mask}
      />
      {optionalButton}
    </>
  ), [mask, disabled, inputValue, name, onBlurInput, onChangeInput, onFocusInput, optionalButton, placeholderText])
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

export default CustomMaskedInput
