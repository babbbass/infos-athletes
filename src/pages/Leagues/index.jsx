import {useQuery} from 'react-query'
import {useContext, useEffect, useState} from 'react'
import Banner from "../../Components/Banner";
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components'
import { teams } from '../../Utils/datas/Teams';
import colors from '../../Utils/style/colors';
import { CardContainer, StyledLink, StyledLinkCard, StyledImg, CardNameTeamOrPlayer } from '../../Utils/style/GlobalStyle';
import { requestOptions } from "../../Utils/config/QueryConfig"
import { ThemeContext } from "../../Utils/Context/Context";

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
`
const TeamHistory = styled.div`
    margin-bottom: 5px;
    font-size: 1rem;
    font-style: Italic;
    font-family: Georgia, serif;
`

const SpanVenueTeam = styled.span`
    font-weight: bold;
`
const HeaderBody = styled.div`
    text-align: center;
    padding: 12px 0;
`
const LeaguePagesLink = styled(StyledLink)`
    color: #000;
    &:hover{
        color: #bbb
    }
`
const fetchCompetition = async (competitionId) => {
    console.log(competitionId)
    //const id = parseInt(idCompetition)
    const response = await fetch(`https://v3.football.api-sports.io/teams?league=${competitionId}&season=2022`, requestOptions) 
    
    return await response.json()
}
export default function Leagues() {
    const { countryCode } = useParams()

    // const competitions = [
    //     {
    //         countryCode: "GB",
    //         idCompetition: 39
    //     },
    //     {
    //         countryCode: "DE",
    //         idCompetition: 78
    //     },
    //     {
    //         countryCode: "FR",
    //         idCompetition: 61
    //     },
    //     {
    //         countryCode: "ES",
    //         idCompetition: 140
    //     }
    // ]

    const {setCompetitionId} = useContext(ThemeContext)
    const {competitionId} = useParams()
    
    //const idComp = competitions.find(competition => competition.countryCode === countryCode)
    //const {idCompetition} = idComp
    //console.log(idCompetition)

    // const {isLoading, isError, data, error} = useQuery([competitionId],() => fetchCompetition(competitionId))
    // console.log(data)
    // const teams = data !== undefined ? data.response : []
    // console.log(teams)
    

    // if(isError) {
    //     return <div>Erreur: { error.message }</div>
    // }

    // if(isLoading) {
    //     return <div>Chargement...</div>
    // }

    return (
        <>
            <Banner />
            <HeaderBody>
                <LeaguePagesLink to={`/top-scorers/${competitionId}`}>Top buteurs</LeaguePagesLink>
                <LeaguePagesLink to={`/meilleurs-passeurs/${competitionId}`}>Meilleurs passeurs</LeaguePagesLink>
            </HeaderBody>
            
            <CardContainer>         
                {teams.map((team) => (
                    <InfoCardContainer key={team.team.id} >
                        <StyledLinkCard to={`/team/${team.team.id}`}>
                            <CardNameTeamOrPlayer>{team.team.name}</CardNameTeamOrPlayer>
                            <StyledImg src={team.team.logo} alt={`${team.team.name}-logo`} />
                            <TeamHistory>Fondé en {team.team.founded}</TeamHistory>
                            <TeamHistory><SpanVenueTeam>Stade:</SpanVenueTeam> {team.venue.name}</TeamHistory>
                            <TeamHistory><SpanVenueTeam>Ville:</SpanVenueTeam> {team.venue.city}</TeamHistory>
                        </StyledLinkCard>
                    </InfoCardContainer>
                ))}
            </CardContainer>
        </>
    )
}