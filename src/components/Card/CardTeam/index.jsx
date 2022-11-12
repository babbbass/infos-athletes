import React from "react"
import { CardContainerTeam, TeamHistory } from "./cardTeamStyle"
import { StyledImg } from "utils/style/GlobalStyle"
import {
  InfoCardContainer,
  StyledLinkCard,
  CardNameTeamOrPlayer,
  CardImgContainer,
  AdditionnalDataContainer,
} from "components/Card/globalStyleCard"

export default function CardTeam({ active, teams }) {
  return (
    <>
      <CardContainerTeam active={active}>
        {teams.map(
          (team) =>
            team.nbaFranchise !== false && (
              <InfoCardContainer key={team.id}>
                <StyledLinkCard
                  to={`/nba/team/${team.id}/players`}
                  //onClick={setTeamName(team.name)}
                >
                  <CardNameTeamOrPlayer>{team.name}</CardNameTeamOrPlayer>
                  <CardImgContainer>
                    <StyledImg src={team.logo} alt={`${team.name}-logo`} />
                  </CardImgContainer>
                  <AdditionnalDataContainer>
                    <TeamHistory>Nom: {team.nickname}</TeamHistory>
                    <TeamHistory>Ville: {team.city}</TeamHistory>
                  </AdditionnalDataContainer>
                </StyledLinkCard>
              </InfoCardContainer>
            )
        )}
      </CardContainerTeam>
    </>
  )
}
