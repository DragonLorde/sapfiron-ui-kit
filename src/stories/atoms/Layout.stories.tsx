import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Layout } from '../../components/atoms'
import { Panel } from '../../components/Panel'
import { PersonMenu } from '../../components/PersonMenu'
import { Typography } from '../../components/Typography'
import { Sider } from '../../components/atoms/sider'
import { ListOrder } from '../../icon/ListOrder'
import { CarGo } from '../../icon/CarGo'

export default {
  title: 'UI-KIT/Atoms/Layout',
  component: Layout,
} as ComponentMeta<typeof Layout>

const Menu = {
  person: {
    firstName: 'Андрей',
    lastName: 'Петров',
    email: 'a.petrov@ya.ru',
  },
  itemsMenu: [
    {
      componentLink: <a href="/">Перейти в профиль</a>,
    },
    {
      componentLink: <a href="/">Выйти</a>,
    },
  ],
}

const items: any = [
  {
    title: 'Список заявок',
    icon: <ListOrder width={20} height={20} />,
  },
  {
    title: 'Создать заявку',
    icon: <CarGo width={20} height={20} />,
  },
]

const content = (
  <>
    <Layout.Sider>
      <Sider items={items} />
    </Layout.Sider>
    <Layout>
      <Layout.Header>
        <Panel.Header>
          <Typography type="default">
            Test
          </Typography>
          <PersonMenu person={Menu.person} itemsMenu={Menu.itemsMenu} />
        </Panel.Header>
      </Layout.Header>
      <Layout>
        <Layout.Content>
          <div style={{ height: '400px' }} />
        </Layout.Content>
      </Layout>
    </Layout>
  </>
)

const Template: ComponentStory<typeof Layout> = (args) => (
  <Layout {...args} />
)
export const Primary = Template.bind({})

Primary.args = {
  children: content,

}
