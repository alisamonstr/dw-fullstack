import { Images, ProductType } from '../types'

export const combineProducts = (products: ProductType[], images: Images) =>
  products.map((product) => {
    product._links.productImages = images[product.sku]
    return product
  })
