export interface IProduct {
  id: string | number
  imageSrc: string
  title: string
  content: string
  price: string
  rating: number
  reviews: number
  url: string
  liked?: boolean
}
