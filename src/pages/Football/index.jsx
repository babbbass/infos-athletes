import React, { useState, useContext } from "react"
import { ThemeContext } from "utils/Context/Context"
import Flag from "components/Flag"
import ToggleButton from "components/NavLink/ToggleButton"
import { HeaderBody } from "components/Card/globalStyleCard"
import { LeaguePagesLink } from "components/Card/CardTeam/cardTeamStyle"

export default function Football() {
  const { activeMenu } = useContext(ThemeContext)
  return (
    <>
      <ToggleButton />
      <HeaderBody active={activeMenu}>
        <LeaguePagesLink to={`/`}>Acceuil</LeaguePagesLink>
      </HeaderBody>
      <Flag />
    </>
  )
}
