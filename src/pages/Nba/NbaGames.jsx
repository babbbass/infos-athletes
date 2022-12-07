import React from "react"
import { useQuery } from "react-query"
import { baseNbaUrl, requestOptions } from "utils/config/config"
import Games from "components/Games"
import { games } from "utils/datas/Nba/Game"
import Loader from "components/Loader"
import Error from "components/Error"

const fetchGames = async (date) => {
  const response = await fetch(
    `${baseNbaUrl}/games?date=${date}`,
    requestOptions
  )

  return await response.json()
}

export default function NbaGames() {
  const today = new Date().toJSON().slice(0, 10)
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
  return <Games games={games} date={today} />
}
