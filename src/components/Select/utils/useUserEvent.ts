import React, { useCallback } from 'react'

const useUserEvent = (value: boolean, isOpenEvent: React.Dispatch<React.SetStateAction<boolean>>) => useCallback(
  () => {
    isOpenEvent(value)
  },
  [isOpenEvent, value],
)

export default useUserEvent
