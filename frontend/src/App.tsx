import React, { useContext, useEffect, useState } from 'react'
import { Header } from './components/Header'
import { ProductsContext } from './contexts'
import { ProductsTable } from './components/ProductsTable'
import { categories } from './constants'

const App = () => {
  const [activeCategory, setActiveCategory] = useState(categories[1])
  const { getProducts } = useContext(ProductsContext)

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <>
      <Header
        setActiveCategory={setActiveCategory}
        activeCategory={activeCategory}
      />
      <ProductsTable activeCategory={activeCategory} />
    </>
  )
}

export default App
