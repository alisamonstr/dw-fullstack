import fetch from 'node-fetch'
import { ImageResponse, ProductsResponse } from '../types'
import { combineProducts } from './utils'

const BASE_URL = 'https://assignment.dwbt.tech'

export const products = async () => {
  const productsUrl = `${BASE_URL}/products`
  const imagesUrl = `${BASE_URL}/images`
  const productsPromise = fetch(productsUrl).then(
    (res) => res.json() as Promise<ProductsResponse>,
  )
  const imagesPromise = fetch(imagesUrl).then(
    (res) => res.json() as Promise<ImageResponse>,
  )
  const [products, images] = await Promise.all([productsPromise, imagesPromise])

  const combinedProducts = combineProducts(products.products, images.images)

  return {
    statusCode: 200,
    body: JSON.stringify(combinedProducts),
  }
}
