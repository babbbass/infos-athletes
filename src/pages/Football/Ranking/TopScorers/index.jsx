import React, { useContext, useState } from "react"
import { ThemeContext } from "utils/Context/Context"
import { baseUrl, requestOptions, foot } from "utils/config/config"
import { useQuery } from "react-query"
import { topScorers } from "utils/datas/TopScorers"
import { useParams, Link } from "react-router-dom"
import {
  StyledSelect,
  RankingWrapper,
  RankingContainer,
  RankingNameTeam,
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
} from "../style"
import { selectOptions } from "utils/Context/Context"
import PreviousLink from "components/NavLink/Previous"
import NextLink from "components/NavLink/Next"
import Loader from "components/Loader"
import Error from "components/Error"
import { Header } from "components/Ranking/Header/Header"

const fetchTopScorers = async (yearSelected, idCompetition) => {
  const response = await fetch(
    `${baseUrl}/players/topscorers?season=${yearSelected}&league=${idCompetition}`,
    requestOptions
  )

  return await response.json()
}

const TopScorers = () => {
  const { yearSelected } = useContext(ThemeContext)
  const [yearTopScorersSelected, setYearTopScorersSelected] =
    useState(yearSelected)
  const { idCompetition, countryCode } = useParams()

  const previousStep1 = "leagues"
  const previousStep2 = countryCode
  const previousStep3 = idCompetition

  const nextUrlStep1 = "meilleurs-passeurs"
  const nextUrlStep2 = countryCode
  const nextUrlStep3 = idCompetition
  const nextLinkName = "meilleurs passeurs"

  const { isLoading, isError, data, error } = useQuery(
    ["topScorers", [idCompetition, yearTopScorersSelected]],
    () => fetchTopScorers(yearTopScorersSelected, idCompetition)
  )

  if (isError) {
    return <Error error={error} />
  }

  if (isLoading) {
    return <Loader />
  }

  const topScorers = data !== undefined ? data.response : []
  const competitionName = topScorers[0].statistics[0].league.name
  const previousLinkName = "Equipes"

  return (
    <>
      <Header
        flagCompetition={topScorers[0].statistics[0].league.logo}
        competitionName={competitionName}
        rankingType='Top buteurs'
      />
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
      </HeaderBody>
      <RankingWrapper>
        <StyledSelect
          placeholder={yearTopScorersSelected}
          options={selectOptions}
          onChange={(option) => {
            setYearTopScorersSelected(option.value)
          }}
        />
        <RankingContainer>
          <RankingTab>
            <RankingTabHead>
              <RankingTabHeadRow>
                <RankingTabHeadTitle></RankingTabHeadTitle>
                <RankingTabHeadTitle></RankingTabHeadTitle>
                <RankingTabHeadTitle>buts</RankingTabHeadTitle>
                <RankingTabHeadTitle>
                  <SpanColor>matchs</SpanColor>
                </RankingTabHeadTitle>
                <RankingTabHeadTitle>
                  <SpanColor>ratio</SpanColor>
                </RankingTabHeadTitle>
              </RankingTabHeadRow>
            </RankingTabHead>
            <RankingTabBody>
              {topScorers.map((scorer, index) => (
                <RankingTabBodyRow
                  key={`{${scorer.player.name}-ranking-scorers}`}
                >
                  <RankingTabBodyData>
                    <RankingPosition>{index + 1}</RankingPosition>
                  </RankingTabBodyData>
                  <RankingTabBodyData>
                    <RankingNamePlayer>
                      <Link to={`/${foot}/player/${scorer.player.id}`}>
                        {scorer.player.name}
                      </Link>
                    </RankingNamePlayer>
                    <br />
                    <RankingNameTeam>
                      {scorer.statistics[0].team.name}
                    </RankingNameTeam>
                  </RankingTabBodyData>
                  <RankingTabBodyData>
                    {scorer.statistics[0].goals.total}
                  </RankingTabBodyData>
                  <RankingTabBodyData>
                    {scorer.statistics[0].games.appearences}
                  </RankingTabBodyData>
                  <RankingTabBodyData>
                    {Math.round(
                      (scorer.statistics[0].goals.total /
                        scorer.statistics[0].games.appearences) *
                        100
                    ) / 100}
                  </RankingTabBodyData>
                </RankingTabBodyRow>
              ))}
            </RankingTabBody>
          </RankingTab>
        </RankingContainer>
      </RankingWrapper>
    </>
  )
}

export default TopScorers
