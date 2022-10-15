import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Link } from '../../components/atoms/Link'

export default {
  title: 'UI-KIT/Atoms/Link',
  component: Link,
} as ComponentMeta<typeof Link>

const TemplateLink: ComponentStory<typeof Link> = (args) => (
  <Link {...args}>
    Test
  </Link>
)
export const DefaultLink = TemplateLink.bind({})

const TemplateNavLink: ComponentStory<typeof Link> = (args) => (
  <Link {...args}>
    Test
  </Link>
)
export const DefaultNavLink = TemplateNavLink.bind({})

DefaultLink.args = {
  type: 'link',
  disabled: false,
}

DefaultNavLink.args = {
  type: 'nav',
  href: '#',
  disabled: false,
}
