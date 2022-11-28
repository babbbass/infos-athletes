import { useQuery } from "react-query"
import { baseUrl, requestOptions } from "utils/config/QueryConfig"
import {
  Title,
  Wrapper,
  ImgContainerCarroussel,
  StyledLink,
  TitleBlocSpan,
  WrapperHeader,
  ImgWrapperCarroussel,
  ImgHomeCarroussel,
  ButtonSiteContainer,
  ButtonHome,
  ButtonHomeNba,
  TitleBloc,
  WrapperBody,
  WrapperBodyBlock,
  WrapperBodyBlockText,
  WrapperBodyImg,
} from "./HomeStyle"
import Flag from "components/Flag"

const fetchCountries = async () => {
  const response = await fetch(`${baseUrl}/countries`, requestOptions)
  return await response.json()
}

function Home() {
  const nbaLink = "nba"
  const footballLink = "football"
  const styleWrapper = { "--nbCards": 6, animationDelay: "-1s" }

  return (
    <>
      <Wrapper>
        <WrapperHeader>
          <ImgContainerCarroussel>
            <ImgWrapperCarroussel style={styleWrapper}>
              <ImgHomeCarroussel
                src='/mbappe.png'
                style={{ "--cardIndex": 0 }}
              />
              <ImgHomeCarroussel
                src='/morant.png'
                style={{ "--cardIndex": 1 }}
              />
              <ImgHomeCarroussel
                src='/debruyne.png'
                style={{ "--cardIndex": 2 }}
              />
              <ImgHomeCarroussel
                src='/towns.png'
                style={{ "--cardIndex": 3 }}
              />
              <ImgHomeCarroussel
                src='/curry.png'
                style={{ "--cardIndex": 4 }}
              />
              <ImgHomeCarroussel
                src='/messi.png'
                style={{ "--cardIndex": 5 }}
              />
            </ImgWrapperCarroussel>
          </ImgContainerCarroussel>
          <TitleBloc>
            <Title>Choisis ton sport</Title>
            <TitleBlocSpan>
              trouves toutes les informations sur ton équipe et tes joueurs
              préférés.
            </TitleBlocSpan>
          </TitleBloc>
          <ButtonSiteContainer>
            <StyledLink to={`/${footballLink}`}>
              <ButtonHome>Foot</ButtonHome>
            </StyledLink>
            <StyledLink to={`/${nbaLink}`}>
              <ButtonHomeNba>NBA</ButtonHomeNba>
            </StyledLink>
          </ButtonSiteContainer>
        </WrapperHeader>
        <WrapperBody>
          <WrapperBodyBlock>
            <StyledLink to={``}>
              <WrapperBodyBlockText>meilleurs buteurs</WrapperBodyBlockText>
            </StyledLink>
            <WrapperBodyImg src='/benzema.png' alt={`benzema-logo`} />
          </WrapperBodyBlock>
          <WrapperBodyBlock>
            <StyledLink to={`/nba/matchs`}>
              <WrapperBodyBlockText>Matchs du jour</WrapperBodyBlockText>
            </StyledLink>
            <WrapperBodyImg src='/durant.png' alt={`durant-logo`} />
          </WrapperBodyBlock>
        </WrapperBody>
        <Flag />
      </Wrapper>
    </>
  )
}

export default Home
