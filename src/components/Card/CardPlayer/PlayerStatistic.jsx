import React, { useContext, useState } from "react"
import {
  ImgContainer,
  H1Container,
  StyledSelect,
} from "../../Modal/PlayerStatistics/PlayerStatisticsStyle"
import { ThemeContext } from "utils/Context/Context"
import { requestOptions, baseUrl } from "utils/config/QueryConfig"
import { useQuery } from "react-query"
import { selectOptions } from "utils/Context/Context"
import { CardRow, PlayerCardBody } from "components/Card/globalStyleCard"
import { PlayerStatisticContainer } from "components/Card/CardPlayer/styleCardPlayer"
import Button from "components/Button"

const fetchPlayerDatas = async (playerId, yearSeason) => {
  const response = await fetch(
    `${baseUrl}/players?id=${playerId}&season=${yearSeason}`,
    requestOptions
  )

  return await response.json()
}

export default function PlayerStatistics({ linkButton, playerStatistic }) {
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
      <StyledSelect
        placeholder={yearStatisticsSelected}
        options={selectOptions}
        onChange={(option) => {
          setYearStatisticsSelected(option.value)
        }}
      />
      <PlayerStatisticContainer>
        {playerStatistics[0]?.statistics.map((competitionStats, index) => (
          <PlayerCardBody key={`${playerStatistics[0].player.id}-${index}`}>
            <H1Container>{`${competitionStats.league.name}`}</H1Container>
            <ImgContainer
              src={competitionStats.team.logo}
              alt={`firstname-statistiques`}
            />
            <CardRow>Matchs: {`${competitionStats.games.appearences}`}</CardRow>
            <CardRow>Titulaire:{competitionStats.games.lineups}</CardRow>
            <CardRow>Nb min: {competitionStats.games.minutes}</CardRow>
            <CardRow>
              Note: {Math.round(competitionStats.games.rating * 100) / 100}
            </CardRow>
            <CardRow>Buts: {competitionStats.goals.total}</CardRow>
            <CardRow>Pas déc: {competitionStats.goals.assists}</CardRow>
          </PlayerCardBody>
        ))}
      </PlayerStatisticContainer>
      <Button linkButton={linkButton} />
    </>
  )
}
