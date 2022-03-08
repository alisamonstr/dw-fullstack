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
  order: string
  src: string
}

interface LinksType {
  productImages: ProductImageType[]
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
