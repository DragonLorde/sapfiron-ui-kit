import { Select, SelectProps } from 'antd'
import styled from 'styled-components'

const { Option } = Select

interface ISelectWrapperProps {
  width?: number
  isOpen: boolean
}

const SelectWrapper = styled.div<ISelectWrapperProps>((props) => ({
  width: props.width ? `${props.width}px` : 'auto',
  border: `2px solid ${props.isOpen ? props.theme.colors.blue_600 : 'transparent'}`,
  borderRadius: props.theme.decoration.borderRadius.default,
  '&.error': {
    border: `2px solid ${props.theme.colors.red_500}`,
  },
  '&.disabled': {
    pointerEvents: 'none',
    cursor: 'default',
    '& .ant-select-selector .ant-select-selection-item': {
      color: props.theme.colors.gray_500,
    },
  },
  '&:hover': {
    border: `2px solid ${props.theme.colors.blue_600}`,
  },
}))

const StyledSelect = styled(Select)<SelectProps>((props) => ({
  minWidth: 240,
  background: props.theme.colors.gray_200,
  borderRadius: props.theme.decoration.borderRadius.default,
  height: '56px',
  border: 'none',
  width: '100%',
  fontSize: props.theme.fontSettings.size.default,
  position: 'relative',
  transition: 'all 0.1s linear',
  '& .rc-virtual-list-holder-inner': {
    gap: '8px',
  },
  '&.error': {
    border: `2px solid ${props.theme.colors.red_500}`,
  },
  '.ant-select-arrow .anticon > svg': {
    width: '20px',
    height: '18px',
  },
  '& .ant-select-selector .ant-select-selection-item': {
    color: props.theme.colors.white,
  },
  '&:not(.ant-select-customize-input) .ant-select-selector': {
    padding: '14px 4px 14px 26px',
    height: '100%',
  },
  '& .ant-select-arrow': { right: 10 },
  '& .ant-select-dropdown': {
    background: props.theme.colors.white,
    borderRadius: props.theme.decoration.borderRadius.default,
    padding: 7,
    border: '1px solid #B7B7B7',
    boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.2)',
  },
  '& .ant-select-item-option-active:not(.ant-select-item-option-disabled)': {},
  '& .ant-select-item-option-selected:not(.ant-select-item-option-disabled)': {
    fontWeight: props.theme.fontSettings.weight.normal,
    fontSize: props.theme.fontSettings.size.small,
    background: props.theme.colors.blue_200,
  },
  '& .ant-select-item': {
    borderRadius: 5,
    fontSize: props.theme.fontSettings.size.small,
    lineHeight: 1,
    padding: '12px 15px',
  },

  '& .ant-select-selection-item': {
    fontSize: props.theme.fontSettings.size.default,
  },
  '& .ant-select-single .ant-select-selector .ant-select-selection-search': {
    left: '24px',
    top: '14px',
  },
}))

export const Styled = { SelectWrapper, StyledSelect, Option }
