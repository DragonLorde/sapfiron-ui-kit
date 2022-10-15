import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Button } from '../../components/atoms/Button'

export default {
  title: 'UI-KIT/Atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>
    Test
  </Button>
)
export const Primary = Template.bind({})

Primary.args = {
  isLoading: false,
  disabled: false,
  isClickEffect: false,
  isSkeleton: false,
}
