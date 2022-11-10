import React, { createContext, useState } from "react"

export const ThemeContext = createContext()

export const selectOptions = [
  { value: 2022, label: 2022 },
  { value: 2021, label: 2021 },
  { value: 2020, label: 2020 },
  { value: 2019, label: 2019 },
  { value: 2018, label: 2018 },
  { value: 2017, label: 2017 },
  { value: 2016, label: 2016 },
  { value: 2015, label: 2015 },
]

const ThemeContextProvider = (props) => {
  const currentYear = new Date().getFullYear()
  const [yearSelected, setYearSelected] = useState(currentYear)
  const [competitionId, setCompetitionId] = useState("")
  const [competitionName, setCompetitionName] = useState("")
  const [countryCode, setCountryCode] = useState("")
  const [teamName, setTeamName] = useState("")

  return (
    <ThemeContext.Provider
      value={{
        yearSelected,
        setYearSelected,
        competitionId,
        setCompetitionId,
        competitionName,
        setCompetitionName,
        countryCode,
        setCountryCode,
        teamName,
        setTeamName,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
