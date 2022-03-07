interface ColorType {
  displayName: string
  id: string
}
interface PriceType {
  symbol: string
  amount: string
  fractionDigits: number
}
interface ProductImageType {
  title: string
  href: string
}
interface LinksType {
  productImages: ProductImageType[] | Image[]
}
export interface ProductType {
  color: ColorType
  currency: string
  description: string
  name: string
  price: PriceType
  size: string
  sku: string
  type: string
  _links: LinksType
}
export interface ProductsResponse {
  products: ProductType[]
}

interface Image {
  product: string
  src: string
}
export interface Images {
  [key: string]: Image[]
}
export interface ImageResponse {
  images: Images
}
