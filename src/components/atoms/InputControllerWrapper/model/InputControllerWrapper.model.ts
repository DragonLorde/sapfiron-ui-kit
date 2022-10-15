export interface IInputControllerWrapProps {
  name: string
  pattern?: {
    value: RegExp
    message: string;
  }
  required?: boolean | string
  minLength?: {
    value: number
    message: string;
  }
  validate?: (value: string) => string | boolean,
  CustomInput: JSX.Element,
  onChangeInput?: (value?: string) => void
}
