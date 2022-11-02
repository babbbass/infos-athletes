import React, { useContext, useState } from "react";
import { ThemeContext } from "utils/Context/Context";
import { baseUrl, requestOptions } from "utils/config/QueryConfig";
import { useQuery } from "react-query";
import Header from "components/Header";
import { topScorers } from "utils/datas/TopScorers";
import { useParams } from "react-router-dom";
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
  } from "utils/style/Rankings";
import { selectOptions } from "utils/Context/Context";
import NavLink from "components/NavLink";

const fetchTopScorers = async (yearSelected, idCompetition) => {
  const response = await fetch(
    `${baseUrl}/players/topscorers?season=${yearSelected}&league=${idCompetition}`,
    requestOptions
  );

  return await response.json();
};

const TopScorers = () => {
  const { yearSelected } = useContext(ThemeContext);
  const [yearTopScorersSelected, setYearTopScorersSelected] =
    useState(yearSelected);
  const { idCompetition, countryCode } = useParams();

  // const {isLoading, isError, data, error} = useQuery(
  //   ['topScorers', [idCompetition, yearTopScorersSelected]],
  //   () => fetchTopScorers(yearTopScorersSelected, idCompetition),
  // )

  // if(isError) {
  //     return <div>Erreur: { error.message }</div>
  // }

  // if(isLoading) {
  //     return <div>Chargement...</div>
  // }

  // const topScorers = data !== undefined ? data.response : []
  const competitionName = topScorers[0].statistics[0].league.name;
  const theBestOfLeague = 'passeurs'
  return (
    <>
      <Header />
      <HeaderBody>
        <NavLink competitionDatas={{countryCode, idCompetition, competitionName, theBestOfLeague}} />
      </HeaderBody>
      <RankingWrapper>
        <StyledSelect
          placeholder={yearTopScorersSelected}
          options={selectOptions}
          onChange={(option) => {
            setYearTopScorersSelected(option.value);
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
                    <RankingNamePlayer>{scorer.player.name}</RankingNamePlayer>
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
  );
};

export default TopScorers;
