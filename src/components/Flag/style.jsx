import styled from "styled-components"
import { colors, H3Style, H2Style } from "utils/style/GlobalStyle"
import { StyledImg } from "utils/style/GlobalStyle"
import { Link } from "react-router-dom"

export const TitleBloc = styled.div`
  position: relative;
  z-index: 2;
  top: 20%;
  display: flex;
  flex-direction: column;
  text-align: left;
`
export const CountryName = styled(H3Style)`
  margin-bottom: 5px;
  text-transform: uppercase;
`
export const FlagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 0px 20px;
`
export const CountryFlag = styled(StyledImg)`
  max-width: 180px;
  margin: 10px 8px;
  border-radius: 6px;
  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  @media (max-width: 425px) {
    width: 230px;
  }
`
export const ImgContainer = styled.div`
  width: auto;
`
export const StyledLink = styled(Link)`
  color: ${colors.primary};
  font-weight: bold;
  text-decoration: none;
  position: relative;
`

export const LinkContainer = styled.div`
  flex-basis: 45%;
  text-align: center;
  margin: 10px auto;
  background: ${colors.lightGrey};
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }

  @media (max-width: 425px) {
    flex-basis: 100%;
  }
`
