import styled from 'styled-components'
import { getSpacing } from '../../../styles/styleMixins/offset'

const ConfirmWrapper = styled('div')`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 150;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colors.gray_200};
`

const StyledConfirm = styled('div')`
    padding: ${getSpacing(3)};
    width: 450px;
    minHeight: 200px;
    border-radius: ${(props) => props.theme.decoration.borderRadius.default};
    background: ${(props) => props.theme.colors.white};
    position: relative;
`

const Title = styled('div')`
    font-size: ${(props) => props.theme.fontSettings.size.default};
    font-weight: ${(props) => props.theme.fontSettings.weight.bold};
    display: flex;
    align-items: center;
    gap: ${getSpacing(3)};
`

const Content = styled('div')`
    font-size: ${(props) => props.theme.fontSettings.size.default};
    margin-top: ${getSpacing(1)};
`

const Footer = styled('div')`
    margin-top: ${getSpacing(4)};
    display: flex;
    justify-content: flex-end;
    gap: ${getSpacing(2)};
    & button {
        min-width: 90px;
        width: 90px;
        height: 36px;
        border-radius: ${(props) => props.theme.decoration.borderRadius.default};
        padding: 0;
        div {
            fonts-size: 16px;
            font-weight: ${(props) => props.theme.fontSettings.weight.normal};
        }
    }
`

export const Styled = {
  ConfirmWrapper,
  StyledConfirm,
  Title,
  Content,
  Footer,
}
