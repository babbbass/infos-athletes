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
