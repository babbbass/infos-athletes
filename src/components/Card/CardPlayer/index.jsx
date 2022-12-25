import React from "react"
import { useParams } from "react-router-dom"
import {
  CardImgContainer,
  CardContainer,
  Card,
  StyledLinkCard,
} from "components/Card/globalStyleCard"
import { StyledImg } from "utils/style/GlobalStyle"
import { NameCardPlayer, H1NbaSquad } from "./styleCardPlayer"
import { useSelector } from "react-redux"
import {
  StyledImgNbaLogo,
  H1NbaContainer,
} from "components/Card/CardTeams/cardTeamStyle"
import nbaLogo from "utils/assets/nba-logo.svg"

export default function CardPlayer({ players }) {
  const { teamName } = useParams("teamName")
  const activeMenu = useSelector((state) => state.activeMenu)
  return (
    <>
      <CardContainer active={activeMenu}>
        <H1NbaContainer>
          <StyledImgNbaLogo src={nbaLogo} />
          <H1NbaSquad>{teamName}</H1NbaSquad>
        </H1NbaContainer>
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
