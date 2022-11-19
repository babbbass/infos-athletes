import styled from "styled-components"
import colors from "utils/style/colors"
import { Link } from "react-router-dom"
import { StyledLink } from "utils/style/GlobalStyle"

export const CardContainer = styled.section`
  display: flex;
  position: relative;
  perspective: 2000px;
  persepectuve-origin: top;
  justify-content: space-evenly;
  width: 100%;
  flex-wrap: wrap;
`
export const Card = styled.div`
  width: 25%;
  min-height: 225px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0 10px 0;
  position: relative;
  height: 100%;
  background: ${colors.slate};
  border: 2px solid ${colors.warriors};
  border-radius: 30px;
  &:hover {
    cursor: pointer;
    box-shadow: 4px 4px 12px ${colors.slate};
  }
  @media (max-width: 570px) {
    width: 40%;
  }
  @media (max-width: 390px) {
    width: 30%;
  }
`
export const PlayerCardBody = styled.div`
  flex-basis: 50%;
`
export const CardRow = styled.span`
  display: block;
  color: ${colors.warriors};
`

export const CardFront = styled.div`
  color: ${colors.warriors};
  width: 100%;
  padding: 10px 0px;
  backface-visibility: hidden;
  position: absolute;
  -webkit-backface-visibility: hidden;
`
export const CardBack = styled(CardFront)`
  transform: rotateY(180deg);
  position: relative;
`
export const HeaderBody = styled.nav`
  width: 100%;
  min-height: 10vw;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #cfcfcf;
  @media (max-width: 767px) {
    z-index: -1;
    flex-direction: column;
    opacity: 0;
    transform: translateY(-100%);
    transition: 0.8s cubic-bezier(0.73, 0.11, 0.67, 0.99);
    ${({ active }) =>
      active &&
      `
      transform: translate(0);
      opacity: 1;
      z-index: 2;
    `};
  } ;
`
export const CardImgContainer = styled.div`
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60%;
`
export const CardNameTeamOrPlayer = styled.div`
  margin-bottom: 5px;
  position: relative;
  top: 5px;
  align-self: center;
  font-size: 1.2rem;
  font-weight: bold;
  @media (max-width: 390px) {
    height: 20%;
    margin-bottom: auto;
    font-size: 1.1rem;
  }
`
export const AdditionnalDataContainer = styled.div``
export const StyledLinkCard = styled(Link)`
  text-decoration: none;
  position: relative;
  width: 100%;
  height: 100%;
  color: ${colors.warriors};
  font-style: italic;
`
export const H1CardContainer = styled.div`
  width: 90%;
  font-size: 2rem;
  font-style: italic;
  font-weight: bold;
  text-align: center;
  margin: 10px auto;
  border-bottom: 1px solid ${colors.primary};
  color: ${colors.primary};
`
export const H2CardContainer = styled(H1CardContainer)`
  font-size: 1.6rem;
  width: 100%;
  border-bottom: none;
`
