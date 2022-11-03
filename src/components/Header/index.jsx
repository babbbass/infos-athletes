import styled from "styled-components";
import colors from "../../utils/style/colors";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Wrapper = styled.header`
  height: 80px;
  padding: 1em;
  display: flex;
  flex-wrap: no-wrap;
  flex-direction: column;
  justify-content: left;
  background: #99cbff;
`;

const TitleContainer = styled.div`
  width: 100%;
  margin-bottom: 13px;
  font-size: 1.9em;
  font-style: italic;
  color: #fff;
  text-align: center;
`;

const LinkContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin 0 15px;
  font-style: italic;
  color: ${colors.primary};
  &:hover{
    color: #fff
  } 
`;

export default function Header() {
  return (
    <Wrapper>
      <TitleContainer>INFOS ATHLETES</TitleContainer>
      <LinkContainer>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/prochains-matchs">Matchs</StyledLink>
        <StyledLink>Equipes</StyledLink>
      </LinkContainer>
    </Wrapper>
  );
}
