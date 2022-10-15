import React, { FC } from 'react'
import { ICONModelProps } from '../model/ICON.model'
import { IconBuilder } from '../utils'
import LogoSVG from './LogoSVG'

const Logo:FC<ICONModelProps> = ({ height, width }) => (
  <IconBuilder SVG={<LogoSVG />} height={height} width={width} />
)

export default Logo
