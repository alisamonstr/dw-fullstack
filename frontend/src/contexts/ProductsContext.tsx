import {
  createContext,
  FC,
  memo,
  ReactNode,
  useCallback,
  useState,
} from 'react'
import { BASE_URL } from '../constants'
import { ProductType } from '../types'

interface ProductsContextProps {
  products: ProductType[]
  getProducts: () => void
  isFetched: boolean
}
interface ProductsProviderProps {
  children: ReactNode
}

const ProductsContext = createContext<ProductsContextProps>(
  {} as ProductsContextProps,
)

const ProductsProvider: FC<ProductsProviderProps> = memo(({ children }) => {
  const [products, setProducts] = useState<ProductType[]>([])
  const [isFetched, setIsFetched] = useState<boolean>(false)

  const getProducts = useCallback(async () => {
    await fetch(`${BASE_URL}`)
      .then((res) => res.json())
      .then((res) => {
        setProducts(res)
        setIsFetched(true)
      })
  }, [setProducts, setIsFetched])

  return (
    <ProductsContext.Provider value={{ products, getProducts, isFetched }}>
      {children}
    </ProductsContext.Provider>
  )
})

export { ProductsContext, ProductsProvider }
