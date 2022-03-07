import React, { FC, memo, useContext } from 'react'
import styled from 'styled-components'
import { Container, ContentWrapper } from './styles'
import { ProductsContext } from '../contexts'
import { CategoryType } from '../types'
import { ItemCard } from './ItemCard'

const ComponentContainer = styled(Container)`
  padding: 50px 0;
`
const Content = styled(ContentWrapper)`
  justify-content: space-between;
  flex-wrap: wrap;
  height: 100%;
`

interface ProductsTableProps {
  activeCategory: CategoryType
}

export const ProductsTable: FC<ProductsTableProps> = memo(
  ({ activeCategory }) => {
    const { products, isFetched } = useContext(ProductsContext)

    const filteredProducts = products.filter(
      (item) => item.type === activeCategory.value,
    )

    if (!isFetched) {
      return (
        <ComponentContainer>
          <Content>Loading...</Content>
        </ComponentContainer>
      )
    }

    if (!filteredProducts.length && isFetched) {
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
  },
)
