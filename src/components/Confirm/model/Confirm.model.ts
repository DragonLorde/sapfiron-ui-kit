import { ReactNode } from 'react'

export interface ConfirmProps {
    isOpen: boolean
    title: string
    content?: string
    onSuccess: () => void
    onClose: () => void
    icon: ReactNode
}
