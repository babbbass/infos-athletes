import React, { useContext } from "react"
import { baseNbaUrl, requestOptions } from "utils/config/config"
import { useQuery } from "react-query"
import RequestsLimit from "components/Error/RequestsLimit"
import { teams } from "utils/datas/Nba/teams"
import { ThemeContext } from "utils/Context/Context"
import ToggleButton from "components/NavLink/ToogleButton/ToggleButton"
import { LeaguePagesLink } from "components/Card/CardTeams/cardTeamStyle"
import CardTeam from "components/Card/CardTeams/index"
import { Menu } from "utils/style/GlobalStyle"

const fetchNbaTeams = async () => {
  const response = await fetch(`${baseNbaUrl}/teams`, requestOptions)

  return await response.json()
}

export default function Nba() {
  const { activeMenu } = useContext(ThemeContext)

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
      <Menu active={activeMenu}>
        <LeaguePagesLink to='/'>Infos Athletes</LeaguePagesLink>
        <LeaguePagesLink to='/nba/matchs'>Matchs du Jour</LeaguePagesLink>
        <LeaguePagesLink>Meilleurs passeurs</LeaguePagesLink>
      </Menu>
      <CardTeam active={activeMenu} teams={teams} />
    </>
  )
}
