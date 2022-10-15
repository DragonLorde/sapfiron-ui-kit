import { MutableRefObject, useEffect } from 'react'

const useOnClickOutside = (isOpen: boolean, onClose: () => void, ref: MutableRefObject<HTMLElement | null>) => {
  useEffect(() => {
    const onClickOutside = (event: MouseEvent) => {
      const path = event.composedPath && event.composedPath()
      if (ref.current && !path.includes(ref.current)) {
        onClose()
      }
    }

    if (isOpen) {
      document.body.addEventListener('click', onClickOutside)
    }

    return () => document.body.removeEventListener('click', onClickOutside)
  }, [isOpen, ref, onClose])
}

export default useOnClickOutside
