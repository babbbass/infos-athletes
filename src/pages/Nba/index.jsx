import React, { useContext } from "react"
import { baseNbaUrl, requestOptions } from "utils/config/QueryConfig"
import { useQuery } from "react-query"
import RequestsLimit from "components/Error/RequestsLimit"
import { teams } from "utils/datas/Nba/teams"
import { ThemeContext } from "utils/Context/Context"
import ToggleButton from "components/NavLink/ToggleButton"
import { LeaguePagesLink } from "components/Card/CardTeam/cardTeamStyle"
import CardTeam from "components/Card/CardTeam/index"
import { HeaderBody } from "components/Card/globalStyleCard"

const fetchNbaTeams = async () => {
  const response = await fetch(`${baseNbaUrl}/teams`, requestOptions)

  return await response.json()
}

export default function Nba() {
  const { activeMenu } = useContext(ThemeContext)
  //const { setTeamName } = useContext(ThemeContext)

  // const { isLoading, isError, data, error } = useQuery(["nbaTeams"], () =>
  //   fetchNbaTeams()
  // )

  // if (isError) {
  //   return <div>Erreur: {error.message}</div>
  // }

  // if (isLoading) {
  //   return <div>Chargement...</div>
  // }

  // if (data.errors && data.errors.length !== 0) {
  //   return <RequestsLimit />
  // }

  // const teams = data !== undefined ? data.response : []

  return (
    <>
      <ToggleButton />
      <HeaderBody active={activeMenu}>
        <LeaguePagesLink to='/'>Accueil</LeaguePagesLink>
        <LeaguePagesLink>Meilleurs marqueurs</LeaguePagesLink>
        <LeaguePagesLink>Meilleurs passeurs</LeaguePagesLink>
      </HeaderBody>
      <CardTeam active={activeMenu} teams={teams} />
    </>
  )
}
