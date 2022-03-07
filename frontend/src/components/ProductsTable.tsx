import React, { FC, memo, useContext } from 'react'
import styled from 'styled-components'
import { Container, ContentWrapper } from './styles'
import { ProductsContext } from '../contexts'
import { CategoryType, ProductType } from '../types'
import { ItemCard } from './ItemCard'

const ComponentContainer = styled(Container)`
  padding: 50px 0;
`
const Content = styled(ContentWrapper)`
  justify-content: space-between;
  flex-wrap: wrap;
  height: 100%;
`

interface ComponentProps {
  activeCategory: CategoryType
}
export const ProductsTable: FC<ComponentProps> = memo(({ activeCategory }) => {
  const { products } = useContext(ProductsContext)

  const filteredProducts = products.filter(
    (item) => item.type === activeCategory.value,
  )

  if (!filteredProducts.length) {
    return (
      <ComponentContainer>
        <Content>
          {`We don't have ${
            activeCategory.title || 'these products'
          } at this moment.`}
        </Content>
      </ComponentContainer>
    )
  }
  return (
    <ComponentContainer>
      <Content>
        {filteredProducts.map((item) => (
          <ItemCard item={item} key={item.sku} />
        ))}
      </Content>
    </ComponentContainer>
  )
})
