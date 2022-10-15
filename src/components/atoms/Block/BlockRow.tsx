import React, { FC, PropsWithChildren } from 'react'

import { Styled } from './styles/BlockRow.styled'

const {
  BlockRowContainer,
} = Styled

const BlockRow:FC<PropsWithChildren> = ({ children }) => (
  <BlockRowContainer>
    {children}
  </BlockRowContainer>
)

export default BlockRow
