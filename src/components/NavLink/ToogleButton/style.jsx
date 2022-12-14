import styled from "styled-components"
import { colors } from "utils/style/GlobalStyle"

export const ToggleButtonContainer = styled.button`
  position: absolute;
  z-index: 10;
  //top: 0;
  right: 10px;
  height: 38px;
  width: 38px;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  @media (min-width: 768px) {
    display: none;
  }
`

export const ToggleButtonLine = styled.span`
  position: absolute;
  display: block;
  width: 80%;
  height: 2px;
  background: ${colors.slate};
  transition: transform 0.3s ease-out,
  opacity: 0.1s ease-out;
  `
export const ToggleButtonLine1 = styled(ToggleButtonLine)`
  transform: translateY(-10px);
  ${({ active }) =>
    active &&
    `
      transform: translateY(0) rotate(135deg);  
      `}
`
export const ToggleButtonLine2 = styled(ToggleButtonLine)`
  ${({ active }) =>
    active &&
    `
      opacity: 0;  
  `}
`
export const ToggleButtonLine3 = styled(ToggleButtonLine)`
  transform: translateY(10px);
  ${({ active }) =>
    active &&
    `
    transform: translateY(0) rotate(-135deg);  
  `}
`
