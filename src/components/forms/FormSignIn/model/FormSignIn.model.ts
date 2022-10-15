export interface FormData {
  email: string
  password: string
  isRememberPassword: boolean
}

export interface FormDataWithErrors extends FormData {
  errorAuth: string
}

export interface FormSignInProps {
  linkForgotPassword: string
  onSubmit: (data: FormData) => Promise<void>
}
