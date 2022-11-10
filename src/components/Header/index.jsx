import styled from "styled-components"
import colors from "../../utils/style/colors"

const Wrapper = styled.header`
  height: 80px;
  padding: 1em;
  display: flex;
  flex-wrap: no-wrap;
  flex-direction: column;
  justify-content: left;
  background: ${colors.DarkBackgroundSiteColor};
`

const TitleContainer = styled.div`
  width: 100%;
  margin-bottom: 13px;
  font-size: 1.9em;
  font-style: italic;
  color: ${colors.whitesmoke};
  text-align: center;
`

const LinkContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const StyledLink = styled.a`
  text-decoration: none;
  margin 0 15px;
  font-style: italic;
  color: ${colors.whitesmoke};
  &:hover{
    text-decoration: underline;
  } 
`

export default function Header() {
  return (
    <Wrapper>
      <TitleContainer>INFOS ATHLETES</TitleContainer>
      <LinkContainer>
        <StyledLink href='/'>Accueil</StyledLink>
        <StyledLink href='/prochains-matchs'>Matchs</StyledLink>
        <StyledLink href='/nba'>Nba</StyledLink>
      </LinkContainer>
    </Wrapper>
  )
}
