import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Status } from '../../components/atoms/Status'

export default {
  title: 'UI-KIT/Atoms/Status',
  component: Status,
} as ComponentMeta<typeof Status>

const Template: ComponentStory<typeof Status> = (args) => (
  <Status {...args}>
    Test
  </Status>
)
export const Primary = Template.bind({})

Primary.args = {
  currentColor: '#FAAC0F',
  text: 'В работе',
}
