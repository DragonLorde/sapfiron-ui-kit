import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Switch } from '../../components/atoms/Switch'

export default {
  title: 'UI-KIT/Atoms/Switch',
  component: Switch,
} as ComponentMeta<typeof Switch>

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />

export const SwitchPrimary = Template.bind({})

SwitchPrimary.args = {
  // eslint-disable-next-line no-console
  onChange: (checked, e) => console.log(checked, e),
  id: 'test_id',
}
