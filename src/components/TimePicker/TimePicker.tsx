import React, { FC } from 'react'
import moment, { Moment } from 'moment-timezone'
import { Styled } from './styles/TimePicker.styled'
import { TimePickerModel } from './model/TimePicker.model'

const {
  TimePickerStyled,
} = Styled

const TimePicker:FC<TimePickerModel> = ({ onChange }) => {
  const onChangeDate = (value: Moment | null, dateString: string) => {
    onChange && onChange(dateString)
  }
  const format = 'HH:mm'

  return (
    <TimePickerStyled
      defaultValue={moment('12:08', format)}
      format={format}
      onChange={onChangeDate}
    />
  )
}

export default TimePicker
