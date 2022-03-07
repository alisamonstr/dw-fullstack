import { combineProducts } from '../src/utils'
import images from '../__mocks__/images.mock'
import products from '../__mocks__/products.mock'

describe('combine products', () => {
  test('should properly combined products with images', () => {
    const result = combineProducts(
      products.products as any,
      images.images as any,
    )
    expect(result).toEqual([
      {
        _links: {
          productImages: [
            {
              order: '0',
              src: 'https://www.danielwellington.com/media/staticbucket/media/catalog/product/c/l/cl40-oxford-rg_1_1.png',
            },
            {
              order: '1',
              src: 'https://www.danielwellington.com/media/staticbucket/media/catalog/product/d/w/dw_classic_40rg_closeup_front2.png',
            },
            {
              order: '2',
              src: 'https://www.danielwellington.com/media/staticbucket/media/catalog/product/d/w/dw_classic_40rg_closeup_front1.png',
            },
            {
              order: '3',
              src: 'https://www.danielwellington.com/media/staticbucket/media/catalog/product/d/w/dw_classic_40rg_closeup_back.png',
            },
            {
              order: '4',
              src: 'https://www.danielwellington.com/media/staticbucket/media/catalog/product/c/l/cl-40-oxford-rg_3.png',
            },
            {
              order: '5',
              src: 'https://www.danielwellington.com/media/staticbucket/media/catalog/product/b/o/box-classic-oxford-rg-40.png',
            },
          ],
        },
        color: { displayName: 'N/A', id: 'Rose Gold' },
        currency: 'EUR',
        description:
          'This classic and aesthetically pleasing timepiece was designed with great attention to detail. The playful colors of the NATO strap blends naturally with the simple and minimalistic dial, effortlessly creating the perfect accessory.',
        name: 'Classic Oxford 40 Rose Gold',
        price: { amount: '159', fractionDigits: 2, symbol: ' €' },
        size: '40mm',
        sku: 'DW00100001',
        type: 'watch',
      },
      {
        _links: {
          productImages: [
            {
              order: '0',
              src: 'https://www.danielwellington.com/media/staticbucket/media/catalog/product/c/l/cl40-canterbury-rg_2.png',
            },
            {
              order: '1',
              src: 'https://www.danielwellington.com/media/staticbucket/media/catalog/product/d/w/dw_classic_40rg_closeup_front1_1.png',
            },
            {
              order: '2',
              src: 'https://www.danielwellington.com/media/staticbucket/media/catalog/product/d/w/dw_classic_40rg_closeup_front2_1.png',
            },
            {
              order: '3',
              src: 'https://www.danielwellington.com/media/staticbucket/media/catalog/product/d/w/dw_classic_40rg_closeup_back_1.png',
            },
            {
              order: '4',
              src: 'https://www.danielwellington.com/media/staticbucket/media/catalog/product/c/l/cl-36-canterbury-rg_3.png',
            },
            {
              order: '5',
              src: 'https://www.danielwellington.com/media/staticbucket/media/catalog/product/b/o/box-classic-canterbury-rg-40.png',
            },
          ],
        },
        color: { displayName: 'N/A', id: 'Rose Gold' },
        currency: 'EUR',
        description:
          'Inspired by the gorgeous colors of a classic flag, this red, white and blue NATO band celebrates timeless preppy American fashion. The playful band, when paired with the simplistic and elegantly slim dial, gives you a timepiece that can be worn to both work and after work.',
        name: 'Classic Canterbury 40 Rose Gold',
        price: { amount: '159', fractionDigits: 2, symbol: ' €' },
        size: '40mm',
        sku: 'DW00100002',
        type: 'watch',
      },
    ])
  })
})
