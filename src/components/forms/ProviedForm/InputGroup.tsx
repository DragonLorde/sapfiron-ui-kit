import React from 'react'
import { Styled } from './styles/AutoCompleteForm.styled'
import { ProvideInput } from '../../ProvideInput'
import { ProvideInputModel } from '../../ProvideInput/model/ProvideInput.model'

const {
  LocalPanelsWrapper,
} = Styled

const InputGroup = ({ dataFields }: ProvideInputModel) => {
  const InputsCollapse = ProvideInput({ dataFields })
  return (
    <LocalPanelsWrapper>
      {InputsCollapse}
    </LocalPanelsWrapper>
  )
}

export default InputGroup
