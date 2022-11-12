import { createGlobalStyle } from "styled-components"
import styled from "styled-components"
import { Link } from "react-router-dom"
import colors from "../../utils/style/colors"

export const StyledImg = styled.img`
  max-width: 150px;
  margin: 15px auto;
  @media (max-width: 390px) {
    width: 105px;
  }
`
export const StyledLink = styled(Link)`
    text-decoration: none;
    margin 0 15px;
    font-style: italic;
    color: #bbb;
    &:hover{
        color: #fff
    }
`
export const ButtonSiteContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 10px 0;
`
export const Wrapper = styled.section`
    min-width: 90%;
    padding 200px 0;
    text-align: center;
`
export const ButtonSite = styled.button`
  background-color: ${colors.DarkBackgroundSiteColor};
  width: auto;
  border-radius: 26px;
  transition-duration: 0.4s;
  border: none;
  color: ${colors.whitesmoke};
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 0.9rem;
  font-style: italic;
  font-weight: 500;
  margin: 4px 2px;
  cursor: pointer;
  &:hover {
    background-color: ${colors.whitesmoke};
    color: ${colors.primary};
    border: 1px solid ${colors.primary};
  }
`
const GlobalStyle = createGlobalStyle`
  body {
    margin: auto;
    padding: 0;
    color: ${colors.primary}
    font-size: 1rem;
    font-family: Lato, Roboto, Sans-Serif;
    background: ${colors.backgroundDark};
  }

  a {
    text-decoration: none;
  }
`

export default GlobalStyle
