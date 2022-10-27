import React, {useContext, useState} from 'react';
import { ThemeContext } from "../../Utils/Context/Context";
import { requestOptions } from '../../Utils/config/QueryConfig';
import { useQuery } from 'react-query';
import Select from 'react-select';
import Banner from '../../Components/Banner';
import { topAssists } from '../../Utils/datas/TopAssists'
import { useParams } from 'react-router-dom';
import {StyledSelect, RankingWrapper, RankingContainer,
  RankingNameTeam, RankingNamePlayer, SpanColor, 
  RankingTab, RankingTabHead, RankingTabHeadRow,
  RankingTabHeadTitle, RankingTabBody, RankingTabBodyRow, 
  RankingTabBodyData, HeaderBody, ArrowNavigation,
  RankingPosition, LeaguePagesLink} from '../../Utils/style/Rankings'

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
    // const {yearSelected, setYearSelected} = useContext(ThemeContext)
    const {yearSelected, setYearSelected,
            countryCode, competitionId,
            competitionName 
    } = useContext(ThemeContext)
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
            <HeaderBody>
                <LeaguePagesLink to={`/leagues/${countryCode}/${competitionId}`}>
                  <ArrowNavigation>◄</ArrowNavigation> {competitionName}
                </LeaguePagesLink>
                <LeaguePagesLink to={`/top-scorers/${idCompetition}`}>
                  Meilleurs buteurs <ArrowNavigation>►</ArrowNavigation>
                </LeaguePagesLink>
            </HeaderBody>
            <RankingWrapper>
              <StyledSelect placeholder={yearTopAssits} options={options} onChange={(option) => {
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
                    {topAssists.map((scorer, index) => (
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

export default TopAssits