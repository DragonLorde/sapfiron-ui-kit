import { ComponentMeta, ComponentStory } from '@storybook/react'

import { FormSignIn } from '../../components/forms/FormSignIn'

export default {
  title: 'UI-KIT/Forms/FormSignIn',
  component: FormSignIn,
} as ComponentMeta<typeof FormSignIn>

const Template: ComponentStory<typeof FormSignIn> = (args) => (
  <FormSignIn {...args} />
)
export const Primary = Template.bind({})

Primary.args = {
  linkForgotPassword: '#link',
  onSubmit: (data) => new Promise((resolve) => {
    setTimeout(() => {
      // eslint-disable-next-line no-console
      resolve(console.log(data))
    }, 1000)
  }),
}
