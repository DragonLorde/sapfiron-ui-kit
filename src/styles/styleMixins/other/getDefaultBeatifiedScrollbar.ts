import { ThemedStyledProps } from 'styled-components'
import { ITheme } from '../../theme/model/theme.model'

export const getDefaultBeatifiedScrollbar = (props: ThemedStyledProps<any, ITheme>) => `
    ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    border: none;
    width: 10px;
    border-radius: ${props.theme.decoration.borderRadius.default};
  }
  ::-webkit-scrollbar-thumb {
    background: ${props.theme.colors.gray_600};
    border-radius: ${props.theme.decoration.borderRadius.default};
  }
`
