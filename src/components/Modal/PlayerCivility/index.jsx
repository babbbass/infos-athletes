import React, {useState}from 'react';
import { ModalBackground, ModalContainer,
  ModalContainerTitle, ModalContainerBody,
  ModalContainerFooter, TitleCloseBtnButton,
  ModalContainerFooterButton,
  StyledImg, RowModalContainer,
  ModalContainerHeader } from '../../../utils/style/Modals' 
import { StyledLink } from '../../../utils/style/GlobalStyle';
import { playerStatistics } from '../../../utils/datas/PlayerStatistics'
import PlayerStatisticsModal from '../PlayerStatistics/PlayerStatisticsModal'
import PlayerPalmaresModal from '../Player/PlayerPalmaresModal'
import { useQuery } from 'react-query';
import { requestOptions } from '../../../utils/config/QueryConfig';
import styled from 'styled-components';
import colors from '../../../utils/style/colors';

const fetchPlayerDatas = async (playerId) => {
    const response = await fetch(`https://v3.football.api-sports.io/players?id=${playerId}&season=2022`, requestOptions) 
    
    return await response.json()
}
const LinkModal = styled(StyledLink)`
  color: ${colors.flowerblue};
  &:hover{
    color: ${colors.modals};
  }
`
export default function Modal({closeModal, playerId}) {
  const [openModalStatistic, setOpenModalStatistic] = useState(false)
  const [openModalPalmaresPlayer, setOpenModalPalmaresPlayer] = useState(false)

  const {isLoading, isError, data, error} = useQuery([playerId], () => fetchPlayerDatas(playerId))

  const playerStatistics = data !== undefined ? data.response : []

  if(isError) {
      return <div>Erreur: { error.message }</div>
  }

  if(isLoading) {
      return <div>Chargement...</div>
  }

  return (
    <div>
      {openModalStatistic &&
          <PlayerStatisticsModal  closeModalStatistics={setOpenModalStatistic} playerStatistic={playerStatistics} /> //playerStatistic={playerStatistics}
      }
      {openModalPalmaresPlayer &&
          <PlayerPalmaresModal  closeModalPalmaresPlayer={setOpenModalPalmaresPlayer} /> 
      }
      <ModalBackground>
        <ModalContainer>
        <ModalContainerHeader>
          <LinkModal onClick={() => {
              setOpenModalPalmaresPlayer(true)
            }}
          >Palmares
          </LinkModal>
          <LinkModal onClick={() => {
                  setOpenModalStatistic(true)
                }}
          >Statistiques
          </LinkModal>
        </ModalContainerHeader>
          <ModalContainerTitle><h1>{playerStatistics[0].player.name}</h1></ModalContainerTitle>
          <ModalContainerBody>
            <StyledImg src={playerStatistics[0].player.photo} alt={`$playerStatistics[0].player.firstname-statistiques`} />
            <RowModalContainer>{playerStatistics[0].player.firstname}</RowModalContainer>
            <RowModalContainer>{playerStatistics[0].player.lastname}</RowModalContainer>
            <RowModalContainer>{playerStatistics[0].player.age}</RowModalContainer>
            <RowModalContainer>{playerStatistics[0].player.nationality}</RowModalContainer>
            <RowModalContainer>{playerStatistics[0].player.height}</RowModalContainer>
            <RowModalContainer>{playerStatistics[0].player.weight}</RowModalContainer>
            <RowModalContainer>{playerStatistics[0].player.injured}</RowModalContainer>
          </ModalContainerBody>
          <ModalContainerFooter>
            <ModalContainerFooterButton>
              <TitleCloseBtnButton
                onClick={() => {
                  closeModal(false)
                }}
              >Fermer
              </TitleCloseBtnButton>
            </ModalContainerFooterButton>
            </ModalContainerFooter>
        </ModalContainer>
      </ModalBackground>
    </div>
  );
}
