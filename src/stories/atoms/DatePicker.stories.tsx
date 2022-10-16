import { ComponentMeta, ComponentStory } from '@storybook/react'

import { DatePicker } from '../../components/DatePicker'

export default {
  title: 'UI-KIT/Atoms/TimePicker',
  component: DatePicker,
} as ComponentMeta<typeof DatePicker>

const Template: ComponentStory<typeof DatePicker> = (args) => (
  <DatePicker {...args} />
)
export const Primary = Template.bind({})

Primary.args = {
  onChange: (dateString) => console.error(dateString),
}
