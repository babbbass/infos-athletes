import React, {useState}from 'react';
import { ModalBackground, ModalContainer,
  ModalContainerTitle, ModalContainerBody,
  ModalContainerFooter, TitleCloseBtnButton,
  ModalContainerFooterButton,
  StyledImg, RowModalContainer,
  ModalContainerHeader } from 'utils/style/Modals' 
import { StyledLink } from 'utils/style/GlobalStyle';
import { playerStatistics } from 'utils/datas/PlayerStatistics'
import PlayerStatisticsModal from 'components/Modal/PlayerStatistics/PlayerStatisticsModal'
import PlayerPalmaresModal from 'components/Modal/Player/PlayerPalmaresModal'
import { useQuery } from 'react-query';
import { requestOptions, baseUrl } from 'utils/config/QueryConfig';
import styled from 'styled-components';
import colors from 'utils/style/colors';
import Header from "components/Header";
import Footer from "components/Footer";
import {
    CardContainer,
    StyledLinkCard,
    CardNameTeamOrPlayer,
    InfoCardContainer,
    ButtonSiteContainer,
    ButtonSite
  } from "utils/style/GlobalStyle";

const fetchPlayerDatas = async (playerId) => {
    const response = await fetch(`${baseUrl}/players?id=${playerId}&season=2022`, requestOptions) 
    
    return await response.json()
}
const LinkModal = styled(StyledLink)`
  color: ${colors.flowerblue};
  &:hover{
    color: ${colors.modals};
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
  color: ${colors.primary};
`;

export default function PlayerCivility() {
    const [openModalStatistic, setOpenModalStatistic] = useState(false)
    const [openModalPalmaresPlayer, setOpenModalPalmaresPlayer] = useState(false)
  
    // const {isLoading, isError, data, error} = useQuery([playerId], () => fetchPlayerDatas(playerId))
  
    //const playerStatistics = data !== undefined ? data.response : []
  
    // if(isError) {
    //     return <div>Erreur: { error.message }</div>
    // }
  
    // if(isLoading) {
    //     return <div>Chargement...</div>
    // }
  
    return (
      <>
        {openModalStatistic &&
          <PlayerStatisticsModal  closeModalStatistics={setOpenModalStatistic} playerStatistic={playerStatistics} /> //playerStatistic={playerStatistics}
        }
        {openModalPalmaresPlayer &&
          <PlayerPalmaresModal  closeModalPalmaresPlayer={setOpenModalPalmaresPlayer} /> 
        }
        <Header />
        <CardContainer>
            <H1Container>{playerStatistics[0].player.name}</H1Container>
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
                <ButtonSiteContainer>
                    <LinkModal onClick={() => {
                        setOpenModalPalmaresPlayer(true)
                    }}
                    >
                        <ButtonSite>Palmares</ButtonSite>
                    </LinkModal>
                    <LinkModal onClick={() => {
                            setOpenModalStatistic(true)
                        }}
                    >
                        <ButtonSite>Statistiques</ButtonSite>
                    </LinkModal>
                </ButtonSiteContainer>
            </CardContainer>
        {/* <ModalBackground>
          <ModalContainer>
         
            
          </ModalContainer>
        </ModalBackground> */}
        <Footer />
      </>
  )
}