import { ComponentMeta, ComponentStory } from '@storybook/react'
import { CollapsableItem } from '../components/CollabpsableItem'

export default {
  title: 'UI-KIT/CollapsableItem',
  component: CollapsableItem,
} as ComponentMeta<typeof CollapsableItem>

const Template: ComponentStory<typeof CollapsableItem> = (args) => (
  <CollapsableItem {...args}>
    <div>
      <p>asfasfafoasfioasf</p>
    </div>
    <div>
      <p>asfasfafoasfioasf</p>
    </div>
    <div>
      <p>asfasfafoasfioasf</p>
    </div>
  </CollapsableItem>
)
export const Primary = Template.bind({})

Primary.args = {
  transitionDurationInMs: 200,
  titleContent: 'Данные образовательной организации',
}
