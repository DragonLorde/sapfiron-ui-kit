import React, { FC } from 'react'
import { ICONModelProps } from '../model/ICON.model'
import { IconBuilder } from '../utils'
import CarGoSVG from './CarGoSVG'

const CarGo:FC<ICONModelProps> = ({ height, width }) => (
  <IconBuilder SVG={<CarGoSVG />} height={height} width={width} />
)

export default CarGo
