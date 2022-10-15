import { FC } from 'react'
import { Form } from './components/Form'
import { FormSignInProps } from './model/FormSignIn.model'
import { Styled } from './style/FormSignIn.styled'

const { WrapperForm, Title } = Styled

const FormSignIn: FC<FormSignInProps> = ({ linkForgotPassword, onSubmit }) => (
  <WrapperForm>
    <Title>Авторизация</Title>
    <Form linkForgotPassword={linkForgotPassword} onSubmit={onSubmit} />
  </WrapperForm>
)

export default FormSignIn
