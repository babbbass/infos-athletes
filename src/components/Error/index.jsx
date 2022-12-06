import React from "react"
import { Wrapper } from "utils/style/GlobalStyle"

export default function Error({ error }) {
  return (
    <>
      <Wrapper>
        {`We have reached the request limit for this sport in the day Limit: 100 -
         ${error.message}`}
      </Wrapper>
    </>
  )
}
