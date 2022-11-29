import React from "react"
import { CardContainerTeam, TeamHistory } from "./cardTeamStyle"
import { StyledImg } from "utils/style/GlobalStyle"
import {
  Card,
  StyledLinkCard,
  CardNameTeamOrPlayer,
  CardImgContainer,
  AdditionnalDataContainer,
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
                    <StyledImg
                      src={team.logo ? team.logo : `/defaultBasketPicture.jpeg`}
                      alt={`${team.name}-logo`}
                    />
                  </CardImgContainer>
                  <AdditionnalDataContainer>
                    <TeamHistory>Nom: {team.nickname}</TeamHistory>
                    <TeamHistory>Ville: {team.city}</TeamHistory>
                  </AdditionnalDataContainer>
                </StyledLinkCard>
              </Card>
            )
        )}
      </CardContainerTeam>
    </>
  )
}
