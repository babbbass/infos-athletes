import styled from "styled-components"
import { colors } from "utils/style/GlobalStyle"
import { StyledImg, StyledLink } from "utils/style/GlobalStyle"

export const DualOpponents = styled.div`
  display: flex;
  justify-content: center;
`
export const DualOpponentHome = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 30%;
  margin 5px auto;
`
export const LinkTeam = styled(StyledLink)`
  color: ${colors.primary};
`
export const DualOpponentVisitor = styled(DualOpponentHome)``
export const DualOpponentScore = styled.div`
  display: flex;
  width: 30%;
  align-items: center;
  justify-content center;   
  margin 10px 10px;
  font-weight: bold;
  @media (max-width: 370px) {
    margin 10px auto;
  }
`
export const LogoTeamContainer = styled.div`
  min-height: 125px;
`
export const ImgTeamGameStatistics = styled(StyledImg)`
  width: 80px;
`
