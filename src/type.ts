import { LocationQueryValue } from 'vue-router'

export interface IFeature {
  imageSrc: string
  title: string
  description: string
  url: string
}

export interface IFooterLink {
  url: string
  name: string
}

export interface IFooter {
  name: string
  links: IFooterLink[]
}

export interface IPaginator {
  search?: string | LocationQueryValue
  size?: number
  page?: number
}
