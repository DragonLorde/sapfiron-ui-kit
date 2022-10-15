import { ReactElement } from 'react'

export interface PersonMenuProps {
  person: {
    firstName: string
    lastName: string
    email: string
  }
  itemsMenu: Array<{
    componentLink: ReactElement
  }>
}
