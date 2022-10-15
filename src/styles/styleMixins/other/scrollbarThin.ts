import { ThemedStyledProps } from 'styled-components'
import { ITheme } from '../../theme/model/theme.model'

export const scrollbarThin = (props: ThemedStyledProps<any, ITheme>) => `
  * {
      ::-webkit-scrollbar {
      width: 9px;
      height: 9px;
      }

      /* Track */
      ::-webkit-scrollbar-track {
      background: ${props.theme.colors.white};
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
      background: ${props.theme.colors.gray_600};
      border-radius: ${props.theme.decoration.borderRadius.default};
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
      background: ${props.theme.colors.gray_800};
      }
    }
`
