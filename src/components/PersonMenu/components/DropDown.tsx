import { FC, MutableRefObject } from 'react'
import { PersonMenuProps } from '../model/PersonMenu.model'
import { Styled } from '../style/PersonMenu.styled'

const { DropDownMenu, MenuItem } = Styled

interface Props {
  items: PersonMenuProps['itemsMenu']
  isOpen: boolean
  refDropDown: MutableRefObject<HTMLUListElement | null>
  onClose: () => void
}

const DropDown: FC<Props> = (props) => {
  const {
    items,
    isOpen,
    refDropDown,
    onClose,
  } = props

  if (!isOpen) return null

  return (
    <DropDownMenu ref={refDropDown}>
      {items.length > 0 && items.map((item) => (
        <MenuItem key={Math.random()} onClick={onClose}>
          {item.componentLink}
        </MenuItem>
      ))}
    </DropDownMenu>
  )
}

export default DropDown
