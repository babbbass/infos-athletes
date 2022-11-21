import styled, { keyframes } from "styled-components"
import colors from "utils/style/colors"
import { StyledImg } from "utils/style/GlobalStyle"
import { Link } from "react-router-dom"

export const TitleBloc = styled.div`
  position: relative;
  z-index: 2;
  top: 20%;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-left: 20px;
`
export const FlagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 0px 20px;
`
export const CountryFlag = styled(StyledImg)`
  margin: 10px 8px;
  border-radius: 6px;
  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
`
export const ImgContainer = styled.div`
  width: auto;
`
export const StyledLink = styled(Link)`
  color: ${colors.primary};
  font-weight: bold;
  text-decoration: none;
`

export const LinkContainer = styled.div`
  flex-basis: 45%;
  text-align: center;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }

  @media (max-width: 425px) {
    flex-basis: 100%;
  }
`
