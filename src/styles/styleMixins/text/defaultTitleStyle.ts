import { ThemedStyledProps } from 'styled-components'
import { ITheme } from '../../theme/model/theme.model'

type TitleType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export const defaultTitleStyle = (title: TitleType) => (props: ThemedStyledProps<any, ITheme>) => {
  switch (title) {
  case 1: {
    return `
        font-weight: ${props.theme.fontSettings.weight.bold};
        font-size: ${props.theme.fontSettings.size.huge};
        line-height: 125%;
      `
  }
  case 2: {
    return `
        font-weight: ${props.theme.fontSettings.weight.bold};
        font-size: ${props.theme.fontSettings.size.high};
        line-height: 125%;
      `
  }
  case 3: {
    return `
        font-weight: ${props.theme.fontSettings.weight.bold};
        font-size: ${props.theme.fontSettings.size.large};
        line-height: 125%;
      `
  }
  case 4: {
    return `
        font-weight: ${props.theme.fontSettings.weight.bold};
        font-size: ${props.theme.fontSettings.size.larger};
        line-height: 125%;
      `
  }
  case 5: {
    return `
        font-weight: ${props.theme.fontSettings.weight.bold};
        font-size: ${props.theme.fontSettings.size.default};
        line-height: 125%;
      `
  }
  case 6: {
    return `
        font-weight: ${props.theme.fontSettings.weight.bold};
        font-size: ${props.theme.fontSettings.size.smaller};
        line-height: 120%;
      `
  }
  case 7: {
    return `
        font-weight: ${props.theme.fontSettings.weight.bold};
        font-size: ${props.theme.fontSettings.size.small};
        line-height: 140%;
      `
  }
  case 8: {
    return `
        font-weight: ${props.theme.fontSettings.weight.bold};
        font-size: ${props.theme.fontSettings.size.mini};
        line-height: 140%;
      `
  }
  default: {
    return `
        font-weight: ${props.theme.fontSettings.weight.bold};
        font-size: ${props.theme.fontSettings.size.mini};
        line-height: 140%;
      `
  }
  }
}
