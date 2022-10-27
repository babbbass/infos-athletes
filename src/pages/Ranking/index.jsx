import React, {useContext, useState} from 'react';
import { ThemeContext } from "../../Utils/Context/Context";
import { requestOptions } from '../../Utils/config/QueryConfig';
import { useQuery } from 'react-query';
import Select from 'react-select';
import Banner from '../../Components/Banner';
import styled from 'styled-components';
import { ranking } from '../../Utils/datas/Ranking';
import { useParams } from 'react-router-dom';
import {StyledSelect, RankingWrapper, RankingContainer,
   RankingNameTeam, RankingNamePlayer, SpanColor, StyledLinkCard,
   RankingTab, RankingTabHead, RankingTabHeadRow,
   RankingTabHeadTitle, RankingTabBody, RankingTabBodyRow, 
   RankingTabBodyData, HeaderBody, ArrowNavigation,
   RankingPosition, LeaguePagesLink } from '../../Utils/style/Rankings'

const options = [
    { value: 2022, label: 2022 },
    { value: 2021, label: 2021 },
    { value: 2020, label: 2020 }
]

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
  const response = await fetch(`https://v3.football.api-sports.io/standings?league=${competitionId}&season=${yearCompetitionId}`, requestOptions) 
  
  return await response.json()
}

const Ranking = () => {
    const {yearSelected, setYearSelected,
            countryCode, competitionId,
            competitionName 
    } = useContext(ThemeContext)

    const [yearLeagueSelected, setYearLeagueSelected] = useState(yearSelected)
    const { idCompetition } = useParams();

    

    const {isLoading, isError, data, error} = useQuery(
      ['leagueRanking', [idCompetition, yearLeagueSelected]],
      () => fetchRankingLeague(idCompetition, yearLeagueSelected)
    )

    if(isError) {
        return <div>Erreur: { error.message }</div>
    }

    if(isLoading) {
        return <div>Chargement...</div>
    }

    const leagueRanking = data !== undefined ? data.response : []
    //const leagueRanking = ranking[0].standings[0]
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
            <StyledSelect placeholder={yearLeagueSelected} options={options} onChange={(option) => {
                  //refetchQuery(option.value)
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
                    <RankingTabHeadTitle><SpanColor>N</SpanColor></RankingTabHeadTitle>
                    <RankingTabHeadTitle><SpanColor>P</SpanColor></RankingTabHeadTitle>
                    <RankingTabHeadTitle><SpanColor>Pts</SpanColor></RankingTabHeadTitle>
                    <RankingTabHeadTitle><SpanColor>5 derniers</SpanColor></RankingTabHeadTitle>
                  </RankingTabHeadRow>
                </RankingTabHead>
                <RankingTabBody>
                   {leagueRanking[0].league.standings[0].map((team, index) => (
                      // team.team.name
                      <RankingTabBodyRow key={`{${team.team.id}-ranking-league}`}>
                        <RankingTabBodyData><RankingPosition>{index + 1}</RankingPosition></RankingTabBodyData>
                        <RankingTabBodyData>
                          <LeagueRankingNamePlayer>{team.team.name}</LeagueRankingNamePlayer>
                        </RankingTabBodyData>
                        <LeagueRankingTabBodyData>{team.all.played}</LeagueRankingTabBodyData>
                        <LeagueRankingTabBodyData>{team.all.win}</LeagueRankingTabBodyData>
                        <LeagueRankingTabBodyData>{team.all.draw}</LeagueRankingTabBodyData>
                        <LeagueRankingTabBodyData>{team.all.lose}</LeagueRankingTabBodyData>
                        <LeagueRankingTabBodyData>{team.points}</LeagueRankingTabBodyData>
                        <LeagueRankingTabBodyData>{team.form}</LeagueRankingTabBodyData>
                      </RankingTabBodyRow>
                  ))} 
                </RankingTabBody>
              </LeagueRankingTab>
            </RankingContainer>
          </RankingWrapper> 
        </>
    );
};

export default Ranking;