import React, { useContext } from "react"
import { CardContainerTeam, TeamHistory } from "./cardTeamStyle"
import { StyledImg } from "utils/style/GlobalStyle"
import {
  Card,
  StyledLinkCard,
  CardNameTeamOrPlayer,
  CardImgContainer,
  AdditionnalDataContainer,
} from "components/Card/globalStyleCard"
import { ThemeContext } from "utils/Context/Context"

export default function CardTeam({ active, teams }) {
  const { setTeamName } = useContext(ThemeContext)
  return (
    <>
      <CardContainerTeam active={active}>
        {teams.map(
          (team) =>
            team.nbaFranchise !== false && (
              <Card key={team.id}>
                <StyledLinkCard
                  to={`/nba/team/${team.id}/players`}
                  onClick={() => setTeamName(team.name)}
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
