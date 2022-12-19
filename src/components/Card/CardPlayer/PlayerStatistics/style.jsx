import styled from "styled-components"
import { H1Container } from "components/Card/CardPlayer/styleCardPlayer"

export const TitleCompetitionStatsPlayer = styled(H1Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  height: 10vh;
  margin: 20px auto;
`

export const Img = styled.img`
  width: 120px;
  @media (max-width: 330px) {
    width: 105px;
  }
`
export const ImgContainer = styled.div`
  width: 120px;
  height: 120px;
  margin: 5px auto;
  display: flex;
  align-items: center;
  @media (max-width: 330px) {
    width: 105px;
    height: 105px;
  }
`
