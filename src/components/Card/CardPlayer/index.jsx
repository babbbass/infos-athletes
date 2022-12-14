import React from "react"
import { useParams } from "react-router-dom"
import { foot } from "utils/config/config"
import {
  CardImgContainer,
  CardContainer,
  Card,
  StyledLinkCard,
} from "components/Card/globalStyleCard"
import { StyledImg } from "utils/style/GlobalStyle"
import { H1Container, NameCardPlayer } from "./styleCardPlayer"
import { useSelector } from "react-redux"

export default function CardPlayer({ players }) {
  const { teamName } = useParams("teamName")
  const activeMenu = useSelector((state) => state.activeMenu)
  return (
    <>
      <CardContainer active={activeMenu}>
        <H1Container>{teamName}</H1Container>
        {players.map((player, index) => (
          <Card key={`${player.id}-${index}`}>
            <StyledLinkCard to={`/basket/player/${player.id}`}>
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
