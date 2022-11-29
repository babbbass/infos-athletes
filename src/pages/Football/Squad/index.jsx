import { squad } from "utils/datas/Squads"
import { StyledImg } from "utils/style/GlobalStyle"
import { useContext, useState } from "react"
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
import { CardSquad, HeaderBody, LeaguePagesLink } from "./style"

const fetchTeamPlayers = async (teamId) => {
  const response = await fetch(
    `${baseUrl}/players/squads?team=${teamId}`,
    requestOptions
  )

  return await response.json()
}

export default function Squad() {
  const [setPlayerId] = useState(0)
  const { teamId } = useParams()
  const { competitionId, competitionName, countryCode } =
    useContext(ThemeContext)

  const { isLoading, isError, data, error } = useQuery([teamId], () =>
    fetchTeamPlayers(teamId)
  )
  const squad = data !== undefined ? data.response : []

  // if ((isError === false && data === undefined) || data.errors.requests) {
  //   return <RequestsLimit />
  // }
  if (isError) {
    return <div>Erreur: {error.message}</div>
  }

  if (isLoading) {
    return <div>Chargement...</div>
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
      <HeaderBody>
        <LeaguePagesLink to={`/`}>Accueil</LeaguePagesLink>
        <LeaguePagesLink to={`/leagues/${countryCode}/${competitionId}`}>
          {competitionName}
        </LeaguePagesLink>
        <LeaguePagesLink>Palmarès</LeaguePagesLink>
      </HeaderBody>
      <H1CardContainer>{squad[0].team.name}</H1CardContainer>
      <Hr />
      <CardContainer>
        <H2CardContainer>Gardiens</H2CardContainer>
        {goalkeepers.map((player, index) => (
          <CardSquad key={`${player.id}-${index}`}>
            <StyledLinkCard
              to={`/${foot}/player/${player.id}`}
              onClick={() => {
                setPlayerId(player.id)
              }}
            >
              <CardNameTeamOrPlayer>{player.name}</CardNameTeamOrPlayer>
              <StyledImg src={player.photo} alt={`${player.name}-pict`} />
              <AdditionnalDataContainer>
                <div>Age: {player.age}</div>
                <div>Numéro: {player.number}</div>
              </AdditionnalDataContainer>
              {/* <PlayerCivility playerId={player.id} /> */}
            </StyledLinkCard>
          </CardSquad>
        ))}
        <H2CardContainer>Défenseurs</H2CardContainer>
        {defenders.map((player, index) => (
          <CardSquad key={`${player.id}-${index}`}>
            <StyledLinkCard
              to={`/${foot}/player/${player.id}`}
              onClick={() => {
                setPlayerId(player.id)
              }}
            >
              <CardNameTeamOrPlayer>{player.name}</CardNameTeamOrPlayer>
              <StyledImg src={player.photo} alt={`${player.name}-pict`} />
              <AdditionnalDataContainer>
                <div>Age: {player.age}</div>
                <div>Numéro: {player.number}</div>
              </AdditionnalDataContainer>
            </StyledLinkCard>
          </CardSquad>
        ))}
        <H2CardContainer>Milieux</H2CardContainer>
        {midfielders.map((player, index) => (
          <CardSquad key={`${player.id}-${index}`}>
            <StyledLinkCard
              to={`/${foot}/player/${player.id}`}
              onClick={() => {
                setPlayerId(player.id)
              }}
            >
              <CardNameTeamOrPlayer>{player.name}</CardNameTeamOrPlayer>
              <StyledImg src={player.photo} alt={`${player.name}-pict`} />
              <div>Age: {player.age}</div>
              <div>Numéro: {player.number}</div>
            </StyledLinkCard>
          </CardSquad>
        ))}
        <H2CardContainer>Attaquants</H2CardContainer>
        {attackers.map((player, index) => (
          <CardSquad key={`${player.id}-${index}`}>
            <StyledLinkCard
              to={`/${foot}/player/${player.id}`}
              onClick={() => {
                setPlayerId(player.id)
              }}
            >
              <CardNameTeamOrPlayer>{player.name}</CardNameTeamOrPlayer>
              <StyledImg src={player.photo} alt={`${player.name}-pict`} />
              <div>Age: {player.age}</div>
              <div>Numéro: {player.number}</div>
            </StyledLinkCard>
          </CardSquad>
        ))}
      </CardContainer>
    </div>
  )
}
