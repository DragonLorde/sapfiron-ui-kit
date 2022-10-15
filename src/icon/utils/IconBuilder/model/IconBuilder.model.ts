import { ReactComponentElement } from 'react'
import { ICONModelProps } from '../../../model/ICON.model'

export interface iconBuilderModelProps extends ICONModelProps {
    SVG: ReactComponentElement<any>,
}
