import React, { useState } from "react"
import { ModalContainerBody, StyledImg } from "utils/style/Modals"
import { StyledLink } from "utils/style/GlobalStyle"
import { playerStatistics } from "utils/datas/PlayerStatistics"
import PlayerStatisticsModal from "components/Modal/PlayerStatistics/PlayerStatisticsModal"
import PlayerPalmaresModal from "components/Modal/Player/PlayerPalmaresModal"
import { useQuery } from "react-query"
import { requestOptions, baseUrl } from "utils/config/QueryConfig"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import colors from "utils/style/colors"
import { ButtonSiteContainer, ButtonSite } from "utils/style/GlobalStyle"
import {
  Card,
  CardBack,
  CardFront,
  CardContainer,
  CardRow,
} from "components/Card/globalStyleCard"
import PreviousLink from "components/NavLink/Previous"
import { HeaderBody } from "utils/style/Rankings"

const fetchPlayerDatas = async (playerId) => {
  const response = await fetch(
    `${baseUrl}/players?id=${playerId}&season=2022`,
    requestOptions
  )

  return await response.json()
}
const LinkModal = styled(StyledLink)`
  color: ${colors.whitesmoke};
  &:hover {
    color: ${colors.primary};
  }
`
const CardPagePlayer = styled(Card)`
  width: 90%;
  transform-style: preserve-3d;
  color: ${colors.warriors};
  transition: transform 1.2s cubic-bezier(0.86, 0, 0.07, 1);
  &:hover {
    transform: rotateY(180deg);
  }
`
const H1Container = styled.div`
  width: 90%;
  font-size: 2rem;
  font-style: italic;
  font-weight: bold;
  text-align: center;
  margin: 10px auto;
  text-transform: uppercase;
  color: ${colors.warriors};
`

export default function PlayerCivility() {
  const [openModalStatistic, setOpenModalStatistic] = useState(false)
  const [openModalPalmaresPlayer, setOpenModalPalmaresPlayer] = useState(false)
  // const { playerId } = useParams()
  //console.log(playerId)
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
      {openModalStatistic && (
        <PlayerStatisticsModal
          closeModalStatistics={setOpenModalStatistic}
          playerStatistic={playerStatistics}
        />
      )}
      {openModalPalmaresPlayer && (
        <PlayerPalmaresModal
          closeModalPalmaresPlayer={setOpenModalPalmaresPlayer}
        />
      )}
      <HeaderBody>
        <PreviousLink
          previousPageDatas={{ previousStep1, previousStep2, previousLinkName }}
        />
      </HeaderBody>
      <CardContainer>
        <CardPagePlayer>
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
            <ButtonSiteContainer>
              <LinkModal
                onClick={() => {
                  setOpenModalPalmaresPlayer(true)
                }}
              >
                <ButtonSite>Palmares</ButtonSite>
              </LinkModal>
              <LinkModal
                onClick={() => {
                  setOpenModalStatistic(true)
                }}
              >
                <ButtonSite>Statistiques</ButtonSite>
              </LinkModal>
            </ButtonSiteContainer>
          </CardFront>
          <CardBack>
            <PlayerStatisticsModal playerStatistic={playerStatistics} />
          </CardBack>
        </CardPagePlayer>
      </CardContainer>
    </>
  )
}
