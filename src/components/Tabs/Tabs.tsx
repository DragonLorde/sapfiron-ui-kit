import { FC, useMemo } from 'react'
import { TabsProps } from './model/Tabs.model'
import { Styled } from './style/Tabs.styled'

const { StyledTabs, Tab } = Styled

const Tabs: FC<TabsProps> = (props) => {
  const {
    defaultActiveTabKey,
    activeTabKey,
    items,
    onChange,
  } = props

  const tabs = useMemo(() => {
    if (items.length > 0) {
      return items.map((item) => {
        const { value, label } = item

        return <Tab tab={label} key={value} />
      })
    }

    return null
  }, [items])

  return (
    <StyledTabs defaultActiveKey={defaultActiveTabKey} activeKey={activeTabKey} onChange={onChange}>
      {tabs}
    </StyledTabs>
  )
}

export default Tabs
