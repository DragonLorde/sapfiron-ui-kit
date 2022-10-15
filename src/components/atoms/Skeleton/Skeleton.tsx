import { Styled } from './style/Skeleton.styled'

const { StyledSkeleton } = Styled

export interface SkeletonProps {
  width?: number | string
  height?: number | string
}

const Skeleton = ({ width, height }: SkeletonProps) => <StyledSkeleton $width={width} $height={height} active />

export default Skeleton
