import React, { useContext } from "react"
import { useParams } from "react-router"
import { requestOptions, baseNbaUrl } from "utils/config/config"
import RequestsLimit from "components/Error/RequestsLimit"
import { useQuery } from "react-query"
import { players } from "utils/datas/Nba/players"
import { ThemeContext } from "utils/Context/Context"
import styled from "styled-components"
import { StyledLinkCard } from "components/Card/globalStyleCard"
import CardPlayer from "components/Card/CardPlayer"

const fetchNbaSquad = async (teamId, yearSelected) => {
  const response = await fetch(
    `${baseNbaUrl}/players?team=${teamId}&season=${yearSelected}`,
    requestOptions
  )

  return await response.json()
}

const HeaderBody = styled.div`
  display: flex;
  text-align: center;
  padding: 12px 0;
`
const LeaguePagesLink = styled(StyledLinkCard)`
  color: #000;
  &:hover {
    color: #bbb;
  }
`

export default function Squad() {
  const { teamId } = useParams()
  const { yearSelected } = useContext(ThemeContext)

  // const { isLoading, isError, data, error } = useQuery(
  //   [teamId, [teamId, yearSelected]],
  //   () => fetchNbaSquad(teamId, yearSelected)
  // )
  // const players = data !== undefined ? data.response : []

  // if (isError) {
  //   return <div>Erreur: {error.message}</div>
  // }

  // if (isLoading) {
  //   return <div>Chargement...</div>
  // }

  // if (data.errors && data.errors.length !== 0) {
  //   return <RequestsLimit />
  // }

  return (
    <>
      <HeaderBody>
        <LeaguePagesLink to={`/nba`}>Nba</LeaguePagesLink>
        {/* <LeaguePagesLink to={`/palmares/${teamId}`}>Palmarès</LeaguePagesLink> */}
      </HeaderBody>
      <CardPlayer players={players} />
    </>
  )
}
