import { useRouteError } from "react-router-dom"
import { Wrapper, StyledLink } from "utils/style/GlobalStyle"

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <Wrapper>
      <h1>Oops!</h1>
      <p>
        Désolé la page demandé n'existe pas -{" "}
        <StyledLink to='/'>Accueil</StyledLink>{" "}
      </p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </Wrapper>
  )
}
