import { Wrapper, LinkContainer, StyledLink, TitleContainer } from "./style"

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
