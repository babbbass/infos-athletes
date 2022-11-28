import styled from "styled-components"
import { CardRow, PlayerCardBody } from "components/Card/globalStyleCard"
import { colors } from "utils/style/GlobalStyle"

export const CardBodyPalmares = styled(PlayerCardBody)`
  flex-basis: 33%;
  margin: 10px auto;
  @media (max-width: 425px) {
    flex-basis: 45%;
  }
`
export const RowTrophie = styled(CardRow)`
  text-transform: uppercase;
  color: ${colors.primary};
  font-weight: 600;
`
