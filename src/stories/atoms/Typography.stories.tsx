import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Typography } from '../../components/Typography'

export default {
  title: 'UI-KIT/Atoms/Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args}>
    Test
  </Typography>
)
export const Primary = Template.bind({})

Primary.args = {
  type: 'bold',
}
