import React from "react"
import { LoaderBlock, LoaderLetter } from "./style"
import { Wrapper } from "utils/style/GlobalStyle"

export default function Loader() {
  return (
    <Wrapper>
      <LoaderBlock>
        <LoaderLetter>C</LoaderLetter>
        <LoaderLetter>h</LoaderLetter>
        <LoaderLetter>a</LoaderLetter>
        <LoaderLetter>r</LoaderLetter>
        <LoaderLetter>g</LoaderLetter>
        <LoaderLetter>e</LoaderLetter>
        <LoaderLetter>m</LoaderLetter>
        <LoaderLetter>e</LoaderLetter>
        <LoaderLetter>n</LoaderLetter>
        <LoaderLetter>t</LoaderLetter>
        <LoaderLetter>...</LoaderLetter>
      </LoaderBlock>
    </Wrapper>
  )
}
