import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Block } from '../../components/atoms/Block'

export default {
  title: 'UI-KIT/Atoms/Block',
  component: Block,
} as ComponentMeta<typeof Block>

const Template: ComponentStory<typeof Block> = (args) => (
  <Block {...args} />
)
export const Primary = Template.bind({})

Primary.args = {
  labelText: 'название заявки',
  color: '#FAAC0F',
  text: '25.24.1241: 15.00',
  span: 'Номер ТС',
  link: '/asfasf',
}
