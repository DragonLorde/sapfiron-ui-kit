import React, { FC } from 'react'
import { ICONModelProps } from '../model/ICON.model'
import { IconBuilder } from '../utils'
import ListOrderSVG from './ListOrderSVG'

const ListOrder:FC<ICONModelProps> = ({ height, width }) => (
  <IconBuilder SVG={<ListOrderSVG />} height={height} width={width} />
)

export default ListOrder
