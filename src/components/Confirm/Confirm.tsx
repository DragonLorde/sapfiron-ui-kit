import { FC, useEffect } from 'react'
import { Portal } from 'react-portal'
import { ConfirmProps } from './model/Confirm.model'
import { Styled } from './style/Confirm.styled'
import { Button } from '../atoms/Button'

const {
  ConfirmWrapper,
  StyledConfirm,
  Title,
  Content,
  Footer,
} = Styled

const Confirm: FC<ConfirmProps> = (props) => {
  const {
    isOpen,
    title,
    content,
    onSuccess,
    onClose,
    icon,
  } = props

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    }

    const onKeydown = (e: KeyboardEvent) => {
      switch (e.key) {
      case 'Escape':
        onClose()
        break
      default: break
      }
    }

    document.addEventListener('keydown', onKeydown)

    return () => {
      document.body.style.overflow = 'unset'
      document.removeEventListener('keydown', onKeydown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <Portal node={document && document.getElementById('root')}>
      <ConfirmWrapper>
        <StyledConfirm>
          <Title>
            {icon || <div />}
            {title}
          </Title>
          <Content>{content}</Content>
          <Footer>
            <Button onClick={onSuccess}>Да</Button>
            <Button onClick={onClose}>Нет</Button>
          </Footer>
        </StyledConfirm>
      </ConfirmWrapper>
    </Portal>
  )
}

export default Confirm
