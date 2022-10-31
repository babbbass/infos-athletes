import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import { QueryClient, QueryClientProvider} from 'react-query'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import ErrorPage from './error-page';
import Leagues from './pages/Leagues';
import Squad from './pages/Squad';
import TopScorers from './pages/TopScorers';
import Ranking from './pages/Ranking/';
import ThemeContextProvider from './utils/Context/Context';
import TopAssits from './pages/TopAssists';

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/leagues/:countryCode/:competitionId",
    element: <Leagues />,
  },
  {
    path: "/team/:teamId",
    element: <Squad />,
  },
  {
    path: "/top-scorers/:countryCode/:idCompetition",
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
]);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient} >
      <ThemeContextProvider>
        <RouterProvider router={router} />
      </ThemeContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
