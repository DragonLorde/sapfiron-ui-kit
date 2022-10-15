import { ThemedStyledProps } from 'styled-components'
import { ITheme } from '../../theme/model/theme.model'

export const addMarginsProps = (props: ThemedStyledProps<any, ITheme>) => `
    margin: ${props.m ?? ''};
    margin-top: ${props.mt ?? ''};
    margin-bottom: ${props.mb ?? ''};
    margin-left: ${props.ml ?? ''};
    margin-right: ${props.mr ?? ''};
`
