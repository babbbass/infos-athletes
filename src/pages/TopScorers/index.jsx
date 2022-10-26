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
   RankingContainerTitles, RankingRowCase, RankingRowPlayerStats,
   RankingNameTeam, RankingNamePlayer, SpanColor} from '../../Utils/style/Rankings'

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
    const {yearSelected, setYearSelected} = useContext(ThemeContext)
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
            <RankingWrapper>
              <StyledSelect placeholder={yearTopScorers} options={options} onChange={(option) => {
                    //refetchQuery(option.value)
                  }}
              />
              <RankingContainer>
                  <RankingContainerTitles>
                    <RankingRowCase></RankingRowCase>
                    <RankingRowCase></RankingRowCase>
                    <RankingRowCase>buts</RankingRowCase>
                    <RankingRowCase><SpanColor>matchs</SpanColor></RankingRowCase>
                    <RankingRowCase><SpanColor>ratio</SpanColor></RankingRowCase>
                  </RankingContainerTitles>
                  {topScorers.map((scorer, index) => (
                    <RankingRowPlayerStats key={`{${scorer.player.name}-ranking-scorers}`}>
                      <RankingRowCase>{index + 1}</RankingRowCase>
                      <RankingRowCase>
                        <RankingNamePlayer>{scorer.player.name}</RankingNamePlayer>
                        <RankingNameTeam>{scorer.statistics[0].team.name}</RankingNameTeam>
                      </RankingRowCase>
                      <RankingRowCase>{scorer.statistics[0].goals.total}</RankingRowCase>
                      <RankingRowCase>{scorer.statistics[0].games.appearences}</RankingRowCase>
                      <RankingRowCase>{Math.round(scorer.statistics[0].goals.total / scorer.statistics[0].games.appearences*100)/100}</RankingRowCase>
                    </RankingRowPlayerStats>
                  ))}
              </RankingContainer>
            </RankingWrapper>
          </>
    );
};

export default TopScorers;