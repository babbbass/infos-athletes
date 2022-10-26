import styled from 'styled-components'
import colors from '../../Utils/style/colors'
import {BrowserRouter as Router, Link} from 'react-router-dom'

const Wrapper = styled.section`
  padding: 1em;
  display: flex;
  flex-wrap: no-wrap;
  flex-direction: column;
  justify-content: left;
  background: #99CBFF;
  height: 80px;
`;

const TitleContainer = styled.div`
  width: 100%;
  margin-bottom: 8px;
  font-size: 2.5em;
  color: #fff;
  font-style: italic;
`;

const LinkContainer = styled.div`
  width: 100%;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  margin 0 15px;
  font-style: italic;
  color: ${colors.primary};
  &:hover{
    color: #fff
  } 
`;

export default function Banner() {
    
    return (
        <Wrapper>
            <TitleContainer>Infos Athletes</TitleContainer>
            <LinkContainer>
              <StyledLink to="/">
                  Accueil
              </StyledLink>
              <StyledLink to="/top-scorers">
                  Top scorers
              </StyledLink>
              <StyledLink>
                  Equipes
              </StyledLink>
            </LinkContainer>
        </Wrapper>
    )
}