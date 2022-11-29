import React from "react"
import { useQuery } from "react-query"
import { baseNbaUrl, requestOptions } from "utils/config/config"
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
  const today = new Date().toJSON().slice(0, 10)
  //const today = "2022-11-24" //new Date().toJSON().slice(0, 10)
  const { isLoading, isError, data, error } = useQuery(
    ["nbaGames", today],
    () => fetchGames(today)
  )

  if (isError) {
    return <div>Erreur: {error.message}</div>
  }

  if (isLoading) {
    return <div>Chargement...</div>
  }

  const games = data !== undefined ? data.response : []
  return <Games games={games} date={today} />
}
