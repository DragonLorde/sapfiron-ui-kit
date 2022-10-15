import React, { ComponentProps } from 'react'
import { ComponentMeta, Story } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import { Input } from '../../components/Input'

import theme from '../../styles/theme/theme'

export default {
  title: 'UI-KIT/Atoms/Input',
  component: Input,
} as ComponentMeta<typeof Input>

const Template: Story<ComponentProps<typeof Input>> = (args) => (
  <ThemeProvider theme={theme}>
    <Input {...args} />
  </ThemeProvider>
)

const TemplatePasswordInput: Story<ComponentProps<typeof Input.Password>> = (args) => (
  <ThemeProvider theme={theme}>
    <Input.Password {...args} />
  </ThemeProvider>
)

const TemplateNumberInput: Story<ComponentProps<typeof Input.Number>> = (args) => (
  <ThemeProvider theme={theme}>
    <Input.Number {...args} />
  </ThemeProvider>
)

const TemplateCustomMaskedInput: Story<ComponentProps<typeof Input.Masked>> = (args) => (
  <ThemeProvider theme={theme}>
    <Input.Masked {...args} />
  </ThemeProvider>
)

export const DefaultInput = Template.bind({})
DefaultInput.args = {
  placeholder: 'Test',
  width: 350,
}

export const PasswordInput = TemplatePasswordInput.bind({})
PasswordInput.args = {
  placeholder: 'Test',
}

export const NumberInput = TemplateNumberInput.bind({})
NumberInput.args = {
  placeholder: 'Test',
}

export const CustomMaskedInput = TemplateCustomMaskedInput.bind({})
CustomMaskedInput.args = {
  placeholder: 'Test',
  mask: '000000',
}
