import { Card, StyledLinkCard } from "components/Card/globalStyleCard"
import styled from "styled-components"

export const CardSquad = styled(Card)`
  min-height: 220px;
`

export const HeaderBody = styled.div`
  display: flex;
  text-align: center;
  padding: 12px 0;
`
export const LeaguePagesLink = styled(StyledLinkCard)`
  color: #000;
  &:hover {
    color: #bbb;
  }
`
