import React from "react"
import {
  CardContainerTeam,
  TeamHistory,
  NbaTeamLogo,
  NbaAdditionnalDataContainer,
  StyledImgNbaLogo,
  H1NbaContainer,
  H1NbaGames,
} from "./cardTeamStyle"
import {
  Card,
  StyledLinkCard,
  CardNameTeamOrPlayer,
  CardImgContainer,
} from "components/Card/globalStyleCard"
import nbaLogo from "utils/assets/nba-logo.svg"

export default function CardTeams({ active, teams }) {
  return (
    <>
      <CardContainerTeam active={active}>
        <H1NbaContainer>
          <StyledImgNbaLogo src={nbaLogo} />
          <H1NbaGames>Équipes</H1NbaGames>
        </H1NbaContainer>
        {teams.map(
          (team) =>
            team.nbaFranchise !== false && (
              <Card key={team.id}>
                <StyledLinkCard
                  to={`/nba/team/${team.id}/${team.name}/players`}
                >
                  <CardNameTeamOrPlayer>{team.name}</CardNameTeamOrPlayer>
                  <CardImgContainer>
                    <NbaTeamLogo
                      src={team.logo ? team.logo : `/defaultBasketPicture.jpeg`}
                      alt={`${team.name}-logo`}
                    />
                  </CardImgContainer>
                  <NbaAdditionnalDataContainer>
                    <TeamHistory>Nom: {team.nickname}</TeamHistory>
                    <TeamHistory>Ville: {team.city}</TeamHistory>
                  </NbaAdditionnalDataContainer>
                </StyledLinkCard>
              </Card>
            )
        )}
      </CardContainerTeam>
    </>
  )
}
