import React, {useContext} from 'react'
import {ThemeContext} from 'utils/Context/Context'
import {PlayerStatsModalBackground, PlayerStatsModalContainer,
    PlayerStatsModalContainerHeader, ModalContainerFooter, ModalContainerTitle,
    ModalContainerFooterButton, TitleCloseBtnButton,
    StyledSelect, PlayerStatsModalContainerBody, RowStatsModalContainer,
    ModalContainerCard, RowModalData, RowModalTitle } from '../PlayerStatistics/PlayerStatisticsStyle'
import { playerPalmares } from 'utils/datas/PlayerPalmares'    
import styled from 'styled-components'

const RowStatsModalContainerPalamares = styled(RowStatsModalContainer)`
    width: auto;
    text-align: center;
`
const ModalContainerCardPalmares = styled(ModalContainerCard)`
    width: 50%;
    @media (max-width: 600px) {
        width: 100%;
    }
`
const PlayerStatsModalContainerHeaderPalmares = styled(PlayerStatsModalContainerHeader)`
    background: none;
    color: #000;
`
const PlayerStatsModalContainerBodyPalmares = styled(PlayerStatsModalContainerBody)`
    flex-direction: column;
    box-shadow: none;
`
const RowModalTitlePalmares = styled(RowModalTitle)`
    width: 12%;
    font-weight: 600;
`
const RowModalDataPalmares = styled(RowModalData)` 
    width: 64%;
    margin: 0 0 0 5%;
`

export default function PlayerPalmaresModal({closeModalPalmaresPlayer}) {
    const {yearSelected, setYearSelected} = useContext(ThemeContext) 
    // const [yearStatistics, setYearStatistics] = useState(yearSelected)
   
    return (
        <div>
            <PlayerStatsModalBackground>
                <PlayerStatsModalContainer>
                    <PlayerStatsModalContainerHeaderPalmares>
                        <ModalContainerTitle>Palmares</ModalContainerTitle>
                    </PlayerStatsModalContainerHeaderPalmares>
                    <PlayerStatsModalContainerBodyPalmares>
                        {playerPalmares.map((trophie) => (
                            <ModalContainerCardPalmares>
                                <RowStatsModalContainerPalamares>
                                    <div><RowModalTitlePalmares>Trophée:</RowModalTitlePalmares><RowModalDataPalmares>{trophie.league}</RowModalDataPalmares></div>
                                    <div><RowModalTitlePalmares>Année:</RowModalTitlePalmares><RowModalDataPalmares>{trophie.season}</RowModalDataPalmares></div>
                                    <div><RowModalTitlePalmares>Place:</RowModalTitlePalmares><RowModalDataPalmares>{trophie.place}</RowModalDataPalmares></div>
                                </RowStatsModalContainerPalamares>
                            </ModalContainerCardPalmares>
                        ))}
                    </PlayerStatsModalContainerBodyPalmares>
                    <ModalContainerFooter>
                        <ModalContainerFooterButton>
                            <TitleCloseBtnButton
                                onClick={() => {
                                closeModalPalmaresPlayer(false)
                                }}
                            >Fermer
                            </TitleCloseBtnButton>
                        </ModalContainerFooterButton>
                    </ModalContainerFooter>
                </PlayerStatsModalContainer>
            </PlayerStatsModalBackground>
        </div>
        
    )

}