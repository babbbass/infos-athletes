import React, { useContext, useState } from "react"
import { ThemeContext } from "utils/Context/Context"
import { baseUrl, requestOptions, foot } from "utils/config/config"
import { useQuery } from "react-query"
import styled from "styled-components"
import { ranking } from "utils/datas/Ranking"
import { useParams, Link } from "react-router-dom"
import {
  StyledSelect,
  RankingWrapper,
  RankingContainer,
  RankingNamePlayer,
  SpanColor,
  RankingTab,
  RankingTabHead,
  RankingTabHeadRow,
  RankingTabHeadTitle,
  RankingTabBody,
  RankingTabBodyRow,
  RankingTabBodyData,
  HeaderBody,
  RankingPosition,
} from "utils/style/Rankings"
import { selectOptions } from "utils/Context/Context"
import PreviousLink from "components/NavLink/Previous"
import NextLink from "components/NavLink/Next"
import { stepsUrl } from "utils/config/variablesConfig"
import Loader from "components/Loader"
import Error from "components/Error"

const LeagueRankingNamePlayer = styled(RankingNamePlayer)`
  font-size: 0.9rem;
`
const LeagueRankingTabBodyData = styled(RankingTabBodyData)`
  font-size: 0.9rem;
`
const LeagueRankingTab = styled(RankingTab)`
  @media (min-width: 500px) {
    width: 80%;
    margin: auto;
  }

  @media (min-width: 900px) {
    width: 60%;
    margin: auto;
  }
`
const fetchRankingLeague = async (competitionId, yearCompetitionId) => {
  console.log(competitionId, yearCompetitionId)
  //const id = parseInt(competitionId)
  const response = await fetch(
    `${baseUrl}/standings?league=${competitionId}&season=${yearCompetitionId}`,
    requestOptions
  )

  return await response.json()
}

const Ranking = () => {
  const { yearSelected } = useContext(ThemeContext)
  const [yearLeagueSelected, setYearLeagueSelected] = useState(yearSelected)
  const { idCompetition, countryCode } = useParams()

  const { isLoading, isError, data, error } = useQuery(
    ["leagueRanking", [idCompetition, yearLeagueSelected]],
    () => fetchRankingLeague(idCompetition, yearLeagueSelected)
  )

  if (isError) {
    return <Error error={error} />
  }

  if (isLoading) {
    return <Loader />
  }

  const league = data !== undefined ? data.response : []
  const leagueRanking = league[0].league.standings[0]
  //utils/datas
  //const leagueRanking = ranking[0].standings[0]
  const competitionName = leagueRanking[0].group

  const previousStep1 = stepsUrl.leagues
  const previousStep2 = countryCode
  const previousStep3 = idCompetition
  const previousLinkName = competitionName

  const nextUrlStep1 = stepsUrl.topScorers
  const nextUrlStep2 = countryCode
  const nextUrlStep3 = idCompetition
  const nextLinkName = "meilleurs buteurs"
  return (
    <>
      <HeaderBody>
        <PreviousLink
          previousPageDatas={{
            previousStep1,
            previousStep2,
            previousStep3,
            previousLinkName,
          }}
        />
        <NextLink
          nextPageDatas={{
            nextUrlStep1,
            nextUrlStep2,
            nextUrlStep3,
            nextLinkName,
          }}
        />
        {/* <NavLink competitionDatas={{countryCode, idCompetition, competitionName, theBestOfLeague}} /> */}
      </HeaderBody>
      <RankingWrapper>
        <StyledSelect
          placeholder={yearLeagueSelected}
          options={selectOptions}
          onChange={(option) => {
            setYearLeagueSelected(option.value)
          }}
        />
        <RankingContainer>
          <LeagueRankingTab>
            <RankingTabHead>
              <RankingTabHeadRow>
                <RankingTabHeadTitle>Pos</RankingTabHeadTitle>
                <RankingTabHeadTitle>Club</RankingTabHeadTitle>
                <RankingTabHeadTitle>MJ</RankingTabHeadTitle>
                <RankingTabHeadTitle>G</RankingTabHeadTitle>
                <RankingTabHeadTitle>
                  <SpanColor>N</SpanColor>
                </RankingTabHeadTitle>
                <RankingTabHeadTitle>
                  <SpanColor>P</SpanColor>
                </RankingTabHeadTitle>
                <RankingTabHeadTitle>
                  <SpanColor>Pts</SpanColor>
                </RankingTabHeadTitle>
                <RankingTabHeadTitle>
                  <SpanColor>5 derniers</SpanColor>
                </RankingTabHeadTitle>
              </RankingTabHeadRow>
            </RankingTabHead>
            <RankingTabBody>
              {leagueRanking.map((team, index) => (
                <RankingTabBodyRow key={`{${team.team.id}-ranking-league}`}>
                  <RankingTabBodyData>
                    <RankingPosition>{index + 1}</RankingPosition>
                  </RankingTabBodyData>
                  <RankingTabBodyData>
                    <Link to={`/${foot}/team/${team.team.id}`}>
                      <LeagueRankingNamePlayer>
                        {team.team.name}
                      </LeagueRankingNamePlayer>
                    </Link>
                  </RankingTabBodyData>
                  <LeagueRankingTabBodyData>
                    {team.all.played}
                  </LeagueRankingTabBodyData>
                  <LeagueRankingTabBodyData>
                    {team.all.win}
                  </LeagueRankingTabBodyData>
                  <LeagueRankingTabBodyData>
                    {team.all.draw}
                  </LeagueRankingTabBodyData>
                  <LeagueRankingTabBodyData>
                    {team.all.lose}
                  </LeagueRankingTabBodyData>
                  <LeagueRankingTabBodyData>
                    {team.points}
                  </LeagueRankingTabBodyData>
                  <LeagueRankingTabBodyData>
                    {team.form}
                  </LeagueRankingTabBodyData>
                </RankingTabBodyRow>
              ))}
            </RankingTabBody>
          </LeagueRankingTab>
        </RankingContainer>
      </RankingWrapper>
    </>
  )
}

export default Ranking
