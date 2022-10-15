import { SwitchProps } from 'antd'

export interface SwitchModel extends Omit<SwitchProps, 'onChange'> {
    initChecked?: boolean,
    onChange?: (checked: boolean, e?: MouseEvent) => void
}
