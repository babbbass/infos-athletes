import React, { useContext } from "react"
import { useParams } from "react-router"
import { requestOptions, baseNbaUrl } from "utils/config/QueryConfig"
import RequestsLimit from "components/Error/RequestsLimit"
import { useQuery } from "react-query"
import { ThemeContext } from "utils/Context/Context"
import { players } from "utils/datas/Nba/players"
import { StyledImg } from "utils/style/GlobalStyle"
import styled from "styled-components"
import colors from "utils/style/colors"
import {
  CardImgContainer,
  CardContainer,
  InfoCardContainer,
  CardNameTeamOrPlayer,
  StyledLinkCard,
} from "components/Card/globalStyleCard"

const fetchNbaSquad = async (teamId, yearSelected) => {
  const response = await fetch(
    `${baseNbaUrl}/players?team=${teamId}&season=${yearSelected}`,
    requestOptions
  )

  return await response.json()
}

const NameCardPlayer = styled(CardNameTeamOrPlayer)`
  height: 20%;
  margin-bottom: 5px;
  align-self: center;
`
const HeaderBody = styled.div`
  display: flex;
  text-align: center;
  padding: 12px 0;
`
const LeaguePagesLink = styled(StyledLinkCard)`
  color: #000;
  &:hover {
    color: #bbb;
  }
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

export default function Squad() {
  const { teamId } = useParams()
  const { yearSelected, teamName } = useContext(ThemeContext)

  // const { isLoading, isError, data, error } = useQuery(
  //   [teamId, [teamId, yearSelected]],
  //   () => fetchNbaSquad(teamId, yearSelected)
  // )
  // const players = data !== undefined ? data.response : []

  // if (isError) {
  //   return <div>Erreur: {error.message}</div>
  // }

  // if (isLoading) {
  //   return <div>Chargement...</div>
  // }

  // if (data.errors && data.errors.length !== 0) {
  //   return <RequestsLimit />
  // }

  return (
    <>
      <HeaderBody>
        <LeaguePagesLink to={`/nba`}>Nba</LeaguePagesLink>
        {/* <LeaguePagesLink to={`/palmares/${teamId}`}>Palmarès</LeaguePagesLink> */}
      </HeaderBody>
      <H1Container>
        Joueur {teamName}
        <br />
      </H1Container>
      <CardContainer>
        {players.map((player, index) => (
          <InfoCardContainer key={`${player.id}-${index}`}>
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
              <div>College: {player.college}</div>
              <div>Numéro: {player.leagues.standard.jersey}</div>
              <div>POSTE: {player.leagues.standard.pos}</div>
            </StyledLinkCard>
          </InfoCardContainer>
        ))}
      </CardContainer>
    </>
  )
}
