import { Property } from 'csstype'
import { ThemedStyledProps } from 'styled-components'
import { ITheme } from '../../theme/model/theme.model'

export type SpacingType = Property.Padding | Property.Margin | number

export const getSpacing = (spacing: SpacingType | Array<SpacingType>) => (props: ThemedStyledProps<any, ITheme>) => {
  if (Array.isArray(spacing)) {
    const spacingArray = spacing.reduce((previousValue: Array<string>, currentValue: SpacingType) => {
      if (typeof currentValue === 'string') {
        previousValue.push(currentValue)
      } else {
        previousValue.push(`${props.theme.spacing.default * currentValue}px`)
      }
      return previousValue
    }, [])
    return spacingArray.join(' ')
  }

  if (typeof spacing === 'string') return spacing

  return `${props.theme.spacing.default * spacing}px`
}
