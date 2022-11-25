import React from "react"
import { Menu } from "utils/style/GlobalStyle"
import {
  GamesContainer,
  DualOpponents,
  DualOpponentHome,
  DualOpponentVisitor,
  DualOpponentScore,
  ImgTeamGameStatistics,
  TeamName,
} from "./style"
import { LeaguePagesLink } from "components/Card/CardTeam/cardTeamStyle"
import ToggleButton from "components/NavLink/ToggleButton"
import { useState } from "react"
import GameStatisticsTable from "./TableStastistics/TableGameStatistics"

export default function GameStatistic({ statistics }) {
  const activeMenu = useState(false)
  return (
    <>
      <ToggleButton />
      <Menu active={activeMenu}>
        <LeaguePagesLink to={`/`}>Accueil</LeaguePagesLink>
      </Menu>
      <GamesContainer active={activeMenu}>
        <DualOpponents>
          <DualOpponentHome>
            <ImgTeamGameStatistics src={statistics[0].team.logo} />
            <TeamName>{statistics[0].team.name}</TeamName>
          </DualOpponentHome>
          <DualOpponentScore>
            {`${statistics[0].statistics[0].points} -
            ${statistics[1].statistics[0].points}`}
          </DualOpponentScore>
          <DualOpponentVisitor>
            <ImgTeamGameStatistics src={statistics[1].team.logo} />
            <TeamName>{statistics[1].team.name}</TeamName>
          </DualOpponentVisitor>
        </DualOpponents>
      </GamesContainer>
      <GameStatisticsTable statistics={statistics} />
    </>
  )
}
