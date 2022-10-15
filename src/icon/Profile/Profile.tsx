import React, { FC } from 'react'
import { ICONModelProps } from '../model/ICON.model'
import { IconBuilder } from '../utils'
import ProfileSVG from './ProfileSVG'

const Profile:FC<ICONModelProps> = ({ height, width }) => (
  <IconBuilder SVG={<ProfileSVG />} height={height} width={width} />
)

export default Profile
