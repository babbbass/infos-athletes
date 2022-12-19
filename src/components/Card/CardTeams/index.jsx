import React from "react"
import {
  CardContainerTeam,
  TeamHistory,
  NbaTeamLogo,
  NbaAdditionnalDataContainer,
} from "./cardTeamStyle"
import {
  Card,
  StyledLinkCard,
  CardNameTeamOrPlayer,
  CardImgContainer,
} from "components/Card/globalStyleCard"

export default function CardTeams({ active, teams }) {
  return (
    <>
      <CardContainerTeam active={active}>
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
