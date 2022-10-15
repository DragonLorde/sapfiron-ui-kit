import { ThemedStyledProps } from 'styled-components'
import { ITheme } from '../../theme/model/theme.model'

type SizeType = keyof ITheme['fontSettings']['size'];

export const defaultTextStyle = (size: SizeType = 'default') => (props: ThemedStyledProps<any, ITheme>) => `
  font-weight: 600;
  font-size: ${props.theme.fontSettings.size[size]};
  line-height: 140%;
`
