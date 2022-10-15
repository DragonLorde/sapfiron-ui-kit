import classNames from 'classnames'
import React, {
  FC, useCallback, useMemo, useState,
} from 'react'
import { SelectProps } from './model/Select.model'
import { Styled } from './style/Select.styled'
import { useUserEvent } from './utils'
import { Skeleton } from '../atoms/Skeleton'

const { StyledSelect, Option, SelectWrapper } = Styled

const Select: FC<SelectProps> = (props) => {
  const {
    items,
    defaultValue,
    disabled,
    width,
    onChange,
    error,
    showSearch = false,
    mode = undefined,
    placeholder,
  } = props
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const onBlur = useUserEvent(false, setIsOpen)
  const onFocus = useUserEvent(true, setIsOpen)
  const onSelect = useUserEvent(false, setIsOpen)

  const options = useMemo(() => {
    if (items && items.length > 0) {
      return items.map((item) => {
        const { value, label } = item

        return (
          <Option key={value} value={value}>
            {label}
          </Option>
        )
      })
    }

    return null
  }, [items])

  const filterOption = useCallback(
    (input: string, option: any) => (option?.children as unknown as string).includes(input),
    [],
  )

  if (!items || items.length === 0) {
    return <Skeleton width={width || '100%'} height={56} />
  }

  const classNameWrap = classNames({ disabled, error })
  const getDefaultValue = () => defaultValue || items[0].value

  return (
    <SelectWrapper isOpen={isOpen} width={width} className={classNameWrap}>
      <StyledSelect
        mode={mode}
        showSearch={showSearch}
        defaultValue={getDefaultValue}
        bordered={false}
        getPopupContainer={(trigger) => trigger}
        onChange={onChange as any}
        onFocus={onFocus}
        onBlur={onBlur}
        onSelect={onSelect}
        filterOption={filterOption}
        placeholder={placeholder}
      >
        {options}
      </StyledSelect>
    </SelectWrapper>
  )
}

export default Select
