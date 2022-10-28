import React, {createContext, useState} from 'react'

export const ThemeContext = createContext()

const ThemeContextProvider = (props) => {
    const currentYear = new Date().getFullYear()
    const [yearSelected, setYearSelected] = useState(currentYear)
    const [competitionId, setCompetitionId] = useState('')
    const [competitionName, setCompetitionName] = useState('')
    const [countryCode, setCountryCode] = useState('')
    
    return (
        <ThemeContext.Provider value={
            {
                yearSelected, setYearSelected, competitionId,
                setCompetitionId, competitionName,
                setCompetitionName, countryCode, setCountryCode
            }} 
        >
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider