import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Skeleton } from '../../components/atoms/Skeleton'

export default {
  title: 'UI-KIT/Atoms/Skeleton',
  component: Skeleton,
} as ComponentMeta<typeof Skeleton>

const Template: ComponentStory<typeof Skeleton> = (args) => (
  <Skeleton {...args} />
)
export const Primary = Template.bind({})

Primary.args = {
}
