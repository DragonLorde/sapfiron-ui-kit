import { FC, useState } from 'react'
import { Controller, useForm, FormProvider } from 'react-hook-form'
import { InputControllerWrapper } from '../../../atoms/InputControllerWrapper'
import { Input } from '../../../Input'
import { Checkbox } from '../../../atoms/Checkbox'
import { Button } from '../../../atoms/Button'
import { Link } from '../../../atoms/Link'
import {
  FormSignInProps, FormData, FormDataWithErrors,
} from '../model/FormSignIn.model'
import { configFields } from '../../configFields'
import { Styled } from '../style/FormSignIn.styled'

const {
  FormStyled, InputGroup, TextForgotPassword, ErrorMessage, ButtonWrapper,
} = Styled

type PropsForm = {
  linkForgotPassword: string
  onSubmit: FormSignInProps['onSubmit']
}

export const Form: FC<PropsForm> = ({ linkForgotPassword, onSubmit }) => {
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

        <Controller
          control={methods.control}
          name="isRememberPassword"
          render={({ field: { onChange } }) => <Checkbox text="Запомнить меня" onChange={onChange} />}
        />

        <TextForgotPassword>
          <Link href={linkForgotPassword}>Забыли пароль</Link>
        </TextForgotPassword>

        <ButtonWrapper>
          <Button
            width={300}
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
