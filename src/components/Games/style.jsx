import styled from "styled-components"
import {
  StyledImg,
  StyledLink,
  colors,
  sizesFont,
  H1Style,
} from "utils/style/GlobalStyle"

export const H1Games = styled(H1Style)`
  font-size: 1rem;
  font-weight: 500;
`

export const GamesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: ${sizesFont.normal};
  transition: 1s cubic-bezier(0.73, 0.11, 0.67, 0.99);
  @media (max-width: 767px) {
    transform: translateY(-50px);
    ${({ active }) =>
      active &&
      `
      transform: translate(0);
  `};
  }
`
export const GameLink = styled(StyledLink)`
  color: ${colors.primary};
  &:hover {
    background: ${colors.backgroundHover};
    color: ${colors.primary};
  }
`
export const Game = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px 0;
`
export const TeamVisitors = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 5px;
`
export const TeamHome = styled(TeamVisitors)``

export const ImgTeamGame = styled(StyledImg)`
  width: 30px;
  margin: 0 0;
  margin-right: 15px;
`
export const TeamName = styled.span`
  width: 150px;
  @media (max-width: 500px) {
    margin-right: 5px;
    width: 120px;
    font-size: ${sizesFont.textSmartPhone};
  }
`
export const GameScore = styled.span`
  width: 30px;
  margin-right: 5px;
  font-weight: bold;
  font-size: ${sizesFont.textSmartPhone};
`
export const GameLineScore = styled.span`
  color: ${colors.middleGrey};
  font-style: italic;
  font-size: ${sizesFont.textSmartPhone};
`
export const WinnerTeam = styled.span`
  font-weight: bold;
`
export const StyledImgNbaLogo = styled.img`
  width: 5vw;
  margin-right: 10px;
  @media (max-width: 420px) {
    width: 8vw;
  }
`
export const H1NbaContainer = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  @media (max-width: 420px) {
    justify-content: center;
    padding-left: 0;
  }
`
