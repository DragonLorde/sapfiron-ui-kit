import { css } from 'styled-components'
import styleMixins from '../../../../styles/styleMixins'

const { getSpacing } = styleMixins.offset

export const layoutBlockStyle = css`
  margin: ${getSpacing(1)};
`
