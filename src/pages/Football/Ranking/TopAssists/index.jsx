import React, { useContext, useState } from "react"
import { ThemeContext } from "utils/Context/Context"
import { baseUrl, foot, requestOptions } from "utils/config/config"
import { useQuery } from "react-query"
import Header from "components/Header"
import { topAssists } from "utils/datas/TopAssists"
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
} from "utils/style/Rankings"
import { selectOptions } from "utils/Context/Context"
import PreviousLink from "components/NavLink/Previous"
import NextLink from "components/NavLink/Next"
import Loader from "components/Loader"
import Error from "components/Error"

const fetchTopAssists = async (yearSelected, idCompetition) => {
  //console.log(yearSelected, idCompetition)
  const response = await fetch(
    `${baseUrl}/players/topassists?season=${yearSelected}&league=${idCompetition}`,
    requestOptions
  )

  return await response.json()
}

const TopAssits = () => {
  const { yearSelected } = useContext(ThemeContext)
  const [yearTopAssitsSelected, setYearTopAssitsSelected] =
    useState(yearSelected)
  const { idCompetition, countryCode } = useParams()

  const { isLoading, isError, data, error } = useQuery(
    ["topAssists", [idCompetition, yearTopAssitsSelected]],
    () => fetchTopAssists(yearTopAssitsSelected, idCompetition)
  )

  if (isError) {
    return <Error error={error} />
  }

  if (isLoading) {
    return <Loader />
  }

  const topAssists = data !== undefined ? data.response : []
  const competitionName = topAssists[0].statistics[0].league.name

  const previousStep1 = "leagues"
  const previousStep2 = countryCode
  const previousStep3 = idCompetition
  const previousLinkName = competitionName

  const nextUrlStep1 = "meilleurs-buteurs"
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
      </HeaderBody>
      <RankingWrapper>
        <StyledSelect
          placeholder={yearTopAssitsSelected}
          options={selectOptions}
          onChange={(option) => {
            setYearTopAssitsSelected(option.value)
          }}
        />
        <RankingContainer>
          <RankingTab>
            <RankingTabHead>
              <RankingTabHeadRow>
                <RankingTabHeadTitle></RankingTabHeadTitle>
                <RankingTabHeadTitle></RankingTabHeadTitle>
                <RankingTabHeadTitle>Passes</RankingTabHeadTitle>
                <RankingTabHeadTitle>
                  <SpanColor>matchs</SpanColor>
                </RankingTabHeadTitle>
                <RankingTabHeadTitle>
                  <SpanColor>ratio</SpanColor>
                </RankingTabHeadTitle>
              </RankingTabHeadRow>
            </RankingTabHead>
            <RankingTabBody>
              {topAssists.map((scorer, index) => (
                <RankingTabBodyRow
                  key={`{${scorer.player.name}-ranking-scorers}`}
                >
                  <RankingTabBodyData>
                    <RankingPosition>{index + 1}</RankingPosition>
                  </RankingTabBodyData>
                  <RankingTabBodyData>
                    <Link to={`/${foot}/player/${scorer.player.id}`}>
                      <RankingNamePlayer>
                        {scorer.player.name}
                      </RankingNamePlayer>
                    </Link>
                    <br />
                    <RankingNameTeam>
                      {scorer.statistics[0].team.name}
                    </RankingNameTeam>
                  </RankingTabBodyData>
                  <RankingTabBodyData>
                    {scorer.statistics[0].goals.assists}
                  </RankingTabBodyData>
                  <RankingTabBodyData>
                    {scorer.statistics[0].games.appearences}
                  </RankingTabBodyData>
                  <RankingTabBodyData>
                    {Math.round(
                      (scorer.statistics[0].goals.assists /
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

export default TopAssits
