import React, { FC, memo } from 'react'
import styled from 'styled-components/macro'
import { Container, ContentWrapper } from './styles'
import { ItemCard } from './ItemCard'
import { ProductType } from '../types'

const ComponentContainer = styled(Container)`
  padding: 50px 0;
`
const Content = styled(ContentWrapper)`
  justify-content: space-between;
  flex-wrap: wrap;
  height: 100%;
  @media (max-width: 600px) {
    justify-content: center;
  }
`

interface ProductsTableProps {
  products: ProductType[]
  isFetched: boolean
  category: string
}

export const ProductsTable: FC<ProductsTableProps> = memo(
  ({ products, category, isFetched }) => {
    if (!isFetched) {
      return (
        <ComponentContainer>
          <Content data-testid="loading">Loading...</Content>
        </ComponentContainer>
      )
    }

    if (!products.length && isFetched) {
      return (
        <ComponentContainer>
          <Content>
            {`We don't have ${category || 'these products'} at this moment.`}
          </Content>
        </ComponentContainer>
      )
    }
    return (
      <ComponentContainer>
        <Content>
          {products.map((item) => (
            <ItemCard item={item} key={item.sku} />
          ))}
        </Content>
      </ComponentContainer>
    )
  },
)
