import React, { useContext } from "react"
import { ThemeContext } from "utils/Context/Context"
import { playerPalmares } from "utils/datas/PlayerPalmares"
import { CardRow } from "components/Card/globalStyleCard"
import { PlayerStatisticContainer } from "components/Card/CardPlayer/styleCardPlayer"
import Button from "components/Button"
import { useQuery } from "react-query"
import { requestOptions, baseUrl } from "utils/config/config"
import { useParams } from "react-router-dom"
import { RowTrophie, CardBodyPalmares } from "./style"
import Loader from "components/Loader"
import Error from "components/Error"

const fetchPlayerPalmares = async (playerId) => {
  const response = await fetch(
    `${baseUrl}/trophies?player=${playerId}`,
    requestOptions
  )

  return await response.json()
}
export default function PlayerPalmares({ linkButton }) {
  const { yearSelected, setYearSelected } = useContext(ThemeContext)
  const { playerId } = useParams("playerId")

  const { isLoading, isError, data, error } = useQuery(
    ["player-palmares", playerId],
    () => fetchPlayerPalmares(playerId)
  )

  if (isError) {
    return <Error error={error} />
  }

  if (isLoading) {
    return <Loader />
  }

  const playerPalmares = data === undefined ? [] : data.response

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
