import { useCallback } from 'react'
import { IuseInputEventPropType } from './model/useInputEvent.model'

export const useInputEvent = (args: IuseInputEventPropType): () => void => {
  const {
    setValueFunction,
    value,
    onEventFunction,
  } = args
  return useCallback(() => {
    setValueFunction(value)
    onEventFunction && onEventFunction()
  }, [setValueFunction, onEventFunction, value])
}
