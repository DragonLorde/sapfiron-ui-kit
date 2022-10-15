import { cloneElement, FC } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { IInputControllerWrapProps } from './model/InputControllerWrapper.model'

const InputControllerWrapper: FC<IInputControllerWrapProps> = ({
  name, pattern, required, minLength, CustomInput, onChangeInput, validate,
}) => {
  const { control } = useFormContext()

  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required, pattern, minLength, validate,
      }}
      render={({ field }) => (
        cloneElement(CustomInput, {
          onChange: (value: string) => {
            field.onChange(value)
            onChangeInput && onChangeInput()
          },
        })
      )}
    />
  )
}

export default InputControllerWrapper
