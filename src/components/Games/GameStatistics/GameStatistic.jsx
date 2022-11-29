import React from "react"
import { Menu } from "utils/style/GlobalStyle"
import {
  DualOpponents,
  DualOpponentHome,
  DualOpponentVisitor,
  DualOpponentScore,
  ImgTeamGameStatistics,
  LogoTeamContainer,
  LinkTeam,
} from "./style"
import { GamesContainer, TeamName } from "../style"
import { LeaguePagesLink } from "components/Card/CardTeam/cardTeamStyle"
import ToggleButton from "components/NavLink/ToggleButton"
import { useState } from "react"
import GameStatisticsTable from "../TableStastistics/TableGameStatistics"

export default function GameStatistic({ statistics }) {
  const activeMenu = useState(false)
  return (
    <>
      <ToggleButton />
      <Menu active={activeMenu}>
        <LeaguePagesLink to={`/`}>Accueil</LeaguePagesLink>
        <LeaguePagesLink to={`/nba/matchs`}>Matchs du jour</LeaguePagesLink>
      </Menu>
      <GamesContainer active={activeMenu}>
        <DualOpponents>
          <DualOpponentHome>
            <LinkTeam to={`/nba/team/${statistics[0].team.id}/players`}>
              <LogoTeamContainer>
                <ImgTeamGameStatistics src={statistics[0].team.logo} />
              </LogoTeamContainer>
              <TeamName>{statistics[0].team.name}</TeamName>
            </LinkTeam>
          </DualOpponentHome>
          <DualOpponentScore>
            {`${statistics[0].statistics[0].points} -
            ${statistics[1].statistics[0].points}`}
          </DualOpponentScore>
          <DualOpponentVisitor>
            <LinkTeam to={`/nba/team/${statistics[1].team.id}/players`}>
              <LogoTeamContainer>
                <ImgTeamGameStatistics src={statistics[1].team.logo} />
              </LogoTeamContainer>
              <TeamName>{statistics[1].team.name}</TeamName>
            </LinkTeam>
          </DualOpponentVisitor>
        </DualOpponents>
      </GamesContainer>
      <GameStatisticsTable statistics={statistics} />
    </>
  )
}