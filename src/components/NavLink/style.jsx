import styled from "styled-components"
import { Link } from "react-router-dom"
import { colors } from "utils/style/GlobalStyle"

export const NavigationLink = styled(Link)`
  text-decoration: none;
  width: 100%;
  color: ${colors.primary};
  font-style: italic;
  font-size: 1rem;
  margin: 10px 10px;
  &:hover {
    color: ${colors.flowerblue};
  }
`
export const ArrowNavigation = styled.span`
  color: ${colors.flowerblue};
`
