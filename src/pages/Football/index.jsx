import React, { useState, useContext } from "react"
import { ThemeContext } from "utils/Context/Context"
import Flag from "components/Flag"
import ToggleButton from "components/NavLink/ToggleButton"
import { LeaguePagesLink } from "components/Card/CardTeam/cardTeamStyle"
import { Menu } from "utils/style/GlobalStyle"

export default function Football() {
  const { activeMenu } = useContext(ThemeContext)
  return (
    <>
      <ToggleButton />
      <Menu active={activeMenu}>
        <LeaguePagesLink to={`/`}>Accueil</LeaguePagesLink>
      </Menu>
      <Flag />
    </>
  )
}
