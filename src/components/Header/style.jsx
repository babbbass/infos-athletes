import styled from "styled-components"
import colors from "../../utils/style/colors"

export const Wrapper = styled.header`
  height: 80px;
  padding: 1em;
  display: flex;
  flex-wrap: no-wrap;
  flex-direction: column;
  background: ${colors.slate};
  justify-content: left;
`

export const TitleContainer = styled.div`
  width: 100%;
  margin-bottom: 13px;
  font-size: 1.9em;
  font-style: italic;
  color: ${colors.whitesmoke};
  text-align: center;
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
