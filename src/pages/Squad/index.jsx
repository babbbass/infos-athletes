import { squad } from "utils/datas/Squads";
import Header from "components/Header";
import styled from "styled-components";
import {
  CardContainer,
  StyledLinkCard,
  StyledImg,
  CardNameTeamOrPlayer,
  InfoCardContainer,
} from "utils/style/GlobalStyle";
import Modal from "components/Modal/PlayerCivility";
import { useContext, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { baseUrl,requestOptions } from "utils/config/QueryConfig";
import colors from "utils/style/colors";
import { ThemeContext } from "utils/Context/Context";
import { squad as squadConfig } from "utils/config/squad";

const fetchTeamPlayers = async (teamId) => {
  const response = await fetch(
    `${baseUrl}/players/squads?team=${teamId}`,
    requestOptions
  );

  return await response.json();
};

const NameCardPlayer = styled(CardNameTeamOrPlayer)`
  height: 20%;
  margin-bottom: 5px;
  align-self: center;
`;
const HeaderBody = styled.div`
  display: flex;
  text-align: center;
  padding: 12px 0;
`;
const LeaguePagesLink = styled(StyledLinkCard)`
  color: #000;
  &:hover {
    color: #bbb;
  }
`;
const H1Container = styled.div`
  width: 90%;
  font-size: 2rem;
  font-style: italic;
  font-weight: bold;
  text-align: center;
  margin: 10px auto;
  border-bottom: 1px solid ${colors.primary};
  color: ${colors.primary};
`;
const H2container = styled(H1Container)`
  font-size: 1.6rem;
  width: 100%;
  border-bottom: none;
`;
export default function Squad() {
  const [openModal, setOpenModal] = useState(false);
  const [playerId, setPlayerId] = useState(0);
  const { teamId } = useParams();
  const { competitionId, competitionName, countryCode } =
    useContext(ThemeContext);
  
  // const {isLoading, isError, data, error} = useQuery([teamId],() => fetchTeamPlayers(teamId))
  // const squad = data !== undefined ? data.response : []

  // if((isError === false && data === undefined) || (data.errors.requests)) {
    //   return (
    //     <RequestsLimit />
    //   )
    // }   
  // if(isError) {
  //     return <div>Erreur: { error.message }</div>
  // }

  // if(isLoading) {
  //     return <div>Chargement...</div>
  // }

  const defenders = [];
  const goalkeepers = [];
  const midfielders = [];
  const attackers = [];

  squad[0].players.forEach((player) => {
    const position = player.position.toLowerCase();

    if (position === squadConfig.goalkeeper) {
      goalkeepers.push(player);
    }
    if (position === squadConfig.defender) {
      defenders.push(player);
    }
    if (position === squadConfig.midfielder) {
      midfielders.push(player);
    }
    if (position === squadConfig.attacker) {
      attackers.push(player);
    }
  });

  return (
    <div>
      <Header />
      {openModal && <Modal playerId={playerId} closeModal={setOpenModal} />}
      <HeaderBody>
        <LeaguePagesLink to={`/leagues/${countryCode}/${competitionId}`}>
          {competitionName}
        </LeaguePagesLink>
        <LeaguePagesLink to={`/palmares/${teamId}`}>Palmarès</LeaguePagesLink>
      </HeaderBody>
      <H1Container>
        Effectif <br />
        {squad[0].team.name}
      </H1Container>
      <CardContainer>
        <H2container>Gardiens</H2container>
        {goalkeepers.map((player, index) => (
          <InfoCardContainer key={`${player.id}-${index}`}>
            <StyledLinkCard to={`/player/${player.id}`}
              onClick={() => {
                setPlayerId(player.id);
              }}
            >
              <NameCardPlayer>{player.name}</NameCardPlayer>
              <StyledImg src={player.photo} alt={`${player.name}-pict`} />
              <div>Age: {player.age}</div>
              <div>Numéro: {player.number}</div>
            </StyledLinkCard>
          </InfoCardContainer>
        ))}
        <H2container>Défenseurs</H2container>
        {defenders.map((player, index) => (
          <InfoCardContainer key={`${player.id}-${index}`}>
            <StyledLinkCard to={`/player/${player.id}`}
              onClick={() => {
                setPlayerId(player.id);
              }}
            >
              <NameCardPlayer>{player.name}</NameCardPlayer>
              <StyledImg src={player.photo} alt={`${player.name}-pict`} />
              <div>Age: {player.age}</div>
              <div>Numéro: {player.number}</div>
            </StyledLinkCard>
          </InfoCardContainer>
        ))}
        <H2container>Milieux</H2container>
        {midfielders.map((player, index) => (
          <InfoCardContainer key={`${player.id}-${index}`}>
            <StyledLinkCard to={`/player/${player.id}`}
              onClick={() => {
                setPlayerId(player.id);
              }}
            >
              <NameCardPlayer>{player.name}</NameCardPlayer>
              <StyledImg src={player.photo} alt={`${player.name}-pict`} />
              <div>Age: {player.age}</div>
              <div>Numéro: {player.number}</div>
            </StyledLinkCard>
          </InfoCardContainer>
        ))}
        <H2container>Attaquants</H2container>
        {attackers.map((player, index) => (
          <InfoCardContainer key={`${player.id}-${index}`}>
            <StyledLinkCard to={`/player/${player.id}`}
              onClick={() => {
                setPlayerId(player.id);
              }}
            >
              <NameCardPlayer>{player.name}</NameCardPlayer>
              <StyledImg src={player.photo} alt={`${player.name}-pict`} />
              <div>Age: {player.age}</div>
              <div>Numéro: {player.number}</div>
            </StyledLinkCard>
          </InfoCardContainer>
        ))}
      </CardContainer>
    </div>
  );
}
