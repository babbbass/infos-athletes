import styled from "styled-components"
import colors from "utils/style/colors"
import { StyledLink } from "utils/style/GlobalStyle"
import { Card } from "../globalStyleCard"
import Select from "react-select"

export const CardPagePlayer = styled(Card)`
  width: 90%;
  min-height: 500px;
  transform-style: preserve-3d;
  color: ${colors.primary};
  transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);
  ${({ openModalStatistic }) =>
    openModalStatistic && `transform: rotateY(180deg)`}
  ${({ openModalPalmaresPlayer }) =>
    openModalPalmaresPlayer && `transform: rotateY(180deg)`}
`
export const H1Container = styled.div`
  width: 90%;
  font-size: 2rem;
  font-style: italic;
  font-weight: bold;
  text-align: center;
  margin: 10px auto;
  text-transform: uppercase;
  color: ${colors.primary};
`

export const LinkPlayer = styled(StyledLink)`
  color: ${colors.whitesmoke};
  &:hover {
    color: ${colors.primary};
  }
`
export const PlayerStatisticContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

export const StyledSelect = styled(Select)`
  width: 50%;
  margin: 20px auto;
  color: ${colors.primary};
  text-align: center;
`

export const ImgContainer = styled.img`
  width: 120px;
  @media (max-width: 330px) {
    width: 105px;
  }
`
