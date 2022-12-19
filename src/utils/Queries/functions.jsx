import { baseUrl, requestOptions } from "utils/config/config"

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
