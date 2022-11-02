import { useQuery } from "react-query";
import { useContext, useState } from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { teams } from "utils/datas/Teams";
import colors from "utils/style/colors";
import {
  CardContainer,
  StyledLink,
  StyledLinkCard,
  StyledImg,
  CardNameTeamOrPlayer,
} from "utils/style/GlobalStyle";
import { baseUrl, requestOptions } from "utils/config/QueryConfig";
import { ThemeContext } from "utils/Context/Context";

const InfoCardContainer = styled.div`
  width: 25%;
  text-align: center;
  padding: 10px 20px 10px 20px;
  margin: 10px 0 10px 0;
  background: ${colors.backgroundLight};
  border-radius: 30px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
  @media (max-width: 570px) {
    width: 40%;
  }
  @media (max-width: 390px) {
    width: 30%;
  }
`;
const TeamHistory = styled.div`
  margin-bottom: 5px;
  font-size: 1rem;
  font-style: Italic;
  font-family: Georgia, serif;
`;

const SpanVenueTeam = styled.span`
  font-weight: bold;
`;
const HeaderBody = styled.div`
  text-align: center;
  padding: 12px 0;
`;
const LeaguePagesLink = styled(StyledLink)`
  color: #000;
  &:hover {
    color: #bbb;
  }
`;
const fetchCompetition = async (competitionId) => {
  const response = await fetch(
    `${baseUrl}/teams?league=${competitionId}&season=2022`,
    requestOptions
  );

  return await response.json();
};
export default function Leagues() {
  const { countryCode, competitionId } = useParams();
  //const {setCountryCode} =  useContext(ThemeContext)

  // const {isLoading, isError, data, error} = useQuery([competitionId],() => fetchCompetition(competitionId))
  // const teams = data !== undefined ? data.response : []

  // if(isError) {
  //     return <div>Erreur: { error.message }</div>
  // }

  // if(isLoading) {
  //     return <div>Chargement...</div>
  // }

  //setCountryCode(countryCode)
  return (
    <>
      <Header />
      <HeaderBody>
        <LeaguePagesLink to={`/classement/${countryCode}/${competitionId}`}>
          Classement
        </LeaguePagesLink>
        <LeaguePagesLink to={`/meilleurs-buteurs/${countryCode}/${competitionId}`}>
          Top buteurs
        </LeaguePagesLink>
        <LeaguePagesLink
          to={`/meilleurs-passeurs/${countryCode}/${competitionId}`}
        >
          Meilleurs passeurs
        </LeaguePagesLink>
      </HeaderBody>

      <CardContainer>
        {teams.map((team) => (
          <InfoCardContainer key={team.team.id}>
            <StyledLinkCard to={`/team/${team.team.id}`}>
              <CardNameTeamOrPlayer>{team.team.name}</CardNameTeamOrPlayer>
              <StyledImg src={team.team.logo} alt={`${team.team.name}-logo`} />
              <TeamHistory>Fondé en {team.team.founded}</TeamHistory>
              <TeamHistory>
                <SpanVenueTeam>Stade:</SpanVenueTeam> {team.venue.name}
              </TeamHistory>
              <TeamHistory>
                <SpanVenueTeam>Ville:</SpanVenueTeam> {team.venue.city}
              </TeamHistory>
            </StyledLinkCard>
          </InfoCardContainer>
        ))}
      </CardContainer>
      <Footer />
    </>
  );
}
