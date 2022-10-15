import styled from 'styled-components'
import styleMixins from '../../../../styles/styleMixins'

const { getSpacing } = styleMixins.offset

const AutocompleteForm = styled.form`
  padding: ${getSpacing(1)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  gap: ${getSpacing(2)};
`

const CollapsableInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${getSpacing(3)};
`

const LocalPanelsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 95%;
  gap: ${getSpacing(3)};
  margin: ${getSpacing([0, 1])};
  .ant-input-number {
    overflow: visible;
  }
  .ant-select-selection-selected-value,
  .Checkboxstyled__TextWrapper-co1qsc-1,
  .ant-select ~ span {
    color: ${(props) => props.theme.colors.gray_200};
    font-size: ${(props) => props.theme.fontSettings.size.small}
    font-weight: 500;
  }
`

const ErrorMessage = styled('span')`
  margin-left: ${getSpacing(1)};
  color: ${(props) => props.theme.colors.red_300};
  font-size: ${(props) => props.theme.fontSettings.size.small};
`

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${getSpacing(2)};
`

export const Styled = {
  AutocompleteForm,
  CollapsableInputContainer,
  LocalPanelsWrapper,
  ErrorMessage,
  ButtonWrapper,
}
