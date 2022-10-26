import React, {useContext, useState} from 'react';
import { ThemeContext } from "../../Utils/Context/Context";
import { requestOptions } from '../../Utils/config/QueryConfig';
import { useQuery } from 'react-query';
import Select from 'react-select';
import Banner from '../../Components/Banner';
import { topAssists } from '../../Utils/datas/TopAssists'
import { useParams } from 'react-router-dom';
import {StyledSelect, RankingWrapper, RankingContainer,
  RankingContainerTitles, RankingRowCase, RankingRowPlayerStats,
  RankingNameTeam, RankingNamePlayer, SpanColor} from '../../Utils/style/Rankings'

const fetchTopAssists = async (yearSelected, idCompetition) => {
    //console.log(yearSelected, idCompetition)
    const response = await fetch(`https://v3.football.api-sports.io/players/topassists?season=${yearSelected}&league=${idCompetition}`, requestOptions) 
    
    return await response.json()
}

const options = [
    { value: 2022, label: 2022 },
    { value: 2021, label: 2021 },
    { value: 2020, label: 2020 }
  ]
  
const TopAssits = () => {
    const {yearSelected, setYearSelected} = useContext(ThemeContext)
    const [yearTopAssits, setYearTopAssits] = useState(yearSelected)
    const { idCompetition } = useParams();
    
    // const refetchQuery = async (yearSelectSelected) => {
    //   await setYearTopAssits(yearSelectSelected)
    //   await refetch()
    // }
    
    // const {isLoading, isError, data, error, refetch} = useQuery(
    //   ['topAssists', [idCompetition, yearTopAssits]],
    //   () => fetchTopAssists(yearTopAssits, idCompetition),
    // )
    // //console.log(data)
    // // console.log(topAssists)
    // if(isError) {
    //     return <div>Erreur: { error.message }</div>
    // }

    // if(isLoading) {
    //     return <div>Chargement...</div>
    // }

    //const topAssists = data !== undefined ? data.response : []

    return (
          <>
            <Banner />
            <RankingWrapper>
              <StyledSelect placeholder={yearTopAssits} options={options} onChange={(option) => {
                    //refetchQuery(option.value)
                  }}
              />
              <RankingContainer>
                  <RankingContainerTitles>
                    <RankingRowCase></RankingRowCase>
                    <RankingRowCase></RankingRowCase>
                    <RankingRowCase>passes déc</RankingRowCase>
                    <RankingRowCase><SpanColor>matchs</SpanColor></RankingRowCase>
                    <RankingRowCase><SpanColor>ratio</SpanColor></RankingRowCase>
                  </RankingContainerTitles>
                  {topAssists.map((player, index) => (
                    <RankingRowPlayerStats key={`{${player.player.name}-ranking-scorers}`}>
                      <RankingRowCase>{index + 1}</RankingRowCase>
                      <RankingRowCase>
                        <RankingNamePlayer>{player.player.name}</RankingNamePlayer>
                        <RankingNameTeam>{player.statistics[0].team.name}</RankingNameTeam>
                      </RankingRowCase>
                      <RankingRowCase>{player.statistics[0].goals.assists}</RankingRowCase>
                      <RankingRowCase>{player.statistics[0].games.appearences}</RankingRowCase>
                      <RankingRowCase>{Math.round(player.statistics[0].goals.assists / player.statistics[0].games.appearences*100)/100}</RankingRowCase>
                    </RankingRowPlayerStats>
                  ))}
              </RankingContainer>
            </RankingWrapper>
          </>
    );
};

export default TopAssits