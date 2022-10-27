import React, {useContext, useState} from 'react';
import { ThemeContext } from "../../Utils/Context/Context";
import { requestOptions } from '../../Utils/config/QueryConfig';
import { useQuery } from 'react-query';
import Select from 'react-select';
import Banner from '../../Components/Banner';
import styled from 'styled-components';
import { topScorers } from '../../Utils/datas/TopScorers';
import { useParams } from 'react-router-dom';
import {StyledSelect, RankingWrapper, RankingContainer,
   RankingNameTeam, RankingNamePlayer, SpanColor, StyledLinkCard,
   RankingTab, RankingTabHead, RankingTabHeadRow,
   RankingTabHeadTitle, RankingTabBody, RankingTabBodyRow, 
   RankingTabBodyData, HeaderBody, ArrowNavigation,
   RankingPosition, LeaguePagesLink } from '../../Utils/style/Rankings'

const fetchTopScorers = async (yearSelected, idCompetition) => {
    console.log(yearSelected)
    //return
    //const id = parseInt(idCompetition)
    const response = await fetch(`https://v3.football.api-sports.io/players/topscorers?season=${yearSelected}&league=${idCompetition}`, requestOptions) 
    
    return await response.json()
}

const options = [
    { value: 2022, label: 2022 },
    { value: 2021, label: 2021 },
    { value: 2020, label: 2020 }
  ]

  const TopScorers = () => {
    const {yearSelected, setYearSelected,
            countryCode, competitionId,
            competitionName 
    } = useContext(ThemeContext)
    // const {competitionId, competitionName, } = useContext(ThemeContext)
    const [yearTopScorers, setYearTopScorers] = useState(yearSelected)
    const { idCompetition } = useParams();
    
    // const refetchQuery = async (yearSelectSelected) => {
    //   await setYearTopScorers(yearSelectSelected)
    //   await refetch()
    // }
    
    // const {isLoading, isError, data, error, refetch} = useQuery(
    //   ['topScorers', [idCompetition, yearTopScorers]],
    //   () => fetchTopScorers(yearTopScorers, idCompetition),
    // )
    // //console.log(data)
    // //console.log(topScorers)
    // if(isError) {
    //     return <div>Erreur: { error.message }</div>
    // }

    // if(isLoading) {
    //     return <div>Chargement...</div>
    // }

    // const topScorers = data !== undefined ? data.response : []

    return (
          <>
            <Banner />
            <HeaderBody>
                <LeaguePagesLink to={`/leagues/${countryCode}/${competitionId}`}>
                  <ArrowNavigation>◄</ArrowNavigation> {competitionName}
                </LeaguePagesLink>
                <LeaguePagesLink to={`/meilleurs-passeurs/${idCompetition}`}>
                  Top Passeurs <ArrowNavigation>►</ArrowNavigation>
                </LeaguePagesLink>
            </HeaderBody>
            <RankingWrapper>
              <StyledSelect placeholder={yearTopScorers} options={options} onChange={(option) => {
                    //refetchQuery(option.value)
                  }}
              />
              <RankingContainer>
                <RankingTab>
                  <RankingTabHead>
                    <RankingTabHeadRow>
                      <RankingTabHeadTitle></RankingTabHeadTitle>
                      <RankingTabHeadTitle></RankingTabHeadTitle>
                      <RankingTabHeadTitle>buts</RankingTabHeadTitle>
                      <RankingTabHeadTitle><SpanColor>matchs</SpanColor></RankingTabHeadTitle>
                      <RankingTabHeadTitle><SpanColor>ratio</SpanColor></RankingTabHeadTitle>
                    </RankingTabHeadRow>
                  </RankingTabHead>
                  <RankingTabBody>
                    {topScorers.map((scorer, index) => (
                      <RankingTabBodyRow key={`{${scorer.player.name}-ranking-scorers}`}>
                        <RankingTabBodyData><RankingPosition>{index + 1}</RankingPosition></RankingTabBodyData>
                        <RankingTabBodyData>
                          <RankingNamePlayer>
                            {scorer.player.name}
                          </RankingNamePlayer><br/><RankingNameTeam>{scorer.statistics[0].team.name}</RankingNameTeam>
                        </RankingTabBodyData>
                        <RankingTabBodyData>{scorer.statistics[0].goals.total}</RankingTabBodyData>
                        <RankingTabBodyData>{scorer.statistics[0].games.appearences}</RankingTabBodyData>
                        <RankingTabBodyData>{Math.round(scorer.statistics[0].goals.total / scorer.statistics[0].games.appearences*100)/100}</RankingTabBodyData>
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