import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import colors from "../../utils/style/colors"

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;
    flex-wrap: wrap;
`
export const InfoCardContainer = styled.div`
    width: 25%;
    height: fit-content;
    text-align: center;
    padding: 10px 10px 10px 10px;
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
        width: 40%;
    }
`
export const StyledLinkCard = styled(Link)`
    text-decoration: none;
    width: 100%;
    color: #000;
    font-style: italic;
`

export const StyledImg = styled.img`
    @media (max-width: 390px) {
        width: 105px;
    }
`

export const CardNameTeamOrPlayer = styled.div`
    margin-bottom: 5px;
    align-self: center;
    font-size: 1.2rem;
    font-weight: bold;
    @media (max-width: 390px) {
        height: 15%;
        margin-bottom: auto;
        font-size: 1.1rem;
    }
`
export const StyledLink = styled(Link)`
    text-decoration: none;
    margin 0 15px;
    font-style: italic;
    color: #bbb;
    &:hover{
        color: #fff
    }
`
export const ButtonSiteContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    margin: 10px 0; 
`
export const ButtonSite = styled.button`
    background-color: ${colors.blueLightColor};
    width: auto;
    border-radius: 26px;
    transition-duration: 0.4s;
    border: none;
    color: ${colors.primary};
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 0.9rem;
    font-style: italic;
    font-weight: 500;
    margin: 4px 2px;
    cursor: pointer;
    &:hover {
        background-color: ${colors.primary};
        color: #fff
    }
`
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Mont-Serrat, Helvetica, Sans-Serif;
  }
`

export default GlobalStyle