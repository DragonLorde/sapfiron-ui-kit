import { Tabs } from 'antd'
import styled from 'styled-components'

const { TabPane: Tab } = Tabs

const StyledTabs = styled(Tabs)((props) => ({
  '& > .ant-tabs-nav::before, .ant-tabs-top > div > .ant-tabs-nav::before': {
    display: 'none',
  },
  '& .ant-tabs-nav-list': {
    border: `1px solid ${props.theme.colors.gray_500}`,
    borderRadius: props.theme.decoration.borderRadius.small,
    overflow: 'hidden',
  },
  '& .ant-tabs-tab': {
    margin: 0,
    padding: '14px 20px',
    fontSize: 20,
    color: props.theme.colors.black,
    '&:not(:nth-last-child(2))': {
      borderRight: `1px solid ${props.theme.colors.gray_500}`,
    },
  },
  '& .ant-tabs-tab-btn': {
    color: props.theme.colors.black,
    '&:hover, &:active, :focus': {
      color: props.theme.colors.black,
    },
  },
  '& .ant-tabs-tab-active .ant-tabs-tab-btn': {
    color: props.theme.colors.white,
  },
  '& .ant-tabs-ink-bar': {
    background: props.theme.colors.blue_600,
    height: '100% !important',
    zIndex: -1,
  },
}))

export const Styled = { StyledTabs, Tab }
