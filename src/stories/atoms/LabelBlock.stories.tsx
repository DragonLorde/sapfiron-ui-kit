import { ComponentMeta, ComponentStory } from '@storybook/react'

import { LabelBlock } from '../../components/atoms/LabelBlock'

export default {
  title: 'UI-KIT/Atoms/LabelBlock',
  component: LabelBlock,
} as ComponentMeta<typeof LabelBlock>

const Template: ComponentStory<typeof LabelBlock> = (args) => (
  <LabelBlock {...args} />
)
export const Primary = Template.bind({})

Primary.args = {
  children: 'test',
}
