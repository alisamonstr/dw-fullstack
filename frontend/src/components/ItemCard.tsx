import { FC, memo } from 'react'
import styled from 'styled-components/macro'
import { ProductType } from '../types'
import { getColor } from '../utils'

interface ColorRoundProps {
  background?: string
}
interface ImageProps {
  background?: string
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 350px;
  margin: 10px 10px 20px;
  transition: box-shadow 0.2s ease-in-out;
  &:hover {
    box-shadow: 0 0 15px 0 rgba(1, 28, 77, 0.2), 0 1px 1px rgba(1, 28, 77, 0.15);
  }
`
const Image = styled.div<ImageProps>`
  background: ${(props) => `url(${props.background}) center center no-repeat`};
  background-size: contain;
  background-color: #f2f3f4;
  width: 350px;
  height: 350px;
`
const ColorRound = styled.div<ColorRoundProps>`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background-color: ${(props) => props.background};
`
const TextItem = styled.div`
  padding: 5px 15px;
`
const Title = styled(TextItem)`
  padding-top: 10px;
  text-transform: uppercase;
  letter-spacing: 5px;
`

interface ItemCardProps {
  item: ProductType
}
export const ItemCard: FC<ItemCardProps> = memo(({ item }) => {
  const name = item.name.split(item.color.id)

  const color = getColor(item.color.id)

  return (
    <Container>
      <Image background={item._links.productImages[0].src} />
      <Title>{name}</Title>
      <TextItem>{color && <ColorRound background={color} />}</TextItem>
      <TextItem>{item.color.id !== 'N/A' && item.color.id}</TextItem>
      <TextItem>
        {item.price.symbol} {item.price.amount}
      </TextItem>
    </Container>
  )
})
