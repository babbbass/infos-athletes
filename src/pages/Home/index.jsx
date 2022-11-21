import { countries } from "utils/datas/Countries"
import { useContext } from "react"
import { useQuery } from "react-query"
import { baseUrl, requestOptions } from "utils/config/QueryConfig"
import { ThemeContext } from "utils/Context/Context"
import {
  Title,
  Wrapper,
  FlagContainer,
  ImgContainerCarroussel,
  ImgContainer,
  LinkContainer,
  CountryFlag,
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
import { H2Style, H3Style } from "utils/style/GlobalStyle"

const fetchCountries = async () => {
  const response = await fetch(`${baseUrl}/countries`, requestOptions)
  return await response.json()
}

function Home() {
  const styleWrapper = { "--nbCards": 6, animationDelay: "-1s" }
  const { setCompetitionName, setCountryCode, setCompetitionId } =
    useContext(ThemeContext)
  // const { isLoading, isError, data, error } = useQuery(
  //   "countries",
  //   fetchCountries
  // )

  // if((isError === false && data === undefined) || (data.errors.requests)) {
  //   return (
  //     <RequestsLimit />
  //   )
  // }
  // if (isError) {
  //   return <div>Erreur: {error.message}</div>
  // }

  // if (isLoading) {
  //   return <div>Chargement...</div>
  // }
  // const allCountries = data !== undefined ? data.response : []

  // // const countries = allCountries.filter(
  //   // (country) =>
  //   // country.name === "England" ||
  // // country.name === "France" ||
  // // country.name === "Germany" ||
  //     // country.name === "Spain"
  // )

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
              Et trouves les toutes informations sur ton équipe et tes joueurs
              préférés.
            </TitleBlocSpan>
          </TitleBloc>
          <ButtonSiteContainer>
            <StyledLink to={`/`}>
              <ButtonHome>foot</ButtonHome>
            </StyledLink>
            <StyledLink to={`/nba`}>
              <ButtonHomeNba>NBA</ButtonHomeNba>
            </StyledLink>
          </ButtonSiteContainer>
        </WrapperHeader>
        <WrapperBody>
          <WrapperBodyBlock>
            <WrapperBodyBlockText>meilleurs buteurs</WrapperBodyBlockText>
            <WrapperBodyImg src='/benzema.png' alt={`benzema-logo`} />
          </WrapperBodyBlock>
          <WrapperBodyBlock>
            <WrapperBodyBlockText>top scoreurs Nba</WrapperBodyBlockText>
            <WrapperBodyImg src='/durant.png' alt={`durant-logo`} />
          </WrapperBodyBlock>
        </WrapperBody>
        <TitleBloc>
          <H2Style>Les meilleurs championnats</H2Style>
        </TitleBloc>
        <FlagContainer>
          {countries.map((country, index) => (
            <LinkContainer key={`${country.code} - ${index}`}>
              <StyledLink
                to={`/leagues/${country.code}/${country.id}`}
                onClick={() => {
                  setCompetitionName(country.ligue)
                  setCountryCode(country.code)
                  setCompetitionId(country.id)
                }}
              >
                <H3Style>{country.name}</H3Style>
                <ImgContainer>
                  <CountryFlag
                    src={country.flag}
                    alt={`${country.name}-logo`}
                  />
                </ImgContainer>
              </StyledLink>
            </LinkContainer>
          ))}
        </FlagContainer>
      </Wrapper>
    </>
  )
}

export default Home
