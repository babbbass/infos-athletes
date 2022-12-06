import React from "react"
import { useParams } from "react-router-dom"
import { foot } from "utils/config/config"
import {
  CardImgContainer,
  CardContainer,
  Card,
  CardNameTeamOrPlayer,
  StyledLinkCard,
} from "components/Card/globalStyleCard"
import { StyledImg, colors } from "utils/style/GlobalStyle"
import styled from "styled-components"

const NameCardPlayer = styled(CardNameTeamOrPlayer)`
  height: 20%;
  margin-bottom: 5px;
  align-self: center;
  font-size: 0.8rem;
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
  const { teamName } = useParams("teamName")
  return (
    <>
      <H1Container>{teamName}</H1Container>
      <CardContainer>
        {players.map((player, index) => (
          <Card key={`${player.id}-${index}`}>
            <StyledLinkCard
              to={`/${foot}/player/${player.id}`}
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
