import colors from "utils/style/colors"
import { StyledLink } from "utils/style/GlobalStyle"
import styled from "styled-components"

export const LinkButton = styled(StyledLink)`
  color: ${colors.whitesmoke};
  &:hover {
    color: ${colors.primary};
  }
`
