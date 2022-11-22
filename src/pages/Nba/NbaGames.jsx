import React from "react"
import { useQuery } from "react-query"
import { baseNbaUrl, requestOptions } from "utils/config/QueryConfig"
import Games from "components/Games"
import { games } from "utils/datas/Nba/Game"

const fetchGames = async (date) => {
  const response = await fetch(
    `${baseNbaUrl}/games?date=${date}`,
    requestOptions
  )

  return await response.json()
}

export default function NbaGames() {
  const date = new Date().toJSON().slice(0, 10)
  // const { isLoading, isError, data, error } = useQuery(["nbaTeams", date], () =>
  //   fetchGames(date)
  // )

  // if (isError) {
  //   return <div>Erreur: {error.message}</div>
  // }

  // if (isLoading) {
  //   return <div>Chargement...</div>
  // }

  // const games = data !== undefined ? data.response : []
  return <Games games={games} date={date} />
}
