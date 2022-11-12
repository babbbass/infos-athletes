import React, { useState, useContext } from "react"
import styled from "styled-components"
import colors from "utils/style/colors"
import { ThemeContext } from "utils/Context/Context"

const ToggleButtonContainer = styled.button`
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

const ToggleButtonLine = styled.span`
  position: absolute;
  display: block;
  width: 80%;
  height: 2px;
  background: ${colors.slate};
  transition: transform 0.3s ease-out,
  opacity: 0.1s ease-out;
  `
const ToggleButtonLine1 = styled(ToggleButtonLine)`
  transform: translateY(-10px);
  ${({ active }) =>
    active &&
    `
      transform: translateY(0) rotate(135deg);  
      `}
`
const ToggleButtonLine2 = styled(ToggleButtonLine)`
  ${({ active }) =>
    active &&
    `
      opacity: 0;  
  `}
`
const ToggleButtonLine3 = styled(ToggleButtonLine)`
  transform: translateY(10px);
  ${({ active }) =>
    active &&
    `
    transform: translateY(0) rotate(-135deg);  
  `}
`

export default function ToggleButton() {
  const { activeMenu, setActiveMenu } = useContext(ThemeContext)
  return (
    <div>
      <ToggleButtonContainer
        onClick={() => setActiveMenu(!activeMenu)}
        aria-label='toogle curtain navigation'
      >
        <ToggleButtonLine1 active={activeMenu}></ToggleButtonLine1>
        <ToggleButtonLine2 active={activeMenu}></ToggleButtonLine2>
        <ToggleButtonLine3 active={activeMenu}></ToggleButtonLine3>
      </ToggleButtonContainer>
    </div>
  )
}
