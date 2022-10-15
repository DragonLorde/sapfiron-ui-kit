import React, { FC } from 'react'
import { ICONModelProps } from '../model/ICON.model'
import { IconBuilder } from '../utils'
import SearchSVG from './SearchSVG'

const Search:FC<ICONModelProps> = ({ height, width }) => (
  <IconBuilder SVG={<SearchSVG />} height={height} width={width} />
)

export default Search
