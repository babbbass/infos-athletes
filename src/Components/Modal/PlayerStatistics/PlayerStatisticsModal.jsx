import React, {useContext, useState} from 'react';
import { PlayerStatsModalBackground, PlayerStatsModalContainer, ModalContainerCard,
  RowStatsModalContainer, RowModalTitle, ModalContainerTitle, PlayerStatsModalContainerBody,
  PlayerStatsModalContainerHeader, ModalContainerFooter, TitleCloseBtnButton,
  ModalContainerFooterButton, ModalContainerCardHeader, ImgContainer,
  H1Container, RowModalData, StyledSelect } from './PlayerStatisticsStyle' 
//import { playerStatistics } from '../../../Utils/datas/PlayerStatistics'
import { ThemeContext } from "../../../Utils/Context/Context";
import PlayerStatisticYear from '../../PlayerStatisticYear'
import { useRetrievePlayerDatas } from '../../../Utils/Queries/Players';
import { requestOptions } from '../../../Utils/config/QueryConfig';
import { useQuery } from 'react-query';
import Select from 'react-select';
import styled from 'styled-components';

const fetchPlayerDatas = async (playerId, yearSeason) => {
  const response = await fetch(`https://v3.football.api-sports.io/players?id=${playerId}&season=${yearSeason}`, requestOptions) 
  
  return await response.json()
}

const options = [
  { value: 2022, label: 2022 },
  { value: 2021, label: 2021 },
  { value: 2020, label: 2020 }
]

export default function PlayerStatisticsModal({closeModalStatistics, playerStatistic}) { //
  //console.log(playerStatistic[0].player.id);
  
  const {yearSelected, setYearSelected} = useContext(ThemeContext) 
  const [yearStatistics, setYearStatistics] = useState(yearSelected)

  const playerId = playerStatistic[0].player.id

  const refetchQuery = async (yearSelectSelected) => {
    await setYearStatistics(yearSelectSelected)
    await refetch()
  } 

  const {isLoading, isError, data, error, refetch} = useQuery( 
      ['player-statistics', {playerId, yearStatistics}],() => fetchPlayerDatas(playerId, yearStatistics),
  )

  // if(data === undefined) {return}
  // const playerStatistics = data === undefined ? [] : data.response//playerStatistic
  
  
  if(isError) {
      return <div>Erreur: { error.message }</div>
  }

  if(isLoading) {
      return <div>Chargement...</div>
  }

  const playerStatistics = playerStatistic !== undefined ? playerStatistic : []
  
  return (
      <div>
        <PlayerStatsModalBackground>
          <PlayerStatsModalContainer>
            <PlayerStatsModalContainerHeader>
              <ModalContainerTitle>{`${playerStatistics[0].player.name} statistiques`}</ModalContainerTitle>
              {/* <PlayerStatisticYear /> */}
              <StyledSelect placeholder={yearStatistics} options={options} onChange={(option) => {
                  //refetchQuery(option.value)
                }}
              />
            </PlayerStatsModalContainerHeader>
            <PlayerStatsModalContainerBody>
              {playerStatistics[0]?.statistics.map((competitionStats, index) => (
                <ModalContainerCard key={`${playerStatistics[0].player.id}-${index}`}>
                  <ModalContainerCardHeader>
                    <H1Container>{`${competitionStats.league.name}`}</H1Container>
                    <ImgContainer src={competitionStats.team.logo} alt={`firstname-statistiques`} />
                  </ModalContainerCardHeader>
                  <RowStatsModalContainer>
                    <div><RowModalTitle>Matchs:</RowModalTitle> <RowModalData>{`${competitionStats.games.appearences}`}</RowModalData></div>
                    <div><RowModalTitle>Titulaire:</RowModalTitle> <RowModalData>{competitionStats.games.lineups}</RowModalData></div>
                    <div><RowModalTitle>Nb min:</RowModalTitle> <RowModalData>{competitionStats.games.minutes}</RowModalData></div>
                    <div><RowModalTitle>Note:</RowModalTitle> <RowModalData>{Math.round(competitionStats.games.rating*100)/100}</RowModalData></div>
                    <div><RowModalTitle>Buts:</RowModalTitle> <RowModalData>{competitionStats.goals.total}</RowModalData></div>
                    <div><RowModalTitle>Pas déc:</RowModalTitle> <RowModalData>{competitionStats.goals.assists}</RowModalData></div>
                  </RowStatsModalContainer>
                </ModalContainerCard>
              ))}
            </PlayerStatsModalContainerBody>
            <ModalContainerFooter>
              <ModalContainerFooterButton>
              <TitleCloseBtnButton
                onClick={() => {
                  closeModalStatistics(false)
                }}
              >Fermer</TitleCloseBtnButton>
                </ModalContainerFooterButton>
              </ModalContainerFooter>
          </PlayerStatsModalContainer>
        </PlayerStatsModalBackground>
      </div>
  )
}