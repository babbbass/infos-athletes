import React from "react"
import ToggleButton from "components/NavLink/ToogleButton/ToggleButton"
import {
  GamesContainer,
  TeamVisitors,
  TeamHome,
  ImgTeamGame,
  Game,
  GameLineScore,
  GameScore,
  TeamName,
  WinnerTeam,
  GameLink,
  H1Games,
  StyledImgNbaLogo,
  H1NbaContainer,
} from "./style"
import { Menu } from "utils/style/GlobalStyle"
import { LeaguePagesLink } from "components/Card/CardTeams/cardTeamStyle"
import { useSelector } from "react-redux"
import { formatDate, linescores, isWinner } from "utils/functions"
import nbaLogo from "utils/assets/nba-logo.svg"

const isFinished = "Finished"
const noData = "Match non terminé"

export default function Games({ games, date }) {
  const activeMenu = useSelector((state) => state.activeMenu)
  console.log(games)
  return (
    <>
      <ToggleButton />
      <Menu active={activeMenu}>
        <LeaguePagesLink to={`/`}>Infos Athletes</LeaguePagesLink>
        <LeaguePagesLink to={`/nba`}>Équipes</LeaguePagesLink>
      </Menu>
      <GamesContainer active={activeMenu}>
        <H1NbaContainer>
          <StyledImgNbaLogo src={nbaLogo} />
          <H1Games> {formatDate(date)}</H1Games>
        </H1NbaContainer>
        {games.map((game) => (
          <GameLink
            key={game.id}
            to={game.status.long === isFinished && `/nba/match/${game.id}`}
          >
            <Game>
              {isWinner(game.scores.home.points, game.scores.visitors.points)}
              <TeamHome>
                <ImgTeamGame src={game.teams.home.logo} />
                <TeamName>
                  {isWinner(
                    game.scores.home.points,
                    game.scores.visitors.points
                  ) ? (
                    <WinnerTeam>{game.teams.home.name}</WinnerTeam>
                  ) : (
                    <>{game.teams.home.name}</>
                  )}
                </TeamName>
                {game.status.long !== isFinished ? (
                  <GameLineScore>{noData}</GameLineScore>
                ) : (
                  <>
                    <GameScore>{game.scores.home.points}</GameScore>
                    <GameLineScore>
                      {linescores(game.scores.home.linescore)}
                    </GameLineScore>
                  </>
                )}
              </TeamHome>
              <TeamVisitors>
                <ImgTeamGame src={game.teams.visitors.logo} />
                <TeamName>
                  {isWinner(
                    game.scores.home.points,
                    game.scores.visitors.points
                  ) ? (
                    <>{game.teams.visitors.name}</>
                  ) : (
                    <WinnerTeam>{game.teams.visitors.name}</WinnerTeam>
                  )}
                </TeamName>
                {game.status.long !== isFinished ? (
                  <GameLineScore>{noData}</GameLineScore>
                ) : (
                  <>
                    <GameScore>{game.scores.visitors.points}</GameScore>
                    <GameLineScore>
                      {linescores(game.scores.visitors.linescore)}
                    </GameLineScore>
                  </>
                )}
              </TeamVisitors>
            </Game>
          </GameLink>
        ))}
      </GamesContainer>
    </>
  )
}
