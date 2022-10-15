import { Switch } from 'antd'
import styled, { StyledComponent } from 'styled-components'
import { FC } from 'react'
import Theme from '../../../../styles/theme/theme'
import { SwitchModel } from '../model/Switch.model'

const SwitchStyled = styled(Switch)`
  background: transparent;
  border: 1px solid #B7B7B7;
  .ant-switch-handle::before {
    background-color: ${(props) => props.checked ? '#4A77C5' : '#B7B7B7'};
  }
` as unknown as StyledComponent<FC<SwitchModel>, typeof Theme>

export const Styled = {
  SwitchStyled,
}
