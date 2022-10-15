import { useFormContext } from 'react-hook-form'
import _ from 'lodash'
import { inputsModel } from '../model/ProvideInput.model'
import { InputControllerWrapper } from '../../atoms/InputControllerWrapper'
import { Input } from '../../Input'
import { Select } from '../../Select'
import { configFields } from '../../forms/configFields'

const GetInputOnType = (inputs: inputsModel) => {
  const {
    id,
    name,
    type,
    backendName,
    constraintLength,
    readonly,
    placeholder,
    required,
    selectFields,
  } = inputs
  const { formState: { errors } } = useFormContext()
  const error = _.get(errors, backendName)
  const getInput = () => {
    switch (type) {
    case 'text_input':
      return (
        <Input
          placeholder={placeholder}
          disabled={readonly}
          width={400}
          error={!!error}
        />
      )
    case 'number_input':
      return (
        <Input.Number
          disabled={readonly}
          placeholder={placeholder}
          max={constraintLength}
          min={1}
          width={400}
          step={1}
          error={!!error}
        />
      )
    case 'masked_input_phone':
      return (
        <Input.Masked
          disabled={readonly}
          placeholder={name}
          width={400}
          error={!!error}
          mask="+7-(000)-000-00-00"
        />
      )
    case 'masked_input_email':
      return (
        <Input
          disabled={readonly}
          placeholder={name}
          width={400}
          error={!!error}
        />
      )
    case 'select':
      return (
        <Select
          items={selectFields}
          disabled={readonly}
          width={400}
          error={!!error}
          placeholder={placeholder}
        />
      )
    default:
      return null
    }
  }

  const getPattern = () => {
    switch (type) {
    case 'masked_input_phone':
      return configFields.phone.pattern
    case 'masked_input_email':
      return configFields.email.pattern
    default:
      return undefined
    }
  }
  const ResolveInput = getInput()
  const pattern = getPattern()
  if (ResolveInput) {
    return (
      <InputControllerWrapper
        key={id}
        name={backendName}
        CustomInput={ResolveInput}
        required={required}
        pattern={pattern}
      />
    )
  }
  return null
}

export default GetInputOnType
