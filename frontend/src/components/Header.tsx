import { memo } from 'react'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import { Container, ContentWrapper } from './styles'
import { categories } from '../constants'

const ComponentContainer = styled(Container)`
  background: #202549;
`
const Content = styled(ContentWrapper)`
  justify-content: space-between;
  height: 64px;
  overflow-x: auto;
  overflow-y: hidden;
  @media (max-width: 600px) {
    height: auto;
  }
`
const Item = styled(NavLink)`
  padding: 10px 10px 5px;
  margin-bottom: 10px;
  text-transform: uppercase;
  text-decoration: none;
  color: white;
  cursor: pointer;
  &.active {
    padding: 10px 10px 4px;
    border-bottom: 1px solid white;
  }
`

export const Header = memo(() => (
  <ComponentContainer>
    <Content>
      {categories.map((category) => (
        <Item key={category.title} to={`/${category.value}`}>
          {category.title}
        </Item>
      ))}
    </Content>
  </ComponentContainer>
))
