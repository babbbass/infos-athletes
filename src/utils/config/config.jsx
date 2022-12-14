const myHeaders = new Headers()

myHeaders.append("x-rapidapi-key", "ea4658f5065098466676ebb039cc9194")
myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io")

export const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
}

export const baseUrl = `https://v3.football.api-sports.io`
export const baseNbaUrl = `https://v2.nba.api-sports.io`
export const foot = "football"
export const nba = "nba"

export const competitions = [
  {
    id: "GB",
    competitionName: "Premier League",
  },
  {
    id: "ES",
    competitionName: "Liga espagnol",
  },
  {
    id: "FR",
    competitionName: "Ligue 1",
  },
  {
    id: "DE",
    competitionName: "Bundesliga",
  },
]
