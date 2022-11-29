import styled from "styled-components"
import { CardContainer } from "components/Card/globalStyleCard"
import { StyledLink, colors } from "utils/style/GlobalStyle"

export const LeaguePagesLink = styled(StyledLink)`
  margin: 10px 10px;
  color: ${colors.DarkBackgroundSiteColor};
  &:hover {
    color: #bbb;
  }
`
export const CardContainerTeam = styled(CardContainer)`
  @media (max-width: 767px) {
    transform: translateY(-80px);
    transition: transform 1s cubic-bezier(0.73, 0.11, 0.67, 0.99);
    ${({ active }) =>
      active &&
      `
        transform: translateY(0px);
      `}
  }
`
export const TeamHistory = styled.div`
  text-align: center;
  margin-bottom: 10px;
  font-size: 1rem;
  font-style: Italic;
  font-family: Georgia, serif;
`
export const TeamHistoryStadium = styled(TeamHistory)``
export const SpanVenueTeam = styled.span`
  font-weight: bold;
`
