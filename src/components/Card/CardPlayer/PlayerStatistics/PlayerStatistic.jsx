import React, { useContext, useState } from "react"
import { ThemeContext } from "utils/Context/Context"
import { requestOptions, baseUrl } from "utils/config/config"
import { useQuery } from "react-query"
import { selectOptions } from "utils/Context/Context"
import { CardRow, PlayerCardBody } from "components/Card/globalStyleCard"
import {
  PlayerStatisticContainer,
  StyledSelect,
} from "components/Card/CardPlayer/styleCardPlayer"
import { ImgContainer, Img, H1StatsPlayer } from "./style.jsx"
import Button from "components/Button"
import Loader from "components/Loader"
import Error from "components/Error"

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

  const { isLoading, isError, data, error } = useQuery(
    ["player-statistics", { playerId, yearStatisticsSelected }],
    () => fetchPlayerDatas(playerId, yearStatisticsSelected)
  )

  if (isError) {
    return <Error error={error} />
  }

  if (isLoading) {
    return <Loader />
  }

  const playerStatistics = data === undefined ? [] : data.response
  // const playerStatistics = playerStatistic !== undefined ? playerStatistic : []

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
            <H1StatsPlayer>{`${competitionStats.league.name}`}</H1StatsPlayer>
            <ImgContainer>
              <Img
                src={competitionStats.team.logo}
                alt={`firstname-statistiques`}
              />
            </ImgContainer>
            <CardRow>Matchs: {`${competitionStats.games.appearences}`}</CardRow>
            <CardRow>Titulaire: {competitionStats.games.lineups}</CardRow>
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
