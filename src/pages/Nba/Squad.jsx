import React, { useContext } from "react"
import { useParams } from "react-router"
import { requestOptions, baseNbaUrl } from "utils/config/config"
import { useQuery } from "react-query"
import { players } from "utils/datas/Nba/players"
import { ThemeContext } from "utils/Context/Context"
import CardPlayer from "components/Card/CardPlayer"
import ToggleButton from "components/NavLink/ToogleButton/ToggleButton"
import Loader from "components/Loader"
import Error from "components/Error"
import { Menu } from "utils/style/GlobalStyle"
import { LeaguePagesLink } from "components/Card/CardTeams/cardTeamStyle"
import { useSelector } from "react-redux"

const fetchNbaSquad = async (teamId, yearSelected) => {
  const response = await fetch(
    `${baseNbaUrl}/players?team=${teamId}&season=${yearSelected}`,
    requestOptions
  )

  return await response.json()
}

export default function Squad() {
  const { teamId } = useParams()
  const activeMenu = useSelector((state) => state.activeMenu)
  const { yearSelected } = useContext(ThemeContext)

  const { isLoading, isError, data, error } = useQuery(
    [teamId, [teamId, yearSelected]],
    () => fetchNbaSquad(teamId, yearSelected)
  )
  const players = data !== undefined ? data.response : []

  if (isError) {
    return <Error error={error} />
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      <ToggleButton />
      <Menu active={activeMenu}>
        <LeaguePagesLink to={`/`}>Infos Athletes</LeaguePagesLink>
        <LeaguePagesLink to={`/nba`}>Equipes</LeaguePagesLink>
        <LeaguePagesLink to={`/nba/matchs`}>Matchs du jour</LeaguePagesLink>
      </Menu>
      <CardPlayer players={players} />
    </>
  )
}
