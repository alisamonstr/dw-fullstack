import React from 'react'
import { render, screen } from '@testing-library/react'
import { ProductsTable } from '../ProductsTable'

describe('ProductsTable', () => {
  it('should render Loading if isFetched true', () => {
    render(<ProductsTable products={[]} category="watch" isFetched={false} />)
    expect(screen.getByTestId('loading')).toBeInTheDocument()
  })
  it('should render empty message if products are missing', () => {
    render(<ProductsTable products={[]} category="watch" isFetched />)
    expect(screen.queryByTestId('loading')).not.toBeInTheDocument()
    const missingText = screen.getByText(/We don't have watch at this moment./i)
    expect(missingText).toBeInTheDocument()
  })
  it('should render products if products are fetched', () => {
    render(
      <ProductsTable
        products={[
          {
            sku: 'DW00100001',
            name: 'Classic Oxford 40 Rose Gold',
            description:
              'This classic and aesthetically pleasing timepiece was designed with great attention to detail. The playful colors of the NATO strap blends naturally with the simple and minimalistic dial, effortlessly creating the perfect accessory.',
            type: 'watch',
            size: '40mm',
            price: {
              symbol: ' €',
              amount: '159',
              fractionDigits: 2,
            },
            currency: 'EUR',
            color: {
              displayName: 'N/A',
              id: 'Rose Gold',
            },
            _links: {
              productImages: [
                {
                  order: '0',
                  src: 'https://www.danielwellington.com/media/staticbucket/media/catalog/product/c/l/cl40-oxford-rg_1_1.png',
                },
              ],
            },
          },
        ]}
        category="watch"
        isFetched
      />,
    )
    expect(screen.queryByTestId('loading')).not.toBeInTheDocument()
    const color = screen.getByText(/Rose Gold/i)
    expect(color).toBeInTheDocument()
    const price = screen.getByText(/159/i)
    expect(price).toBeInTheDocument()
    const name = screen.getByText(/Classic Oxford 40/i)
    expect(name).toBeInTheDocument()
  })
})
