import { createGlobalStyle } from "styled-components"
import styled from "styled-components"
import { Link } from "react-router-dom"
import colors from "../../utils/style/colors"

export const sizesFont = {
  h1: "2.5rem",
  h1SmartPhone: "2rem",
  h2: "1.875rem",
  h3: "1.7rem",
  medium: "1.2rem",
  normal: "1rem",
}

export const H3Style = styled.h3`
  font-size: ${sizesFont.h3};
  font-family: DrukWide-Super, sans-serif;
  padding: 5px;
  text-align: center;
`

export const H2Style = styled.h2`
  font-size: ${sizesFont.h2};
  font-family: DrukWide-Super, serif;
  text-transform: uppercase;
  text-align: center;
`

export const StyledImg = styled.img`
  max-width: 150px;
  margin: 15px auto;
  @media (max-width: 390px) {
    width: 90px;
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
  @media (max-width: 400px) {
    width: 120px;
    padding: 15px 22px;
  }
`
const GlobalStyle = createGlobalStyle`
  body {
    margin: auto;
    max-width: 1400px;
    width: 100%;
    padding: 0;
    color: ${colors.primary};
    font-size: 1rem;
    font-family: Lato, Roboto, Sans-Serif;
    background: ${colors.whitesmoke};
  }

  a {
    text-decoration: none;
  }
`

export default GlobalStyle
