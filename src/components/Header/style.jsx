import styled from "styled-components"
import { colors } from "utils/style/GlobalStyle"

export const Wrapper = styled.header`
  padding: 1em;
  display: flex;
  flex-wrap: no-wrap;
  flex-direction: column;
  background: ${colors.whitesmoke};
  justify-content: left;
`

export const TitleContainer = styled.div`
  width: 100%;
  margin-bottom: 13px;
  font-size: 1.9em;
  color: ${colors.primary};
  text-align: center;
  font-weight: 600;
`

export const LinkContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const StyledLink = styled.a`
  text-decoration: none;
  margin 0 15px;
  font-style: italic;
  color: ${colors.whitesmoke};
  &:hover{
    text-decoration: underline;
  } 
`
