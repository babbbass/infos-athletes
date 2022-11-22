import { useQuery } from "react-query"
import { useContext } from "react"
import { useParams } from "react-router-dom"
import { teams } from "utils/datas/Teams"
import { StyledImg } from "utils/style/GlobalStyle"
import { baseUrl, requestOptions } from "utils/config/QueryConfig"
import RequestsLimit from "components/Error/RequestsLimit"
import ToggleButton from "components/NavLink/ToggleButton"
import { ThemeContext } from "utils/Context/Context"
import {
  LeaguePagesLink,
  CardContainerTeam,
  TeamHistory,
  SpanVenueTeam,
} from "components/Card/CardTeam/cardTeamStyle"
import {
  StyledLinkCard,
  Card,
  HeaderBody,
  CardNameTeamOrPlayer,
  AdditionnalDataContainer,
} from "components/Card/globalStyleCard"
import { Menu } from "utils/style/GlobalStyle"

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
      <Menu active={activeMenu}>
        <LeaguePagesLink to={`/`}>Accueil</LeaguePagesLink>
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
      </Menu>
      <CardContainerTeam active={activeMenu}>
        {teams.map((team) => (
          <Card key={team.team.id}>
            <StyledLinkCard to={`/team/${team.team.id}`}>
              <CardNameTeamOrPlayer>{team.team.name}</CardNameTeamOrPlayer>
              <StyledImg src={team.team.logo} alt={`${team.team.name}-logo`} />
              <AdditionnalDataContainer>
                <TeamHistory>Fondé en {team.team.founded}</TeamHistory>
                <TeamHistory>
                  <SpanVenueTeam>Stade:</SpanVenueTeam> {team.venue.name}
                </TeamHistory>
                <TeamHistory>
                  <SpanVenueTeam>Ville:</SpanVenueTeam> {team.venue.city}
                </TeamHistory>
              </AdditionnalDataContainer>
            </StyledLinkCard>
          </Card>
        ))}
      </CardContainerTeam>
    </>
  )
}
