import { useQuery } from "react-query"
import { useContext } from "react"
import { useParams } from "react-router-dom"
import { teams } from "utils/datas/Teams"
import { baseUrl, requestOptions } from "utils/config/config"
import ToggleButton from "components/NavLink/ToogleButton/ToggleButton"
import { ThemeContext } from "utils/Context/Context"
import {
  LeaguePagesLink,
  TeamHistory,
  SpanVenueTeam,
  TeamHistoryStadium,
} from "components/Card/CardTeams/cardTeamStyle"
import {
  StyledLinkCard,
  Card,
  CardNameTeamOrPlayer,
  AdditionnalDataContainer,
} from "components/Card/globalStyleCard"
import { Menu } from "utils/style/GlobalStyle"
import { CardContainerFootballTeam, ImgContainer, Img } from "./style"
import Loader from "components/Loader"
import Error from "components/Error"

const fetchCompetition = async (competitionId) => {
  const response = await fetch(
    `${baseUrl}/teams?league=${competitionId}&season=2022`,
    requestOptions
  )

  return await response.json()
}

export default function Teams() {
  const { countryCode, competitionId } = useParams()
  const { activeMenu } = useContext(ThemeContext)
  const { isLoading, isError, data, error } = useQuery([competitionId], () =>
    fetchCompetition(competitionId)
  )
  const teams = data !== undefined ? data.response : []

  if (isError) {
    return <Error error={error} />
  }

  if (isLoading) {
    return <Loader />
  }

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
      <CardContainerFootballTeam active={activeMenu}>
        {teams.map((team) => (
          <Card key={team.team.id}>
            <StyledLinkCard to={`/football/team/${team.team.id}`}>
              <CardNameTeamOrPlayer>{team.team.name}</CardNameTeamOrPlayer>
              <ImgContainer>
                <Img src={team.team.logo} alt={`${team.team.name}-logo`} />
              </ImgContainer>
              <AdditionnalDataContainer>
                <TeamHistory>Fondé en {team.team.founded}</TeamHistory>
                <TeamHistoryStadium>
                  <SpanVenueTeam>{team.venue.name}</SpanVenueTeam>
                </TeamHistoryStadium>
                <TeamHistoryStadium>
                  <SpanVenueTeam>Ville:</SpanVenueTeam> {team.venue.city}
                </TeamHistoryStadium>
              </AdditionnalDataContainer>
            </StyledLinkCard>
          </Card>
        ))}
      </CardContainerFootballTeam>
    </>
  )
}
