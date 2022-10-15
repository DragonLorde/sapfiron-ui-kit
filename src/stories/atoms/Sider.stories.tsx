import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Sider } from '../../components/atoms/sider'
import { ListOrder } from '../../icon/ListOrder'
import { CarGo } from '../../icon/CarGo'

export default {
  title: 'UI-KIT/Atoms/Sider',
  component: Sider,
} as ComponentMeta<typeof Sider>

const Template: ComponentStory<typeof Sider> = (args) => (
  <Sider {...args} />
)
export const Primary = Template.bind({})

Primary.args = {
  items: [
    {
      title: 'Список заявок',
      icon: <ListOrder width={20} height={20} />,
    },
    {
      title: 'Создать заявку',
      icon: <CarGo width={20} height={20} />,
    },
  ],
}
