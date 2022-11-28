import React, { useContext } from "react"
import { ThemeContext } from "utils/Context/Context"
import { playerPalmares } from "utils/datas/PlayerPalmares"
import { CardRow } from "components/Card/globalStyleCard"
import { PlayerStatisticContainer } from "components/Card/CardPlayer/styleCardPlayer"
import Button from "components/Button"
import { useQuery } from "react-query"
import { requestOptions, baseUrl } from "utils/config/QueryConfig"
import { useParams } from "react-router-dom"
import { RowTrophie, CardBodyPalmares } from "./style"
const fetchPlayerPalmares = async (playerId) => {
  console.log(playerId)

  const response = await fetch(
    `${baseUrl}/trophies?player=${playerId}`,
    requestOptions
  )

  return await response.json()
}
export default function PlayerPalmares({ linkButton }) {
  const { yearSelected, setYearSelected } = useContext(ThemeContext)
  const { playerId } = useParams("playerId")

  // const { isLoading, isError, data, error } = useQuery(
  //   ["player-palmares", playerId],
  //   () => fetchPlayerPalmares(playerId)
  // )

  // if (isError) {
  //   return <div>Erreur: {error.message}</div>
  // }

  // if (isLoading) {
  //   return <div>Chargement...</div>
  // }

  // const playerPalmares = data === undefined ? [] : data.response

  return (
    <>
      <PlayerStatisticContainer>
        {playerPalmares.map((trophie, index) => (
          <CardBodyPalmares key={`${trophie.league}-${index}`}>
            <RowTrophie>{trophie.league}</RowTrophie>
            <CardRow>{trophie.season}</CardRow>
            <CardRow>Place: {trophie.place}</CardRow>
          </CardBodyPalmares>
        ))}
      </PlayerStatisticContainer>
      <Button linkButton={linkButton} />
    </>
  )
}
