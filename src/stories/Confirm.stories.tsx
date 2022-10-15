import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Confirm } from '../components/Confirm'

export default {
  title: 'UI-KIT/Confirm',
  component: Confirm,
} as ComponentMeta<typeof Confirm>

const Template: ComponentStory<typeof Confirm> = (args) => <Confirm {...args} />

export const Default = Template.bind({})

Default.args = {
  isOpen: true,
  title: 'Подтвердите действие',
  content: 'Вы действительно хотите удалить?',
  // eslint-disable-next-line no-console
  onSuccess: () => console.log('onSuccess'),
  // eslint-disable-next-line no-console
  onClose: () => console.log('onClose'),
}
