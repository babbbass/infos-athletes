import React, { useState } from "react"
import {
  FlagContainer,
  ImgContainer,
  LinkContainer,
  CountryFlag,
  StyledLink,
  TitleBloc,
} from "./style"
import { H3Style, H2Style } from "utils/style/GlobalStyle"
import { countries } from "utils/datas/Countries"

export default function Flag() {
  const { setCompetitionName, setCountryCode, setCompetitionId } = useState("")
  return (
    <>
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
                <CountryFlag src={country.flag} alt={`${country.name}-logo`} />
              </ImgContainer>
            </StyledLink>
          </LinkContainer>
        ))}
      </FlagContainer>
    </>
  )
}
