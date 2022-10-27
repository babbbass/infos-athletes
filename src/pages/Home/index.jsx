import Banner from "../../Components/Banner";
import Footer from "../../Components/Footer";
import styled from "styled-components";
import colors from "../../Utils/style/colors"
import {StyledImg} from "../../Utils/style/GlobalStyle"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useQuery } from "react-query";
import { requestOptions } from "../../Utils/config/QueryConfig";
import { ThemeContext } from "../../Utils/Context/Context";

const Wrapper = styled.section`
  padding: 1rem;
  background: #fff;
  color: ${colors.primary}
  text-align: center;
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  font-style: italic;
`;

const Presentation = styled.p`
  font-size: 1rem;
  width: 900px;
`;

const FlagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 30px;
  width: 90%;
`;

const TitleItem = styled.div`
  font-size: 1.7rem; 
  padding: 5px;
  text-align: center
`
const LinkContainer = styled.div`
  flex-basis: 45%;
  margin: 10px 0;
  text-align: center;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
  
  @media (max-width: 425px) {
    flex-basis: 100%;
  }
`
const CountryFlagContainer = styled.div`
  width: auto;
`
const CountryFlag = styled(StyledImg)`
  margin: 10px 0;
  border-radius: 6px;
  // height: 180px
`
const StyledLink = styled(Link)`
  color: ${colors.primary};
  font-weight: bold;
  text-decoration: none;
`;

const fetchCountries = async () => {
    const response = await fetch('https://v3.football.api-sports.io/countries', requestOptions) 
    return await response.json()
}

const countries = [
  {
    id: "39",
    code: "GB",
    name: "Angleterre",
    ligue: "Premier League",
    flag: "https://media.api-sports.io/football/leagues/39.png"
  },
  {
    code: "DE",
    id: "78",
    name: "Allemagne",
    ligue: "Bundesliga",
    flag: "https://media.api-sports.io/football/leagues/78.png"
  }, 
  {
    id: "61",
    code: "Fr",
    name: "France",
    ligue: "Ligue 1",
    flag: "https://media.api-sports.io/football/leagues/61.png"
  }, 
  {
    id: "140",
    code: "ES",
    name: "Espagne",
    ligue: "Liga santander",
    flag: "https://media.api-sports.io/football/leagues/140.png"
  },  
]

function Home() {
  const {competitionName, setCompetitionName, countryCode, setCountryCode, setCompetitionId} = useContext(ThemeContext)
  console.log(competitionName, countryCode)
  // const {isLoading, isError, data, error} = useQuery("countries", fetchCountries)

  // if(isError) {
  //     return <div>Erreur: { error.message }</div>
  // }

  // if(isLoading) {
  //     return <div>Chargement...</div>
  // }
  // const allCountries = data !== undefined ? data.response : []

  // //console.log(allCountries)
  // const countries = allCountries.filter(country => (country.name === 'England' || country.name === 'France' || country.name === 'Germany' || country.name === 'Spain'))
  // //console.log(countries)
  
  return (
    
    <div className="App">
      <Banner />
      <Wrapper>
        <Title>
          INFOS ATHLETES
        </Title>
        <Presentation>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </Presentation>
        <FlagContainer>
          {countries.map((country, index) => (
            <LinkContainer key={`${country.code} - ${index}`} >
                <StyledLink to={`/leagues/${country.code}/${country.id}`} onClick={() => {
                      setCompetitionName(country.ligue)
                      setCountryCode(country.code)
                      setCompetitionId(country.id)
                    }}
                >
                  <TitleItem>{country.name}</TitleItem>
                  <CountryFlagContainer><CountryFlag src={country.flag} alt={`${country.name}-logo`} /></CountryFlagContainer>
                </StyledLink>
            </LinkContainer>
          ))}
        </FlagContainer>
      </Wrapper>
      <Footer />
    </div>
  );
}

export default Home;
