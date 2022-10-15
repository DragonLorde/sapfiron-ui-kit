import React, { FC } from 'react'
import { ICONModelProps } from '../model/ICON.model'
import { IconBuilder } from '../utils'
import ChatSVG from './ChatSVG'

const Chat:FC<ICONModelProps> = ({ height, width }) => (
  <IconBuilder SVG={<ChatSVG />} height={height} width={width} />
)

export default Chat
