import styled from "styled-components"
import colors from "utils/style/colors"
import { StyledLink, CardContainer } from "utils/style/GlobalStyle"

export const InfoCardContainer = styled.div`
  width: 25%;
  text-align: center;
  padding: 10px 20px 10px 20px;
  margin: 10px 0 10px 0;
  background: ${colors.backgroundLight};
  border-radius: 30px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
  @media (max-width: 570px) {
    width: 40%;
  }
  @media (max-width: 390px) {
    width: 30%;
  }
`

export const HeaderBody = styled.nav`
  width: 100vw;
  min-height: 10vw;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #cfcfcf;
  @media (max-width: 767px) {
    z-index: -1;
    flex-direction: column;
    opacity: 0;
    transform: translateY(-100%);
    transition: 1s cubic-bezier(0.73, 0.11, 0.67, 0.99);
    ${({ active }) =>
      active &&
      `
      transform: translate(0);
      opacity: 1;
      z-index: 2;
    `};
  } ;
`
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
  margin-bottom: 5px;
  font-size: 1rem;
  font-style: Italic;
  font-family: Georgia, serif;
`
export const SpanVenueTeam = styled.span`
  font-weight: bold;
`
