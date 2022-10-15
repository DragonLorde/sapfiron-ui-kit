import { Radio } from 'antd'
import styled, { StyledComponent } from 'styled-components'
import { FC } from 'react'
import Theme from '../../../../styles/theme/theme'
import { RadiobuttonModel } from '../model/Radiobutton.model'

const RadiobuttonStyled = styled(Radio)`
  
` as unknown as StyledComponent<FC<RadiobuttonModel>, typeof Theme>

export const Styled = {
  RadiobuttonStyled,
}
