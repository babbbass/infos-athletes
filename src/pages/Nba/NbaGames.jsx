import React from "react"
import { useQuery } from "react-query"
import { fetchGames } from "utils/Queries/functions"
import Games from "components/Games"
import { games } from "utils/datas/Nba/Game"
import Loader from "components/Loader"
import Error from "components/Error"

export default function NbaGames() {
  const dateObject = new Date()
  const today = dateObject.toJSON().slice(0, 10)

  const { isLoading, isError, data, error } = useQuery(
    ["nbaGames", today],
    () => fetchGames(today)
  )

  if (isError) {
    return <Error error={error} />
  }

  if (isLoading) {
    return <Loader />
  }

  const games = data !== undefined ? data.response : []
  return <Games games={games} date={dateObject} />
}
