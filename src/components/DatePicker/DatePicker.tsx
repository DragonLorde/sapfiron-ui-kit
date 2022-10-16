import React, { FC } from 'react'
import { Moment } from 'moment-timezone'
import { Styled } from './styles/DatePicker.styled'
import { DatePickerModel } from './model/DatePicker.model'

const {
  DatePickerStyled,
} = Styled

const DatePicker:FC<DatePickerModel> = ({ onChange }) => {
  const onChangeDate = (value: Moment | null, dateString: string) => {
    onChange && onChange(dateString)
  }
  return (
    <DatePickerStyled
      onChange={onChangeDate}
    />
  )
}

export default DatePicker
