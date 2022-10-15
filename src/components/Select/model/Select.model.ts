export enum Mode {
  'multiple',
  'tags'
}

export type ModeType = keyof typeof Mode

export interface SelectProps {
  defaultValue?: string | [],
  items?: Array<{
    value: string
    label: string
  }>
  disabled?: boolean
  width?: number
  onChange?: (value: string) => void
  error?: boolean,
  showSearch?: boolean,
  mode?: ModeType,
  placeholder?: string,
}
