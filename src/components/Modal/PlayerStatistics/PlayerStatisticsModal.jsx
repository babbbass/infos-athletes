import React, { useContext, useState } from "react"
import {
  PlayerStatsModalBackground,
  PlayerStatsModalContainer,
  ModalContainerCard,
  RowStatsModalContainer,
  RowModalTitle,
  ModalContainerTitle,
  PlayerStatsModalContainerBody,
  PlayerStatsModalContainerHeader,
  ModalContainerFooter,
  TitleCloseBtnButton,
  ModalContainerFooterButton,
  ModalContainerCardHeader,
  ImgContainer,
  H1Container,
  RowModalData,
  StyledSelect,
} from "./PlayerStatisticsStyle"
//import { playerStatistics } from 'utils/datas/PlayerStatistics'
import { ThemeContext } from "utils/Context/Context"
import { requestOptions, baseUrl } from "utils/config/QueryConfig"
import { useQuery } from "react-query"
import { selectOptions } from "utils/Context/Context"

const fetchPlayerDatas = async (playerId, yearSeason) => {
  const response = await fetch(
    `${baseUrl}/players?id=${playerId}&season=${yearSeason}`,
    requestOptions
  )

  return await response.json()
}

export default function PlayerStatisticsModal({
  closeModalStatistics,
  playerStatistic,
}) {
  //
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
    <div>
      <PlayerStatsModalBackground>
        <PlayerStatsModalContainer>
          <PlayerStatsModalContainerHeader>
            <ModalContainerTitle>{`${playerStatistics[0].player.name.toUpperCase()}`}</ModalContainerTitle>
            <StyledSelect
              placeholder={yearStatisticsSelected}
              options={selectOptions}
              onChange={(option) => {
                setYearStatisticsSelected(option.value)
              }}
            />
          </PlayerStatsModalContainerHeader>
          <PlayerStatsModalContainerBody>
            {playerStatistics[0]?.statistics.map((competitionStats, index) => (
              <ModalContainerCard
                key={`${playerStatistics[0].player.id}-${index}`}
              >
                <ModalContainerCardHeader>
                  <H1Container>{`${competitionStats.league.name}`}</H1Container>
                  <ImgContainer
                    src={competitionStats.team.logo}
                    alt={`firstname-statistiques`}
                  />
                </ModalContainerCardHeader>
                <RowStatsModalContainer>
                  <div>
                    <RowModalTitle>Matchs:</RowModalTitle>{" "}
                    <RowModalData>{`${competitionStats.games.appearences}`}</RowModalData>
                  </div>
                  <div>
                    <RowModalTitle>Titulaire:</RowModalTitle>{" "}
                    <RowModalData>
                      {competitionStats.games.lineups}
                    </RowModalData>
                  </div>
                  <div>
                    <RowModalTitle>Nb min:</RowModalTitle>{" "}
                    <RowModalData>
                      {competitionStats.games.minutes}
                    </RowModalData>
                  </div>
                  <div>
                    <RowModalTitle>Note:</RowModalTitle>{" "}
                    <RowModalData>
                      {Math.round(competitionStats.games.rating * 100) / 100}
                    </RowModalData>
                  </div>
                  <div>
                    <RowModalTitle>Buts:</RowModalTitle>{" "}
                    <RowModalData>{competitionStats.goals.total}</RowModalData>
                  </div>
                  <div>
                    <RowModalTitle>Pas déc:</RowModalTitle>{" "}
                    <RowModalData>
                      {competitionStats.goals.assists}
                    </RowModalData>
                  </div>
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
              >
                Fermer
              </TitleCloseBtnButton>
            </ModalContainerFooterButton>
          </ModalContainerFooter>
        </PlayerStatsModalContainer>
      </PlayerStatsModalBackground>
    </div>
  )
}
