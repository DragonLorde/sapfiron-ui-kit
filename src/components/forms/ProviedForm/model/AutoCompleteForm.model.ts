import { ProvideInputModel } from '../../../ProvideInput/model/ProvideInput.model'

export interface AutoCompleteFormModel extends ProvideInputModel {
    onSubmit: (data: any) => void,
    buttonText?: string,
}
