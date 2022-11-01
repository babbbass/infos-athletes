import Header from "components/Header";
import Footer from "components/Footer";
import styled from "styled-components";
import colors from "utils/style/colors";
import  { countries } from "utils/datas/Countries";
import { StyledImg } from "utils/style/GlobalStyle";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useQuery } from "react-query";
import { baseUrl, requestOptions } from "utils/config/QueryConfig";
import { ThemeContext } from "utils/Context/Context";

const Wrapper = styled.section`
  padding: 1rem;
  background: #fff;
  color: ${colors.primary}
  text-align: center;
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  font-style: italic;
`;

const Title = styled.h1`
  font-size: 1.8rem;
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

const TitleItem = styled.h2`
  font-size: 1.7rem;
  padding: 5px;
  text-align: center;
`;
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
`;
const CountryFlagContainer = styled.div`
  width: auto;
`;
const CountryFlag = styled(StyledImg)`
  margin: 10px 0;
  border-radius: 6px;
  // height: 180px
`;
const StyledLink = styled(Link)`
  color: ${colors.primary};
  font-weight: bold;
  text-decoration: none;
`;

const fetchCountries = async () => {
  const response = await fetch(
    `${baseUrl}/countries`,
    requestOptions
  );
  return await response.json();
};

function Home() {
  const {
    competitionName,
    setCompetitionName,
    countryCode,
    setCountryCode,
    setCompetitionId,
  } = useContext(ThemeContext);
  console.log(competitionName, countryCode);
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
      <Header />
      <Wrapper>
        <Title>INFOS ATHLETES</Title>
        <Presentation>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </Presentation>
        <FlagContainer>
          {countries.map((country, index) => (
            <LinkContainer key={`${country.code} - ${index}`}>
              <StyledLink
                to={`/leagues/${country.code}/${country.id}`}
                onClick={() => {
                  setCompetitionName(country.ligue);
                  setCountryCode(country.code);
                  setCompetitionId(country.id);
                }}
              >
                <TitleItem>{country.name}</TitleItem>
                <CountryFlagContainer>
                  <CountryFlag
                    src={country.flag}
                    alt={`${country.name}-logo`}
                  />
                </CountryFlagContainer>
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
