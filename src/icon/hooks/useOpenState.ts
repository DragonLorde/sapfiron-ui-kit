import React, { useCallback } from 'react'

const useOpenState = (onClick: (event: React.MouseEvent<HTMLElement>) => void): ((event: React.MouseEvent<HTMLElement>) => void) => useCallback((event: React.MouseEvent<HTMLElement>) => {
  onClick && onClick(event)
}, [onClick])

export default useOpenState
