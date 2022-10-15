export interface TabsProps {
  defaultActiveTabKey?: string
  activeTabKey?: string
  items: Array<{
    value: string
    label: string
  }>
  onChange: (value: string, label?: string) => void
}
