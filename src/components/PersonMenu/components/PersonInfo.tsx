import { FC, memo } from 'react'
import { PersonMenuProps } from '../model/PersonMenu.model'
import { Styled } from '../style/PersonMenu.styled'

const {
  StyledPersonInfo,
  PersonName,
  PersonEmail,
} = Styled

interface Props {
  person: PersonMenuProps['person']
}

const PersonInfo: FC<Props> = ({ person }) => {
  const { firstName, lastName, email } = person

  return (
    <StyledPersonInfo>
      <PersonName>{`${firstName} ${lastName}`}</PersonName>
      <PersonEmail>{email}</PersonEmail>
    </StyledPersonInfo>
  )
}

export default memo(PersonInfo)
