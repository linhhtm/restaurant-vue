export interface IAuthor {
  imageSrc: string
  name: string
  profile: string
}
export interface IPost {
  imageSrc: string
  category: string
  title: string
  id: string | number
  date: string
  author: IAuthor
  featured: boolean
  views: number
  description: string
}
