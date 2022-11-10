import { useQuery } from "react-query"
import { useContext } from "react"
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
import ToggleButton from "components/NavLink/ToggleButton"
import { ThemeContext } from "utils/Context/Context"

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
  const { activeMenu } = useContext(ThemeContext)

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
      <ToggleButton />
      <HeaderBody active={activeMenu}>
        {/* <ToggleButton active={active} onClick={() => setActive(!active)} /> */}
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
      <CardContainerTeam active={activeMenu}>
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
