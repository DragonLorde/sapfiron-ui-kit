import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Tabs } from '../components/Tabs'

export default {
  title: 'UI-KIT/Tabs',
  component: Tabs,
} as ComponentMeta<typeof Tabs>

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />

export const Primary = Template.bind({})

Primary.args = {
  defaultActiveTabKey: '2',
  items: [
    { value: '1', label: 'Tab 1' },
    { value: '2', label: 'TabTabTab 2' },
    { value: '3', label: 'Tab 3' },
    { value: '4', label: 'Tab 4' },
  ],
}
