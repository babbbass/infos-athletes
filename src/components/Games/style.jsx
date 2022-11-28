import styled from "styled-components"
import {
  StyledImg,
  StyledLink,
  colors,
  sizesFont,
} from "utils/style/GlobalStyle"

export const GamesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: ${sizesFont.normal};
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
export const DualOpponents = styled.div`
  display: flex;
  justify-content: center;
`
export const DualOpponentHome = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin 5px auto;
`
export const DualOpponentVisitor = styled(DualOpponentHome)``
export const DualOpponentScore = styled.div`
  display: flex;
  align-items: center;  
  margin 10px 10px;
  font-weight: bold;
  @media (max-width: 370px) {
    margin 10px auto;
  }
`
export const ImgTeamGameStatistics = styled(StyledImg)`
  width: 80px;
`