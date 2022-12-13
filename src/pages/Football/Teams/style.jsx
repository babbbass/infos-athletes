import { CardContainerTeam } from "components/Card/CardTeams/cardTeamStyle"
import styled from "styled-components"

export const CardContainerFootballTeam = styled(CardContainerTeam)`
  @media (max-width: 767px) {
    transform: translateY(-120px);
    transition: transform 1s cubic-bezier(0.73, 0.11, 0.67, 0.99);
    ${({ active }) =>
      active &&
      `
        transform: translateY(0px);
      `}
  }
`
export const Img = styled.img`
  width: 120px;
  @media (max-width: 330px) {
    width: 105px;
  }
`
export const ImgContainer = styled.div`
  width: 120px;
  height: 120px;
  margin: 15px auto;
  display: flex;
  align-items: center;
  @media (max-width: 330px) {
    width: 105px;
    height: 105px;
  }
`
