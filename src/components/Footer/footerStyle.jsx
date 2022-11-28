import styled from "styled-components"
import colors from "utils/style/GlobalStyle"

export const Wrapper = styled.footer`
  padding: 1rem;
  position: relative;
  bottom: 0px;
  font-size: 1.2rem;
  color: ${colors.primary};
  font-weight: 600;
  background: ${colors.whitesmoke};
  display: flex;
  flex-wrap: no-wrap;
  flex-direction: row;
  justify-content: center;
  height: 80px;
  align-items: center;
`
