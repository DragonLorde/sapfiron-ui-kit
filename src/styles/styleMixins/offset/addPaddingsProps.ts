import { ThemedStyledProps } from 'styled-components'
import { ITheme } from '../../theme/model/theme.model'

export const addPaddingsProps = (props: ThemedStyledProps<any, ITheme>) => `
    padding: ${props.p ?? ''};
    padding-top: ${props.pt ?? ''};
    padding-bottom: ${props.pb ?? ''};
    padding-left: ${props.pl ?? ''};
    padding-right: ${props.pr ?? ''};
`
