import { ReactNode } from 'react'

export interface SiderItem {
    title: string,
    icon: ReactNode,
    link: string,
}

export interface SiderModel {
    items?: Array<SiderItem>
    isOpenMenu?: boolean,
}
