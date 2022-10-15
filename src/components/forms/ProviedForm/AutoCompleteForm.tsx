import { useForm, FormProvider } from 'react-hook-form'
import React, { FC } from 'react'
import { Styled } from './styles/AutoCompleteForm.styled'
import { AutoCompleteFormModel } from './model/AutoCompleteForm.model'
import { Button } from '../../atoms/Button'
import InputGroup from './InputGroup'

const {
  AutocompleteForm,
  CollapsableInputContainer,
  ErrorMessage,
  ButtonWrapper,
} = Styled

const AutoCompleteForm:FC<AutoCompleteFormModel> = (props) => {
  const { dataFields, onSubmit, buttonText='Сохранить' } = props
  const methods = useForm()
  const OnFormSubmit = (data: any) => onSubmit(data)

  return (
    <FormProvider {...methods}>
      <AutocompleteForm onSubmit={methods.handleSubmit(OnFormSubmit)}>
        <CollapsableInputContainer>
          <InputGroup dataFields={dataFields} />
        </CollapsableInputContainer>
        <ButtonWrapper>
          {Object.keys(methods.formState.errors).length > 0 && (
            <ErrorMessage>Одно или несколько полей заполнены не верно</ErrorMessage>
          )}
          <Button
            onClick={methods.handleSubmit(OnFormSubmit) as any}
            width={140}
          >
            {buttonText}
          </Button>
        </ButtonWrapper>
      </AutocompleteForm>
    </FormProvider>
  )
}

export default AutoCompleteForm
