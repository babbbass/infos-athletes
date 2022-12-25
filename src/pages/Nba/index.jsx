import React from "react"
import { fetchNbaTeams } from "utils/Queries/functions"
import { useQuery } from "react-query"
import { teams } from "utils/datas/Nba/teams"
import ToggleButton from "components/NavLink/ToogleButton/ToggleButton"
import { LeaguePagesLink } from "components/Card/CardTeams/cardTeamStyle"
import CardTeam from "components/Card/CardTeams/index"
import { Menu } from "utils/style/GlobalStyle"
import Loader from "components/Loader"
import Error from "components/Error"
import { useSelector } from "react-redux"

export default function Nba() {
  const activeMenu = useSelector((state) => state.activeMenu)

  const { isLoading, isError, data, error } = useQuery(["nbaTeams"], () =>
    fetchNbaTeams()
  )

  if (isError) {
    return <Error error={error} />
  }

  if (isLoading) {
    return <Loader />
  }

  const teams = data !== undefined ? data.response : []

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
