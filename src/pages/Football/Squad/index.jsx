import { squad } from "utils/datas/Squads"
import { StyledImg } from "utils/style/GlobalStyle"
import { useContext } from "react"
import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import { baseUrl, requestOptions, foot } from "utils/config/config"
import { ThemeContext } from "utils/Context/Context"
import { squad as squadConfig } from "utils/config/squad"
import {
  CardNameTeamOrPlayer,
  CardContainer,
  StyledLinkCard,
  AdditionnalDataContainer,
  H1CardContainer,
  H2CardContainer,
  Hr,
} from "components/Card/globalStyleCard"
import { LeaguePagesLink } from "components/Card/CardTeams/cardTeamStyle"
import { CardSquad } from "./style"
import { Menu } from "utils/style/GlobalStyle"
import ToggleButton from "components/NavLink/ToogleButton/ToggleButton"
import Loader from "components/Loader"
import Error from "components/Error"
import { useSelector } from "react-redux"

const fetchTeamPlayers = async (teamId) => {
  const response = await fetch(
    `${baseUrl}/players/squads?team=${teamId}`,
    requestOptions
  )

  return await response.json()
}

export default function Squad() {
  const { teamId } = useParams()
  const countryCode = useSelector((state) => state.countryCode)
  const competitionId = useSelector((state) => state.competitionId)
  const competitionName = useSelector((state) => state.competitionName)

  const activeMenu = useSelector((state) => state.activeMenu)

  const { isLoading, isError, data, error } = useQuery([teamId], () =>
    fetchTeamPlayers(teamId)
  )
  const squad = data !== undefined ? data.response : []

  if (isError) {
    return <Error error={error} />
  }

  if (isLoading) {
    return <Loader />
  }

  const defenders = []
  const goalkeepers = []
  const midfielders = []
  const attackers = []

  squad[0].players.forEach((player) => {
    const position = player.position.toLowerCase()

    if (position === squadConfig.goalkeeper) {
      goalkeepers.push(player)
    }
    if (position === squadConfig.defender) {
      defenders.push(player)
    }
    if (position === squadConfig.midfielder) {
      midfielders.push(player)
    }
    if (position === squadConfig.attacker) {
      attackers.push(player)
    }
  })

  return (
    <div>
      <ToggleButton />
      <Menu active={activeMenu}>
        <LeaguePagesLink to={`/`}>Accueil</LeaguePagesLink>
        <LeaguePagesLink to={`/leagues/${countryCode}/${competitionId}`}>
          {competitionName}
        </LeaguePagesLink>
        <LeaguePagesLink to={`/classement/${countryCode}/${competitionId}`}>
          Classement
        </LeaguePagesLink>
      </Menu>

      <CardContainer active={activeMenu}>
        <H1CardContainer>{squad[0].team.name}</H1CardContainer>
        <Hr />
        <H2CardContainer>Gardiens</H2CardContainer>
        {goalkeepers.map((player, index) => (
          <CardSquad key={`${player.id}-${index}`}>
            <StyledLinkCard to={`/${foot}/player/${player.id}`}>
              <CardNameTeamOrPlayer>{player.name}</CardNameTeamOrPlayer>
              <StyledImg src={player.photo} alt={`${player.name}-pict`} />
              <AdditionnalDataContainer>
                <div>Age: {player.age}</div>
                <div>Num??ro: {player.number}</div>
              </AdditionnalDataContainer>
            </StyledLinkCard>
          </CardSquad>
        ))}
        <H2CardContainer>D??fenseurs</H2CardContainer>
        {defenders.map((player, index) => (
          <CardSquad key={`${player.id}-${index}`}>
            <StyledLinkCard to={`/${foot}/player/${player.id}`}>
              <CardNameTeamOrPlayer>{player.name}</CardNameTeamOrPlayer>
              <StyledImg src={player.photo} alt={`${player.name}-pict`} />
              <AdditionnalDataContainer>
                <div>Age: {player.age}</div>
                <div>Num??ro: {player.number}</div>
              </AdditionnalDataContainer>
            </StyledLinkCard>
          </CardSquad>
        ))}
        <H2CardContainer>Milieux</H2CardContainer>
        {midfielders.map((player, index) => (
          <CardSquad key={`${player.id}-${index}`}>
            <StyledLinkCard to={`/${foot}/player/${player.id}`}>
              <CardNameTeamOrPlayer>{player.name}</CardNameTeamOrPlayer>
              <StyledImg src={player.photo} alt={`${player.name}-pict`} />
              <div>Age: {player.age}</div>
              <div>Num??ro: {player.number}</div>
            </StyledLinkCard>
          </CardSquad>
        ))}
        <H2CardContainer>Attaquants</H2CardContainer>
        {attackers.map((player, index) => (
          <CardSquad key={`${player.id}-${index}`}>
            <StyledLinkCard to={`/${foot}/player/${player.id}`}>
              <CardNameTeamOrPlayer>{player.name}</CardNameTeamOrPlayer>
              <StyledImg src={player.photo} alt={`${player.name}-pict`} />
              <div>Age: {player.age}</div>
              <div>Num??ro: {player.number}</div>
            </StyledLinkCard>
          </CardSquad>
        ))}
      </CardContainer>
    </div>
  )
}
