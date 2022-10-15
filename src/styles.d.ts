import 'styled-components'
import UITheme from './styles/theme/theme'

type Theme = typeof UITheme

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
