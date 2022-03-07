import { FC, memo } from 'react'
import styled from 'styled-components'
import { Container, ContentWrapper } from './styles'
import { categories } from '../constants'
import { CategoryType } from '../types'

interface StyledItemProps {
  isActive?: boolean
}

const ComponentContainer = styled(Container)`
  background: #202549;
`
const Content = styled(ContentWrapper)`
  justify-content: space-around;
  height: 50px;
`
const Item = styled.div<StyledItemProps>`
  padding: ${(props) => (props.isActive ? '20px 10px 4px' : '20px 10px 5px')};
  margin-bottom: 10px;
  text-transform: uppercase;
  color: white;
  cursor: pointer;
  border-bottom: ${(props) => (props.isActive ? '1px solid  white' : '')};
`

interface HeaderProps {
  setActiveCategory: (value: CategoryType) => void
  activeCategory: CategoryType
}

export const Header: FC<HeaderProps> = memo(
  ({ setActiveCategory, activeCategory }) => {
    return (
      <ComponentContainer>
        <Content>
          {categories.map((el) => (
            <Item
              key={el.title}
              onClick={() => setActiveCategory(el)}
              isActive={activeCategory.title === el.title}
            >
              {el.title}
            </Item>
          ))}
        </Content>
      </ComponentContainer>
    )
  },
)
