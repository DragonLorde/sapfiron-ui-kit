import { fieldsModel } from '../model/ProvideInput.model'
import GetInputOnType from '../utils/GetInputOnType'
import { Styled } from '../style/ProvideInput.styled'
import { CollapsableItem } from '../../CollabpsableItem'

const {
  InputContainer,
} = Styled

const Resolver = (props: fieldsModel) => {
  const {
    inputs,
    id,
    title,
  } = props

  const results = inputs.reduce((previousValue: Array<JSX.Element>, currentValue) => {
    const element = GetInputOnType(currentValue)
    if (element) {
      previousValue.push(element)
    }
    return previousValue
  }, [])
  return (
    <CollapsableItem key={id} titleContent={title} transitionDurationInMs={444}>
      <InputContainer>
        {results}
      </InputContainer>
    </CollapsableItem>
  )
}

export default Resolver
