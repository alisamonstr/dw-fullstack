import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Header } from './components/Header'
import { ProductsContext } from './contexts'
import { ProductsTable } from './components/ProductsTable'
import { categories } from './constants'

const App = () => {
  const navigate = useNavigate()
  const { category = '' } = useParams()
  const { products, isFetched, getProducts } = useContext(ProductsContext)

  useEffect(() => {
    getProducts()
  }, [getProducts])

  useEffect(() => {
    if (!categories.find((c) => c.value === category)) {
      navigate('/watch')
    }
  }, [category, navigate])

  const filteredProducts = products.filter((item) => item.type === category)

  return (
    <>
      <Header />
      <ProductsTable
        products={filteredProducts}
        category={category}
        isFetched={isFetched}
      />
    </>
  )
}

export default App
