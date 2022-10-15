import { Skeleton } from 'antd'
import styled from 'styled-components'

const StyledSkeleton = styled(Skeleton.Button)<{ $width?: number | string; $height?: number | string }>`
  width: ${(props) => {
  if (props.$width) {
    return typeof props.$width === 'number' ? `${props.$width}px` : props.$width
  }
  return 'auto'
}};
height: ${(props) => {
  if (props.$height) {
    return typeof props.$height === 'number' ? `${props.$height}px` : props.$height
  }
  return 'auto'
}};
    .ant-skeleton-button {
    width: 100%;
    height: 100%;
    border-radius: ${(props) => props.theme.decoration.borderRadius.larger};
  }
`

export const Styled = {
  StyledSkeleton,
}
