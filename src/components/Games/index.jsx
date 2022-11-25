import React, { useContext } from "react"
import { ThemeContext } from "utils/Context/Context"
import ToggleButton from "components/NavLink/ToggleButton"
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
} from "./style"
import { Menu } from "utils/style/GlobalStyle"
import { LeaguePagesLink } from "components/Card/CardTeam/cardTeamStyle"

const linescores = (linescore) => {
  let [qt1, qt2, qt3, qt4] = linescore
  const displayLinescore = `${qt1}  ${qt2}  ${qt3}  ${qt4}`
  return displayLinescore
}

const isWinner = (homePts, visitorPts, homeTeam, visitorTeam) => {
  if (homePts > visitorPts) {
    return true
  }
  return false
}

const isFinished = "Finished"
const noData = "Match non terminé"

export default function Games({ games, date }) {
  const { activeMenu } = useContext(ThemeContext)
  return (
    <GamesContainer active={activeMenu}>
      <ToggleButton />
      <Menu active={activeMenu}>
        <LeaguePagesLink to={`/`}>Accueil</LeaguePagesLink>
        <LeaguePagesLink to={`/nba`}>Équipes</LeaguePagesLink>
      </Menu>
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
  )
}
