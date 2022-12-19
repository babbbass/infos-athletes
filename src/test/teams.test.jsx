import { findNameCompetition, escapeData } from "utils/functions.jsx"
import { competitions } from "utils/config/config"
import { teams } from "utils/datas/Teams"

test("test country code is Ok", () => {
  const countryCodeMin = findNameCompetition(competitions, "fr")
  const countryCodeMaj = findNameCompetition(competitions, "FR")

  expect(countryCodeMin.competitionName).toBe("Ligue 1")
  expect(countryCodeMaj.competitionName).toBe("Ligue 1")
})

test("test replace special caracters", () => {
  const city = escapeData(teams[4].venue.city)
  console.log(city)
  //expect(city).toBe("Villeneuve d'Ascq")
})
