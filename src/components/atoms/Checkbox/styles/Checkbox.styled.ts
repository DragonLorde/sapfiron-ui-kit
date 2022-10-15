import { Checkbox } from 'antd'
import styled, { StyledComponent } from 'styled-components'
import { FC } from 'react'
import { CheckboxModel } from '../model/Checkbox.model'
import Theme from '../../../../styles/theme/theme'

const CheckboxStyled = styled(Checkbox)`
  font-size: ${(props) => props.theme.fontSettings.size.default};
  align-items: center;
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: transparent;
  }
  .ant-checkbox-checked .ant-checkbox-inner::after {
    transform: rotate(45deg) scale(2) translate(-50%, -50%);
    border: 1px solid #4A77C5;
    border-top: 0;
    border-left: 0;
    left: 29%;
    top: 60%;
  }
  .ant-checkbox-inner {
    width: 27px;
    height: 27px;
  }
  .ant-checkbox {
    top: 0;
  }
    
` as unknown as StyledComponent<FC<CheckboxModel>, typeof Theme>

const CheckboxWrapper = styled.div``

export const Styled = {
  CheckboxStyled,
  CheckboxWrapper,
}
