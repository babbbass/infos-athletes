import React, { useState } from "react"
import { ModalContainerBody, StyledImg } from "utils/style/Modals"
import { playerStatistics } from "utils/datas/PlayerStatistics"
import PlayerStatisticsModal from "components/Card/CardPlayer/PlayerStatistic"
import PlayerPalmares from "components/Card/CardPlayer/PlayerPalmares"
import { useQuery } from "react-query"
import { requestOptions, baseUrl } from "utils/config/QueryConfig"
import { useParams } from "react-router-dom"
import {
  CardBack,
  CardFront,
  CardContainer,
  CardRow,
} from "components/Card/globalStyleCard"
import {
  CardPagePlayer,
  H1Container,
} from "components/Card/CardPlayer/styleCardPlayer"
import PreviousLink from "components/NavLink/Previous"
import { HeaderBody } from "utils/style/Rankings"
import Button from "components/Button"

const fetchPlayerDatas = async (playerId) => {
  const response = await fetch(
    `${baseUrl}/players?id=${playerId}&season=2022`,
    requestOptions
  )

  return await response.json()
}

export default function PlayerCivility() {
  const [openModalStatistic, setOpenModalStatistic] = useState(false)
  const [openPalmaresPlayer, setOpenPalmaresPlayer] = useState(false)
  const { playerId } = useParams()

  // const { isLoading, isError, data, error } = useQuery([playerId], () =>
  //   fetchPlayerDatas(playerId)
  // )

  // const playerStatistics = data !== undefined ? data.response : []
  // if((isError === false && data === undefined) || (data.errors.requests)) {
  //   return (
  //     <RequestsLimit />
  //   )
  // }
  // if (isError) {
  //   return <div>Erreur: {error.message}</div>
  // }

  // if (isLoading) {
  //   return <div>Chargement...</div>
  // }
  const teamId = playerStatistics[0].statistics[0].team.id
  const teamName = playerStatistics[0].statistics[0].team.name
  const previousStep1 = "team"
  const previousStep2 = teamId
  const previousLinkName = teamName

  return (
    <>
      <HeaderBody>
        <PreviousLink
          previousPageDatas={{ previousStep1, previousStep2, previousLinkName }}
        />
      </HeaderBody>
      <CardContainer>
        <CardPagePlayer
          openModalStatistic={openModalStatistic}
          openModalPalmaresPlayer={openPalmaresPlayer}
        >
          <CardFront>
            <H1Container>{playerStatistics[0].player.name}</H1Container>
            <ModalContainerBody>
              <StyledImg
                src={playerStatistics[0].player.photo}
                alt={`$playerStatistics[0].player.firstname-statistiques`}
              />
              <CardRow>{playerStatistics[0].player.firstname}</CardRow>
              <CardRow>{playerStatistics[0].player.lastname}</CardRow>
              <CardRow>{playerStatistics[0].player.age}</CardRow>
              <CardRow>{playerStatistics[0].player.nationality}</CardRow>
              <CardRow>{playerStatistics[0].player.height}</CardRow>
              <CardRow>{playerStatistics[0].player.weight}</CardRow>
              <CardRow>{playerStatistics[0].player.injured}</CardRow>
            </ModalContainerBody>
            <Button
              linkButton={{
                setOpenPalmaresPlayer,
                openPalmaresPlayer,
                setOpenModalStatistic,
                openModalStatistic,
              }}
            />
          </CardFront>
          <CardBack>
            {openModalStatistic && (
              <PlayerStatisticsModal
                linkButton={{
                  setOpenPalmaresPlayer,
                  openModalStatistic,
                  setOpenModalStatistic,
                  openPalmaresPlayer,
                }}
                playerStatistic={playerStatistics}
              />
            )}
            {openPalmaresPlayer && (
              <PlayerPalmares
                linkButton={{
                  setOpenPalmaresPlayer,
                  openModalStatistic,
                  setOpenModalStatistic,
                  openPalmaresPlayer,
                }}
              />
            )}
          </CardBack>
        </CardPagePlayer>
      </CardContainer>
    </>
  )
}
