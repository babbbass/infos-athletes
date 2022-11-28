import React, { useState } from "react"
import {
  FlagContainer,
  ImgContainer,
  LinkContainer,
  CountryFlag,
  StyledLink,
  CountryName,
} from "./style"
import { countries } from "utils/datas/Countries"

export default function Flag() {
  const { setCompetitionName, setCountryCode, setCompetitionId } = useState("")
  return (
    <>
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
              <CountryName>{country.name}</CountryName>
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
