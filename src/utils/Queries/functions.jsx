import { baseUrl, baseNbaUrl, requestOptions } from "utils/config/config"

export const fetchCompetition = async (competitionId) => {
  const response = await fetch(
    `${baseUrl}/teams?league=${competitionId}&season=2022`,
    requestOptions
  )

  return await response.json()
}

export const fetchPlayerDatas = async (playerId, yearSeason) => {
  const response = await fetch(
    `${baseUrl}/players?id=${playerId}&season=${yearSeason}`,
    requestOptions
  )

  return await response.json()
}

export const fetchGames = async (date) => {
  const response = await fetch(
    `${baseNbaUrl}/games?date=${date}`,
    requestOptions
  )

  return await response.json()
}

export const fetchNbaTeams = async () => {
  const response = await fetch(`${baseNbaUrl}/teams`, requestOptions)

  return await response.json()
}

export const fetchNbaSquad = async (teamId, yearSelected) => {
  const response = await fetch(
    `${baseNbaUrl}/players?team=${teamId}&season=${yearSelected}`,
    requestOptions
  )

  return await response.json()
}
