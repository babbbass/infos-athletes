import { findNameCompetition } from "pages/Football/Teams"
import { competitions } from "utils/config/config"
// import { render, screen, cleanup } from "@testing-library/react"

test("test country code is Ok", () => {
  const countryCodeMin = findNameCompetition(competitions, "fr")
  const countryCodeMaj = findNameCompetition(competitions, "FR")

  expect(countryCodeMin.competitionName).toBe("Ligue 1")
  expect(countryCodeMaj.competitionName).toBe("Ligue 1")
})
