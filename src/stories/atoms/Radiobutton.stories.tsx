import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import { Radiobutton } from '../../components/atoms/Radiobutton'
import theme from '../../styles/theme/theme'

export default {
  title: 'UI-KIT/Atoms/Radiobutton',
  component: Radiobutton,
} as ComponentMeta<typeof Radiobutton>

const Template: ComponentStory<typeof Radiobutton> = (args) => (
  <ThemeProvider theme={theme}>
    <Radiobutton {...args} />
    <Radiobutton {...args} />
    <Radiobutton {...args} />
  </ThemeProvider>
)

export const SwitchPrimary = Template.bind({})

SwitchPrimary.args = {
  value: 'test_value',
  name: 'test_name',
  id: 'test_id',
  // eslint-disable-next-line no-console
  onChange: (e) => console.log(e),
}
