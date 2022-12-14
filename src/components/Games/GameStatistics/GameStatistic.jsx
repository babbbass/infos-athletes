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
import { GamesContainer, TeamName } from "components/Games/style"
import { LeaguePagesLink } from "components/Card/CardTeams/cardTeamStyle"
import ToggleButton from "components/NavLink/ToogleButton/ToggleButton"
import GameStatisticsTable from "../TableStastistics/TableGameStatistics"
import { useSelector } from "react-redux"

export default function GameStatistic({ statistics }) {
  const activeMenu = useSelector((state) => state.activeMenu)
  return (
    <>
      <ToggleButton />
      <Menu active={activeMenu}>
        <LeaguePagesLink to={`/`}>Infos Athletes</LeaguePagesLink>
        <LeaguePagesLink to={`/nba/matchs`}>Matchs du jour</LeaguePagesLink>
        <LeaguePagesLink to={`/nba`}>Équipes Nba</LeaguePagesLink>
      </Menu>
      <GamesContainer active={activeMenu}>
        <DualOpponents>
          <DualOpponentHome>
            <LinkTeam
              to={`/nba/team/${statistics[0].team.id}/${statistics[0].team.name}/players`}
            >
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
            <LinkTeam
              to={`/nba/team/${statistics[1].team.id}/${statistics[1].team.name}/players`}
            >
              <LogoTeamContainer>
                <ImgTeamGameStatistics src={statistics[1].team.logo} />
              </LogoTeamContainer>
              <TeamName>{statistics[1].team.name}</TeamName>
            </LinkTeam>
          </DualOpponentVisitor>
        </DualOpponents>
        <GameStatisticsTable statistics={statistics} />
      </GamesContainer>
    </>
  )
}
