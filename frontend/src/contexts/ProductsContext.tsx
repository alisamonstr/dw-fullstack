import { createContext, FC, memo, ReactNode, useState } from 'react'
import { BASE_URL } from '../constants'
import { ProductType } from '../types'

interface ProductsContextProps {
  products: ProductType[]
  getProducts: () => void
}
interface ProductsProviderProps {
  children: ReactNode
}

const ProductsContext = createContext<ProductsContextProps>(
  {} as ProductsContextProps,
)

const ProductsProvider: FC<ProductsProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<ProductType[]>([])

  const getProducts = async () => {
    await fetch(`${BASE_URL}`)
      .then((res) => res.json())
      .then((res) => setProducts(res))
  }

  return (
    <ProductsContext.Provider value={{ products, getProducts }}>
      {children}
    </ProductsContext.Provider>
  )
}

export { ProductsContext, ProductsProvider }
