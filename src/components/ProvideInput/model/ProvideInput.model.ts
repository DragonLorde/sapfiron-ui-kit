export enum inputEnum {
    text_input,
    masked_input_phone,
    masked_input_email,
    file_input,
    select,
    number_input,
}

export type inputType = keyof typeof inputEnum

export interface selectFields {
    label: string,
    value: string,
}

export interface inputsModel {
    id: string,
    name: string,
    type: inputType,
    placeholder: string,
    readonly: boolean,
    constraintLength: number,
    constraintRegex: string,
    backendName: string,
    wrappedName: string,
    selectFields: Array<selectFields>
    required: boolean,
}

export interface fieldsModel {
    id: string,
    title: string,
    inputs: Array<inputsModel>
}

export interface dataFieldsModel {
    id: string,
    title: string,
    description: string,
    fields: Array<fieldsModel>
}

export interface ProvideInputModel {
    dataFields: dataFieldsModel,
}
