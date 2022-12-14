import React from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import {
  ToggleButtonContainer,
  ToggleButtonLine1,
  ToggleButtonLine2,
  ToggleButtonLine3,
} from "./style"

export default function ToggleButton() {
  const dispatch = useDispatch()
  const activeMenu = useSelector((state) => state.activeMenu)

  return (
    <div>
      <ToggleButtonContainer
        onClick={() => dispatch({ type: "isActive" })}
        aria-label='toogle curtain navigation'
      >
        <ToggleButtonLine1 active={activeMenu}></ToggleButtonLine1>
        <ToggleButtonLine2 active={activeMenu}></ToggleButtonLine2>
        <ToggleButtonLine3 active={activeMenu}></ToggleButtonLine3>
      </ToggleButtonContainer>
    </div>
  )
}
