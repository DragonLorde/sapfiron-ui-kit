import { CheckboxProps } from 'antd'
import { CheckboxChangeEvent } from 'antd/es/checkbox'

export interface CheckboxModel extends Omit<CheckboxProps, 'onChange'> {
    onChange: (value: CheckboxChangeEvent) => void,
    initChecked?: boolean,
    text?: string,
}
