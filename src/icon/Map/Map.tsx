import React, { FC } from 'react'
import { ICONModelProps } from '../model/ICON.model'
import { IconBuilder } from '../utils'
import MapSVG from './MapSVG'

const Map:FC<ICONModelProps> = ({ height, width }) => (
  <IconBuilder SVG={<MapSVG />} height={height} width={width} />
)

export default Map
