import styled from 'styled-components'
import { getSpacing } from '../../../../styles/styleMixins/offset'

const WrapperForm = styled('div')`
  width: 600px;
  padding: 20px 80px;
  background: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.gray_500};
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
  border-radius: ${(props) => props.theme.decoration.borderRadius.small};
`

const FormStyled = styled('form')``

const Title = styled('div')`
  font-size: ${(props) => props.theme.fontSettings.size.large};
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
