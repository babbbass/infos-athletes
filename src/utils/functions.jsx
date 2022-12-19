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
