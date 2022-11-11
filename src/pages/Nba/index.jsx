import React, { useContext } from "react"
import { baseNbaUrl, requestOptions } from "utils/config/QueryConfig"
import { useQuery } from "react-query"
import RequestsLimit from "components/Error/RequestsLimit"
import { teams } from "utils/datas/Nba/teams"
import {
  StyledLinkCard,
  CardImgContainer,
  StyledImg,
  CardNameTeamOrPlayer,
} from "utils/style/GlobalStyle"
import { ThemeContext } from "utils/Context/Context"
import ToggleButton from "components/NavLink/ToggleButton"
import {
  HeaderBody,
  LeaguePagesLink,
  InfoCardContainer,
  CardContainerTeam,
  TeamHistory,
} from "utils/style/teams"

const fetchNbaTeams = async () => {
  const response = await fetch(`${baseNbaUrl}/teams`, requestOptions)

  return await response.json()
}

export default function Nba() {
  const { activeMenu } = useContext(ThemeContext)
  const { setTeamName } = useContext(ThemeContext)

  // const { isLoading, isError, data, error } = useQuery(["nbaTeams"], () =>
  //   fetchNbaTeams()
  // )

  // if (isError) {
  //   return <div>Erreur: {error.message}</div>
  // }

  // if (isLoading) {
  //   return <div>Chargement...</div>
  // }

  // if (data.errors && data.errors.length !== 0) {
  //   return <RequestsLimit />
  // }

  // const teams = data !== undefined ? data.response : []

  return (
    <>
      <ToggleButton />
      <HeaderBody active={activeMenu}>
        <LeaguePagesLink>Classement</LeaguePagesLink>
        <LeaguePagesLink>Meilleurs marqueurs</LeaguePagesLink>
        <LeaguePagesLink>Meilleurs passeurs</LeaguePagesLink>
      </HeaderBody>
      <CardContainerTeam active={activeMenu}>
        {teams.map(
          (team) =>
            team.nbaFranchise !== false && (
              <InfoCardContainer key={team.id}>
                <StyledLinkCard
                  to={`/nba/team/${team.id}/players`}
                  onClick={setTeamName(team.name)}
                >
                  <CardNameTeamOrPlayer>{team.name}</CardNameTeamOrPlayer>
                  <CardImgContainer>
                    <StyledImg src={team.logo} alt={`${team.name}-logo`} />
                  </CardImgContainer>
                  {/* <AdditionnalDataContainer> */}
                  <TeamHistory>Nom: {team.nickname}</TeamHistory>
                  <TeamHistory>Ville: {team.city}</TeamHistory>
                  {/* </AdditionnalDataContainer> */}
                </StyledLinkCard>
              </InfoCardContainer>
            )
        )}
      </CardContainerTeam>
    </>
  )
}
