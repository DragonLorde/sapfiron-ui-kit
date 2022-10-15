import React, { FC, PropsWithChildren } from 'react'
import { Styled } from './styles/Status.styled'
import { StatusModel } from './model/Status.model'

const {
  StatusContainer,
} = Styled

const Status:FC<PropsWithChildren<StatusModel>> = ({ currentColor, children }) => (
  <StatusContainer color={currentColor}>
    {children}
  </StatusContainer>
)

export default Status
