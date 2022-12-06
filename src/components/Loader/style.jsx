import styled from "styled-components"
import { colors } from "utils/style/GlobalStyle"

export const LoaderBlock = styled.div`
  text-align: center;
  text-transform: uppercase;
`
export const LoaderLetter = styled.span`
  animation: flash 1.2s linear infinite;

  @keyframes flash {
    0% {
      color: ${colors.primary};
      text-shadow: 0 0 7px ${colors.primary};
    }

    90% {
      color: ${colors.veryLightGrey};
      text-shadow: none;
    }

    100% {
      color: ${colors.primary};
      text-shadow: 0 0 7px ${colors.primary};
    }
  }

  &:nth-child(1) {
    animation-delay: 0.1s;
  }

  &:nth-child(2) {
    animation-delay: 0.2s;
  }

  &:nth-child(3) {
    animation-delay: 0.3s;
  }

  &:nth-child(4) {
    animation-delay: 0.4s;
  }
  &:nth-child(5) {
    animation-delay: 0.5s;
  }
  &:nth-child(6) {
    animation-delay: 0.6s;
  }
  &:nth-child(7) {
    animation-delay: 0.7s;
  }
  &:nth-child(8) {
    animation-delay: 0.8s;
  }
  &:nth-child(9) {
    animation-delay: 0.9s;
  }
  &:nth-child(10) {
    animation-delay: 1s;
  }
  &:nth-child(11) {
    animation-delay: 1.1s;
  }
`
