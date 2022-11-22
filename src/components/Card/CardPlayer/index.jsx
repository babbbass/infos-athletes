import React, { useContext } from "react"
import { ThemeContext } from "utils/Context/Context"
import {
  CardImgContainer,
  CardContainer,
  Card,
  CardNameTeamOrPlayer,
  StyledLinkCard,
} from "components/Card/globalStyleCard"
import { StyledImg } from "utils/style/GlobalStyle"
import styled from "styled-components"
import colors from "utils/style/colors"

const NameCardPlayer = styled(CardNameTeamOrPlayer)`
  height: 20%;
  margin-bottom: 5px;
  align-self: center;
`
const H1Container = styled.div`
  width: 90%;
  font-size: 2rem;
  font-style: italic;
  font-weight: bold;
  text-align: center;
  margin: 10px auto;
  border-bottom: 1px solid ${colors.primary};
  color: ${colors.primary};
`
export default function CardPlayer({ players }) {
  const { teamName } = useContext(ThemeContext)
  return (
    <>
      <H1Container>{teamName ? teamName : `Joueurs`}</H1Container>
      <CardContainer>
        {players.map((player, index) => (
          <Card key={`${player.id}-${index}`}>
            <StyledLinkCard
              to={`/player/${player.id}`}
              onClick={() => {
                //           setPlayerId(player.id);
              }}
            >
              <NameCardPlayer>{`${player.firstname} ${player.lastname}`}</NameCardPlayer>
              <CardImgContainer>
                <StyledImg
                  src={
                    player.photo !== undefined
                      ? player.photo
                      : `/defaultBasketPicture.jpeg`
                  }
                  alt={`${player.name}-pict`}
                />
              </CardImgContainer>
              <div>Taille: {player.height.meters}m</div>
              <div>Numéro: {player.leagues.standard.jersey}</div>
              <div>POSTE: {player.leagues.standard.pos}</div>
            </StyledLinkCard>
          </Card>
        ))}
      </CardContainer>
    </>
  )
}
