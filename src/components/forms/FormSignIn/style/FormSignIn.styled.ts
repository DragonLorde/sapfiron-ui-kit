import styled from 'styled-components'
import { getSpacing } from '../../../../styles/styleMixins/offset'

const WrapperForm = styled('div')`
  width: 450px;
  height: 370px;
  padding: 20px 25px;
  background: ${(props) => props.theme.colors.white};
  background: #FFFFFF;
  box-shadow: 6px 6px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
`

const FormStyled = styled('form')``

const Title = styled('div')`
  font-size: ${(props) => props.theme.fontSettings.size.large};
  font-weight: bold;
  text-align: center;
`

const InputGroup = styled('div')`
  margin-top: ${getSpacing(3)};
  margin-bottom: ${getSpacing(5)};
  display: flex;
  flex-direction: column;
  gap: ${getSpacing(2)};
`
const TextForgotPassword = styled('div')`
  margin-top: ${getSpacing(5)};
  margin-bottom: 30px;
`

const ErrorMessage = styled('span')`
  margin-left: ${getSpacing(1)};
  color: ${(props) => props.theme.colors.red_300};
  font-size: ${(props) => props.theme.fontSettings.size.small};
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const Styled = {
  WrapperForm, FormStyled, Title, InputGroup, TextForgotPassword, ErrorMessage, ButtonWrapper,
}
