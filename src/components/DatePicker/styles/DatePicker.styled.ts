import styled from 'styled-components'
import { DatePicker } from 'antd'

const DatePickerStyled = styled(DatePicker)`
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
  DatePickerStyled,
}
