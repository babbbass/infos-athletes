import React from "react"
import ReactDOM from "react-dom/client"
import Home from "pages/Home"
import { QueryClient, QueryClientProvider } from "react-query"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ErrorPage from "error-page"
import { Teams } from "pages/Football/Teams"
import Squad from "pages/Football/Squad"
import TopScorers from "pages/Football/Ranking/TopScorers"
import Ranking from "pages/Football/Ranking"
import ThemeContextProvider from "utils/Context/Context"
import TopAssits from "pages/Football/Ranking/TopAssists"
import Player from "pages/Football/Player"
import Nba from "pages/Nba"
import NbaSquad from "pages/Nba/Squad"
import GlobalStyle from "utils/style/GlobalStyle"
import Layout from "components/Layout"
import Football from "pages/Football"
import NbaGames from "pages/Nba/NbaGames"
import GameStatistics from "pages/Nba/GameStatistics"
import { Provider } from "react-redux"
// on importe le store
import { store } from "utils/store.js"

const root = ReactDOM.createRoot(document.getElementById("root"))
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/leagues/:countryCode/:competitionId",
    element: <Teams />,
  },
  {
    path: "/football/team/:teamId",
    element: <Squad />,
  },
  {
    path: "/meilleurs-buteurs/:countryCode/:idCompetition",
    element: <TopScorers />,
  },
  {
    path: "/meilleurs-passeurs/:countryCode/:idCompetition",
    element: <TopAssits />,
  },
  {
    path: "/classement/:countryCode/:idCompetition",
    element: <Ranking />,
  },
  {
    path: "/football/player/:playerId",
    element: <Player />,
  },
  {
    path: "/football",
    element: <Football />,
  },
  {
    path: "/nba",
    element: <Nba />,
  },
  {
    path: "/nba/matchs",
    element: <NbaGames />,
  },
  {
    path: "/nba/match/:matchId",
    element: <GameStatistics />,
  },
  {
    path: "/nba/team/:teamId/:teamName/players",
    element: <NbaSquad />,
  },
])

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <ThemeContextProvider>
          <Layout>
            <RouterProvider router={router} />
          </Layout>
        </ThemeContextProvider>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
)
