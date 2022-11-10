import { useQuery } from "react-query"
import { useContext, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import { teams } from "utils/datas/Teams"
import colors from "utils/style/colors"
import {
  CardContainer,
  StyledLink,
  StyledLinkCard,
  StyledImg,
  CardNameTeamOrPlayer,
} from "utils/style/GlobalStyle"
import { baseUrl, requestOptions } from "utils/config/QueryConfig"
import RequestsLimit from "components/Error/RequestsLimit"

const InfoCardContainer = styled.div`
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
const TeamHistory = styled.div`
  margin-bottom: 5px;
  font-size: 1rem;
  font-style: Italic;
  font-family: Georgia, serif;
`

const SpanVenueTeam = styled.span`
  font-weight: bold;
`
const HeaderBody = styled.nav`
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
const ToggleButton = styled.button`
  position: absolute;
  z-index: 10;
  //top: 0;
  right: 10px;
  height: 38px;
  width: 38px;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  @media (min-width: 768px) {
    display: none;
  }
`

const ToggleButtonLine = styled.span`
  position: absolute;
  display: block;
  width: 80%;
  height: 2px;
  background: ${colors.flowerblue};
  transition: transform 0.3s ease-out,
  opacity: 0.1s ease-out;
  `
const ToggleButtonLine1 = styled(ToggleButtonLine)`
  transform: translateY(-10px);
  ${({ active }) =>
    active &&
    `
      transform: translateY(0) rotate(135deg);  
      `}
`
const ToggleButtonLine2 = styled(ToggleButtonLine)`
  ${({ active }) =>
    active &&
    `
      opacity: 0;  
  `}
`
const ToggleButtonLine3 = styled(ToggleButtonLine)`
  transform: translateY(10px);
  ${({ active }) =>
    active &&
    `
    transform: translateY(0) rotate(-135deg);  
  `}
`
const LeaguePagesLink = styled(StyledLink)`
  margin: 10px 10px;
  color: ${colors.DarkBackgroundSiteColor};
  &:hover {
    color: #bbb;
  }
`
const CardContainerTeam = styled(CardContainer)`
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
const fetchCompetition = async (competitionId) => {
  const response = await fetch(
    `${baseUrl}/teams?league=${competitionId}&season=2022`,
    requestOptions
  )

  return await response.json()
}

export default function Leagues() {
  const { countryCode, competitionId } = useParams()
  const [active, setActive] = useState(false)

  // const { isLoading, isError, data, error } = useQuery([competitionId], () =>
  //   fetchCompetition(competitionId)
  // )
  // const teams = data !== undefined ? data.response : []

  // if((isError === false && data === undefined) || (data.errors.requests)) {
  //   return (
  //     <RequestsLimit />
  //   )
  // }

  // if (isError) {
  //   return <div>Erreur: {error.message}</div>
  // }

  // if (isLoading) {
  //   return <div>Chargement...</div>
  // }

  return (
    <>
      <ToggleButton
        onClick={() => setActive(!active)}
        aria-label='toogle curtain navigation'
      >
        <ToggleButtonLine1 active={active}></ToggleButtonLine1>
        <ToggleButtonLine2 active={active}></ToggleButtonLine2>
        <ToggleButtonLine3 active={active}></ToggleButtonLine3>
      </ToggleButton>
      <HeaderBody active={active}>
        <LeaguePagesLink to={`/classement/${countryCode}/${competitionId}`}>
          Classement
        </LeaguePagesLink>
        <LeaguePagesLink
          to={`/meilleurs-buteurs/${countryCode}/${competitionId}`}
        >
          Top buteurs
        </LeaguePagesLink>
        <LeaguePagesLink
          to={`/meilleurs-passeurs/${countryCode}/${competitionId}`}
        >
          Meilleurs passeurs
        </LeaguePagesLink>
      </HeaderBody>
      <CardContainerTeam active={active}>
        {teams.map((team) => (
          <InfoCardContainer key={team.team.id}>
            <StyledLinkCard to={`/team/${team.team.id}`}>
              <CardNameTeamOrPlayer>{team.team.name}</CardNameTeamOrPlayer>
              <StyledImg src={team.team.logo} alt={`${team.team.name}-logo`} />
              <TeamHistory>Fondé en {team.team.founded}</TeamHistory>
              <TeamHistory>
                <SpanVenueTeam>Stade:</SpanVenueTeam> {team.venue.name}
              </TeamHistory>
              <TeamHistory>
                <SpanVenueTeam>Ville:</SpanVenueTeam> {team.venue.city}
              </TeamHistory>
            </StyledLinkCard>
          </InfoCardContainer>
        ))}
      </CardContainerTeam>
    </>
  )
}
