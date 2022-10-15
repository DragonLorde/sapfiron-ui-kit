import { ComponentProps, FC } from 'react'
import { InternalLayout } from './InternalLayout/InternalLayout'
import { Sider } from './Sider/Sider'
import { Header } from './Header/Header'
import { Content } from './Content/Content'

export interface CompoundedComponent extends FC<ComponentProps<typeof InternalLayout>> {
  Sider: typeof Sider
  Header: typeof Header
  Content: typeof Content
}

export const Layout = InternalLayout as CompoundedComponent
Layout.Sider = Sider
Layout.Header = Header
Layout.Content = Content
