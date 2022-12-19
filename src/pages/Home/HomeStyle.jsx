import styled, { keyframes } from "styled-components"
import { sizesFont, StyledImg, colors } from "utils/style/GlobalStyle"
import { Link } from "react-router-dom"

export const Wrapper = styled.section`
  padding: 20px 20px;
`

export const WrapperHeader = styled.div`
  min-height: 300px;
  background: ${colors.whitesmoke};
  flex-direction: column;
  display: flex;
  flex-wrap: no-wrap;
  justify-content: space-evenly;
  @media (min-width: 1200px) {
    padding-left: 50px;
  }
`
export const TitleBloc = styled.div`
  position: relative;
  z-index: 2;
  top: 20%;
  display: flex;
  flex-direction: column;
  text-align: left;
`
export const Title = styled.h1`
  font-size: ${sizesFont.h1};
  text-transform: uppercase;
  color: ${colors.primary};
  @media (max-width: 425px) {
    font-size: ${sizesFont.h1SmartPhone};
  }
`

export const TitleBlocSpan = styled.span`
  color: ${colors.primary};
  font-size: ${sizesFont.medium};
  @media (max-width: 400px) {
    font-size: ${sizesFont.normal};
  }
`

export const ImgContainerCarroussel = styled.div`
  position: absolute;
  perspective: 200px;
  pointer-events: none;
  margin: 30px auto 0px auto;
  left: calc(50px + 65%);
  @media (max-width: 425px) {
    position: static;
    height: 240px;
    margin: 0px auto;
  }
  @media (max-width: 390px) {
    height: 130px;
  }
`
export const imgWrapperCarrousselAnimation = keyframes`
    0% {
        transform: rotateY(0deg);
    }
    100% {
        transform: rotateY(360deg);
    }
  }`

export const imgAnimation = keyframes`
  0% {
      transform: rotateY(calc(360deg / var(--nbCards) * var(--cardIndex))) rotateX(-5deg) translateY(200px) translateZ(0px) scale(0);
  }
  100% {
      transform: rotateY(calc(360deg / var(--nbCards) * var(--cardIndex))) rotateX(-5deg) translateY(-25px) translateZ(90px) scale(0.5);
  }
`
export const ImgWrapperCarroussel = styled.div`
  position: relative;
  perspective: 1500px;
  perspective-origin: top;
  transform-origin: center bottom;;
  transform-style: preserve-3d;
  animation: 25s linear 0s infinite normal none running
    ${imgWrapperCarrousselAnimation};
    &> :not(: first-child) {
      position: absolute;
      inset: 0px;
      animation-name: ${imgAnimation};
    }
    & * {
      animation-duration: 1s;
      animation-timing-function: ease-out;
      animation-fill-mode: forwards;
      animation-name: ${imgAnimation};
    }
  }
`
export const ImgHomeCarroussel = styled(StyledImg)`
  opacity: 0.7;
`
export const ButtonSiteContainer = styled.div`
  display: flex;
  padding-left: 20px;
  margin-top: 20px;
  @media (max-width: 425px) {
    margin-bottom: 10px;
  }
`
export const ButtonHome = styled.button`
  background-color: ${colors.DarkBackgroundSiteColor};
  max-width: 160px;
  border-radius: 26px;
  transition-duration: 0.4s;
  border: none;
  color: ${colors.whitesmoke};
  padding: 15px 32px;
  text-align: center;
  text-transform: uppercase;
  margin-right: 10px;
  cursor: grab;
  &:hover {
    background-color: ${colors.whitesmoke};
    color: ${colors.primary};
    border: 1px solid ${colors.primary};
  }
`
export const ButtonHomeNba = styled(ButtonHome)`
  background: #0066ff;
`

export const WrapperBody = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 20px 20px;
  border-bottom: 1px solid ${colors.primary};
  background-color: ${colors.lightGrey};
`
export const WrapperBodyBlock = styled.div`
  width: 50%;
  text-align: center;
  position: relative;
`
export const WrapperBodyBlockText = styled.span`
  position: absolute;
  display: block;
  width: 100%;
  text-align: center;
  z-index: 2;
  padding: auto;
  text-transform: uppercase;
  font-size: ${sizesFont.h3};
  font-family: DrukWide-Super, serif;
  font-weight: 700;
  color: #000;
  bottom: 35%;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 425px) {
    font-size: ${sizesFont.normal};
  }
`
export const WrapperBodyImg = styled(StyledImg)`
  max-width: 100%;
  opacity: 0.6;
`
export const CountryFlag = styled(StyledImg)`
  margin: 10px 8px;
  border-radius: 6px;
  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
`
export const ImgContainer = styled.div`
  width: auto;
`
export const FlagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 0px 20px;
`
export const StyledLink = styled(Link)`
  color: ${colors.primary};
  font-weight: bold;
  text-decoration: none;
`

export const LinkContainer = styled.div`
  flex-basis: 45%;
  text-align: center;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }

  @media (max-width: 425px) {
    flex-basis: 100%;
  }
`
