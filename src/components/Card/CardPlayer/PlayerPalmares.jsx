import React, { useContext } from "react"
import { ThemeContext } from "utils/Context/Context"
import { playerPalmares } from "utils/datas/PlayerPalmares"
import styled from "styled-components"
import { CardRow, PlayerCardBody } from "components/Card/globalStyleCard"
import { PlayerStatisticContainer } from "components/Card/CardPlayer/styleCardPlayer"
import Button from "components/Button"

const CardBodyPalmares = styled(PlayerCardBody)`
  flex-basis: 33%;
  margin: 10px auto;
`
export default function PlayerPalmares({ linkButton }) {
  const { yearSelected, setYearSelected } = useContext(ThemeContext)

  return (
    <>
      <PlayerStatisticContainer>
        {playerPalmares.map((trophie, index) => (
          <CardBodyPalmares key={`${trophie.league}-${index}`}>
            <CardRow>Trophée: {trophie.league}</CardRow>
            <CardRow>Année: {trophie.season}</CardRow>
            <CardRow>Place: {trophie.place}</CardRow>
          </CardBodyPalmares>
        ))}
      </PlayerStatisticContainer>
      <Button linkButton={linkButton} />
    </>
  )
}
