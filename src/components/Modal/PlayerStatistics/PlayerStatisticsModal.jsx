import React, { useContext, useState } from "react"
import {
  ImgContainer,
  H1Container,
  StyledSelect,
} from "./PlayerStatisticsStyle"
//import { playerStatistics } from 'utils/datas/PlayerStatistics'
import { ThemeContext } from "utils/Context/Context"
import { requestOptions, baseUrl } from "utils/config/QueryConfig"
import { useQuery } from "react-query"
import { selectOptions } from "utils/Context/Context"
import { CardRow } from "components/Card/globalStyleCard"
import styled from "styled-components"
import { ModalContainerBody } from "utils/style/Modals"

const PlayerStatisticContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const fetchPlayerDatas = async (playerId, yearSeason) => {
  const response = await fetch(
    `${baseUrl}/players?id=${playerId}&season=${yearSeason}`,
    requestOptions
  )

  return await response.json()
}

export default function PlayerStatisticsModal({ playerStatistic }) {
  const { yearSelected } = useContext(ThemeContext)
  const [yearStatisticsSelected, setYearStatisticsSelected] =
    useState(yearSelected)
  const playerId = playerStatistic[0].player.id

  // const { isLoading, isError, data, error } = useQuery(
  //   ["player-statistics", { playerId, yearStatisticsSelected }],
  //   () => fetchPlayerDatas(playerId, yearStatisticsSelected)
  // )

  // if (isError) {
  //   return <div>Erreur: {error.message}</div>
  // }

  // if (isLoading) {
  //   return <div>Chargement...</div>
  // }

  // const playerStatistics = data === undefined ? [] : data.response
  const playerStatistics = playerStatistic !== undefined ? playerStatistic : []

  return (
    <>
      {/* <CardContainer> */}
      {/* <ModalContainerTitle>{`${playerStatistics[0].player.name.toUpperCase()}`}</ModalContainerTitle> */}
      <StyledSelect
        placeholder={yearStatisticsSelected}
        options={selectOptions}
        onChange={(option) => {
          setYearStatisticsSelected(option.value)
        }}
      />
      <PlayerStatisticContainer>
        {playerStatistics[0]?.statistics.map((competitionStats, index) => (
          <div key={`${playerStatistics[0].player.id}-${index}`}>
            {/* <ModalContainerCardHeader> */}
            <H1Container>{`${competitionStats.league.name}`}</H1Container>
            <ModalContainerBody>
              <ImgContainer
                src={competitionStats.team.logo}
                alt={`firstname-statistiques`}
              />
              {/* </ModalContainerCardHeader> */}
              {/* <RowStatsModalContainer> */}
              <CardRow>
                Matchs: {`${competitionStats.games.appearences}`}
              </CardRow>
              <CardRow>Titulaire:{competitionStats.games.lineups}</CardRow>
              <CardRow>Nb min: {competitionStats.games.minutes}</CardRow>
              <CardRow>
                Note: {Math.round(competitionStats.games.rating * 100) / 100}
              </CardRow>
              <CardRow>Buts: {competitionStats.goals.total}</CardRow>
              <CardRow>Pas déc: {competitionStats.goals.assists}</CardRow>
              {/* </RowStatsModalContainer> */}
            </ModalContainerBody>
          </div>
        ))}
      </PlayerStatisticContainer>
    </>
  )
}
