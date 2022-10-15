import { FC, useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { InputControllerWrapper } from '../../../atoms/InputControllerWrapper'
import { Input } from '../../../Input'
import { Button } from '../../../atoms/Button'
import {
  FormSignInProps, FormData, FormDataWithErrors,
} from '../model/FormSignIn.model'
import { configFields } from '../../configFields'
import { Styled } from '../style/FormSignIn.styled'

const {
  FormStyled, InputGroup, ErrorMessage, ButtonWrapper,
} = Styled

type PropsForm = {
  linkForgotPassword: string
  onSubmit: FormSignInProps['onSubmit']
}

export const Form: FC<PropsForm> = ({ onSubmit }) => {
  const methods = useForm<FormDataWithErrors>()
  const { errors } = methods.formState
  const [isLoading, setIsLoading] = useState(false)

  const OnFormSubmit = async (data: FormData) => {
    setIsLoading(true)
    methods.clearErrors()
    try {
      await onSubmit(data)
    } catch (e) {
      if (e.message === 'accessDenied') {
        methods.setError('errorAuth', { message: 'Доступ запрещён' })
      } else {
        methods.setError('errorAuth', { message: 'Неверный e-mail или пароль' })
      }
    } finally {
      setIsLoading(false)
    }
  }

  const onChangeInput = () => {
    if (errors.errorAuth) {
      methods.clearErrors()
    }
  }

  return (
    <FormProvider {...methods}>
      <FormStyled onSubmit={methods.handleSubmit(OnFormSubmit)}>
        <InputGroup>
          <InputControllerWrapper
            name="email"
            required={configFields.email.required}
            pattern={configFields.email.pattern}
            onChangeInput={onChangeInput}
            CustomInput={<Input placeholder="E-mail:" error={Boolean(errors.email)} />}
          />

          <InputControllerWrapper
            name="password"
            required={configFields.password.required}
            minLength={configFields.password.minLength}
            onChangeInput={onChangeInput}
            CustomInput={<Input.Password placeholder="Пароль:" error={Boolean(errors.password)} />}
          />

          {Object.keys(errors).length > 0 && (
            <ErrorMessage>{errors[(Object.keys(errors) as (keyof FormData)[])[0]]?.message as string}</ErrorMessage>
          )}
        </InputGroup>
        <ButtonWrapper>
          <Button
            width={400}
            disabled={Object.keys(errors).length !== 0}
            isLoading={isLoading}
            htmlType="submit"
            onClick={methods.handleSubmit(OnFormSubmit) as any}
          >
            Войти
          </Button>
        </ButtonWrapper>
      </FormStyled>
    </FormProvider>
  )
}
