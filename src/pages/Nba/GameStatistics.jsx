import React from "react"
import { baseNbaUrl, requestOptions } from "utils/config/config"
import { useQuery } from "react-query"
import GameStatistic from "components/Games/GameStatistics/GameStatistic"
import { useParams } from "react-router-dom"
import { statistics } from "utils/datas/Nba/GameStatistics"
import Loader from "components/Loader"
import Error from "components/Error"

const fetchGameStatistics = async (gameId) => {
  const response = await fetch(
    `${baseNbaUrl}/games/statistics?id=${gameId}`,
    requestOptions
  )

  return await response.json()
}
export default function GameStatistics() {
  const { matchId } = useParams("matchId")
  const { isLoading, isError, data, error } = useQuery(
    ["nbaGameStatistics", matchId],
    () => fetchGameStatistics(matchId)
  )

  if (isError) {
    return <Error error={error} />
  }

  if (isLoading) {
    return <Loader />
  }

  const statistics = data !== undefined ? data.response : []
  return (
    <>
      <GameStatistic statistics={statistics} />
    </>
  )
}
