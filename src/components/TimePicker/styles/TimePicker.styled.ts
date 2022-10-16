import styled from 'styled-components'
import { TimePicker } from 'antd'

const TimePickerStyled = styled(TimePicker)`
  width: 100%;
  height: 50px;
  border-radius: 12px;
  background: #373936;
  .Select {
    color: white;
  }
  .ant-picker-input > input {
    color: white;
  }
  &:hover {
    border: 1px solid #FFB635;
  }
`

export const Styled = {
  TimePickerStyled,
}
