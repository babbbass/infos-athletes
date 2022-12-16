import React from "react"
import {
  H1RankingContainer,
  H1Ranking,
  StyledImgLogoRanking,
  RankingType,
} from "./style"

export function Header({ flagCompetition, competitionName, rankingType }) {
  return (
    <>
      <H1RankingContainer>
        <StyledImgLogoRanking
          //src={rankingTypeData[0].statistics[0].league.logo}
          src={flagCompetition}
        />
        <H1Ranking>
          {competitionName} <br />
          <RankingType>{rankingType}</RankingType>
        </H1Ranking>
      </H1RankingContainer>
    </>
  )
}
