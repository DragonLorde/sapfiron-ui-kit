import React from 'react'
import { fieldsModel, ProvideInputModel } from './model/ProvideInput.model'
import { Styled } from './style/ProvideInput.styled'
import Resolver from './resolver/Resolver'

const {
  LocalPanelColumn,
} = Styled

const ProvideInput = ({ dataFields }: ProvideInputModel) => {
  if (dataFields?.fields) {
    const inputReducer = (fields: Array<fieldsModel>) => fields.reduce((
      previousValue: Array<JSX.Element>,
      currentValue: fieldsModel,
    ) => {
      const element = Resolver(currentValue)
      if (element) {
        previousValue.push(
          <LocalPanelColumn key={currentValue.id}>
            {element}
          </LocalPanelColumn>,
        )
      }
      return previousValue
    }, [])
    return inputReducer(dataFields.fields)
  }
  return []
}

export default ProvideInput
