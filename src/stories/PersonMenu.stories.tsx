import { ComponentMeta, ComponentStory } from '@storybook/react'

import { PersonMenu } from '../components/PersonMenu'

export default {
  title: 'UI-KIT/PersonMenu',
  component: PersonMenu,
} as ComponentMeta<typeof PersonMenu>

const Template: ComponentStory<typeof PersonMenu> = (args) => <PersonMenu {...args} />

export const Primary = Template.bind({})

Primary.args = {
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
