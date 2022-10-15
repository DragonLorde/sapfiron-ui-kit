import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Select } from '../components/Select'

export default {
  title: 'UI-KIT/Select',
  component: Select,
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const Primary = Template.bind({})

Primary.args = {
  items: [
    { value: 'value_1', label: '1' },
    { value: 'value_2', label: '2' },
    { value: 'value_3', label: '11' },
  ],
  // eslint-disable-next-line no-console
  onChange: (value) => console.log(value),
}
