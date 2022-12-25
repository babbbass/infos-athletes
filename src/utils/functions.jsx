import { monthNames } from "utils/config/variables"

export function escapeData(name) {
  if (name.match("&apos;")) {
    return name.replace("&apos;", `'`)
  }

  if (name.match(/qualification/gi)) {
    return name.replace(/qualification/gi, `qualif`)
  }

  return name
}

export function findNameCompetition(competitionTab, countryCode) {
  return competitionTab.find(
    (competition) => competition.id === countryCode.toUpperCase()
  )
}

export function formatDate(date) {
  return `${date.getUTCDate()} ${
    monthNames[date.getMonth()]
  } ${date.getUTCFullYear()}`
}

export const linescores = (linescore) => {
  let [qt1, qt2, qt3, qt4] = linescore
  const displayLinescore = `${qt1}  ${qt2}  ${qt3}  ${qt4}`
  return displayLinescore
}

export const isWinner = (homePts, visitorPts) => {
  if (homePts > visitorPts) {
    return true
  }
  return false
}
