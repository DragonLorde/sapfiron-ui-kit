import React, { FC } from 'react'
import { BlockModel } from './model/Block.model'
import { Styled } from './styles/Block.styles'

const {
  BlockContainer,
  BlockWrapper,
  BlockLabel,
  BlockText,
} = Styled

const Block:FC<BlockModel> = ({
  text, labelText, span, color, link,
}) => (
  <BlockContainer to={link}>
    <BlockWrapper>
      <BlockLabel color={color}>
        {labelText}
      </BlockLabel>
      <BlockText>
        {text}
      </BlockText>
      <BlockText>
        {span}
      </BlockText>
    </BlockWrapper>
  </BlockContainer>
)

export default Block
