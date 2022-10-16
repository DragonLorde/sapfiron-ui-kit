import {
  FC,
  useRef,
  useState,
} from 'react'
import DropDown from './DropDown'
import { PersonMenuProps } from '../model/PersonMenu.model'
import { Styled } from '../style/PersonMenu.styled'
import PersonInfo from './PersonInfo'
import { useOnClickOutside } from '../hooks'
import { ArrowDropDown } from '../../../icon'

const {
  StyledPersonMenu,
  Avatar,
  StyledArrow,
} = Styled

const PersonMenu: FC<PersonMenuProps> = ({ person, itemsMenu }) => {
  const [isOpen, setIsOpen] = useState(false)
  const refDropDown = useRef<HTMLUListElement | null>(null)
  useOnClickOutside(isOpen, () => setIsOpen(false), refDropDown)

  const onClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.stopPropagation()
    setIsOpen(!isOpen)
  }

  const lettersInAvatar = `${person.firstName[0].toUpperCase()}${person.lastName[0].toUpperCase()}`

  return (
    <StyledPersonMenu>
      <Avatar>{lettersInAvatar}</Avatar>

      <PersonInfo person={person} />

      <StyledArrow><ArrowDropDown isOpen={isOpen} onClick={onClick} /></StyledArrow>

      <DropDown
        items={itemsMenu}
        isOpen={isOpen}
        refDropDown={refDropDown}
        onClose={() => setIsOpen(false)}
      />
    </StyledPersonMenu>
  )
}

export default PersonMenu
