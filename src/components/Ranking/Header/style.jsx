import styled from "styled-components"
import { colors, H1Style, sizesFont } from "utils/style/GlobalStyle"

export const H1Ranking = styled(H1Style)`
  font-size: 1.3rem;
  display: block;
`

export const H1RankingContainer = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  //   padding-left: 80px;
  @media (max-width: 420px) {
    justify-content: center;
    padding-left: 0;
  }
`

export const StyledImgLogoRanking = styled.img`
  width: 5vw;
  margin-right: 10px;
  @media (max-width: 420px) {
    width: 25vw;
  }
`

export const RankingType = styled.span`
  font-size: ${sizesFont.normal};
  color: ${colors.flowerblue};
  margin-top: 15px;
  display: block;
`
