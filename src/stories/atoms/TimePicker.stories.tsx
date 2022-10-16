import { ComponentMeta, ComponentStory } from '@storybook/react'

import { TimePicker } from '../../components/TimePicker'

export default {
  title: 'UI-KIT/Atoms/TimePicker',
  component: TimePicker,
} as ComponentMeta<typeof TimePicker>

const Template: ComponentStory<typeof TimePicker> = (args) => (
  <TimePicker {...args} />
)
export const Primary = Template.bind({})

Primary.args = {
  onChange: (dateString) => console.error(dateString),
}
