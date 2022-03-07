import React, { useContext, useEffect, useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { ProductsContext } from './contexts'
import { ProductsTable } from './components/ProductsTable'
import styled from 'styled-components'
import { Container } from './components/styles'
import { categories } from './constants'

const ComponentContainer = styled(Container)`
  flex-direction: column;
  height: 100vh;
`

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
