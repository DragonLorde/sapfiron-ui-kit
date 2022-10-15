import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Checkbox } from '../../components/atoms/Checkbox'

export default {
  title: 'UI-KIT/Atoms/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />

export const Primary = Template.bind({})

Primary.args = {
  text: 'text',
  value: 'test',
  // eslint-disable-next-line no-console
  onChange: (e) => console.log(e),
}
